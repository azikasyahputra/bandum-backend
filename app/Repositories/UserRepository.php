<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Contracts\UserRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class UserRepository implements UserRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = User::query();

        if ($name = $queryParams['name'] ?? null) {
            $query->where('name', 'like', "%{$name}%");
        }

        if ($email = $queryParams['email'] ?? null) {
            $query->where('email', 'like', "%{$email}%");
        }

        if ($role = $queryParams['role'] ?? null) {
            $query->where('role', $role);
        }

        return $query->paginate(20)->withQueryString();
    }

    public function findOrFail(int $id): Model
    {
        return User::findOrFail($id);
    }

    public function create(array $data): Model
    {
        return User::create($data);
    }

    public function update(Model $item, array $data): bool
    {
        return $item->update($data);
    }

    public function delete(Model $item): bool
    {
        return (bool) $item->delete();
    }

    public function resolveForeignKeys(LengthAwarePaginator $paginator): void
    {
    }

    public function selectData(array $fields): array
    {
        return [];
    }
}
