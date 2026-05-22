<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class VendorController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Vendor::class;
    }

    public function tableName(): string
    {
        return 'master_vendor';
    }

    public function tableRoute(): string
    {
        return 'vendor';
    }

    public function label(): string
    {
        return 'Vendor';
    }

    public function search(): array
    {
        return ['vNama'];
    }

    public function relatedTables(): array
    {
        return [
            ['route' => 'vendor-alamat', 'label' => 'Alamat', 'foreignKey' => 'iIdVendor'],
        ];
    }

}
