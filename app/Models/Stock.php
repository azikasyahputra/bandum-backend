<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'stock';

    protected $fillable = [
        'iId', 
        'iIdBarang', 
        'iIdGudang', 
        'nQty', 
        'nQtybook'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($stock) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $stock->iCreatedid = auth()->id();
            $stock->iUpdatedid = auth()->id();
        });

        static::updating(function ($stock) {
            $stock->iUpdatedid = auth()->id();
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

    public function barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'iId', 'iIdBarang');
    }

    public function gudang(): HasOne
    {
        return $this->hasOne(Gudang::class, 'iId', 'iIdGudang');
    }
}
