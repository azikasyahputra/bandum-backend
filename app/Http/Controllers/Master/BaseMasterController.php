<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

abstract class BaseMasterController extends Controller
{
abstract protected function modelClass(): string;
abstract protected function tableName(): string;
abstract protected function tableRoute(): string;
abstract protected function label(): string;

    protected function search(): array
    {
        return [];
    }

    protected function columns(): array
    {
        $model = $this->model();
        $all = $model->getFillable();

        return array_values(array_filter($all, fn ($c) => !in_array($c, ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'])));
    }

    protected function model()
    {
        $class = $this->modelClass();
        return new $class;
    }

    protected function columnLabel(string $col): string
    {
        $labels = [
            'vThumbnails' => 'Thumbnails', 'vTitle' => 'Title', 'vIsi' => 'Isi',
            'vNama' => 'Nama', 'eTampil' => 'Tampil', 'eTipe' => 'Tipe',
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
        ];

        return $labels[$col] ?? ucwords(str_replace(['_', 'v', 'i', 'e', 'd'], ' ', preg_replace('/^[viepd]/', '', $col)));
    }

    protected function fieldType(string $col): string
    {
        if (in_array($col, ['eTampil', 'eFeatured', 'eBestselling', 'eVerifikasi', 'isTrustedBuyer', 'eUtama', 'eLunas', 'eStatus'])) {
            return 'boolean';
        }
        if (str_starts_with($col, 'd') && $col !== 'd') return 'date';
        if (str_starts_with($col, 'iId')) return 'select';
        if (in_array($col, ['vIsi', 'vDeskripsidetail', 'vReview', 'vDeskripsi', 'vAlamat', 'vDetail'])) return 'textarea';
        if (in_array($col, ['vImage', 'vPicture', 'vProfilepic', 'vKtp', 'vFilektp', 'vFilenpwp', 'vFilesiup', 'vFileaktapendirian', 'vFiledomisiliperusahaan', 'vIcon', 'vThumbnails'])) return 'file';
        if (in_array($col, ['vEmail'])) return 'email';
        if (in_array($col, ['vKodepos', 'vOfficephone', 'vNotelp', 'vNohp'])) return 'tel';
        return 'text';
    }

    protected function selectOptions(): array
    {
        return [];
    }

    protected function fileColumns(): array
    {
        $model = $this->model();
        $all = $model->getFillable();
        return array_values(array_filter($all, fn ($c) => $this->fieldType($c) === 'file'));
    }

    protected function uploadFile(Request $request, string $column): ?string
    {
        if (!$request->hasFile($column)) {
            return null;
        }

        $file = $request->file($column);
        $path = $file->store("uploads/{$this->tableRoute()}/{$column}", 'public');

        return $path;
    }

    protected function selectData(): array
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
        }

        return $selects;
    }

    public function index(Request $request): Response
    {
        $modelClass = $this->modelClass();
        $columns = $this->columns();
        $query = $modelClass::where(function ($q) {
            $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
        });

        foreach ($columns as $col) {
            $val = $request->query($col);
            if ($val !== null && $val !== '') {
                $query->where($col, 'like', "%{$val}%");
            }
        }

        $search = $this->search();
        foreach ($search as $col) {
            $val = $request->query($col);
            if ($val !== null && $val !== '') {
                $query->where($col, 'like', "%{$val}%");
            }
        }

        $items = $query->paginate(20)->withQueryString();

        $searchValues = [];
        foreach ($columns as $col) {
            $searchValues[$col] = $request->query($col, '');
        }

        return Inertia('Master/Index', [
            'title' => $this->label(),
            'table' => $this->tableRoute(),
            'items' => $items,
            'columns' => $columns,
            'columnLabels' => collect($columns)->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'searchValues' => $searchValues,
        ]);
    }

    public function create(): Response
    {
        return Inertia('Master/Form', [
            'title' => 'Tambah ' . $this->label(),
            'table' => $this->tableRoute(),
            'fields' => $this->columns(),
            'fieldLabels' => collect($this->columns())->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($this->columns())->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $modelClass = $this->modelClass();
        $model = new $modelClass;
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter($model->getFillable(), fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        foreach ($this->fileColumns() as $col) {
            if ($request->hasFile($col)) {
                $rules[$col] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
            }
        }

        $validated = Validator::make($request->all(), $rules->toArray())->validated();

        foreach ($this->fileColumns() as $col) {
            $path = $this->uploadFile($request, $col);
            if ($path !== null) {
                $validated[$col] = $path;
            }
        }

        $validated['iCreatedid'] = auth()->id() ?? 1;
        $validated['tCreated'] = now();

        $modelClass::create($validated);

        return redirect("/master/{$this->tableRoute()}")->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(int $id): Response
    {
        $modelClass = $this->modelClass();
        $item = $modelClass::findOrFail($id);

        return Inertia('Master/Form', [
            'title' => 'Edit ' . $this->label(),
            'table' => $this->tableRoute(),
            'item' => $item,
            'fields' => $this->columns(),
            'fieldLabels' => collect($this->columns())->mapWithKeys(fn ($c) => [$c => $this->columnLabel($c)]),
            'fieldTypes' => collect($this->columns())->mapWithKeys(fn ($c) => [$c => $this->fieldType($c)]),
            'selects' => $this->selectData(),
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $modelClass = $this->modelClass();
        $item = $modelClass::findOrFail($id);
        $model = new $modelClass;
        $skip = ['iId', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
        $fillable = array_values(array_filter($model->getFillable(), fn ($c) => !in_array($c, $skip)));

        $rules = collect($fillable)->mapWithKeys(fn ($c) => [$c => 'nullable']);

        foreach ($this->fileColumns() as $col) {
            if ($request->hasFile($col)) {
                $rules[$col] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
            }
        }

        $validated = Validator::make($request->all(), $rules->toArray())->validated();

        foreach ($this->fileColumns() as $col) {
            $path = $this->uploadFile($request, $col);
            if ($path !== null) {
                $validated[$col] = $path;
            }
        }

        $validated['iUpdatedid'] = auth()->id() ?? 1;
        $validated['tUpdated'] = now();

        $item->update($validated);

        return redirect("/master/{$this->tableRoute()}")->with('success', 'Data berhasil diubah.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $modelClass = $this->modelClass();
        $item = $modelClass::findOrFail($id);

        $item->update([
            'eDeleted' => 'ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);

        return redirect("/master/{$this->tableRoute()}")->with('success', 'Data berhasil dihapus.');
    }
}
