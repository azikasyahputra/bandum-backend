<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class TestimoniController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Testimoni::class;
    }

    protected function tableName(): string
    {
        return 'master_testimoni';
    }

    protected function tableRoute(): string
    {
        return 'testimoni';
    }

    protected function label(): string
    {
        return 'Testimoni';
    }

    protected function search(): array
    {
        return ['vJudul', 'vReview'];
    }

}
