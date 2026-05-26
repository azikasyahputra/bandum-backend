<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerAlamat extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_customer_alamat';

    protected $fillable = [
        'vNama', 
        'iIdCustomer', 
        'iIdProvinsi', 
        'iIdKota', 
        'iIdKecamatan', 
        'iIdKelurahan', 
        'vGPS', 
        'vAlamat', 
        'vNotelp', 
        'vNohp', 
        'eUtama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($customeralamat) {
            $customeralamat->iCreatedid = auth()->id();
            $customeralamat->iUpdatedid = auth()->id();
        });

        static::updating(function ($customeralamat) {
            $customeralamat->iUpdatedid = auth()->id();
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

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'iId', 'iIdCustomer');
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
