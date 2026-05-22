<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KotaController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Kota::class;
    }

    public function tableName(): string
    {
        return 'master_kota';
    }

    public function tableRoute(): string
    {
        return 'kota';
    }

    public function label(): string
    {
        return 'Kota';
    }

    public function search(): array
    {
        return ['vNama', 'vIbukota'];
    }

    public function selectOptions(): array
    {
        return [
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
