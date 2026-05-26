<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subkategori extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_subkategori';

    protected $fillable = [
        'iIdKategori', 
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($subkategori) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $subkategori->iCreatedid = auth()->id();
            $subkategori->iUpdatedid = auth()->id();
        });

        static::updating(function ($subkategori) {
            $subkategori->iUpdatedid = auth()->id();
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

    public function kategori(): HasOne
    {
        return $this->hasOne(Kategori::class, 'iId', 'iIdKategori');
    }
}
