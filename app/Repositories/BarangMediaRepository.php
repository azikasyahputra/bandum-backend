<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\BarangMedia;
use App\Repositories\Contracts\BarangMediaRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class BarangMediaRepository implements BarangMediaRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = BarangMedia::query();

        $query->where(function ($q) {
            $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
        });

        $searchCols = array_unique(array_merge($columns, $searchCols));
        $selectOpts = $this->selectOptions();

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

    public function findOrFail(int $id): Model
    {
        return BarangMedia::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new BarangMedia;
        $model->timestamps = false;
        $model->fill($data)->save();
        return $model;
    }

    public function update(Model $item, array $data): bool
    {
        $item->timestamps = false;
        return $item->update($data);
    }

    public function delete(Model $item): bool
    {
        $item->timestamps = false;
        return $item->update([
            'eDeleted' => 'ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);
    }

    public function resolveForeignKeys(LengthAwarePaginator $paginator): void
    {
        $selectOpts = $this->selectOptions();

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

    public function selectData(array $fields): array
    {
        $selects = [];
        $selectOpts = $this->selectOptions();

        foreach ($fields as $col) {
            $config = $selectOpts[$col] ?? null;

            if ($config) {
                $class = $config['model'];
                $selects[$col] = $class::where(function ($q) {
                    $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
                })->get([$config['value'] . ' as value', $config['label'] . ' as label']);
            }
        }

        foreach ($fields as $col) {
            $enumOptions = $this->enumOptions($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return $selects;
    }

    private function selectOptions(): array
    {
        return array (
);
    }

    private function enumOptions(string $col): array
    {
            return [];
    }
}
