<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BarangController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Barang::class;
    }

    public function tableName(): string
    {
        return 'master_barang';
    }

    public function tableRoute(): string
    {
        return 'barang';
    }

    public function label(): string
    {
        return 'Barang';
    }

    public function search(): array
    {
        return ['vNama', 'vDeskripsisingkat'];
    }

    public function relatedTables(): array
    {
        return [
            ['route' => 'barang-kemasan', 'label' => 'Kemasan', 'foreignKey' => 'iIdBarang'],
            ['route' => 'barang-media', 'label' => 'Media', 'foreignKey' => 'iIdBarang'],
        ];
    }

    public function selectOptions(): array
    {
        return [
            'iIdBrand' => ['model' => \App\Models\Brand::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKategori' => ['model' => \App\Models\Kategori::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdSubkategori' => ['model' => \App\Models\Subkategori::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
