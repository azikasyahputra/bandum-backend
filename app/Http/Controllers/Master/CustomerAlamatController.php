<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class CustomerAlamatController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\CustomerAlamat::class;
    }

    protected function tableName(): string
    {
        return 'master_customer_alamat';
    }

    protected function tableRoute(): string
    {
        return 'customer-alamat';
    }

    protected function label(): string
    {
        return 'Customer Alamat';
    }

    protected function search(): array
    {
        return ['vNama', 'vAlamat', 'iIdCustomer'];
    }

    protected function selectOptions(): array
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
