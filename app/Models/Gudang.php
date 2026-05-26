<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gudang extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_gudang';

    protected $fillable = [
        'vNama', 
        'eStatus',
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($gudang) {
            $gudang->iCreatedid = auth()->id();
            $gudang->iUpdatedid = auth()->id();
        });

        static::updating(function ($gudang) {
            $gudang->iUpdatedid = auth()->id();
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
