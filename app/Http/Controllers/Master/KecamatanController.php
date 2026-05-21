<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KecamatanController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Kecamatan::class;
    }

    protected function tableName(): string
    {
        return 'master_kecamatan';
    }

    protected function tableRoute(): string
    {
        return 'kecamatan';
    }

    protected function label(): string
    {
        return 'Kecamatan';
    }

    protected function search(): array
    {
        return ['vNama'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => \App\Models\Kota::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
