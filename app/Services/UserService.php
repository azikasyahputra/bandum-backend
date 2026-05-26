<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserService
{
    public function paginated(Request $request): array
    {
        $columns = $this->columns();

        $query = User::query();

        if ($name = $request->query('name')) {
            $query->where('name', 'like', "%{$name}%");
        }

        if ($email = $request->query('email')) {
            $query->where('email', 'like', "%{$email}%");
        }

        if ($role = $request->query('role')) {
            $query->where('role', $role);
        }

        $items = $query->paginate(20)->withQueryString();

        $searchValues = [];
        foreach ($columns as $col) {
            $searchValues[$col] = $request->query($col, '');
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
        $item = User::findOrFail($id);
        $columns = $this->columns();

        return [
            'title' => 'Detail ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $columns,
            'fieldLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => [],
            'primaryKey' => $this->primaryKey(),
            'audit' => $this->resolveAudit($item),
        ];
    }

    public function create(): array
    {
        return [
            'title' => 'Tambah Users',
            'table' => 'users',
            'fields' => $this->userFields(),
            'fieldLabels' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => [],
            'primaryKey' => $this->primaryKey(),
        ];
    }

    public function store(Request $request): int
    {
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'role' => 'required|string|max:50',
            'password' => 'required|string|min:8',
        ])->validated();

        $validated['password'] = Hash::make($validated['password']);

        $model = User::create($validated);
        return $model->{$this->primaryKey()};
    }

    public function edit(int $id): array
    {
        $item = User::findOrFail($id);

        return [
            'title' => 'Edit Users',
            'table' => 'users',
            'item' => $item,
            'fields' => $this->userFields(),
            'fieldLabels' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($this->userFields())->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => [],
            'primaryKey' => $this->primaryKey(),
        ];
    }

    public function update(Request $request, int $id): void
    {
        $item = User::findOrFail($id);

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
    }

    public function destroy(int $id): void
    {
        $item = User::findOrFail($id);
        $item->delete();
    }

    private function label(): string
    {
        return 'Users';
    }

    public function tableRoute(): string
    {
        return 'users';
    }

    private function primaryKey(): string
    {
        return 'id';
    }

    private function columns(): array
    {
        return ['name', 'email', 'role'];
    }

    private function userFields(): array
    {
        return ['name', 'email', 'role', 'password'];
    }

    private function columnLabel(string $col): string
    {
        return match ($col) {
            'name' => 'Name',
            'email' => 'Email',
            'role' => 'Role',
            'password' => 'Password',
            default => ucwords(str_replace(['_'], ' ', $col)),
        };
    }

    private function fieldType(string $col): string
    {
        return match ($col) {
            'password' => 'password',
            default => 'text',
        };
    }

    private function relatedTables(): array
    {
        return [];
    }

    private function resolveAudit($item): ?array
    {
        return null;
    }
}
