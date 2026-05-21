<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BarangKemasanController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\BarangKemasan::class;
    }

    protected function tableName(): string
    {
        return 'master_barang_kemasan';
    }

    protected function tableRoute(): string
    {
        return 'barang-kemasan';
    }

    protected function label(): string
    {
        return 'Barang Kemasan';
    }

    protected function search(): array
    {
        return ['vNama', 'iIdBarang'];
    }
}
