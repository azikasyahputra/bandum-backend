<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class GudangController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Gudang::class;
    }

    public function tableName(): string
    {
        return 'master_gudang';
    }

    public function tableRoute(): string
    {
        return 'gudang';
    }

    public function label(): string
    {
        return 'Gudang';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
