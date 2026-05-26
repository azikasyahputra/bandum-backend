<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_customer';

    protected $fillable = [
        'vNama', 
        'vEmail', 
        'iIdUser', 
        'iIdJenisperusahaan', 
        'iIdKlasifikasiperusahaan',
        'vProfilepic', 
        'vKtp', 
        'vFilektp', 
        'vNpwp', 
        'vFilenpwp',
        'vSiup',
        'vFilesiup',
        'vFileaktapendirian',
        'vFiledomisiliperusahaan',
        'eTipe', 
        'eVerifikasi', 
        'isTrustedBuyer', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($customer) {
            $customer->iCreatedid = auth()->id();
            $customer->iUpdatedid = auth()->id();
        });

        static::updating(function ($customer) {
            $customer->iUpdatedid = auth()->id();
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

    public function accountData(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iIdUser');
    }

    public function jenisPerusahaan(): HasOne
    {
        return $this->hasOne(KategoriPerusahaan::class, 'iId', 'iIdJenisperusahaan');
    }

    public function klasifikasiPerusahaan(): HasOne
    {
        return $this->hasOne(KlasifikasiPerusahaan::class, 'iId', 'iIdKlasifikasiperusahaan');
    }
}
