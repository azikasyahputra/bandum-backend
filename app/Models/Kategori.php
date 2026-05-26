<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kategori';

    protected $fillable = [
        'vNama', 
        'vIcon', 
        'vIconColor', 
        'vBackground', 
        'eFeatured', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($kategori) {
            $kategori->iCreatedid = auth()->id();
            $kategori->iUpdatedid = auth()->id();
        });

        static::updating(function ($kategori) {
            $kategori->iUpdatedid = auth()->id();
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
