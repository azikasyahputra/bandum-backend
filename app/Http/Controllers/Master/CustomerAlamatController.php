<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class CustomerAlamatController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\CustomerAlamat::class;
    }

    public function tableName(): string
    {
        return 'master_customer_alamat';
    }

    public function tableRoute(): string
    {
        return 'customer-alamat';
    }

    public function label(): string
    {
        return 'Customer Alamat';
    }

    public function search(): array
    {
        return ['vNama', 'vAlamat', 'iIdCustomer'];
    }

    public function selectOptions(): array
    {
        return [
            'iIdCustomer' => ['model' => \App\Models\Customer::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => \App\Models\Kota::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKecamatan' => ['model' => \App\Models\Kecamatan::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKelurahan' => ['model' => \App\Models\Kelurahan::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }
}
