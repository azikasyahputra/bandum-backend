<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangKemasanHistory extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_kemasan_history';

    protected $fillable = [
        'iIdBarangKemasan', 
        'iIdBarang', 
        'vNama', 
        'nHarga', 
        'nHargastrike',
        'vSku', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($barangkemasanhistory) {
            $barangkemasanhistory->iCreatedid = auth()->id();
            $barangkemasanhistory->iUpdatedid = auth()->id();
        });

        static::updating(function ($barangkemasanhistory) {
            $barangkemasanhistory->iUpdatedid = auth()->id();
        });
    }

    public function createdBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iCreatedid');
    }

    public function updatedBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iUpdatedid');
    }

    public function barangKemasan(): HasOne
    {
        return $this->hasOne(BarangKemasan::class, 'iId', 'iIdBarangKemasan');
    }

    public function barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'iId', 'iIdBarang');
    }

    public function brand(): HasOne
    {
        return $this->hasOne(Brand::class, 'iId', 'iIdBrand');
    }

    public function kategori(): HasOne
    {
        return $this->hasOne(Kategori::class, 'iId', 'iIdKategori');
    }

    public function subkategori(): HasOne
    {
        return $this->hasOne(Subkategori::class, 'iId', 'iIdSubkategori');
    }
}
