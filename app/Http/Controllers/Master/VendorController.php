<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class VendorController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Vendor::class;
    }

    protected function tableName(): string
    {
        return 'master_vendor';
    }

    protected function tableRoute(): string
    {
        return 'vendor';
    }

    protected function label(): string
    {
        return 'Vendor';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
