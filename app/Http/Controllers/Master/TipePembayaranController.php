<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class TipePembayaranController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\TipePembayaran::class;
    }

    public function tableName(): string
    {
        return 'master_tipe_pembayaran';
    }

    public function tableRoute(): string
    {
        return 'tipe-pembayaran';
    }

    public function label(): string
    {
        return 'Tipe Pembayaran';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
