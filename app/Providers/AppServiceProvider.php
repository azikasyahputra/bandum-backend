<?php

namespace App\Providers;

use App\Repositories\ArtikelRepository;
use App\Repositories\BannerRepository;
use App\Repositories\BarangRepository;
use App\Repositories\BarangKemasanRepository;
use App\Repositories\BarangMediaRepository;
use App\Repositories\BrandRepository;
use App\Repositories\Contracts\ArtikelRepositoryContract;
use App\Repositories\Contracts\BannerRepositoryContract;
use App\Repositories\Contracts\BarangRepositoryContract;
use App\Repositories\Contracts\BarangKemasanRepositoryContract;
use App\Repositories\Contracts\BarangMediaRepositoryContract;
use App\Repositories\Contracts\BrandRepositoryContract;
use App\Repositories\Contracts\CustomerAlamatRepositoryContract;
use App\Repositories\Contracts\CustomerRepositoryContract;
use App\Repositories\Contracts\EkspedisiRepositoryContract;
use App\Repositories\Contracts\FaqRepositoryContract;
use App\Repositories\Contracts\FeaturesRepositoryContract;
use App\Repositories\Contracts\GudangRepositoryContract;
use App\Repositories\Contracts\JenisPengirimanRepositoryContract;
use App\Repositories\Contracts\KategoriPerusahaanRepositoryContract;
use App\Repositories\Contracts\KategoriRepositoryContract;
use App\Repositories\Contracts\KecamatanRepositoryContract;
use App\Repositories\Contracts\KelurahanRepositoryContract;
use App\Repositories\Contracts\KlasifikasiPerusahaanRepositoryContract;
use App\Repositories\Contracts\KotaRepositoryContract;
use App\Repositories\Contracts\NegaraRepositoryContract;
use App\Repositories\Contracts\PembayaranRepositoryContract;
use App\Repositories\Contracts\ProvinsiRepositoryContract;
use App\Repositories\Contracts\RolesRepositoryContract;
use App\Repositories\Contracts\SettingsRepositoryContract;
use App\Repositories\Contracts\SubkategoriRepositoryContract;
use App\Repositories\Contracts\TestimoniRepositoryContract;
use App\Repositories\Contracts\TipePembayaranRepositoryContract;
use App\Repositories\Contracts\UserRepositoryContract;
use App\Repositories\Contracts\VendorAlamatRepositoryContract;
use App\Repositories\Contracts\VendorRepositoryContract;
use App\Repositories\CustomerAlamatRepository;
use App\Repositories\CustomerRepository;
use App\Repositories\EkspedisiRepository;
use App\Repositories\FaqRepository;
use App\Repositories\FeaturesRepository;
use App\Repositories\GudangRepository;
use App\Repositories\JenisPengirimanRepository;
use App\Repositories\KategoriPerusahaanRepository;
use App\Repositories\KategoriRepository;
use App\Repositories\KecamatanRepository;
use App\Repositories\KelurahanRepository;
use App\Repositories\KlasifikasiPerusahaanRepository;
use App\Repositories\KotaRepository;
use App\Repositories\NegaraRepository;
use App\Repositories\PembayaranRepository;
use App\Repositories\ProvinsiRepository;
use App\Repositories\RolesRepository;
use App\Repositories\SettingsRepository;
use App\Repositories\SubkategoriRepository;
use App\Repositories\TestimoniRepository;
use App\Repositories\TipePembayaranRepository;
use App\Repositories\UserRepository;
use App\Repositories\VendorAlamatRepository;
use App\Repositories\VendorRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(ArtikelRepositoryContract::class, ArtikelRepository::class);
        $this->app->bind(BannerRepositoryContract::class, BannerRepository::class);
        $this->app->bind(BarangRepositoryContract::class, BarangRepository::class);
        $this->app->bind(BarangKemasanRepositoryContract::class, BarangKemasanRepository::class);
        $this->app->bind(BarangMediaRepositoryContract::class, BarangMediaRepository::class);
        $this->app->bind(BrandRepositoryContract::class, BrandRepository::class);
        $this->app->bind(CustomerRepositoryContract::class, CustomerRepository::class);
        $this->app->bind(CustomerAlamatRepositoryContract::class, CustomerAlamatRepository::class);
        $this->app->bind(EkspedisiRepositoryContract::class, EkspedisiRepository::class);
        $this->app->bind(FaqRepositoryContract::class, FaqRepository::class);
        $this->app->bind(FeaturesRepositoryContract::class, FeaturesRepository::class);
        $this->app->bind(GudangRepositoryContract::class, GudangRepository::class);
        $this->app->bind(JenisPengirimanRepositoryContract::class, JenisPengirimanRepository::class);
        $this->app->bind(KategoriRepositoryContract::class, KategoriRepository::class);
        $this->app->bind(KategoriPerusahaanRepositoryContract::class, KategoriPerusahaanRepository::class);
        $this->app->bind(KecamatanRepositoryContract::class, KecamatanRepository::class);
        $this->app->bind(KelurahanRepositoryContract::class, KelurahanRepository::class);
        $this->app->bind(KlasifikasiPerusahaanRepositoryContract::class, KlasifikasiPerusahaanRepository::class);
        $this->app->bind(KotaRepositoryContract::class, KotaRepository::class);
        $this->app->bind(NegaraRepositoryContract::class, NegaraRepository::class);
        $this->app->bind(PembayaranRepositoryContract::class, PembayaranRepository::class);
        $this->app->bind(ProvinsiRepositoryContract::class, ProvinsiRepository::class);
        $this->app->bind(RolesRepositoryContract::class, RolesRepository::class);
        $this->app->bind(SettingsRepositoryContract::class, SettingsRepository::class);
        $this->app->bind(SubkategoriRepositoryContract::class, SubkategoriRepository::class);
        $this->app->bind(TestimoniRepositoryContract::class, TestimoniRepository::class);
        $this->app->bind(TipePembayaranRepositoryContract::class, TipePembayaranRepository::class);
        $this->app->bind(UserRepositoryContract::class, UserRepository::class);
        $this->app->bind(VendorRepositoryContract::class, VendorRepository::class);
        $this->app->bind(VendorAlamatRepositoryContract::class, VendorAlamatRepository::class);
    }

    public function boot(): void
    {
        //
    }
}
