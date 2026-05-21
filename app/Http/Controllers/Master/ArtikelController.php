<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class ArtikelController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Artikel::class;
    }

    protected function tableName(): string
    {
        return 'master_artikel';
    }

    protected function tableRoute(): string
    {
        return 'artikel';
    }

    protected function label(): string
    {
        return 'Artikel';
    }

    protected function search(): array
    {
        return ['vTitle', 'vIsi'];
    }

}
