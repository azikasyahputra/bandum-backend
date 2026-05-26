<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiAp extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_ap';

    protected $fillable = [
        'vPbno', 
        'vPono', 
        'iIdVendor', 
        'nTotal', 
        'nPpn', 
        'nGrandTotal', 
        'dDuedate', 
        'nTotaldibayar', 
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiap) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiap->iCreatedid = auth()->id();
            $transaksiap->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiap) {
            $transaksiap->iUpdatedid = auth()->id();
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

    public function pbHeader(): HasOne
    {
        return $this->hasOne(TransaksiPbHeader::class, 'vPbno', 'vPbno');
    }

    public function poHeader(): HasOne
    {
        return $this->hasOne(TransaksiPoHeader::class, 'vPono', 'vPono');
    }

    public function vendor(): HasOne
    {
        return $this->hasOne(Vendor::class, 'iId', 'iIdVendor');
    }
}
