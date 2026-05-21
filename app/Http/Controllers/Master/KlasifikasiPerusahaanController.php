<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KlasifikasiPerusahaanController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\KlasifikasiPerusahaan::class;
    }

    protected function tableName(): string
    {
        return 'master_klasifikasi_perusahaan';
    }

    protected function tableRoute(): string
    {
        return 'klasifikasi-perusahaan';
    }

    protected function label(): string
    {
        return 'Klasifikasi Perusahaan';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

}
