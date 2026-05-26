<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Barang;
use App\Models\Brand;
use App\Models\Kategori;
use App\Models\Subkategori;
use App\Repositories\Contracts\BarangRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class BarangRepository implements BarangRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Barang::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($iIdBrand = $queryParams['iIdBrand'] ?? null) {
            if (is_numeric($iIdBrand)) {
                $query->where('iIdBrand', $iIdBrand);
            } else {
                $relatedIds = Brand::where('vNama', 'like', "%{$iIdBrand}%")->pluck('iId');
                $query->whereIn('iIdBrand', $relatedIds);
            }
        }

        if ($iIdKategori = $queryParams['iIdKategori'] ?? null) {
            if (is_numeric($iIdKategori)) {
                $query->where('iIdKategori', $iIdKategori);
            } else {
                $relatedIds = Kategori::where('vNama', 'like', "%{$iIdKategori}%")->pluck('iId');
                $query->whereIn('iIdKategori', $relatedIds);
            }
        }

        if ($iIdSubkategori = $queryParams['iIdSubkategori'] ?? null) {
            if (is_numeric($iIdSubkategori)) {
                $query->where('iIdSubkategori', $iIdSubkategori);
            } else {
                $relatedIds = Subkategori::where('vNama', 'like', "%{$iIdSubkategori}%")->pluck('iId');
                $query->whereIn('iIdSubkategori', $relatedIds);
            }
        }

        if ($vDeskripsisingkat = $queryParams['vDeskripsisingkat'] ?? null) {
            $query->where('vDeskripsisingkat', 'like', "%{$vDeskripsisingkat}%");
        }

        if ($vDeskripsidetail = $queryParams['vDeskripsidetail'] ?? null) {
            $query->where('vDeskripsidetail', 'like', "%{$vDeskripsidetail}%");
        }

        if ($eBestselling = $queryParams['eBestselling'] ?? null) {
            $query->where('eBestselling', $eBestselling);
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
        return Barang::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Barang;
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

        $iIdBrandIds = collect($items)->pluck('iIdBrand')->unique()->filter()->values();

        if ($iIdBrandIds->isNotEmpty()) {
            $related = Brand::whereIn('iId', $iIdBrandIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdBrand)) {
                    $item->iIdBrand = $related->get($item->iIdBrand);
                }
            }
        }

        $iIdKategoriIds = collect($items)->pluck('iIdKategori')->unique()->filter()->values();

        if ($iIdKategoriIds->isNotEmpty()) {
            $related = Kategori::whereIn('iId', $iIdKategoriIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdKategori)) {
                    $item->iIdKategori = $related->get($item->iIdKategori);
                }
            }
        }

        $iIdSubkategoriIds = collect($items)->pluck('iIdSubkategori')->unique()->filter()->values();

        if ($iIdSubkategoriIds->isNotEmpty()) {
            $related = Subkategori::whereIn('iId', $iIdSubkategoriIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdSubkategori)) {
                    $item->iIdSubkategori = $related->get($item->iIdSubkategori);
                }
            }
        }
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        $selects['iIdBrand'] = Brand::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKategori'] = Kategori::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdSubkategori'] = Subkategori::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

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
            'eBestselling' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
