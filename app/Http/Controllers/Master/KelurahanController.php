<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KelurahanController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Kelurahan::class;
    }

    protected function tableName(): string
    {
        return 'master_kelurahan';
    }

    protected function tableRoute(): string
    {
        return 'kelurahan';
    }

    protected function label(): string
    {
        return 'Kelurahan';
    }

    protected function search(): array
    {
        return ['vNama', 'vKodepos'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => \App\Models\Kota::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKecamatan' => ['model' => \App\Models\Kecamatan::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
