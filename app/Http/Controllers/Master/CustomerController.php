<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class CustomerController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Customer::class;
    }

    public function tableName(): string
    {
        return 'master_customer';
    }

    public function tableRoute(): string
    {
        return 'customer';
    }

    public function label(): string
    {
        return 'Customer';
    }

    public function search(): array
    {
        return ['vNama', 'vEmail'];
    }

    public function relatedTables(): array
    {
        return [
            ['route' => 'customer-alamat', 'label' => 'Alamat', 'foreignKey' => 'iIdCustomer'],
        ];
    }

}
