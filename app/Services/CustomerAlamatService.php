<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Customer;
use App\Models\CustomerAlamat;
use App\Models\Kecamatan;
use App\Models\Kelurahan;
use App\Models\Kota;
use App\Models\Provinsi;
use App\Models\User;
use App\Repositories\Contracts\CustomerAlamatRepositoryContract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerAlamatService
{
    public function __construct(
        private CustomerAlamatRepositoryContract $repository,
    ) {}

    public function paginated(Request $request): array
    {
        $columns = $this->columns();

        $query = CustomerAlamat::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $request->query('vNama')) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vAlamat = $request->query('vAlamat')) {
            $query->where('vAlamat', 'like', "%{$vAlamat}%");
        }

        if ($iIdCustomer = $request->query('iIdCustomer')) {
            if (is_numeric($iIdCustomer)) {
                $query->where('iIdCustomer', $iIdCustomer);
            } else {
                $relatedIds = Customer::where('vNama', 'like', "%{$iIdCustomer}%")->pluck('iId');
                $query->whereIn('iIdCustomer', $relatedIds);
            }
        }

        if ($iIdProvinsi = $request->query('iIdProvinsi')) {
            if (is_numeric($iIdProvinsi)) {
                $query->where('iIdProvinsi', $iIdProvinsi);
            } else {
                $relatedIds = Provinsi::where('vNama', 'like', "%{$iIdProvinsi}%")->pluck('iId');
                $query->whereIn('iIdProvinsi', $relatedIds);
            }
        }

        if ($iIdKota = $request->query('iIdKota')) {
            if (is_numeric($iIdKota)) {
                $query->where('iIdKota', $iIdKota);
            } else {
                $relatedIds = Kota::where('vNama', 'like', "%{$iIdKota}%")->pluck('iId');
                $query->whereIn('iIdKota', $relatedIds);
            }
        }

        if ($iIdKecamatan = $request->query('iIdKecamatan')) {
            if (is_numeric($iIdKecamatan)) {
                $query->where('iIdKecamatan', $iIdKecamatan);
            } else {
                $relatedIds = Kecamatan::where('vNama', 'like', "%{$iIdKecamatan}%")->pluck('iId');
                $query->whereIn('iIdKecamatan', $relatedIds);
            }
        }

        if ($iIdKelurahan = $request->query('iIdKelurahan')) {
            if (is_numeric($iIdKelurahan)) {
                $query->where('iIdKelurahan', $iIdKelurahan);
            } else {
                $relatedIds = Kelurahan::where('vNama', 'like', "%{$iIdKelurahan}%")->pluck('iId');
                $query->whereIn('iIdKelurahan', $relatedIds);
            }
        }

        if ($vGPS = $request->query('vGPS')) {
            $query->where('vGPS', 'like', "%{$vGPS}%");
        }

        if ($vNotelp = $request->query('vNotelp')) {
            $query->where('vNotelp', 'like', "%{$vNotelp}%");
        }

        if ($vNohp = $request->query('vNohp')) {
            $query->where('vNohp', 'like', "%{$vNohp}%");
        }

        if ($eUtama = $request->query('eUtama')) {
            $query->where('eUtama', $eUtama);
        }

        if ($tCreatedFrom = $request->query('tCreated_from')) {
            $query->whereDate('tCreated', '>=', $tCreatedFrom);
        }

        if ($tCreatedTo = $request->query('tCreated_to')) {
            $query->whereDate('tCreated', '<=', $tCreatedTo);
        }

        if ($tUpdatedFrom = $request->query('tUpdated_from')) {
            $query->whereDate('tUpdated', '>=', $tUpdatedFrom);
        }

        if ($tUpdatedTo = $request->query('tUpdated_to')) {
            $query->whereDate('tUpdated', '<=', $tUpdatedTo);
        }

        $items = $query->paginate(20)->withQueryString();

        $rawItems = $items->items();
        if (!empty($rawItems)) {
            $iIdCustomerIds = collect($rawItems)->pluck('iIdCustomer')->unique()->filter()->values();
            if ($iIdCustomerIds->isNotEmpty()) {
                $related = Customer::whereIn('iId', $iIdCustomerIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdCustomer)) {
                        $item->iIdCustomer = $related->get($item->iIdCustomer);
                    }
                }
            }

            $iIdProvinsiIds = collect($rawItems)->pluck('iIdProvinsi')->unique()->filter()->values();
            if ($iIdProvinsiIds->isNotEmpty()) {
                $related = Provinsi::whereIn('iId', $iIdProvinsiIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdProvinsi)) {
                        $item->iIdProvinsi = $related->get($item->iIdProvinsi);
                    }
                }
            }

            $iIdKotaIds = collect($rawItems)->pluck('iIdKota')->unique()->filter()->values();
            if ($iIdKotaIds->isNotEmpty()) {
                $related = Kota::whereIn('iId', $iIdKotaIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdKota)) {
                        $item->iIdKota = $related->get($item->iIdKota);
                    }
                }
            }

            $iIdKecamatanIds = collect($rawItems)->pluck('iIdKecamatan')->unique()->filter()->values();
            if ($iIdKecamatanIds->isNotEmpty()) {
                $related = Kecamatan::whereIn('iId', $iIdKecamatanIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdKecamatan)) {
                        $item->iIdKecamatan = $related->get($item->iIdKecamatan);
                    }
                }
            }

            $iIdKelurahanIds = collect($rawItems)->pluck('iIdKelurahan')->unique()->filter()->values();
            if ($iIdKelurahanIds->isNotEmpty()) {
                $related = Kelurahan::whereIn('iId', $iIdKelurahanIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdKelurahan)) {
                        $item->iIdKelurahan = $related->get($item->iIdKelurahan);
                    }
                }
            }
        }

        if (!empty($rawItems) && isset($rawItems[0]->iCreatedid)) {
            $userIds = collect($rawItems)->pluck('iCreatedid')->merge(
                collect($rawItems)->pluck('iUpdatedid')
            )->unique()->filter()->values();

            if ($userIds->isNotEmpty()) {
                $users = User::whereIn('id', $userIds)->pluck('name', 'id');
                foreach ($rawItems as $item) {
                    $item->vCreator = isset($item->iCreatedid) && $users->has($item->iCreatedid) ? $users[$item->iCreatedid] : null;
                    $item->vUpdater = isset($item->iUpdatedid) && $users->has($item->iUpdatedid) ? $users[$item->iUpdatedid] : null;
                }
            }
        }

        $searchValues = [];
        foreach ($columns as $col) {
            $searchValues[$col] = $request->query($col, '');
        }
        foreach (['tCreated_from', 'tCreated_to', 'tUpdated_from', 'tUpdated_to'] as $param) {
            $searchValues[$param] = $request->query($param, '');
        }

        $selects = [];
        $selects['iIdCustomer'] = Customer::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdProvinsi'] = Provinsi::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKota'] = Kota::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKecamatan'] = Kecamatan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKelurahan'] = Kelurahan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

        foreach ($columns as $col) {
            $enumOptions = $this->enumOptions($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return [
            'title' => $this->label(),
            'table' => $this->tableRoute(),
            'items' => $items,
            'columns' => $columns,
            'columnLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'searchValues' => $searchValues,
            'relatedTables' => $this->relatedTables(),
            'primaryKey' => $this->primaryKey(),
            'selects' => $selects,
        ];
    }

    public function detail(int $id): array
    {
        $item = $this->repository->findOrFail($id);
        $columns = $this->columns();

        return [
            'title' => 'Detail ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData(),
            'primaryKey' => $this->primaryKey(),
            'audit' => $this->resolveAudit($item),
        ];
    }

    public function create(): array
    {
        $columns = $this->columns();

        return [
            'title' => 'Tambah ' . $this->label(),
            'table' => $this->tableRoute(),
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData(),
            'primaryKey' => $this->primaryKey(),
        ];
    }

    public function store(Request $request): int
    {
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter((new CustomerAlamat)->getFillable(), fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        foreach ($this->fileColumns() as $col) {
            if ($request->hasFile($col)) {
                $rules[$col] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
            }
        }

        $validated = Validator::make($request->all(), $rules->toArray())->validated();

        foreach ($this->fileColumns() as $col) {
            $path = $this->uploadFile($request, $col);
            if ($path !== null) {
                $validated[$col] = $path;
            }
        }

        $validated['iCreatedid'] = auth()->id() ?? 1;
        $validated['tCreated'] = now();

        $model = $this->repository->create($validated);
        return $model->{$this->primaryKey()};
    }

    public function edit(int $id): array
    {
        $item = $this->repository->findOrFail($id);
        $columns = $this->columns();

        return [
            'title' => 'Edit ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData(),
            'primaryKey' => $this->primaryKey(),
            'audit' => $this->resolveAudit($item),
        ];
    }

    public function update(Request $request, int $id): void
    {
        $item = $this->repository->findOrFail($id);

        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter((new CustomerAlamat)->getFillable(), fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        foreach ($this->fileColumns() as $col) {
            if ($request->hasFile($col)) {
                $rules[$col] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
            }
        }

        $validated = Validator::make($request->all(), $rules->toArray())->validated();

        foreach ($this->fileColumns() as $col) {
            $path = $this->uploadFile($request, $col);
            if ($path !== null) {
                $validated[$col] = $path;
            }
        }

        $validated['iUpdatedid'] = auth()->id() ?? 1;
        $validated['tUpdated'] = now();

        $this->repository->update($item, $validated);
    }

    public function destroy(int $id): void
    {
        $item = $this->repository->findOrFail($id);
        $this->repository->delete($item);
    }

    // ---- Config methods ----

    private function label(): string
    {
        return 'Customer Alamat';
    }

    private function tableRoute(): string
    {
        return 'customer-alamat';
    }

    private function primaryKey(): string
    {
        return 'iId';
    }

    private function columns(): array
    {
        return [
            'vNama',
            'iIdCustomer',
            'iIdProvinsi',
            'iIdKota',
            'iIdKecamatan',
            'iIdKelurahan',
            'vGPS',
            'vAlamat',
            'vNotelp',
            'vNohp',
            'eUtama',
        ];
    }

    private function columnLabel(string $col): string
    {
        return match ($col) {
            'vNama' => 'Nama',
            'iIdCustomer' => 'Customer',
            'iIdProvinsi' => 'Provinsi',
            'iIdKota' => 'Kota',
            'iIdKecamatan' => 'Kecamatan',
            'iIdKelurahan' => 'Kelurahan',
            'vGPS' => 'GPS',
            'vAlamat' => 'Alamat',
            'vNotelp' => 'No. Telepon',
            'vNohp' => 'No. HP',
            'eUtama' => 'Utama',
            default => ucwords(str_replace(['_', 'v', 'i', 'e', 'd'], ' ', preg_replace('/^[viepd]/s', '', $col))),
        };
    }

    private function fieldType(string $col): string
    {
        return match ($col) {
            'vAlamat' => 'textarea',
            'vNotelp' => 'tel',
            'vNohp' => 'tel',
            'eUtama' => 'enum',
            default => 'text',
        };
    }

    private function relatedTables(): array
    {
        return [];
    }

    private function fileColumns(): array
    {
        return [];
    }

    private function uploadFile(Request $request, string $column): ?string
    {
        if (!$request->hasFile($column)) {
            return null;
        }

        $file = $request->file($column);
        $path = $file->store("uploads/{$this->tableRoute()}/{$column}", 'public');

        return $path;
    }

    private function selectData(): array
    {
        $selects = [];
        $selects['iIdCustomer'] = Customer::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdProvinsi'] = Provinsi::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKota'] = Kota::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKecamatan'] = Kecamatan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKelurahan'] = Kelurahan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

        foreach ($this->columns() as $col) {
            $enumOptions = $this->enumOptions($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return $selects;
    }

    private function resolveAudit($item): ?array
    {
        if (!isset($item->iCreatedid) && !isset($item->iUpdatedid) && !isset($item->tCreated) && !isset($item->tUpdated)) {
            return null;
        }

        $audit = [
            'creator' => null,
            'updater' => null,
            'createdAt' => $item->tCreated ?? null,
            'updatedAt' => $item->tUpdated ?? null,
        ];

        if (isset($item->iCreatedid)) {
            $creator = User::find($item->iCreatedid);
            $audit['creator'] = $creator?->name;
        }

        if (isset($item->iUpdatedid)) {
            $updater = User::find($item->iUpdatedid);
            $audit['updater'] = $updater?->name;
        }

        return $audit;
    }

    private function enumOptions(string $col): array
    {
        return match ($col) {
            'eUtama' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            default => [],
        };
    }
}
