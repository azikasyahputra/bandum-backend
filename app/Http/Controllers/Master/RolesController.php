<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class RolesController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Roles::class;
    }

    public function tableName(): string
    {
        return 'master_roles';
    }

    public function tableRoute(): string
    {
        return 'roles';
    }

    public function label(): string
    {
        return 'Roles';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
