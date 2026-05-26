<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'stock_detail';

    protected $fillable = [
        'iIdBarang', 
        'iIdBarangKemasan',
        'iIdGudang', 
        'vSku', 
        'nQtyIn', 
        'nQtyOut', 
        'nQtybook', 
        'nQtySum'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($stockdetail) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $stockdetail->iCreatedid = auth()->id();
            $stockdetail->iUpdatedid = auth()->id();
        });

        static::updating(function ($stockdetail) {
            $stockdetail->iUpdatedid = auth()->id();
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
        return $this->hasOne(Barang::class, 'iId', 'iBarangid');
    }

    public function barangKemasan(): HasOne
    {
        return $this->hasOne(BarangKemasan::class, 'iId', 'iIdBarangKemasan');
    }

    public function gudang(): HasOne
    {
        return $this->hasOne(Gudang::class, 'iId', 'iGudangid');
    }
}
