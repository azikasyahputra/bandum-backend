<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BrandController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Brand::class;
    }

    public function tableName(): string
    {
        return 'master_brand';
    }

    public function tableRoute(): string
    {
        return 'brand';
    }

    public function label(): string
    {
        return 'Brand';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
