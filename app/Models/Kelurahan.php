<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelurahan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kelurahan';

    protected $fillable = [
        'iIdProvinsi', 
        'iIdKota', 
        'iIdKecamatan', 
        'vNama', 
        'vKodepos', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($kelurahan) {
            $kelurahan->iCreatedid = auth()->id();
            $kelurahan->iUpdatedid = auth()->id();
        });

        static::updating(function ($kelurahan) {
            $kelurahan->iUpdatedid = auth()->id();
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
}
