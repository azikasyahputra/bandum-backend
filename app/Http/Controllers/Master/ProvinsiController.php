<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class ProvinsiController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Provinsi::class;
    }

    protected function tableName(): string
    {
        return 'master_provinsi';
    }

    protected function tableRoute(): string
    {
        return 'provinsi';
    }

    protected function label(): string
    {
        return 'Provinsi';
    }

    protected function search(): array
    {
        return ['vNama', 'vIbukota'];
    }

}
