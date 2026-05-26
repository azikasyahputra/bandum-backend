<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceReturnHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_return_header';

    protected $fillable = [
        'vNoInvoiceReturn', 
        'iIdInvoice', 
        'vNoInvoice', 
        'iIdCustomer', 
        'iIdGudang',
        'dDate', 
        'vKeterangan', 
        'nTotal', 
        'nPpn', 
        'nGrandTotal', 
        'iReturAll', 
        'eStatus', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiinvoicereturnheader) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiinvoicereturnheader->iCreatedid = auth()->id();
            $transaksiinvoicereturnheader->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiinvoicereturnheader) {
            $transaksiinvoicereturnheader->iUpdatedid = auth()->id();
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

    public function details(): HasMany
    {
        return $this->hasMany(TransaksiInvoiceReturnDetail::class, 'iIdInvoiceReturn', 'iId');
    }

    public function invoiceHeader(): HasOne
    {
        return $this->hasOne(TransaksiInvoiceHeader::class, 'iId', 'iIdInvoice');
    }

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'iId', 'iIdCustomer');
    }

    public function gudang(): HasOne
    {
        return $this->hasOne(Gudang::class, 'iId', 'iIdGudang');
    }
}
