<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\User;
use App\Models\Vendor;
use App\Models\VendorAlamat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VendorService
{
    public function paginated(Request $request): array
    {
        $columns = $this->columns();

        $query = Vendor::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($vNama = $request->query('vNama')) {
            $query->where('vNama', 'like', "%{$vNama}%");
        }

        if ($vProfilepic = $request->query('vProfilepic')) {
            $query->where('vProfilepic', 'like', "%{$vProfilepic}%");
        }

        if ($eTipe = $request->query('eTipe')) {
            $query->where('eTipe', $eTipe);
        }

        if ($vNamadirektur = $request->query('vNamadirektur')) {
            $query->where('vNamadirektur', 'like', "%{$vNamadirektur}%");
        }

        if ($dTanggalberdiri = $request->query('dTanggalberdiri')) {
            $query->where('dTanggalberdiri', $dTanggalberdiri);
        }

        if ($eJumlahkaryawan = $request->query('eJumlahkaryawan')) {
            $query->where('eJumlahkaryawan', $eJumlahkaryawan);
        }

        if ($vOfficephone = $request->query('vOfficephone')) {
            $query->where('vOfficephone', 'like', "%{$vOfficephone}%");
        }

        if ($vNamapic = $request->query('vNamapic')) {
            $query->where('vNamapic', 'like', "%{$vNamapic}%");
        }

        if ($vKontakpic = $request->query('vKontakpic')) {
            $query->where('vKontakpic', 'like', "%{$vKontakpic}%");
        }

        if ($iIdAlamatutama = $request->query('iIdAlamatutama')) {
            if (is_numeric($iIdAlamatutama)) {
                $query->where('iIdAlamatutama', $iIdAlamatutama);
            } else {
                $relatedIds = VendorAlamat::where('vNama', 'like', "%{$iIdAlamatutama}%")->pluck('iId');
                $query->whereIn('iIdAlamatutama', $relatedIds);
            }
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

        if ($vDeskripsi = $request->query('vDeskripsi')) {
            $query->where('vDeskripsi', 'like', "%{$vDeskripsi}%");
        }

        if ($eVerifikasi = $request->query('eVerifikasi')) {
            $query->where('eVerifikasi', $eVerifikasi);
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
            $ids = collect($rawItems)->pluck('iIdAlamatutama')->unique()->filter()->values();

            if ($ids->isNotEmpty()) {
                $related = VendorAlamat::whereIn('iId', $ids)->pluck('vNama', 'iId');

                foreach ($rawItems as $item) {
                    if ($related->has($item->iIdAlamatutama)) {
                        $item->iIdAlamatutama = $related->get($item->iIdAlamatutama);
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

        return [
            'title' => $this->label(),
            'table' => $this->tableRoute(),
            'items' => $items,
            'columns' => $columns,
            'columnLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'searchValues' => $searchValues,
            'relatedTables' => $this->relatedTables(),
            'primaryKey' => $this->primaryKey(),
        ];
    }

    public function detail(int $id): array
    {
        $item = Vendor::where('iId', $id)->firstOrFail();
        $columns = $this->columns();

        return [
            'title' => 'Detail ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData($columns),
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
            'selects' => $this->selectData($columns),
            'primaryKey' => $this->primaryKey(),
        ];
    }

    public function store(Request $request): int
    {
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter((new Vendor)->getFillable(), fn ($c) => !in_array($c, $skip)));

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

        $model = new Vendor;
        $model->timestamps = false;
        $model->fill($validated)->save();

        return $model->{$this->primaryKey()};
    }

    public function edit(int $id): array
    {
        $item = Vendor::where('iId', $id)->firstOrFail();
        $columns = $this->columns();

        return [
            'title' => 'Edit ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData($columns),
            'primaryKey' => $this->primaryKey(),
            'audit' => $this->resolveAudit($item),
        ];
    }

    public function update(Request $request, int $id): void
    {
        $item = Vendor::where('iId', $id)->firstOrFail();

        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter((new Vendor)->getFillable(), fn ($c) => !in_array($c, $skip)));

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

        $item->timestamps = false;
        $item->update($validated);
    }

    public function destroy(int $id): void
    {
        $item = Vendor::where('iId', $id)->firstOrFail();

        $item->timestamps = false;
        $item->update([
            'eDeleted' => 'Ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);
    }

    private function label(): string
    {
        return 'Vendor';
    }

    private function tableRoute(): string
    {
        return 'vendor';
    }

    private function primaryKey(): string
    {
        return 'iId';
    }

    private function columns(): array
    {
        return [
            'vNama',
            'vProfilepic',
            'eTipe',
            'vNamadirektur',
            'dTanggalberdiri',
            'eJumlahkaryawan',
            'vOfficephone',
            'vNamapic',
            'vKontakpic',
            'iIdAlamatutama',
            'vSiup',
            'vFilesiup',
            'vFileaktapendirian',
            'vFiledomisiliperusahaan',
            'vDeskripsi',
            'eVerifikasi',
        ];
    }

    private function columnLabel(string $col): string
    {
        return match ($col) {
            'vNama' => 'Nama',
            'vProfilepic' => 'Foto Profil',
            'eTipe' => 'Tipe',
            'vNamadirektur' => 'Nama Direktur',
            'dTanggalberdiri' => 'Tanggal Berdiri',
            'eJumlahkaryawan' => 'Jumlah Karyawan',
            'vOfficephone' => 'Telepon Kantor',
            'vNamapic' => 'Nama PIC',
            'vKontakpic' => 'Kontak PIC',
            'iIdAlamatutama' => 'Alamat Utama',
            'vSiup' => 'SIUP',
            'vFilesiup' => 'File SIUP',
            'vFileaktapendirian' => 'Akta Pendirian',
            'vFiledomisiliperusahaan' => 'Domisili Perusahaan',
            'vDeskripsi' => 'Deskripsi',
            'eVerifikasi' => 'Verifikasi',
            default => ucwords(str_replace(['_', 'v', 'i', 'e', 'd'], ' ', preg_replace('/^[viepd]/s', '', $col))),
        };
    }

    private function fieldType(string $col): string
    {
        return match ($col) {
            'vProfilepic' => 'file',
            'eTipe' => 'enum',
            'dTanggalberdiri' => 'date',
            'eJumlahkaryawan' => 'enum',
            'vOfficephone' => 'tel',
            'vFilesiup' => 'file',
            'vFileaktapendirian' => 'file',
            'vFiledomisiliperusahaan' => 'file',
            'vDeskripsi' => 'textarea',
            'eVerifikasi' => 'enum',
            default => 'text',
        };
    }

    private function relatedTables(): array
    {
        return [
            [
                'route' => 'vendor-alamat',
                'label' => 'Alamat',
                'foreignKey' => 'iIdVendor',
            ],
        ];
    }

    private function fileColumns(): array
    {
        return [
            'vProfilepic',
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

    private function selectData(array $fields): array
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
            'eVerifikasi' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            default => [],
        };
    }
}
