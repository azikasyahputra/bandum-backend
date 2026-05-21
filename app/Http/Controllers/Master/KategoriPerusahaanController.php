<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KategoriPerusahaanController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\KategoriPerusahaan::class;
    }

    protected function tableName(): string
    {
        return 'master_kategori_perusahaan';
    }

    protected function tableRoute(): string
    {
        return 'kategori-perusahaan';
    }

    protected function label(): string
    {
        return 'Kategori Perusahaan';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
