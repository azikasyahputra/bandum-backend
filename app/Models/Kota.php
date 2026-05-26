<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kota';

    protected $fillable = [
        'iIdProvinsi',
        'vNama',
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($kota) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $kota->iCreatedid = auth()->id();
            $kota->iUpdatedid = auth()->id();
        });

        static::updating(function ($kota) {
            $kota->iUpdatedid = auth()->id();
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
}
