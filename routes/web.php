<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Master\ArtikelController;
use App\Http\Controllers\Master\BannerController;
use App\Http\Controllers\Master\BarangController;
use App\Http\Controllers\Master\BarangKemasanController;
use App\Http\Controllers\Master\BarangMediaController;
use App\Http\Controllers\Master\BrandController;
use App\Http\Controllers\Master\CustomerController;
use App\Http\Controllers\Master\CustomerAlamatController;
use App\Http\Controllers\Master\EkspedisiController;
use App\Http\Controllers\Master\FaqController;
use App\Http\Controllers\Master\FeaturesController;
use App\Http\Controllers\Master\GudangController;
use App\Http\Controllers\Master\JenisPengirimanController;
use App\Http\Controllers\Master\KategoriController;
use App\Http\Controllers\Master\KategoriPerusahaanController;
use App\Http\Controllers\Master\KecamatanController;
use App\Http\Controllers\Master\KelurahanController;
use App\Http\Controllers\Master\KlasifikasiPerusahaanController;
use App\Http\Controllers\Master\KotaController;
use App\Http\Controllers\Master\NegaraController;
use App\Http\Controllers\Master\PembayaranController;
use App\Http\Controllers\Master\ProvinsiController;
use App\Http\Controllers\Master\RolesController;
use App\Http\Controllers\Master\SettingsController;
use App\Http\Controllers\Master\SubkategoriController;
use App\Http\Controllers\Master\TestimoniController;
use App\Http\Controllers\Master\TipePembayaranController;
use App\Http\Controllers\Master\UserController;
use App\Http\Controllers\Master\VendorController;
use App\Http\Controllers\Master\VendorAlamatController;
use App\Http\Controllers\Transaksi\TransaksiInvoiceController;
use App\Http\Controllers\Transaksi\TransaksiOrderController;
use App\Http\Controllers\Transaksi\TransaksiPackingController;
use Illuminate\Support\Facades\Route;

Route::get('/storage/{path}', function (string $path) {
    $fullPath = storage_path('app/public/' . $path);
    if (!file_exists($fullPath)) {
        abort(404);
    }
    return response()->file($fullPath);
})->where('path', '.*')->name('storage.serve');

Route::redirect('/', '/dashboard');

