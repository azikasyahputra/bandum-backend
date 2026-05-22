<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KlasifikasiPerusahaanController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\KlasifikasiPerusahaan::class;
    }

    public function tableName(): string
    {
        return 'master_klasifikasi_perusahaan';
    }

    public function tableRoute(): string
    {
        return 'klasifikasi-perusahaan';
    }

    public function label(): string
    {
        return 'Klasifikasi Perusahaan';
    }

    public function search(): array
    {
        return ['vNama'];
    }

}
