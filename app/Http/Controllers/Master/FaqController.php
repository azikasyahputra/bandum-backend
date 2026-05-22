<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class FaqController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Faq::class;
    }

    public function tableName(): string
    {
        return 'master_faq';
    }

    public function tableRoute(): string
    {
        return 'faq';
    }

    public function label(): string
    {
        return 'FAQ';
    }

    public function search(): array
    {
        return ['vTitle', 'vIsi'];
    }

}
