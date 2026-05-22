<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\MasterTableConfig;
use App\Repositories\Contracts\MasterRepositoryContract;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Response as InertiaResponse;

class MasterDataService
{
    public function __construct(
        private MasterRepositoryContract $repository,
    ) {}

    public function index(MasterTableConfig $config, Request $request): InertiaResponse
    {
        $columns = $config->columns();

        $items = $this->repository->paginate(
            $config->modelClass(),
            $columns,
            $config->search(),
            $config->selectOptions(),
            $config->useSoftDelete(),
            $request->query->all(),
        );

        $this->repository->resolveForeignKeys($items, $config->selectOptions());

        $searchValues = [];
        foreach ($columns as $col) {
            $searchValues[$col] = $request->query($col, '');
        }

        return inertia('Master/' . $config->tableRoute() . '/Index', [
            'title' => $config->label(),
            'table' => $config->tableRoute(),
            'items' => $items,
            'columns' => $columns,
            'columnLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->columnLabel($c)]),
            'searchValues' => $searchValues,
            'relatedTables' => $config->relatedTables(),
            'primaryKey' => $config->primaryKey(),
        ]);
    }

    public function show(MasterTableConfig $config, int $id): InertiaResponse
    {
        $item = $this->repository->findOrFail($config->modelClass(), $id, $config->primaryKey());
        $columns = $config->columns();

        return inertia('Master/' . $config->tableRoute() . '/Show', [
            'title' => 'Detail ' . $config->label(),
            'table' => $config->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->fieldType($c)]),
            'selects' => $this->repository->selectData($columns, $config->selectOptions(), fn ($col) => $config->enumOptions($col)),
            'primaryKey' => $config->primaryKey(),
        ]);
    }

    public function create(MasterTableConfig $config): InertiaResponse
    {
        $columns = $config->columns();

        return inertia('Master/' . $config->tableRoute() . '/Create', [
            'title' => 'Tambah ' . $config->label(),
            'table' => $config->tableRoute(),
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->fieldType($c)]),
            'selects' => $this->repository->selectData($columns, $config->selectOptions(), fn ($col) => $config->enumOptions($col)),
            'primaryKey' => $config->primaryKey(),
        ]);
    }

    public function store(MasterTableConfig $config, Request $request): RedirectResponse
    {
        $modelClass = $config->modelClass();
        $model = new $modelClass;
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter($model->getFillable(), fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        foreach ($config->fileColumns() as $col) {
            if ($request->hasFile($col)) {
                $rules[$col] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
            }
        }

        $validated = Validator::make($request->all(), $rules->toArray())->validated();

        foreach ($config->fileColumns() as $col) {
            $path = $config->uploadFile($request, $col);
            if ($path !== null) {
                $validated[$col] = $path;
            }
        }

        $validated['iCreatedid'] = auth()->id() ?? 1;
        $validated['tCreated'] = now();

        $this->repository->create($config->modelClass(), $validated);

        return redirect("/master/{$config->tableRoute()}")->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(MasterTableConfig $config, int $id): InertiaResponse
    {
        $item = $this->repository->findOrFail($config->modelClass(), $id, $config->primaryKey());
        $columns = $config->columns();

        return inertia('Master/' . $config->tableRoute() . '/Edit', [
            'title' => 'Edit ' . $config->label(),
            'table' => $config->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $config->fieldType($c)]),
            'selects' => $this->repository->selectData($columns, $config->selectOptions(), fn ($col) => $config->enumOptions($col)),
            'primaryKey' => $config->primaryKey(),
        ]);
    }

    public function update(MasterTableConfig $config, Request $request, int $id): RedirectResponse
    {
        $item = $this->repository->findOrFail($config->modelClass(), $id, $config->primaryKey());
        $model = new ($config->modelClass());
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter($model->getFillable(), fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        foreach ($config->fileColumns() as $col) {
            if ($request->hasFile($col)) {
                $rules[$col] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
            }
        }

        $validated = Validator::make($request->all(), $rules->toArray())->validated();

        foreach ($config->fileColumns() as $col) {
            $path = $config->uploadFile($request, $col);
            if ($path !== null) {
                $validated[$col] = $path;
            }
        }

        $validated['iUpdatedid'] = auth()->id() ?? 1;
        $validated['tUpdated'] = now();

        $this->repository->update($item, $validated);

        return redirect("/master/{$config->tableRoute()}")->with('success', 'Data berhasil diubah.');
    }

    public function destroy(MasterTableConfig $config, int $id): RedirectResponse
    {
        $item = $this->repository->findOrFail($config->modelClass(), $id, $config->primaryKey());

        $this->repository->delete($item, $config->useSoftDelete());

        return redirect("/master/{$config->tableRoute()}")->with('success', 'Data berhasil dihapus.');
    }
}
