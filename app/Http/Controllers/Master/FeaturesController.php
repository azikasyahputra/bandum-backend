<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class FeaturesController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Features::class;
    }

    protected function tableName(): string
    {
        return 'master_features';
    }

    protected function tableRoute(): string
    {
        return 'features';
    }

    protected function label(): string
    {
        return 'Features';
    }

    protected function search(): array
    {
        return ['vTitle', 'vDesc'];
    }

}
