<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class PembayaranController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Pembayaran::class;
    }

    public function tableName(): string
    {
        return 'master_pembayaran';
    }

    public function tableRoute(): string
    {
        return 'pembayaran';
    }

    public function label(): string
    {
        return 'Pembayaran';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
