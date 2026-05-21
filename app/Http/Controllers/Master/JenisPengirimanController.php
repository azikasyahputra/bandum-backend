<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class JenisPengirimanController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\JenisPengiriman::class;
    }

    protected function tableName(): string
    {
        return 'master_jenis_pengiriman';
    }

    protected function tableRoute(): string
    {
        return 'jenis-pengiriman';
    }

    protected function label(): string
    {
        return 'Jenis Pengiriman';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdExpedisi' => ['model' => \App\Models\Ekspedisi::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
