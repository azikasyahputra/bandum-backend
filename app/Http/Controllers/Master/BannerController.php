<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class BannerController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Banner::class;
    }

    protected function tableName(): string
    {
        return 'master_banner';
    }

    protected function tableRoute(): string
    {
        return 'banner';
    }

    protected function label(): string
    {
        return 'Banner';
    }

    protected function search(): array
    {
        return ['vTitle', 'vDetail'];
    }

}
