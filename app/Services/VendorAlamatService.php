<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\VendorAlamat;
use App\Models\User;
use App\Repositories\Contracts\VendorAlamatRepositoryContract;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Response;

class VendorAlamatService
{
    public function __construct(
        private VendorAlamatRepositoryContract $repository,
    ) {}

    public function paginated(Request $request): array
    {
        $columns = $this->columns();

        $items = $this->repository->paginate(
            $columns,
            $this->search(),
            $request->query->all(),
        );

        $this->repository->resolveForeignKeys($items);

        $rawItems = $items->items();
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
        $item = $this->repository->findOrFail($id);
        $columns = $this->columns();

        return [
            'title' => 'Detail ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->repository->selectData($columns),
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
            'selects' => $this->repository->selectData($columns),
            'primaryKey' => $this->primaryKey(),
        ];
    }

    public function store(Request $request): int
    {
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter((new VendorAlamat)->getFillable(), fn ($c) => !in_array($c, $skip)));

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
            'selects' => $this->repository->selectData($columns),
            'primaryKey' => $this->primaryKey(),
            'audit' => $this->resolveAudit($item),
        ];
    }

    public function update(Request $request, int $id): void
    {
        $item = $this->repository->findOrFail($id);

        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter((new VendorAlamat)->getFillable(), fn ($c) => !in_array($c, $skip)));

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
        return 'Vendor Alamat';
    }

    private function tableRoute(): string
    {
        return 'vendor-alamat';
    }

    private function primaryKey(): string
    {
        return 'iId';
    }

    private function search(): array
    {
        return array (
  0 => 'vNama',
  1 => 'vAlamat',
  2 => 'iIdVendor',
);
    }

    private function columns(): array
    {
        return array (
  0 => 'vNama',
  1 => 'vAlamat',
  2 => 'iIdVendor',
  3 => 'iIdProvinsi',
  4 => 'iIdKota',
  5 => 'iIdKecamatan',
  6 => 'iIdKelurahan',
  7 => 'vGPS',
  8 => 'vNotelp',
  9 => 'vNohp',
  10 => 'eUtama',
);
    }

    private function columnLabel(string $col): string
    {
            return match ($col) {
            'vNama' => 'Nama',
            'vAlamat' => 'Alamat',
            'iIdVendor' => 'Vendor',
            'iIdProvinsi' => 'Provinsi',
            'iIdKota' => 'Kota',
            'iIdKecamatan' => 'Kecamatan',
            'iIdKelurahan' => 'Kelurahan',
            'vGPS' => 'GPS',
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
        return array (
);
    }

    private function fileColumns(): array
    {
        return array (
);
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

    private function enumOptions(string $col): array
    {
            return match ($col) {
            'eUtama' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
