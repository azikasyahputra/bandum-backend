<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class FaqController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Faq::class;
    }

    protected function tableName(): string
    {
        return 'master_faq';
    }

    protected function tableRoute(): string
    {
        return 'faq';
    }

    protected function label(): string
    {
        return 'FAQ';
    }

    protected function search(): array
    {
        return ['vTitle', 'vIsi'];
    }

}
