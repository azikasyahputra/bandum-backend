<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class PembayaranController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Pembayaran::class;
    }

    protected function tableName(): string
    {
        return 'master_pembayaran';
    }

    protected function tableRoute(): string
    {
        return 'pembayaran';
    }

    protected function label(): string
    {
        return 'Pembayaran';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
