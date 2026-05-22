<?php

namespace App\Providers;

use App\Repositories\Contracts\MasterRepositoryContract;
use App\Repositories\MasterRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(MasterRepositoryContract::class, MasterRepository::class);
    }

    public function boot(): void
    {
        //
    }
}
