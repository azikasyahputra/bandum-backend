<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiKeranjang extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_keranjang';

    protected $fillable = [
        'iIdUser', 
        'iIdBarang', 
        'iIdBarangKemasan', 
        'nPrice', 
        'nDisc', 
        'iQty', 
        'nJumlah', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksikeranjang) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksikeranjang->iCreatedid = auth()->id();
            $transaksikeranjang->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksikeranjang) {
            $transaksikeranjang->iUpdatedid = auth()->id();
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

    public function userKeranjang(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iIdUser');
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
