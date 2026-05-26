<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TransaksiInvoiceHeader extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_header';

    protected $fillable = [
        'vNoInvoice', 
        'iIdPacking',
        'vNoPacking', 
        'iIdOrder', 
        'vNoOrder', 
        'iIdCustomer', 
        'vNamaCustomer', 
        'nTotal', 
        'nTotalDiskon',
        'nPpn', 
        'nBiayaKirim', 
        'nBiayaPacking', 
        'nGrandTotal', 
        'eReturAdmin', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiinvoiceheader) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiinvoiceheader->iCreatedid = auth()->id();
            $transaksiinvoiceheader->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiinvoiceheader) {
            $transaksiinvoiceheader->iUpdatedid = auth()->id();
        });
    }

    public function details(): HasMany
    {
        return $this->hasMany(TransaksiInvoiceDetail::class, 'iIdInvoice', 'iId');
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
        return $this->hasOne(TransaksiOrderHeader::class, 'iId', 'iIdOrder');
    }

    public function packingHeader(): HasOne
    {
        return $this->hasOne(TransaksiPackingHeader::class, 'iId', 'iIdPacking');
    }    

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'iId', 'iIdCustomer');
    }
}
