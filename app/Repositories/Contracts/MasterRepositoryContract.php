<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

interface MasterRepositoryContract
{
    public function paginate(string $modelClass, array $columns, array $searchCols, array $selectOpts, bool $useSoftDelete, array $queryParams): LengthAwarePaginator;

    public function findOrFail(string $modelClass, int $id, string $primaryKey = 'iId'): Model;

    public function create(string $modelClass, array $data): Model;

    public function update(Model $item, array $data): bool;

    public function delete(Model $item, bool $useSoftDelete): bool;

    public function resolveForeignKeys(LengthAwarePaginator $paginator, array $selectOpts): void;

    public function selectData(array $fields, array $selectOptions, callable $enumOptionsFn): array;
}
