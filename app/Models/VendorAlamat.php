<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VendorAlamat extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_vendor_alamat';

    protected $fillable = [
        'vNama', 
        'vAlamat', 
        'iIdVendor', 
        'iIdProvinsi', 
        'iIdKota', 
        'iIdKecamatan', 
        'iIdKelurahan', 
        'vGPS', 
        'vNotelp', 
        'vNohp', 
        'eUtama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($vendoralamat) {
            $vendoralamat->iCreatedid = auth()->id();
            $vendoralamat->iUpdatedid = auth()->id();
        });

        static::updating(function ($vendoralamat) {
            $vendoralamat->iUpdatedid = auth()->id();
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

    public function vendor(): HasOne
    {
        return $this->hasOne(Vendor::class, 'iId', 'iIdVendor');
    }

    public function provinsi(): HasOne
    {
        return $this->hasOne(Provinsi::class, 'iId', 'iIdProvinsi');
    }

    public function kota(): HasOne
    {
        return $this->hasOne(Kota::class, 'iId', 'iIdKota');
    }

    public function kecamatan(): HasOne
    {
        return $this->hasOne(Kecamatan::class, 'iId', 'iIdKecamatan');
    }

    public function kelurahan(): HasOne
    {
        return $this->hasOne(Kelurahan::class, 'iId', 'iIdKelurahan');
    }
}