Route::middleware('guest')->group(function () {
    Route::get('/signin', [LoginController::class, 'create']);
    Route::post('/login', [LoginController::class, 'store'])->name('login');
    Route::get('/signup', fn () => inertia('SignUp', ['title' => 'Sign Up']))->name('signup');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/settings', fn () => inertia('Settings', ['title' => 'Settings']))->name('settings');
    Route::get('/blank-page', fn () => inertia('BlankPage', ['title' => 'Blank Page']))->name('blank-page');
    Route::get('/invoice', fn () => inertia('Invoice', ['title' => 'Invoice']))->name('invoice');
    Route::get('/notifications', fn () => inertia('Notifications', ['title' => 'Notifications']))->name('notifications');
    Route::get('/tables', fn () => inertia('Tables', ['title' => 'Tables']))->name('tables');
    Route::get('/form-elements', fn () => inertia('FormElements', ['title' => 'Form Elements']))->name('form-elements');
    Route::get('/buttons', fn () => inertia('Buttons', ['title' => 'Buttons']))->name('buttons');
    Route::get('/alerts', fn () => inertia('Alerts', ['title' => 'Alerts']))->name('alerts');
    Route::get('/cards', fn () => inertia('Cards', ['title' => 'Cards']))->name('cards');
    Route::get('/typography', fn () => inertia('Typography', ['title' => 'Typography']))->name('typography');
    Route::get('/icons', fn () => inertia('Icons', ['title' => 'Icons']))->name('icons');
    Route::get('/mdi-icons', fn () => inertia('MdiIcons', ['title' => 'MDI Icons']))->name('mdi-icons');

    Route::prefix('master')->name('master.')->group(function () {
        $routes = [
            'artikel' => ArtikelController::class,
            'banner' => BannerController::class,
            'barang' => BarangController::class,
            'barang-kemasan' => BarangKemasanController::class,
            'barang-media' => BarangMediaController::class,
            'brand' => BrandController::class,
            'customer' => CustomerController::class,
            'customer-alamat' => CustomerAlamatController::class,
            'ekspedisi' => EkspedisiController::class,
            'faq' => FaqController::class,
            'features' => FeaturesController::class,
            'gudang' => GudangController::class,
            'jenis-pengiriman' => JenisPengirimanController::class,
            'kategori' => KategoriController::class,
            'kategori-perusahaan' => KategoriPerusahaanController::class,
            'kecamatan' => KecamatanController::class,
            'kelurahan' => KelurahanController::class,
            'klasifikasi-perusahaan' => KlasifikasiPerusahaanController::class,
            'kota' => KotaController::class,
            'negara' => NegaraController::class,
            'pembayaran' => PembayaranController::class,
            'provinsi' => ProvinsiController::class,
            'roles' => RolesController::class,
            'settings' => SettingsController::class,
            'subkategori' => SubkategoriController::class,
            'testimoni' => TestimoniController::class,
            'tipe-pembayaran' => TipePembayaranController::class,
            'users' => UserController::class,
            'vendor' => VendorController::class,
            'vendor-alamat' => VendorAlamatController::class,
        ];

        foreach ($routes as $t => $c) {
            Route::get("/{$t}", [$c, 'index'])->name("{$t}.index");
            Route::get("/{$t}/create", [$c, 'create'])->name("{$t}.create");
            Route::post("/{$t}", [$c, 'store'])->name("{$t}.store");
            Route::get("/{$t}/{id}", [$c, 'show'])->name("{$t}.show");
            Route::get("/{$t}/{id}/edit", [$c, 'edit'])->name("{$t}.edit");
            Route::put("/{$t}/{id}", [$c, 'update'])->name("{$t}.update");
            Route::delete("/{$t}/{id}", [$c, 'destroy'])->name("{$t}.destroy");
        }
    });

    Route::prefix('transaksi')->name('transaksi.')->group(function () {
        Route::get('/order', [TransaksiOrderController::class, 'index'])->name('order.index');
        Route::get('/order/create', [TransaksiOrderController::class, 'create'])->name('order.create');
        Route::post('/order', [TransaksiOrderController::class, 'store'])->name('order.store');
        Route::get('/order/{id}/edit', [TransaksiOrderController::class, 'edit'])->name('order.edit');
        Route::put('/order/{id}', [TransaksiOrderController::class, 'update'])->name('order.update');
        Route::delete('/order/{id}', [TransaksiOrderController::class, 'destroy'])->name('order.destroy');
        Route::post('/order/{id}/checkout', [TransaksiOrderController::class, 'checkout'])->name('order.checkout');
        Route::get('/order/customer-alamat/{customerId}', [TransaksiOrderController::class, 'customerAlamat'])->name('order.customer-alamat');

        Route::get('/packing', [TransaksiPackingController::class, 'index'])->name('packing.index');
        Route::get('/packing/{id}/edit', [TransaksiPackingController::class, 'edit'])->name('packing.edit');
        Route::put('/packing/{id}', [TransaksiPackingController::class, 'update'])->name('packing.update');
        Route::delete('/packing/{id}', [TransaksiPackingController::class, 'destroy'])->name('packing.destroy');

        Route::get('/invoice', [TransaksiInvoiceController::class, 'index'])->name('invoice.index');
        Route::get('/invoice/{id}/edit', [TransaksiInvoiceController::class, 'edit'])->name('invoice.edit');
        Route::put('/invoice/{id}', [TransaksiInvoiceController::class, 'update'])->name('invoice.update');
    });
});
