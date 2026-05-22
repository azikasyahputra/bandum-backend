<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KategoriController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Kategori::class;
    }

    public function tableName(): string
    {
        return 'master_kategori';
    }

    public function tableRoute(): string
    {
        return 'kategori';
    }

    public function label(): string
    {
        return 'Kategori';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
