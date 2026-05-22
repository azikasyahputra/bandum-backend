<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KelurahanController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Kelurahan::class;
    }

    public function tableName(): string
    {
        return 'master_kelurahan';
    }

    public function tableRoute(): string
    {
        return 'kelurahan';
    }

    public function label(): string
    {
        return 'Kelurahan';
    }

    public function search(): array
    {
        return ['vNama', 'vKodepos'];
    }

    public function selectOptions(): array
    {
        return [
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => \App\Models\Kota::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKecamatan' => ['model' => \App\Models\Kecamatan::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
