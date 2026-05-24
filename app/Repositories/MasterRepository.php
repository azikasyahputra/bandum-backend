<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Repositories\Contracts\MasterRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class MasterRepository implements MasterRepositoryContract
{
    public function paginate(
        string $modelClass,
        array $columns,
        array $searchCols,
        array $selectOpts,
        bool $useSoftDelete,
        array $queryParams,
    ): LengthAwarePaginator {
        $query = $modelClass::query();

        if ($useSoftDelete) {
            $query->where(function ($q) {
                $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
            });
        }

        $searchCols = array_unique(array_merge($columns, $searchCols));

        foreach ($searchCols as $col) {
            $val = $queryParams[$col] ?? null;
            if ($val === null || $val === '') {
                continue;
            }

            if (isset($selectOpts[$col])) {
                $config = $selectOpts[$col];
                $relatedIds = $config['model']::where($config['label'], 'like', "%{$val}%")->pluck($config['value']);
                $query->whereIn($col, $relatedIds);
            } elseif (str_starts_with($col, 'iId')) {
                $query->where($col, $val);
            } else {
                $query->where($col, 'like', "%{$val}%");
            }
        }

        foreach (['tCreated', 'tUpdated'] as $col) {
            $from = $queryParams[$col . '_from'] ?? null;
            $to = $queryParams[$col . '_to'] ?? null;

            if ($from !== null && $from !== '') {
                $query->where($col, '>=', $from);
            }
            if ($to !== null && $to !== '') {
                $query->where($col, '<=', $to . ' 23:59:59');
            }
        }

        return $query->paginate(20)->withQueryString();
    }

    public function findOrFail(string $modelClass, int $id, string $primaryKey = 'iId'): Model
    {
        return $modelClass::where($primaryKey, $id)->firstOrFail();
    }

    public function create(string $modelClass, array $data): Model
    {
        $model = new $modelClass;
        if ($modelClass !== \App\Models\User::class) {
            $model->timestamps = false;
        }
        $model->fill($data)->save();
        return $model;
    }

    public function update(Model $item, array $data): bool
    {
        if (get_class($item) !== \App\Models\User::class) {
            $item->timestamps = false;
        }
        return $item->update($data);
    }

    public function delete(Model $item, bool $useSoftDelete): bool
    {
        if ($useSoftDelete) {
            if (get_class($item) !== \App\Models\User::class) {
                $item->timestamps = false;
            }
            return $item->update([
                'eDeleted' => 'ya',
                'iUpdatedid' => auth()->id() ?? 1,
                'tUpdated' => now(),
            ]);
        }

        return (bool) $item->delete();
    }

    public function resolveForeignKeys(LengthAwarePaginator $paginator, array $selectOpts): void
    {
        if (empty($selectOpts)) {
            return;
        }

        $items = $paginator->items();
        if (empty($items)) {
            return;
        }

        foreach ($selectOpts as $col => $config) {
            $ids = collect($items)->pluck($col)->unique()->filter()->values();
            if ($ids->isEmpty()) {
                continue;
            }

            $class = $config['model'];
            $related = $class::whereIn($config['value'], $ids)->pluck($config['label'], $config['value']);

            foreach ($items as $item) {
                $fk = $item->getAttribute($col);
                if ($fk !== null && $related->has($fk)) {
                    $item->setAttribute($col, $related[$fk]);
                }
            }
        }
    }

    public function selectData(array $fields, array $selectOptions, callable $enumOptionsFn): array
    {
        $selects = [];

        foreach ($fields as $col) {
            $config = $selectOptions[$col] ?? null;

            if ($config) {
                $class = $config['model'];
                $selects[$col] = $class::where(function ($q) {
                    $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
                })->get([$config['value'] . ' as value', $config['label'] . ' as label']);
            }
        }

        foreach ($fields as $col) {
            $enumOptions = $enumOptionsFn($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return $selects;
    }
}
