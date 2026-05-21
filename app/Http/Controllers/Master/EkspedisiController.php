<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class EkspedisiController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Ekspedisi::class;
    }

    protected function tableName(): string
    {
        return 'master_ekspedisi';
    }

    protected function tableRoute(): string
    {
        return 'ekspedisi';
    }

    protected function label(): string
    {
        return 'Ekspedisi';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
