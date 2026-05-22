<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class SubkategoriController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Subkategori::class;
    }

    public function tableName(): string
    {
        return 'master_subkategori';
    }

    public function tableRoute(): string
    {
        return 'subkategori';
    }

    public function label(): string
    {
        return 'Subkategori';
    }

    public function search(): array
    {
        return ['vNama'];
    }

    public function selectOptions(): array
    {
        return [
            'iIdKategori' => ['model' => \App\Models\Kategori::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
