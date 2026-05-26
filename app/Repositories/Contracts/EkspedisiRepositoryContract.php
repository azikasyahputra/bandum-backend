<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

interface EkspedisiRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator;

    public function findOrFail(int $id): Model;

    public function create(array $data): Model;

    public function update(Model $item, array $data): bool;

    public function delete(Model $item): bool;

    public function resolveForeignKeys(LengthAwarePaginator $paginator): void;

    public function selectData(array $fields): array;
}
