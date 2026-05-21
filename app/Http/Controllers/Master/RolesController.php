<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class RolesController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Roles::class;
    }

    protected function tableName(): string
    {
        return 'master_roles';
    }

    protected function tableRoute(): string
    {
        return 'roles';
    }

    protected function label(): string
    {
        return 'Roles';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
