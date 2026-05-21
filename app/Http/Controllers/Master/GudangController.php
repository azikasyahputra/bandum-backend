<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class GudangController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Gudang::class;
    }

    protected function tableName(): string
    {
        return 'master_gudang';
    }

    protected function tableRoute(): string
    {
        return 'gudang';
    }

    protected function label(): string
    {
        return 'Gudang';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
