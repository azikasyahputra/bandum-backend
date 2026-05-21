<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class CustomerController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Customer::class;
    }

    protected function tableName(): string
    {
        return 'master_customer';
    }

    protected function tableRoute(): string
    {
        return 'customer';
    }

    protected function label(): string
    {
        return 'Customer';
    }

    protected function search(): array
    {
        return ['vNama', 'vEmail'];
    }

}
