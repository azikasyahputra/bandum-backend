<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Vendor;
use App\Models\VendorAlamat;
use App\Models\Provinsi;
use App\Models\Kota;
use App\Models\Kecamatan;
use App\Models\Kelurahan;
use App\Repositories\Contracts\VendorAlamatRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class VendorAlamatRepository implements VendorAlamatRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = VendorAlamat::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vAlamat = $queryParams['vAlamat'] ?? null) {
            $query->where('vAlamat', 'like', "%{$vAlamat}%");
        }

        if ($iIdVendor = $queryParams['iIdVendor'] ?? null) {
            if (is_numeric($iIdVendor)) {
                $query->where('iIdVendor', $iIdVendor);
            } else {
                $relatedIds = Vendor::where('vNama', 'like', "%{$iIdVendor}%")->pluck('iId');
                $query->whereIn('iIdVendor', $relatedIds);
            }
        }

        if ($iIdProvinsi = $queryParams['iIdProvinsi'] ?? null) {
            if (is_numeric($iIdProvinsi)) {
                $query->where('iIdProvinsi', $iIdProvinsi);
            } else {
                $relatedIds = Provinsi::where('vNama', 'like', "%{$iIdProvinsi}%")->pluck('iId');
                $query->whereIn('iIdProvinsi', $relatedIds);
            }
        }

        if ($iIdKota = $queryParams['iIdKota'] ?? null) {
            if (is_numeric($iIdKota)) {
                $query->where('iIdKota', $iIdKota);
            } else {
                $relatedIds = Kota::where('vNama', 'like', "%{$iIdKota}%")->pluck('iId');
                $query->whereIn('iIdKota', $relatedIds);
            }
        }

        if ($iIdKecamatan = $queryParams['iIdKecamatan'] ?? null) {
            if (is_numeric($iIdKecamatan)) {
                $query->where('iIdKecamatan', $iIdKecamatan);
            } else {
                $relatedIds = Kecamatan::where('vNama', 'like', "%{$iIdKecamatan}%")->pluck('iId');
                $query->whereIn('iIdKecamatan', $relatedIds);
            }
        }

        if ($iIdKelurahan = $queryParams['iIdKelurahan'] ?? null) {
            if (is_numeric($iIdKelurahan)) {
                $query->where('iIdKelurahan', $iIdKelurahan);
            } else {
                $relatedIds = Kelurahan::where('vNama', 'like', "%{$iIdKelurahan}%")->pluck('iId');
                $query->whereIn('iIdKelurahan', $relatedIds);
            }
        }

        if ($vGPS = $queryParams['vGPS'] ?? null) {
            $query->where('vGPS', 'like', "%{$vGPS}%");
        }

        if ($vNotelp = $queryParams['vNotelp'] ?? null) {
            $query->where('vNotelp', 'like', "%{$vNotelp}%");
        }

        if ($vNohp = $queryParams['vNohp'] ?? null) {
            $query->where('vNohp', 'like', "%{$vNohp}%");
        }

        if ($eUtama = $queryParams['eUtama'] ?? null) {
            $query->where('eUtama', $eUtama);
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
        return VendorAlamat::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new VendorAlamat;
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

        $iIdVendorIds = collect($items)->pluck('iIdVendor')->unique()->filter()->values();

        if ($iIdVendorIds->isNotEmpty()) {
            $related = Vendor::whereIn('iId', $iIdVendorIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdVendor)) {
                    $item->iIdVendor = $related->get($item->iIdVendor);
                }
            }
        }

        $iIdProvinsiIds = collect($items)->pluck('iIdProvinsi')->unique()->filter()->values();

        if ($iIdProvinsiIds->isNotEmpty()) {
            $related = Provinsi::whereIn('iId', $iIdProvinsiIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdProvinsi)) {
                    $item->iIdProvinsi = $related->get($item->iIdProvinsi);
                }
            }
        }

        $iIdKotaIds = collect($items)->pluck('iIdKota')->unique()->filter()->values();

        if ($iIdKotaIds->isNotEmpty()) {
            $related = Kota::whereIn('iId', $iIdKotaIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdKota)) {
                    $item->iIdKota = $related->get($item->iIdKota);
                }
            }
        }

        $iIdKecamatanIds = collect($items)->pluck('iIdKecamatan')->unique()->filter()->values();

        if ($iIdKecamatanIds->isNotEmpty()) {
            $related = Kecamatan::whereIn('iId', $iIdKecamatanIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdKecamatan)) {
                    $item->iIdKecamatan = $related->get($item->iIdKecamatan);
                }
            }
        }

        $iIdKelurahanIds = collect($items)->pluck('iIdKelurahan')->unique()->filter()->values();

        if ($iIdKelurahanIds->isNotEmpty()) {
            $related = Kelurahan::whereIn('iId', $iIdKelurahanIds)->pluck('vNama', 'iId');

            foreach ($items as $item) {
                if ($related->has($item->iIdKelurahan)) {
                    $item->iIdKelurahan = $related->get($item->iIdKelurahan);
                }
            }
        }
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        $selects['iIdVendor'] = Vendor::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdProvinsi'] = Provinsi::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKota'] = Kota::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKecamatan'] = Kecamatan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKelurahan'] = Kelurahan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

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
            'eUtama' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
