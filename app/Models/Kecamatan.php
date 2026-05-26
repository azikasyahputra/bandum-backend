<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kecamatan';

    protected $fillable = [
        'iIdProvinsi', 
        'iIdKota', 
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($kecamatan) {
            $kecamatan->iCreatedid = auth()->id();
            $kecamatan->iUpdatedid = auth()->id();
        });

        static::updating(function ($kecamatan) {
            $kecamatan->iUpdatedid = auth()->id();
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
}
