<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'wishlist';

    protected $fillable = [
        'iIdUser', 
        'iIdBarang', 
        'eDeleted', 
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($wishlist) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $wishlist->iCreatedid = auth()->id();
            $wishlist->iUpdatedid = auth()->id();
        });

        static::updating(function ($wishlist) {
            $wishlist->iUpdatedid = auth()->id();
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

    public function userWishlist(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iIdUser');
    }

    public function barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'iId', 'iIdBarang');
    }
}
