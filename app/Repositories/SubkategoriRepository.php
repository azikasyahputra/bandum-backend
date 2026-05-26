<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Kategori;
use App\Models\Subkategori;
use App\Repositories\Contracts\SubkategoriRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class SubkategoriRepository implements SubkategoriRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Subkategori::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($iIdKategori = $queryParams['iIdKategori'] ?? null) {
            if (is_numeric($iIdKategori)) {
                $query->where('iIdKategori', $iIdKategori);
            } else {
                $relatedIds = Kategori::where('vNama', 'like', "%{$iIdKategori}%")->pluck('iId');
                $query->whereIn('iIdKategori', $relatedIds);
            }
        }

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
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
        return Subkategori::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Subkategori;
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
        $items = $paginator->items();

        if (empty($items)) {
            return;
        }

        $ids = collect($items)->pluck('iIdKategori')->unique()->filter()->values();

        if ($ids->isEmpty()) {
            return;
        }

        $related = Kategori::whereIn('iId', $ids)->pluck('vNama', 'iId');

        foreach ($items as $item) {
            if ($related->has($item->iIdKategori)) {
                $item->iIdKategori = $related->get($item->iIdKategori);
            }
        }
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        $selects['iIdKategori'] = Kategori::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

        foreach ($fields as $col) {
            $enumOptions = $this->enumOptions($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return $selects;
    }

    public function byKategori(int $kategoriId): array
    {
        return Subkategori::where('iIdKategori', $kategoriId)
            ->where(function ($q) {
                $q->where('eDeleted', '!=', 'Ya')->orWhereNull('eDeleted');
            })
            ->get(['iId as value', 'vNama as label'])
            ->toArray();
    }

    private function enumOptions(string $col): array
    {
            return [];
    }
}
