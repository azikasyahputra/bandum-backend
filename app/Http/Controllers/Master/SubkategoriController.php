<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class SubkategoriController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Subkategori::class;
    }

    protected function tableName(): string
    {
        return 'master_subkategori';
    }

    protected function tableRoute(): string
    {
        return 'subkategori';
    }

    protected function label(): string
    {
        return 'Subkategori';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdKategori' => ['model' => \App\Models\Kategori::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
