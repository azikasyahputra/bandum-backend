<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class KotaController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Kota::class;
    }

    protected function tableName(): string
    {
        return 'master_kota';
    }

    protected function tableRoute(): string
    {
        return 'kota';
    }

    protected function label(): string
    {
        return 'Kota';
    }

    protected function search(): array
    {
        return ['vNama', 'vIbukota'];
    }

    protected function selectOptions(): array
    {
        return [
            'iIdProvinsi' => ['model' => \App\Models\Provinsi::class, 'value' => 'iId', 'label' => 'vNama'],
        ];
    }

}
