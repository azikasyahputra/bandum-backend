<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiAr extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_ar';

    protected $fillable = [
        'iIdCustomer', 
        'vNoOrder', 
        'vNoPacking', 
        'vNoInvoice', 
        'dInvoiceDate', 
        'dDueDate', 
        'iTop', 
        'eTipe', 
        'tCreated', 
        'tUpdated', 
        'iCreatedid', 
        'iUpdatedid', 
        'eLunas', 
        'nBiayaKirim', 
        'nBiayaPacking', 
        'nTotal', 
        'nTotalTerbayar'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiar) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiar->iCreatedid = auth()->id();
            $transaksiar->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiar) {
            $transaksiar->iUpdatedid = auth()->id();
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
        return $this->hasOne(TransaksiOrderHeader::class, 'vNoOrder', 'vNoOrder');
    }

    public function packingHeader(): HasOne
    {
        return $this->hasOne(TransaksiPackingHeader::class, 'vNoPacking', 'vNoPacking');
    }

    public function invoiceHeader(): HasOne
    {
        return $this->hasOne(TransaksiInvoiceHeader::class, 'vNoInvoice', 'vNoInvoice');
    }

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'iId', 'iIdCustomer');
    }
}
