<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class EkspedisiController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Ekspedisi::class;
    }

    public function tableName(): string
    {
        return 'master_ekspedisi';
    }

    public function tableRoute(): string
    {
        return 'ekspedisi';
    }

    public function label(): string
    {
        return 'Ekspedisi';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
