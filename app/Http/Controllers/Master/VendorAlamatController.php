<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class VendorAlamatController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\VendorAlamat::class;
    }

    public function tableName(): string
    {
        return 'master_vendor_alamat';
    }

    public function tableRoute(): string
    {
        return 'vendor-alamat';
    }

    public function label(): string
    {
        return 'Vendor Alamat';
    }

    public function search(): array
    {
        return ['vNama', 'vAlamat', 'iIdVendor'];
    }

    public function selectOptions(): array
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
