<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TransaksiOrderHeader extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_header';

    protected $fillable = [
        'vNoOrder', 
        'iIdCustomer', 
        'vNamaCustomer', 
        'iIdCustomerAlamat', 
        'vCustomerAlamat', 
        'iIdPembayaran', 
        'vPembayaran', 
        'iIdPengiriman', 
        'vPengiriman', 
        'iIdJenisPengiriman', 
        'vJenisPengiriman', 
        'vCatatan', 
        'eStatus', 
        'nTotal', 
        'nTotalDiskon', 
        'nPpn', 
        'nBiayaKirim', 
        'nBiayaPacking', 
        'nGrandTotal', 
        'vSuratJalan', 
        'vFakturPajak', 
        'eLunas', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiorderheader) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiorderheader->iCreatedid = auth()->id();
            $transaksiorderheader->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiorderheader) {
            $transaksiorderheader->iUpdatedid = auth()->id();
        });
    }

    public function details(): HasMany
    {
        return $this->hasMany(TransaksiOrderDetail::class, 'iIdOrder', 'iId')
            ->where(function ($q) {
                $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
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

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'iId', 'iIdCustomer');
    }

    public function customerAlamat(): HasOne
    {
        return $this->hasOne(CustomerAlamat::class, 'iId', 'iIdCustomerAlamat');
    }

    public function pembayaran(): HasOne
    {
        return $this->hasOne(Pembayaran::class, 'iId', 'iIdPembayaran');
    }

    public function pengiriman(): HasOne
    {
        return $this->hasOne(Pengiriman::class, 'iId', 'iIdPengiriman');
    }

    public function jenisPengiriman(): HasOne
    {
        return $this->hasOne(JenisPengiriman::class, 'iId', 'iIdJenisPengiriman');
    }
}
