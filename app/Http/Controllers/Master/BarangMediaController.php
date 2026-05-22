<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BarangMediaController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\BarangMedia::class;
    }

    public function tableName(): string
    {
        return 'master_barang_media';
    }

    public function tableRoute(): string
    {
        return 'barang-media';
    }

    public function label(): string
    {
        return 'Barang Media';
    }

    public function search(): array
    {
        return ['eTipe', 'vLink', 'iIdBarang'];
    }
}
