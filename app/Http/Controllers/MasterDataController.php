<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class MasterDataController extends Controller
{
    private function table(Request $request): string
    {
        $name = $request->route()->getName();
        $parts = explode('.', $name);

        return $parts[1] ?? 'artikel';
    }

    private function model(string $table): string
    {
        return "App\\Models\\{$table}";
    }

    private function label(string $table): string
    {
        $labels = [
            'artikel' => 'Artikel',
            'banner' => 'Banner',
            'barang' => 'Barang',
            'brand' => 'Brand',
            'customer' => 'Customer',
            'ekspedisi' => 'Ekspedisi',
            'faq' => 'FAQ',
            'features' => 'Features',
            'gudang' => 'Gudang',
            'jenis-pengiriman' => 'Jenis Pengiriman',
            'kategori' => 'Kategori',
            'kategori-perusahaan' => 'Kategori Perusahaan',
            'kecamatan' => 'Kecamatan',
            'kelurahan' => 'Kelurahan',
            'klasifikasi-perusahaan' => 'Klasifikasi Perusahaan',
            'kota' => 'Kota',
            'negara' => 'Negara',
            'pembayaran' => 'Pembayaran',
            'provinsi' => 'Provinsi',
            'roles' => 'Roles',
            'settings' => 'Settings',
            'subkategori' => 'Subkategori',
            'testimoni' => 'Testimoni',
            'tipe-pembayaran' => 'Tipe Pembayaran',
            'vendor' => 'Vendor',
        ];

        return $labels[$table] ?? ucwords(str_replace('-', ' ', $table));
    }

    private function modelClass(string $table): string
    {
        $map = [
            'artikel' => 'Artikel',
            'banner' => 'Banner',
            'barang' => 'Barang',
            'brand' => 'Brand',
            'customer' => 'Customer',
            'ekspedisi' => 'Ekspedisi',
            'faq' => 'Faq',
            'features' => 'Features',
            'gudang' => 'Gudang',
            'jenis-pengiriman' => 'JenisPengiriman',
            'kategori' => 'Kategori',
            'kategori-perusahaan' => 'KategoriPerusahaan',
            'kecamatan' => 'Kecamatan',
            'kelurahan' => 'Kelurahan',
            'klasifikasi-perusahaan' => 'KlasifikasiPerusahaan',
            'kota' => 'Kota',
            'negara' => 'Negara',
            'pembayaran' => 'Pembayaran',
            'provinsi' => 'Provinsi',
            'roles' => 'Roles',
            'settings' => 'Settings',
            'subkategori' => 'Subkategori',
            'testimoni' => 'Testimoni',
            'tipe-pembayaran' => 'TipePembayaran',
            'vendor' => 'Vendor',
        ];

        return $map[$table] ?? str_replace(' ', '', ucwords(str_replace('-', ' ', $table)));
    }

    private function columns(string $table): array
    {
        $modelClass = $this->model($this->modelClass($table));
        $model = new $modelClass;
        $all = $model->getFillable();

        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];

        $columns = array_values(array_filter($all, fn ($c) => !in_array($c, $skip)));

        $overrides = [
            'artikel' => ['vThumbnails', 'vTitle', 'vIsi', 'eTampil'],
            'banner' => ['eTipe', 'vTitle', 'vDetail', 'vImage', 'eTampil'],
            'barang' => ['vNama', 'iIdBrand', 'iIdKategori'],
            'brand' => ['vNama', 'vPicture'],
            'customer' => ['vNama', 'vEmail', 'eTipe', 'eVerifikasi'],
            'ekspedisi' => ['vNama'],
            'faq' => ['vTitle', 'vIsi', 'eTampil'],
            'features' => ['vTitle', 'vDesc', 'eTampil'],
            'gudang' => ['vNama', 'eStatus'],
            'jenis-pengiriman' => ['iIdExpedisi', 'vNama'],
            'kategori' => ['vNama', 'vIcon', 'eFeatured'],
            'kategori-perusahaan' => ['vNama'],
            'kecamatan' => ['iIdProvinsi', 'iIdKota', 'vNama'],
            'kelurahan' => ['iIdProvinsi', 'iIdKota', 'iIdKecamatan', 'vNama', 'vKodepos'],
            'klasifikasi-perusahaan' => ['vNama'],
            'kota' => ['iIdProvinsi', 'vNama', 'vIbukota'],
            'negara' => ['vNama', 'vKode'],
            'pembayaran' => ['vNama'],
            'provinsi' => ['vNama', 'vIbukota'],
            'roles' => ['vNama'],
            'settings' => ['vIsi', 'eTampil', 'eTipe'],
            'subkategori' => ['iIdKategori', 'vNama'],
            'testimoni' => ['vJudul', 'vReview', 'eTampil'],
            'tipe-pembayaran' => ['vNama'],
            'vendor' => ['vNama', 'eTipe', 'eVerifikasi'],
        ];

        return $overrides[$table] ?? $columns;
    }

    private function columnLabel(string $col): string
    {
        $labels = [
            'vThumbnails' => 'Thumbnails',
            'vTitle' => 'Title',
            'vIsi' => 'Isi',
            'vNama' => 'Nama',
            'eTampil' => 'Tampil',
            'eTipe' => 'Tipe',
            'vDetail' => 'Detail',
            'vLink' => 'Link',
            'vNamaLink' => 'Nama Link',
            'vImage' => 'Image',
            'vPicture' => 'Picture',
            'vProfilepic' => 'Foto Profil',
            'vKtp' => 'KTP',
            'vFilektp' => 'File KTP',
            'vNpwp' => 'NPWP',
            'vFilenpwp' => 'File NPWP',
            'vSiup' => 'SIUP',
            'vFilesiup' => 'File SIUP',
            'vFileaktapendirian' => 'Akta Pendirian',
            'vFiledomisiliperusahaan' => 'Domisili Perusahaan',
            'eVerifikasi' => 'Verifikasi',
            'isTrustedBuyer' => 'Trusted Buyer',
            'vEmail' => 'Email',
            'vDesc' => 'Deskripsi',
            'vIcon' => 'Icon',
            'vIconColor' => 'Warna Icon',
            'vBackground' => 'Background',
            'eFeatured' => 'Featured',
            'eBestselling' => 'Best Selling',
            'eStatus' => 'Status',
            'vAlamat' => 'Alamat',
            'vDeskripsi' => 'Deskripsi',
            'vDeskripsisingkat' => 'Deskripsi Singkat',
            'vDeskripsidetail' => 'Deskripsi Detail',
            'iIdBrand' => 'Brand',
            'iIdKategori' => 'Kategori',
            'iIdSubkategori' => 'Subkategori',
            'iIdExpedisi' => 'Ekspedisi',
            'iIdProvinsi' => 'Provinsi',
            'iIdKota' => 'Kota',
            'iIdKecamatan' => 'Kecamatan',
            'iIdKelurahan' => 'Kelurahan',
            'iIdVendor' => 'Vendor',
            'iIdCustomer' => 'Customer',
            'iIdUser' => 'User',
            'iIdTransaksi' => 'Transaksi',
            'iIdAlamatutama' => 'Alamat Utama',
            'iIdJenisperusahaan' => 'Jenis Perusahaan',
            'iIdKlasifikasiperusahaan' => 'Klasifikasi Perusahaan',
            'vKodepos' => 'Kode Pos',
            'vIbukota' => 'Ibukota',
            'vBsni' => 'BSNI',
            'vKode' => 'Kode',
            'vJudul' => 'Judul',
            'vReview' => 'Review',
            'vNamadirektur' => 'Nama Direktur',
            'dTanggalberdiri' => 'Tanggal Berdiri',
            'eJumlahkaryawan' => 'Jumlah Karyawan',
            'vOfficephone' => 'Telepon Kantor',
            'vNamapic' => 'Nama PIC',
            'vKontakpic' => 'Kontak PIC',
            'vNotelp' => 'No. Telepon',
            'vNohp' => 'No. HP',
            'vGPS' => 'GPS',
            'eUtama' => 'Utama',
            'vNamaCustomer' => 'Nama Customer',
            'eLunas' => 'Lunas',
        ];

        return $labels[$col] ?? ucwords(str_replace(['_', 'v', 'i', 'e', 'd'], ' ', preg_replace('/^[viepd]/', '', $col)));
    }

    private function fieldType(string $col, string $table): string
    {
        if (in_array($col, ['eTampil', 'eFeatured', 'eBestselling', 'eVerifikasi', 'isTrustedBuyer', 'eUtama', 'eLunas', 'eStatus'])) {
            return 'boolean';
        }

        if (str_starts_with($col, 'd') && $col !== 'd') {
            return 'date';
        }

        if (str_starts_with($col, 'iId') || str_starts_with($col, 'iId')) {
            return 'select';
        }

        if (in_array($col, ['vIsi', 'vDeskripsidetail', 'vReview', 'vDeskripsi', 'vAlamat', 'vDetail'])) {
            return 'textarea';
        }

        if (in_array($col, ['vImage', 'vPicture', 'vProfilepic', 'vKtp', 'vFilektp', 'vFilenpwp', 'vFilesiup', 'vFileaktapendirian', 'vFiledomisiliperusahaan', 'vIcon', 'vThumbnails'])) {
            return 'file';
        }

        if (in_array($col, ['vEmail'])) {
            return 'email';
        }

        if (in_array($col, ['vKodepos', 'vOfficephone', 'vNotelp', 'vNohp'])) {
            return 'tel';
        }

        return 'text';
    }

    private function selectOptions(string $col): ?array
    {
        $prefixMap = [
            'iIdBrand' => ['model' => 'Brand', 'value' => 'iId', 'label' => 'vNama'],
            'iIdKategori' => ['model' => 'Kategori', 'value' => 'iId', 'label' => 'vNama'],
            'iIdSubkategori' => ['model' => 'Subkategori', 'value' => 'iId', 'label' => 'vNama'],
            'iIdExpedisi' => ['model' => 'Ekspedisi', 'value' => 'iId', 'label' => 'vNama'],
            'iIdProvinsi' => ['model' => 'Provinsi', 'value' => 'iId', 'label' => 'vNama'],
            'iIdKota' => ['model' => 'Kota', 'value' => 'iId', 'label' => 'vNama'],
            'iIdKecamatan' => ['model' => 'Kecamatan', 'value' => 'iId', 'label' => 'vNama'],
            'iIdKelurahan' => ['model' => 'Kelurahan', 'value' => 'iId', 'label' => 'vNama'],
            'iIdVendor' => ['model' => 'Vendor', 'value' => 'iId', 'label' => 'vNama'],
            'iIdCustomer' => ['model' => 'Customer', 'value' => 'iId', 'label' => 'vNama'],
            'iIdUser' => ['model' => 'User', 'value' => 'id', 'label' => 'name'],
            'iIdTransaksi' => null,
            'iIdAlamatutama' => null,
            'iIdJenisperusahaan' => ['model' => 'JenisPengiriman', 'value' => 'iId', 'label' => 'vNama'],
            'iIdKlasifikasiperusahaan' => ['model' => 'KlasifikasiPerusahaan', 'value' => 'iId', 'label' => 'vNama'],
        ];

        return $prefixMap[$col] ?? null;
    }

    public function index(Request $request): Response
    {
        $table = $this->table($request);
        $modelClass = $this->model($this->modelClass($table));
        $query = $modelClass::where(function ($q) {
            $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
        });

        $search = $request->query('search');
        if ($search) {
            $model = new $modelClass;
            $fillable = $model->getFillable();
            $stringCols = array_values(array_filter($fillable, fn ($c) => !in_array($c, ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted', 'eTampil', 'eFeatured', 'eBestselling', 'eVerifikasi', 'isTrustedBuyer', 'eUtama', 'eLunas', 'eStatus', 'eDeleted'])));

            $query->where(function ($q) use ($search, $stringCols) {
                foreach ($stringCols as $i => $col) {
                    if ($i === 0) $q->where($col, 'like', "%{$search}%");
                    else $q->orWhere($col, 'like', "%{$search}%");
                }
            });
        }

        $data = $query->paginate(20)->withQueryString();

        return Inertia('Master/Index', [
            'title' => $this->label($table),
            'table' => $table,
            'items' => $data,
            'search' => $search,
            'columns' => $this->columns($table),
            'columnLabels' => collect($this->columns($table))->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
        ]);
    }

    public function create(Request $request): Response
    {
        $table = $this->table($request);
        $fields = $this->columns($table);
        $selects = [];

        foreach ($fields as $col) {
            $config = $this->selectOptions($col);
            if ($config) {
                $modelClass = $this->model($config['model']);
                $selects[$col] = $modelClass::where(function ($q) {
                    $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
                })->get(['iId as value', 'vNama as label']);
            }
        }

        return Inertia('Master/Form', [
            'title' => 'Tambah ' . $this->label($table),
            'table' => $table,
            'fields' => $fields,
            'fieldLabels' => collect($fields)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($fields)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c, $table)]),
            'selects' => $selects,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $table = $this->table($request);
        $modelClass = $this->model($this->modelClass($table));
        $fields = (new $modelClass)->getFillable();
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];

        $fillable = array_values(array_filter($fields, fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        $validator = Validator::make($request->all(), $rules->toArray());
        $validated = $validator->validated();

        $validated['iCreatedid'] = auth()->id() ?? 1;
        $validated['tCreated'] = now();

        $modelClass::create($validated);

        return redirect("/master/{$table}")->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(Request $request, int $id): Response
    {
        $table = $this->table($request);
        $modelClass = $this->model($this->modelClass($table));
        $item = $modelClass::findOrFail($id);

        $fields = $this->columns($table);
        $selects = [];

        foreach ($fields as $col) {
            $config = $this->selectOptions($col);
            if ($config) {
                $selectModelClass = $this->model($config['model']);
                $selects[$col] = $selectModelClass::where(function ($q) {
                    $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
                })->get(['iId as value', 'vNama as label']);
            }
        }

        return Inertia('Master/Form', [
            'title' => 'Edit ' . $this->label($table),
            'table' => $table,
            'item' => $item,
            'fields' => $fields,
            'fieldLabels' => collect($fields)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($fields)->mapWithKeys(fn ($c) => [$c => $this->fieldType($c, $table)]),
            'selects' => $selects,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $table = $this->table($request);
        $modelClass = $this->model($this->modelClass($table));
        $item = $modelClass::findOrFail($id);

        $fields = (new $modelClass)->getFillable();
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter($fields, fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);
        $validator = Validator::make($request->all(), $rules->toArray());
        $validated = $validator->validated();

        $validated['iUpdatedid'] = auth()->id() ?? 1;
        $validated['tUpdated'] = now();

        $item->update($validated);

        return redirect("/master/{$table}")->with('success', 'Data berhasil diubah.');
    }

    public function destroy(Request $request, int $id): RedirectResponse
    {
        $table = $this->table($request);
        $modelClass = $this->model($this->modelClass($table));
        $item = $modelClass::findOrFail($id);

        $item->update([
            'eDeleted' => 'ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);

        return redirect("/master/{$table}")->with('success', 'Data berhasil dihapus.');
    }
}
