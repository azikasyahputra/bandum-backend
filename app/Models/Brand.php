<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_brand';

    protected $fillable = [
        'vNama', 
        'vPicture', 
        'eDeleted', 
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($brand) {
            $brand->iCreatedid = auth()->id();
            $brand->iUpdatedid = auth()->id();
        });

        static::updating(function ($brand) {
            $brand->iUpdatedid = auth()->id();
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
