<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Features extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_features';

    protected $fillable = [
        'vTitle', 
        'vDesc', 
        'vIcon', 
        'eTampil', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($features) {
            $features->iCreatedid = auth()->id();
            $features->iUpdatedid = auth()->id();
        });

        static::updating(function ($features) {
            $features->iUpdatedid = auth()->id();
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
