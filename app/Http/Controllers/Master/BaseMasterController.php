<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

use App\Contracts\MasterTableConfig;
use App\Http\Controllers\Controller;
use App\Services\MasterDataService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

abstract class BaseMasterController extends Controller implements MasterTableConfig
{
    public function __construct(
        protected MasterDataService $service,
    ) {}

    abstract public function modelClass(): string;
    abstract public function tableName(): string;
    abstract public function tableRoute(): string;
    abstract public function label(): string;

    public function search(): array
    {
        return [];
    }

    public function relatedTables(): array
    {
        return [];
    }

    public function primaryKey(): string
    {
        return 'iId';
    }

    public function useSoftDelete(): bool
    {
        return true;
    }

    public function columns(): array
    {
        $model = $this->model();
        $all = $model->getFillable();

        return array_values(array_filter($all, fn ($c) => !in_array($c, ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'])));
    }

    public function model()
    {
        $class = $this->modelClass();
        return new $class;
    }

    public function columnLabel(string $col): string
    {
        $labels = [
            'vThumbnails' => 'Thumbnails', 'vTitle' => 'Title', 'vIsi' => 'Isi',
            'vNama' => 'Nama', 'eTampil' => 'Tampil', 'eTipe' => 'Tipe', 'eTerkecil' => 'Terkecil', 'eTerbesar' => 'Terbesar',
            'vDetail' => 'Detail', 'vLink' => 'Link', 'vNamaLink' => 'Nama Link',
            'vImage' => 'Image', 'vPicture' => 'Picture', 'vIcon' => 'Icon',
            'vKtp' => 'KTP', 'vFilektp' => 'File KTP', 'vNpwp' => 'NPWP',
            'vFilenpwp' => 'File NPWP', 'vSiup' => 'SIUP', 'vFilesiup' => 'File SIUP',
            'vFileaktapendirian' => 'Akta Pendirian', 'vFiledomisiliperusahaan' => 'Domisili Perusahaan',
            'eVerifikasi' => 'Verifikasi', 'isTrustedBuyer' => 'Trusted Buyer',
            'vEmail' => 'Email', 'vDesc' => 'Deskripsi', 'vIconColor' => 'Warna Icon',
            'vBackground' => 'Background', 'eFeatured' => 'Featured', 'eBestselling' => 'Best Selling',
            'eStatus' => 'Status', 'vAlamat' => 'Alamat', 'vDeskripsi' => 'Deskripsi',
            'vDeskripsisingkat' => 'Deskripsi Singkat', 'vDeskripsidetail' => 'Deskripsi Detail',
            'iIdBrand' => 'Brand', 'iIdKategori' => 'Kategori', 'iIdSubkategori' => 'Subkategori',
            'iIdExpedisi' => 'Ekspedisi', 'iIdProvinsi' => 'Provinsi', 'iIdKota' => 'Kota',
            'iIdKecamatan' => 'Kecamatan', 'iIdKelurahan' => 'Kelurahan', 'iIdVendor' => 'Vendor',
            'iIdCustomer' => 'Customer', 'iIdUser' => 'User', 'iIdTransaksi' => 'Transaksi',
            'iIdAlamatutama' => 'Alamat Utama', 'iIdJenisperusahaan' => 'Jenis Perusahaan',
            'iIdKlasifikasiperusahaan' => 'Klasifikasi Perusahaan', 'vKodepos' => 'Kode Pos',
            'vIbukota' => 'Ibukota', 'vBsni' => 'BSNI', 'vKode' => 'Kode',
            'vJudul' => 'Judul', 'vReview' => 'Review', 'vProfilepic' => 'Foto Profil',
            'vNamadirektur' => 'Nama Direktur', 'dTanggalberdiri' => 'Tanggal Berdiri',
            'eJumlahkaryawan' => 'Jumlah Karyawan', 'vOfficephone' => 'Telepon Kantor',
            'vNamapic' => 'Nama PIC', 'vKontakpic' => 'Kontak PIC', 'vNotelp' => 'No. Telepon',
            'vNohp' => 'No. HP', 'vGPS' => 'GPS', 'eUtama' => 'Utama',
            'vNamaCustomer' => 'Nama Customer', 'eLunas' => 'Lunas',
            'nHarga' => 'Harga', 'nHargastrike' => 'Harga Strike', 'nIsi' => 'Isi',
            'vNoOrder' => 'No. Order', 'iIdAlamat' => 'Alamat', 'vAlamat' => 'Alamat',
            'vPembayaran' => 'Pembayaran', 'iIdPengiriman' => 'Pengiriman',
            'vPengiriman' => 'Pengiriman', 'vJenisPengiriman' => 'Jenis Pengiriman',
            'vCatatan' => 'Catatan', 'nTotal' => 'Total', 'nTotalDiskon' => 'Total Diskon',
            'nPpn' => 'PPN', 'nBiayaKirim' => 'Biaya Kirim', 'nBiayaPacking' => 'Biaya Packing',
            'nGrandTotal' => 'Grand Total', 'vSuratJalan' => 'Surat Jalan',
            'vFakturPajak' => 'Faktur Pajak', 'nDisc' => 'Diskon',
            'iQty' => 'Qty', 'iQtyKecil' => 'Qty Kecil', 'iQtyOr' => 'Qty OR',
            'iQtyPo' => 'Qty PO', 'iQtyPl' => 'Qty PL', 'iQtyKirim' => 'Qty Kirim',
            'iQtyRetur' => 'Qty Retur', 'iIdBarangKemasan' => 'Kemasan',
            'iIsiKemasanKecil' => 'Isi Kemasan Kecil',
        ];

        return $labels[$col] ?? ucwords(str_replace(['_', 'v', 'i', 'e', 'd'], ' ', preg_replace('/^[viepd]/', '', $col)));
    }

    public function fieldType(string $col): string
    {
        if (in_array($col, ['eTampil', 'eFeatured', 'eBestselling', 'eVerifikasi', 'isTrustedBuyer', 'eUtama', 'eLunas', 'eStatus', 'eTerkecil', 'eTerbesar'])) {
            return 'enum';
        }
        if (str_starts_with($col, 'd') && $col !== 'd') return 'date';
        if (str_starts_with($col, 'iId')) return 'select';
        if (in_array($col, ['vIsi', 'vDeskripsidetail', 'vReview', 'vDeskripsi', 'vAlamat', 'vDetail'])) return 'textarea';
        if (in_array($col, ['vImage', 'vPicture', 'vProfilepic', 'vKtp', 'vFilektp', 'vFilenpwp', 'vFilesiup', 'vFileaktapendirian', 'vFiledomisiliperusahaan', 'vIcon', 'vThumbnails'])) return 'file';
        if (in_array($col, ['vEmail'])) return 'email';
        if (in_array($col, ['vKodepos', 'vOfficephone', 'vNotelp', 'vNohp'])) return 'tel';
        return 'text';
    }

    public function selectOptions(): array
    {
        return [];
    }

    public function fileColumns(): array
    {
        $model = $this->model();
        $all = $model->getFillable();
        return array_values(array_filter($all, fn ($c) => $this->fieldType($c) === 'file'));
    }

    public function uploadFile(Request $request, string $column): ?string
    {
        if (!$request->hasFile($column)) {
            return null;
        }

        $file = $request->file($column);
        $path = $file->store("uploads/{$this->tableRoute()}/{$column}", 'public');

        return $path;
    }

    public function selectData(): array
    {
        $fields = $this->columns();
        $selects = [];

        foreach ($fields as $col) {
            $config = $this->selectOptions()[$col] ?? null;
            if ($config) {
                $class = $config['model'];
                $selects[$col] = $class::where(function ($q) {
                    $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
                })->get([$config['value'] . ' as value', $config['label'] . ' as label']);
            }

            $enum = $this->enumOptions($col);
            if (!empty($enum)) {
                $selects[$col] = $enum;
            }
        }

        return $selects;
    }

    public function enumOptions(string $col): array
    {
        $enums = [
            'eTampil' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eFeatured' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eBestselling' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eVerifikasi' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'isTrustedBuyer' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eUtama' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eLunas' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eStatus' => [['value' => 'baru', 'label' => 'Baru'], ['value' => 'proses', 'label' => 'Proses'], ['value' => 'dikirim', 'label' => 'Dikirim'], ['value' => 'selesai', 'label' => 'Selesai'], ['value' => 'batal', 'label' => 'Batal']],
            'eTerkecil' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
            'eTerbesar' => [['value' => 'ya', 'label' => 'Ya'], ['value' => 'tidak', 'label' => 'Tidak']],
        ];

        return $enums[$col] ?? [];
    }

    public function index(Request $request): Response
    {
        return $this->service->index($this, $request);
    }

    public function show(int $id): Response
    {
        return $this->service->show($this, $id);
    }

    public function create(): Response
    {
        return $this->service->create($this);
    }

    public function store(Request $request): RedirectResponse
    {
        return $this->service->store($this, $request);
    }

    public function edit(int $id): Response
    {
        return $this->service->edit($this, $id);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        return $this->service->update($this, $request, $id);
    }

    public function destroy(int $id): RedirectResponse
    {
        return $this->service->destroy($this, $id);
    }
}
