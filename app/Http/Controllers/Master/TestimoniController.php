<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class TestimoniController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Testimoni::class;
    }

    public function tableName(): string
    {
        return 'master_testimoni';
    }

    public function tableRoute(): string
    {
        return 'testimoni';
    }

    public function label(): string
    {
        return 'Testimoni';
    }

    public function search(): array
    {
        return ['vJudul', 'vReview'];
    }

}
