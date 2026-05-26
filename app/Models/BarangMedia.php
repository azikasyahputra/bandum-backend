<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangMedia extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_media';

    protected $fillable = [
        'iIdBarang', 
        'eTipe', 
        'vLink', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($barangmedia) {
            $barangmedia->iCreatedid = auth()->id();
            $barangmedia->iUpdatedid = auth()->id();
        });

        static::updating(function ($barangmedia) {
            $barangmedia->iUpdatedid = auth()->id();
        });
    }

    public function barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'iId', 'iIdBarang');
    }
    
    public function createdBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iCreatedid');
    }

    public function updatedBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iUpdatedid');
    }
}
