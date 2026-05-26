<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiHistory extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_history';

    protected $fillable = [
        'iIdTransaction', 
        'vTransactionNumber', 
        'eTransactionType', 
        'iIdBarang', 
        'vNamaBarang', 
        'vBatch', 
        'iIdGudang',
        'iIdBarangKemasan', 
        'vBarangKemasan', 
        'nQtybef', 
        'nQty', 
        'nQtyend', 
        'dTranscationDate', 
        'vTransactionReference', 
        'nHarga', 
        'nTotal'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksihistory) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksihistory->iCreatedid = auth()->id();
            $transaksihistory->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksihistory) {
            $transaksihistory->iUpdatedid = auth()->id();
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

    public function barangKemasan(): HasOne
    {
        return $this->hasOne(BarangKemasan::class, 'iId', 'iIdBarangKemasan');
    }

    public function gudang(): HasOne
    {
        return $this->hasOne(Gudang::class, 'iId', 'iIdGudang');
    }
}
