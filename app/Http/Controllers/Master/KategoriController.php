<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KategoriController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Kategori::class;
    }

    protected function tableName(): string
    {
        return 'master_kategori';
    }

    protected function tableRoute(): string
    {
        return 'kategori';
    }

    protected function label(): string
    {
        return 'Kategori';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
