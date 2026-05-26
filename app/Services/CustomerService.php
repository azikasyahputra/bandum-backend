<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Customer;
use App\Models\KategoriPerusahaan;
use App\Models\KlasifikasiPerusahaan;
use App\Models\User;
use App\Repositories\Contracts\CustomerRepositoryContract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerService
{
    public function __construct(
        private CustomerRepositoryContract $repository,
    ) {}

    public function paginated(Request $request): array
    {
        $columns = $this->columns();

        $query = Customer::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $request->query('vNama')) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vEmail = $request->query('vEmail')) {
            $query->where('vEmail', 'like', "%{$vEmail}%");
        }

        if ($iIdUser = $request->query('iIdUser')) {
            $query->where('iIdUser', $iIdUser);
        }

        if ($iIdJenisperusahaan = $request->query('iIdJenisperusahaan')) {
            $query->where('iIdJenisperusahaan', $iIdJenisperusahaan);
        }

        if ($iIdKlasifikasiperusahaan = $request->query('iIdKlasifikasiperusahaan')) {
            $query->where('iIdKlasifikasiperusahaan', $iIdKlasifikasiperusahaan);
        }

        if ($vProfilepic = $request->query('vProfilepic')) {
            $query->where('vProfilepic', 'like', "%{$vProfilepic}%");
        }

        if ($vKtp = $request->query('vKtp')) {
            $query->where('vKtp', 'like', "%{$vKtp}%");
        }

        if ($vFilektp = $request->query('vFilektp')) {
            $query->where('vFilektp', 'like', "%{$vFilektp}%");
        }

        if ($vNpwp = $request->query('vNpwp')) {
            $query->where('vNpwp', 'like', "%{$vNpwp}%");
        }

        if ($vFilenpwp = $request->query('vFilenpwp')) {
            $query->where('vFilenpwp', 'like', "%{$vFilenpwp}%");
        }

        if ($vSiup = $request->query('vSiup')) {
            $query->where('vSiup', 'like', "%{$vSiup}%");
        }

        if ($vFilesiup = $request->query('vFilesiup')) {
            $query->where('vFilesiup', 'like', "%{$vFilesiup}%");
        }

        if ($vFileaktapendirian = $request->query('vFileaktapendirian')) {
            $query->where('vFileaktapendirian', 'like', "%{$vFileaktapendirian}%");
        }

        if ($vFiledomisiliperusahaan = $request->query('vFiledomisiliperusahaan')) {
            $query->where('vFiledomisiliperusahaan', 'like', "%{$vFiledomisiliperusahaan}%");
        }

        if ($eTipe = $request->query('eTipe')) {
            $query->where('eTipe', $eTipe);
        }

        if ($eVerifikasi = $request->query('eVerifikasi')) {
            $query->where('eVerifikasi', $eVerifikasi);
        }

        if ($isTrustedBuyer = $request->query('isTrustedBuyer')) {
            $query->where('isTrustedBuyer', $isTrustedBuyer);
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
            $iIdUserIds = collect($rawItems)->pluck('iIdUser')->unique()->filter()->values();
            if ($iIdUserIds->isNotEmpty()) {
                $related = User::whereIn('id', $iIdUserIds)->pluck('name', 'id');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdUser)) {
                        $item->iIdUser = $related->get($item->iIdUser);
                    }
                }
            }

            $iIdJenisperusahaanIds = collect($rawItems)->pluck('iIdJenisperusahaan')->unique()->filter()->values();
            if ($iIdJenisperusahaanIds->isNotEmpty()) {
                $related = KategoriPerusahaan::whereIn('iId', $iIdJenisperusahaanIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdJenisperusahaan)) {
                        $item->iIdJenisperusahaan = $related->get($item->iIdJenisperusahaan);
                    }
                }
            }

            $iIdKlasifikasiperusahaanIds = collect($rawItems)->pluck('iIdKlasifikasiperusahaan')->unique()->filter()->values();
            if ($iIdKlasifikasiperusahaanIds->isNotEmpty()) {
                $related = KlasifikasiPerusahaan::whereIn('iId', $iIdKlasifikasiperusahaanIds)->pluck('vNama', 'iId');
                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdKlasifikasiperusahaan)) {
                        $item->iIdKlasifikasiperusahaan = $related->get($item->iIdKlasifikasiperusahaan);
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
        $selects['iIdUser'] = User::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['id as value', 'name as label']);
        $selects['iIdJenisperusahaan'] = KategoriPerusahaan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKlasifikasiperusahaan'] = KlasifikasiPerusahaan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

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
        $fillable = array_values(array_filter((new Customer)->getFillable(), fn ($c) => !in_array($c, $skip)));

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
        $fillable = array_values(array_filter((new Customer)->getFillable(), fn ($c) => !in_array($c, $skip)));

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
        return 'Customer';
    }

    private function tableRoute(): string
    {
        return 'customer';
    }

    private function primaryKey(): string
    {
        return 'iId';
    }

    private function columns(): array
    {
        return [
            'vNama',
            'vEmail',
            'iIdUser',
            'iIdJenisperusahaan',
            'iIdKlasifikasiperusahaan',
            'vProfilepic',
            'vKtp',
            'vFilektp',
            'vNpwp',
            'vFilenpwp',
            'vSiup',
            'vFilesiup',
            'vFileaktapendirian',
            'vFiledomisiliperusahaan',
            'eTipe',
            'eVerifikasi',
            'isTrustedBuyer',
        ];
    }

    private function columnLabel(string $col): string
    {
        return match ($col) {
            'vNama' => 'Nama',
            'vEmail' => 'Email',
            'iIdUser' => 'User',
            'iIdJenisperusahaan' => 'Jenis Perusahaan',
            'iIdKlasifikasiperusahaan' => 'Klasifikasi Perusahaan',
            'vProfilepic' => 'Foto Profil',
            'vKtp' => 'KTP',
            'vFilektp' => 'File KTP',
            'vNpwp' => 'NPWP',
            'vFilenpwp' => 'File NPWP',
            'vSiup' => 'SIUP',
            'vFilesiup' => 'File SIUP',
            'vFileaktapendirian' => 'Akta Pendirian',
            'vFiledomisiliperusahaan' => 'Domisili Perusahaan',
            'eTipe' => 'Tipe',
            'eVerifikasi' => 'Verifikasi',
            'isTrustedBuyer' => 'Trusted Buyer',
            default => ucwords(str_replace(['_', 'v', 'i', 'e', 'd'], ' ', preg_replace('/^[viepd]/s', '', $col))),
        };
    }

    private function fieldType(string $col): string
    {
        return match ($col) {
            'vEmail' => 'email',
            'vProfilepic' => 'file',
            'vKtp' => 'file',
            'vFilektp' => 'file',
            'vFilenpwp' => 'file',
            'vFilesiup' => 'file',
            'vFileaktapendirian' => 'file',
            'vFiledomisiliperusahaan' => 'file',
            'eTipe' => 'enum',
            'eVerifikasi' => 'enum',
            'isTrustedBuyer' => 'enum',
            default => 'text',
        };
    }

    private function relatedTables(): array
    {
        return [
            [
                'route' => 'customer-alamat',
                'label' => 'Alamat',
                'foreignKey' => 'iIdCustomer',
            ],
        ];
    }

    private function fileColumns(): array
    {
        return [
            'vProfilepic',
            'vKtp',
            'vFilektp',
            'vFilenpwp',
            'vFilesiup',
            'vFileaktapendirian',
            'vFiledomisiliperusahaan',
        ];
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
        $selects['iIdUser'] = User::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['id as value', 'name as label']);
        $selects['iIdJenisperusahaan'] = KategoriPerusahaan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);
        $selects['iIdKlasifikasiperusahaan'] = KlasifikasiPerusahaan::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

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
            'eVerifikasi' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'isTrustedBuyer' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            default => [],
        };
    }
}
