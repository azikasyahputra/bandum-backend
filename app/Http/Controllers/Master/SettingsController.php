<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

class SettingsController extends BaseMasterController
{
    protected function modelClass(): string
    {
        return \App\Models\Settings::class;
    }

    protected function tableName(): string
    {
        return 'master_settings';
    }

    protected function tableRoute(): string
    {
        return 'settings';
    }

    protected function label(): string
    {
        return 'Settings';
    }

    protected function search(): array
    {
        return ['vIsi'];
    }

}
