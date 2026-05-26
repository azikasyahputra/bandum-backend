<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Customer;
use App\Repositories\Contracts\CustomerRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class CustomerRepository implements CustomerRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Customer::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vEmail = $queryParams['vEmail'] ?? null) {
            $query->where('vEmail', 'like', "%{$vEmail}%");
        }

        if ($iIdUser = $queryParams['iIdUser'] ?? null) {
            $query->where('iIdUser', $iIdUser);
        }

        if ($iIdJenisperusahaan = $queryParams['iIdJenisperusahaan'] ?? null) {
            $query->where('iIdJenisperusahaan', $iIdJenisperusahaan);
        }

        if ($iIdKlasifikasiperusahaan = $queryParams['iIdKlasifikasiperusahaan'] ?? null) {
            $query->where('iIdKlasifikasiperusahaan', $iIdKlasifikasiperusahaan);
        }

        if ($vProfilepic = $queryParams['vProfilepic'] ?? null) {
            $query->where('vProfilepic', 'like', "%{$vProfilepic}%");
        }

        if ($vKtp = $queryParams['vKtp'] ?? null) {
            $query->where('vKtp', 'like', "%{$vKtp}%");
        }

        if ($vFilektp = $queryParams['vFilektp'] ?? null) {
            $query->where('vFilektp', 'like', "%{$vFilektp}%");
        }

        if ($vNpwp = $queryParams['vNpwp'] ?? null) {
            $query->where('vNpwp', 'like', "%{$vNpwp}%");
        }

        if ($vFilenpwp = $queryParams['vFilenpwp'] ?? null) {
            $query->where('vFilenpwp', 'like', "%{$vFilenpwp}%");
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

        if ($eTipe = $queryParams['eTipe'] ?? null) {
            $query->where('eTipe', $eTipe);
        }

        if ($eVerifikasi = $queryParams['eVerifikasi'] ?? null) {
            $query->where('eVerifikasi', $eVerifikasi);
        }

        if ($isTrustedBuyer = $queryParams['isTrustedBuyer'] ?? null) {
            $query->where('isTrustedBuyer', $isTrustedBuyer);
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
        return Customer::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Customer;
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
            'eVerifikasi' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            'isTrustedBuyer' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
