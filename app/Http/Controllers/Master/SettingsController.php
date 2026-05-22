<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class SettingsController extends BaseMasterController
{
    public function modelClass(): string
    {
        return \App\Models\Settings::class;
    }

    public function tableName(): string
    {
        return 'master_settings';
    }

    public function tableRoute(): string
    {
        return 'settings';
    }

    public function label(): string
    {
        return 'Settings';
    }

    public function search(): array
    {
        return ['vIsi'];
    }

}
