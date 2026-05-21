<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class NegaraController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Negara::class;
    }

    protected function tableName(): string
    {
        return 'master_negara';
    }

    protected function tableRoute(): string
    {
        return 'negara';
    }

    protected function label(): string
    {
        return 'Negara';
    }

    protected function search(): array
    {
        return ['vNama', 'vKode'];
    }

}
