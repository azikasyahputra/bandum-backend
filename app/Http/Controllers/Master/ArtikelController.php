<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class ArtikelController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Artikel::class;
    }

    public function tableName(): string
    {
        return 'master_artikel';
    }

    public function tableRoute(): string
    {
        return 'artikel';
    }

    public function label(): string
    {
        return 'Artikel';
    }

    public function search(): array
    {
        return ['vTitle', 'vIsi'];
    }

}
