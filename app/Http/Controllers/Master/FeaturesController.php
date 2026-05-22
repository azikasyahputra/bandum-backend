<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class FeaturesController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Features::class;
    }

    public function tableName(): string
    {
        return 'master_features';
    }

    public function tableRoute(): string
    {
        return 'features';
    }

    public function label(): string
    {
        return 'Features';
    }

    public function search(): array
    {
        return ['vTitle', 'vDesc'];
    }

}
