<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_banner';

    protected $fillable = [
        'eTipe', 
        'vTitle', 
        'vDetail', 
        'vNamaLink', 
        'vLink', 
        'vImage', 
        'eTampil', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($banner) {
            $banner->iCreatedid = auth()->id();
            $banner->iUpdatedid = auth()->id();
        });

        static::updating(function ($banner) {
            $banner->iUpdatedid = auth()->id();
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
