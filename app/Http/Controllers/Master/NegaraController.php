<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class NegaraController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Negara::class;
    }

    public function tableName(): string
    {
        return 'master_negara';
    }

    public function tableRoute(): string
    {
        return 'negara';
    }

    public function label(): string
    {
        return 'Negara';
    }

    public function search(): array
    {
        return ['vNama', 'vKode'];
    }

}
