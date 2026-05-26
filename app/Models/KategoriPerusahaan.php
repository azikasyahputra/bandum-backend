<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KategoriPerusahaan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kategori_perusahaan';

    protected $fillable = [
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($kategoriperusahaan) {
            $kategoriperusahaan->iCreatedid = auth()->id();
            $kategoriperusahaan->iUpdatedid = auth()->id();
        });

        static::updating(function ($kategoriperusahaan) {
            $kategoriperusahaan->iUpdatedid = auth()->id();
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
