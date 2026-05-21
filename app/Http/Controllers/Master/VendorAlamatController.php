<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class VendorAlamatController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\VendorAlamat::class;
    }

    protected function tableName(): string
    {
        return 'master_vendor_alamat';
    }

    protected function tableRoute(): string
    {
        return 'vendor-alamat';
    }

    protected function label(): string
    {
        return 'Vendor Alamat';
    }

    protected function search(): array
    {
        return ['vNama', 'vAlamat', 'iIdVendor'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdVendor' => ['model' => \App\Models\Vendor::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => \App\Models\Kota::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKecamatan' => ['model' => \App\Models\Kecamatan::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKelurahan' => ['model' => \App\Models\Kelurahan::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }
}
