<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class JenisPengirimanController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\JenisPengiriman::class;
    }

    public function tableName(): string
    {
        return 'master_jenis_pengiriman';
    }

    public function tableRoute(): string
    {
        return 'jenis-pengiriman';
    }

    public function label(): string
    {
        return 'Jenis Pengiriman';
    }

    public function search(): array
    {
        return ['vNama'];
    }

    public function selectOptions(): array
    {
        return [
            'iIdExpedisi' => ['model' => \App\Models\Ekspedisi::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
