<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BannerController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Banner::class;
    }

    public function tableName(): string
    {
        return 'master_banner';
    }

    public function tableRoute(): string
    {
        return 'banner';
    }

    public function label(): string
    {
        return 'Banner';
    }

    public function search(): array
    {
        return ['vTitle', 'vDetail'];
    }

}
