<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Vendor;
use App\Models\VendorAlamat;
use App\Repositories\Contracts\VendorRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class VendorRepository implements VendorRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Vendor::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vProfilepic = $queryParams['vProfilepic'] ?? null) {
            $query->where('vProfilepic', 'like', "%{$vProfilepic}%");
        }

        if ($eTipe = $queryParams['eTipe'] ?? null) {
            $query->where('eTipe', $eTipe);
        }

        if ($vNamadirektur = $queryParams['vNamadirektur'] ?? null) {
            $query->where('vNamadirektur', 'like', "%{$vNamadirektur}%");
        }

        if ($dTanggalberdiri = $queryParams['dTanggalberdiri'] ?? null) {
            $query->where('dTanggalberdiri', $dTanggalberdiri);
        }

        if ($eJumlahkaryawan = $queryParams['eJumlahkaryawan'] ?? null) {
            $query->where('eJumlahkaryawan', $eJumlahkaryawan);
        }

        if ($vOfficephone = $queryParams['vOfficephone'] ?? null) {
            $query->where('vOfficephone', 'like', "%{$vOfficephone}%");
        }

        if ($vNamapic = $queryParams['vNamapic'] ?? null) {
            $query->where('vNamapic', 'like', "%{$vNamapic}%");
        }

        if ($vKontakpic = $queryParams['vKontakpic'] ?? null) {
            $query->where('vKontakpic', 'like', "%{$vKontakpic}%");
        }

        if ($iIdAlamatutama = $queryParams['iIdAlamatutama'] ?? null) {
            if (is_numeric($iIdAlamatutama)) {
                $query->where('iIdAlamatutama', $iIdAlamatutama);
            } else {
                $relatedIds = VendorAlamat::where('vNama', 'like', "%{$iIdAlamatutama}%")->pluck('iId');
                $query->whereIn('iIdAlamatutama', $relatedIds);
            }
        }

        if ($vSiup = $queryParams['vSiup'] ?? null) {
            $query->where('vSiup', 'like', "%{$vSiup}%");
        }

        if ($vFilesiup = $queryParams['vFilesiup'] ?? null) {
            $query->where('vFilesiup', 'like', "%{$vFilesiup}%");
        }

        if ($vFileaktapendirian = $queryParams['vFileaktapendirian'] ?? null) {
            $query->where('vFileaktapendirian', 'like', "%{$vFileaktapendirian}%");
        }

        if ($vFiledomisiliperusahaan = $queryParams['vFiledomisiliperusahaan'] ?? null) {
            $query->where('vFiledomisiliperusahaan', 'like', "%{$vFiledomisiliperusahaan}%");
        }

        if ($vDeskripsi = $queryParams['vDeskripsi'] ?? null) {
            $query->where('vDeskripsi', 'like', "%{$vDeskripsi}%");
        }

        if ($eVerifikasi = $queryParams['eVerifikasi'] ?? null) {
            $query->where('eVerifikasi', $eVerifikasi);
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
        return Vendor::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Vendor;
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

        $ids = collect($items)->pluck('iIdAlamatutama')->unique()->filter()->values();

        if ($ids->isEmpty()) {
            return;
        }

        $related = VendorAlamat::whereIn('iId', $ids)->pluck('vNama', 'iId');

        foreach ($items as $item) {
            if ($related->has($item->iIdAlamatutama)) {
                $item->iIdAlamatutama = $related->get($item->iIdAlamatutama);
            }
        }
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        $selects['iIdAlamatutama'] = VendorAlamat::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

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
            'eVerifikasi' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
