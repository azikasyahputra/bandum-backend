<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BarangController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Barang::class;
    }

    protected function tableName(): string
    {
        return 'master_barang';
    }

    protected function tableRoute(): string
    {
        return 'barang';
    }

    protected function label(): string
    {
        return 'Barang';
    }

    protected function search(): array
    {
        return ['vNama', 'vDeskripsisingkat'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdBrand' => ['model' => \App\Models\Brand::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKategori' => ['model' => \App\Models\Kategori::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdSubkategori' => ['model' => \App\Models\Subkategori::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
