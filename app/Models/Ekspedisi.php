<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ekspedisi extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_ekspedisi';

    protected $fillable = [
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($ekspedisi) {
            $ekspedisi->iCreatedid = auth()->id();
            $ekspedisi->iUpdatedid = auth()->id();
        });

        static::updating(function ($ekspedisi) {
            $ekspedisi->iUpdatedid = auth()->id();
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
