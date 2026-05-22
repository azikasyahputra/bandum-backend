<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BarangKemasanController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\BarangKemasan::class;
    }

    public function tableName(): string
    {
        return 'master_barang_kemasan';
    }

    public function tableRoute(): string
    {
        return 'barang-kemasan';
    }

    public function label(): string
    {
        return 'Barang Kemasan';
    }

    public function search(): array
    {
        return ['vNama', 'iIdBarang'];
    }
}
