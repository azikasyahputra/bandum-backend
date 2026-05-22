<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KecamatanController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Kecamatan::class;
    }

    public function tableName(): string
    {
        return 'master_kecamatan';
    }

    public function tableRoute(): string
    {
        return 'kecamatan';
    }

    public function label(): string
    {
        return 'Kecamatan';
    }

    public function search(): array
    {
        return ['vNama'];
    }

    public function selectOptions(): array
    {
        return [
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => \App\Models\Kota::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
