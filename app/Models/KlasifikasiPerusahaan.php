<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KlasifikasiPerusahaan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_klasifikasi_perusahaan';

    protected $fillable = [
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($klasifikasiperusahaan) {
            $klasifikasiperusahaan->iCreatedid = auth()->id();
            $klasifikasiperusahaan->iUpdatedid = auth()->id();
        });

        static::updating(function ($klasifikasiperusahaan) {
            $klasifikasiperusahaan->iUpdatedid = auth()->id();
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
}
