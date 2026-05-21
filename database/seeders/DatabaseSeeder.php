<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Artikel;
use App\Models\Banner;
use App\Models\Barang;
use App\Models\BarangHistory;
use App\Models\BarangKemasan;
use App\Models\BarangKemasanHistory;
use App\Models\BarangMedia;
use App\Models\Brand;
use App\Models\Customer;
use App\Models\CustomerAlamat;
use App\Models\Ekspedisi;
use App\Models\Faq;
use App\Models\Features;
use App\Models\Gudang;
use App\Models\JenisPengiriman;
use App\Models\Kategori;
use App\Models\KategoriPerusahaan;
use App\Models\Kecamatan;
use App\Models\Kelurahan;
use App\Models\KlasifikasiPerusahaan;
use App\Models\Kota;
use App\Models\Negara;
use App\Models\Pembayaran;
use App\Models\Provinsi;
use App\Models\Roles;
use App\Models\Settings;
use App\Models\Subkategori;
use App\Models\Testimoni;
use App\Models\TipePembayaran;
use App\Models\Vendor;
use App\Models\VendorAlamat;
use App\Models\Stock;
use App\Models\StockDetail;
use App\Models\TransaksiAp;
use App\Models\TransaksiAr;
use App\Models\TransaksiHistory;
use App\Models\TransaksiInvoiceDetail;
use App\Models\TransaksiInvoiceHeader;
use App\Models\TransaksiInvoiceReturnDetail;
use App\Models\TransaksiInvoiceReturnHeader;
use App\Models\TransaksiKeranjang;
use App\Models\TransaksiOrderDetail;
use App\Models\TransaksiOrderHeader;
use App\Models\TransaksiOrderRequestDetail;
use App\Models\TransaksiOrderRequestHeader;
use App\Models\TransaksiPackingBatch;
use App\Models\TransaksiPackingDetail;
use App\Models\TransaksiPackingHeader;
use App\Models\TransaksiPbDetail;
use App\Models\TransaksiPbHeader;
use App\Models\TransaksiPbrDetail;
use App\Models\TransaksiPbrHeader;
use App\Models\TransaksiPoDetail;
use App\Models\TransaksiPoHeader;
use App\Models\Wishlist;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role' => 'administrator',
        ]);

        // Artikel::factory()->count(10)->create();
        // Banner::factory()->count(10)->create();
        // Barang::factory()->count(10)->create();
        // BarangHistory::factory()->count(10)->create();
        // BarangKemasan::factory()->count(10)->create();
        // BarangKemasanHistory::factory()->count(10)->create();
        // BarangMedia::factory()->count(10)->create();
        // Brand::factory()->count(10)->create();
        // Customer::factory()->count(10)->create();
        // CustomerAlamat::factory()->count(10)->create();
        // Ekspedisi::factory()->count(10)->create();
        // Faq::factory()->count(10)->create();
        // Features::factory()->count(10)->create();
        // Gudang::factory()->count(10)->create();
        // JenisPengiriman::factory()->count(10)->create();
        // Kategori::factory()->count(10)->create();
        // KategoriPerusahaan::factory()->count(10)->create();
        // Kecamatan::factory()->count(10)->create();
        // Kelurahan::factory()->count(10)->create();
        // KlasifikasiPerusahaan::factory()->count(10)->create();
        // Kota::factory()->count(10)->create();
        // Negara::factory()->count(10)->create();
        // Pembayaran::factory()->count(10)->create();
        // Provinsi::factory()->count(10)->create();
        // Roles::factory()->count(10)->create();
        // Settings::factory()->count(10)->create();
        // Subkategori::factory()->count(10)->create();
        // Testimoni::factory()->count(10)->create();
        // TipePembayaran::factory()->count(10)->create();
        // Vendor::factory()->count(10)->create();
        // VendorAlamat::factory()->count(10)->create();
        // Stock::factory()->count(10)->create();
        // StockDetail::factory()->count(10)->create();
        // TransaksiAp::factory()->count(10)->create();
        // TransaksiAr::factory()->count(10)->create();
        // TransaksiHistory::factory()->count(10)->create();
        // TransaksiInvoiceDetail::factory()->count(10)->create();
        // TransaksiInvoiceHeader::factory()->count(10)->create();
        // TransaksiInvoiceReturnDetail::factory()->count(10)->create();
        // TransaksiInvoiceReturnHeader::factory()->count(10)->create();
        // TransaksiKeranjang::factory()->count(10)->create();
        // TransaksiOrderDetail::factory()->count(10)->create();
        // TransaksiOrderHeader::factory()->count(10)->create();
        // TransaksiOrderRequestDetail::factory()->count(10)->create();
        // TransaksiOrderRequestHeader::factory()->count(10)->create();
        // TransaksiPackingBatch::factory()->count(10)->create();
        // TransaksiPackingDetail::factory()->count(10)->create();
        // TransaksiPackingHeader::factory()->count(10)->create();
        // TransaksiPbDetail::factory()->count(10)->create();
        // TransaksiPbHeader::factory()->count(10)->create();
        // TransaksiPbrDetail::factory()->count(10)->create();
        // TransaksiPbrHeader::factory()->count(10)->create();
        // TransaksiPoDetail::factory()->count(10)->create();
        // TransaksiPoHeader::factory()->count(10)->create();
        // Wishlist::factory()->count(10)->create();

    }
}
