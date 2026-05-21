<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BarangMediaController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\BarangMedia::class;
    }

    protected function tableName(): string
    {
        return 'master_barang_media';
    }

    protected function tableRoute(): string
    {
        return 'barang-media';
    }

    protected function label(): string
    {
        return 'Barang Media';
    }

    protected function search(): array
    {
        return ['eTipe', 'vLink', 'iIdBarang'];
    }
}
