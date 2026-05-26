<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Barang;
use App\Models\BarangKemasan;
use App\Repositories\Contracts\BarangKemasanRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class BarangKemasanRepository implements BarangKemasanRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = BarangKemasan::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($iIdBarang = $queryParams['iIdBarang'] ?? null) {
            $query->where('iIdBarang', $iIdBarang);
        }

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vSku = $queryParams['vSku'] ?? null) {
            $query->where('vSku', 'like', "%{$vSku}%");
        }

        if ($nHarga = $queryParams['nHarga'] ?? null) {
            $query->where('nHarga', 'like', "%{$nHarga}%");
        }

        if ($nHargastrike = $queryParams['nHargastrike'] ?? null) {
            $query->where('nHargastrike', 'like', "%{$nHargastrike}%");
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
        return BarangKemasan::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new BarangKemasan;
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

        $ids = collect($items)->pluck('iIdBarang')->unique()->filter()->values();

        if ($ids->isEmpty()) {
            return;
        }

        $related = Barang::whereIn('iId', $ids)->pluck('vNama', 'iId');

        foreach ($items as $item) {
            if ($related->has($item->iIdBarang)) {
                $item->iIdBarang = $related->get($item->iIdBarang);
            }
        }
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        $selects['iIdBarang'] = Barang::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

        return $selects;
    }

    private function enumOptions(string $col): array
    {
        return match ($col) {
            default => [],
        };
    }
}