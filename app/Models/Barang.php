<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang';

    protected $fillable = [
        'vNama', 
        'iIdBrand', 
        'iIdKategori', 
        'iIdSubkategori', 
        'vDeskripsisingkat', 
        'vDeskripsidetail', 
        'eBestselling', 
        'eDeleted', 
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($barang) {
            $barang->iCreatedid = auth()->id();
            $barang->iUpdatedid = auth()->id();
        });

        static::updating(function ($barang) {
            $barang->iUpdatedid = auth()->id();
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

    public function kemasan(): HasMany
    {
        return $this->hasMany(BarangKemasan::class, 'iIdBarang', 'iId');
    }

    public function media(): HasMany
    {
        return $this->hasMany(BarangMedia::class, 'iIdBarang', 'iId');
    }
}
