<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiOrderDetail extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_detail';

    protected $fillable = [
        'iIdOrder', 
        'vNoOrder', 
        'iIdBarang', 
        'iIdBarangKemasan', 
        'nHarga', 
        'nDisc', 
        'iQty', 
        'iQtyKecil', 
        'nPpn', 
        'nTotal', 
        'nQtyOr', 
        'nQtyPo', 
        'nQtyPl', 
        'nQtyKirim', 
        'nQtyRetur', 
        'eStatus', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiorderdetail) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiorderdetail->iCreatedid = auth()->id();
            $transaksiorderdetail->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiorderdetail) {
            $transaksiorderdetail->iUpdatedid = auth()->id();
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

    public function orderHeader(): HasOne
    {
        return $this->hasOne(TransaksiOrder::class, 'iId', 'iIdOrder');
    }

    public function barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'iId', 'iIdBarang');
    }

    public function barangKemasan(): HasOne
    {
        return $this->hasOne(BarangKemasan::class, 'iId', 'iIdBarangKemasan');
    }
}
