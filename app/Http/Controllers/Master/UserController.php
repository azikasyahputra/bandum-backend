<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Response;

class UserController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\User::class;
    }

    public function tableName(): string
    {
        return 'users';
    }

    public function tableRoute(): string
    {
        return 'users';
    }

    public function label(): string
    {
        return 'Users';
    }

    public function primaryKey(): string
    {
        return 'id';
    }

    public function useSoftDelete(): bool
    {
        return false;
    }

    public function columns(): array
    {
        return ['name', 'email', 'role'];
    }

    public function search(): array
    {
        return ['name', 'email', 'role'];
    }

    public function fieldType(string $col): string
    {
        if ($col === 'password') {
            return 'password';
        }
        return parent::fieldType($col);
    }

    public function columnLabel(string $col): string
    {
        return match ($col) {
            'name' => 'Name',
            'email' => 'Email',
            'role' => 'Role',
            'password' => 'Password',
            default => parent::columnLabel($col),
        };
    }

    private function userFields(): array
    {
        return ['name', 'email', 'role', 'password'];
    }

    public function create(): Response
    {
        return inertia('Master/users/Create', [
            'title' => 'Tambah Users',
            'table' => 'users',
            'fields' => $this->userFields(),
            'fieldLabels' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
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

        return redirect('/master/users')->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(int $id): Response
    {
        $item = \App\Models\User::findOrFail($id);

        return inertia('Master/users/Edit', [
            'title' => 'Edit Users',
            'table' => 'users',
            'item' => $item,
            'fields' => $this->userFields(),
            'fieldLabels' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
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

        return redirect('/master/users')->with('success', 'Data berhasil diubah.');
    }
}
