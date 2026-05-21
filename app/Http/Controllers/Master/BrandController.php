<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BrandController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Brand::class;
    }

    protected function tableName(): string
    {
        return 'master_brand';
    }

    protected function tableRoute(): string
    {
        return 'brand';
    }

    protected function label(): string
    {
        return 'Brand';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
