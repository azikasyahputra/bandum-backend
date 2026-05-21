<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\User::class;
    }

    protected function tableName(): string
    {
        return 'users';
    }

    protected function tableRoute(): string
    {
        return 'users';
    }

    protected function label(): string
    {
        return 'Users';
    }

    protected function primaryKey(): string
    {
        return 'id';
    }

    protected function useSoftDelete(): bool
    {
        return false;
    }

    protected function columns(): array
    {
        return ['name', 'email', 'role'];
    }

    protected function search(): array
    {
        return ['name', 'email', 'role'];
    }

    protected function fieldType(string $col): string
    {
        if ($col === 'password') {
            return 'password';
        }
        return parent::fieldType($col);
    }

    protected function columnLabel(string $col): string
    {
        return match ($col) {
            'name' => 'Name',
            'email' => 'Email',
            'role' => 'Role',
            'password' => 'Password',
            default => parent::columnLabel($col),
        };
    }

    public function create(): Response
    {
        return Inertia('Master/Form', [
            'title' => 'Tambah ' . $this->label(),
            'table' => $this->tableRoute(),
            'fields' => ['name', 'email', 'role', 'password'],
            'fieldLabels' => collect(['name', 'email', 'role', 'password'])->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect(['name', 'email', 'role', 'password'])->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => [],
            'primaryKey' => $this->primaryKey(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'role' => 'required|string|max:50',
            'password' => 'required|string|min:8',
        ])->validated();

        $validated['password'] = Hash::make($validated['password']);

        \App\Models\User::create($validated);

        return redirect("/master/{$this->tableRoute()}")->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(int $id): Response
    {
        $item = \App\Models\User::findOrFail($id);

        return Inertia('Master/Form', [
            'title' => 'Edit ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => ['name', 'email', 'role', 'password'],
            'fieldLabels' => collect(['name', 'email', 'role', 'password'])->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect(['name', 'email', 'role', 'password'])->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => [],
            'primaryKey' => $this->primaryKey(),
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $item = \App\Models\User::findOrFail($id);

        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
            'role' => 'required|string|max:50',
        ];

        if ($request->filled('password')) {
            $rules['password'] = 'string|min:8';
        }

        $validated = Validator::make($request->all(), $rules)->validated();

        if ($request->filled('password')) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $item->update($validated);

        return redirect("/master/{$this->tableRoute()}")->with('success', 'Data berhasil diubah.');
    }
}
