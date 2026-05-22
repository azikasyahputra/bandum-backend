<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class ProvinsiController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Provinsi::class;
    }

    public function tableName(): string
    {
        return 'master_provinsi';
    }

    public function tableRoute(): string
    {
        return 'provinsi';
    }

    public function label(): string
    {
        return 'Provinsi';
    }

    public function search(): array
    {
        return ['vNama', 'vIbukota'];
    }

}
