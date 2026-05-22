<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KategoriPerusahaanController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\KategoriPerusahaan::class;
    }

    public function tableName(): string
    {
        return 'master_kategori_perusahaan';
    }

    public function tableRoute(): string
    {
        return 'kategori-perusahaan';
    }

    public function label(): string
    {
        return 'Kategori Perusahaan';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
