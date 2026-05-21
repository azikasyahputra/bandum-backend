<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class TipePembayaranController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\TipePembayaran::class;
    }

    protected function tableName(): string
    {
        return 'master_tipe_pembayaran';
    }

    protected function tableRoute(): string
    {
        return 'tipe-pembayaran';
    }

    protected function label(): string
    {
        return 'Tipe Pembayaran';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
