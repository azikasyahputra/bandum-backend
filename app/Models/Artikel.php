<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_artikel';

    protected $fillable = [
        'vThumbnails', 
        'vTitle', 
        'vIsi', 
        'eTampil', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($artikel) {
            $artikel->iCreatedid = auth()->id();
            $artikel->iUpdatedid = auth()->id();
        });

        static::updating(function ($artikel) {
            $artikel->iUpdatedid = auth()->id();
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
