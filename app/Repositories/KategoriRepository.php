<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Kategori;
use App\Repositories\Contracts\KategoriRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class KategoriRepository implements KategoriRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Kategori::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vIcon = $queryParams['vIcon'] ?? null) {
            $query->where('vIcon', 'like', "%{$vIcon}%");
        }

        if ($vIconColor = $queryParams['vIconColor'] ?? null) {
            $query->where('vIconColor', 'like', "%{$vIconColor}%");
        }

        if ($vBackground = $queryParams['vBackground'] ?? null) {
            $query->where('vBackground', 'like', "%{$vBackground}%");
        }

        if ($eFeatured = $queryParams['eFeatured'] ?? null) {
            $query->where('eFeatured', $eFeatured);
        }

        if ($tCreatedFrom = $queryParams['tCreated_from'] ?? null) {
            $query->whereDate('tCreated', '>=', $tCreatedFrom);
        }

        if ($tCreatedTo = $queryParams['tCreated_to'] ?? null) {
            $query->whereDate('tCreated', '<=', $tCreatedTo);
        }

        if ($tUpdatedFrom = $queryParams['tUpdated_from'] ?? null) {
            $query->whereDate('tUpdated', '>=', $tUpdatedFrom);
        }

        if ($tUpdatedTo = $queryParams['tUpdated_to'] ?? null) {
            $query->whereDate('tUpdated', '<=', $tUpdatedTo);
        }

        return $query->paginate(20)->withQueryString();
    }

    public function findOrFail(int $id): Model
    {
        return Kategori::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Kategori;
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
            'eDeleted' => 'Ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);
    }

    public function resolveForeignKeys(LengthAwarePaginator $paginator): void
    {
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        foreach ($fields as $col) {
            $enumOptions = $this->enumOptions($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return $selects;
    }

    private function enumOptions(string $col): array
    {
            return match ($col) {
            'eFeatured' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
