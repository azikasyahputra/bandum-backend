<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceReturnDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_return_detail';

    protected $fillable = [
        'iIdInvoiceReturn',    
        'vNoInvoiceReturn', 
        'iIdInvoice', 
        'iIdInvoiceDetail',
        'iIdBarang', 
        'iIdBarangKemasan', 
        'vSku',
        'nQty', 
        'nPrice', 
        'nTotal', 
        'nPpn', 
        'nGrandtotal', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiinvoicereturndetail) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiinvoicereturndetail->iCreatedid = auth()->id();
            $transaksiinvoicereturndetail->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiinvoicereturndetail) {
            $transaksiinvoicereturndetail->iUpdatedid = auth()->id();
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

    public function invoiceHeader(): HasOne
    {
        return $this->hasOne(TransaksiInvoiceReturnHeader::class, 'iId', 'iIdInvoiceReturn');
    }

    public function invoiceHeader(): HasOne
    {
        return $this->hasOne(TransaksiInvoiceHeader::class, 'iId', 'iIdInvoice');
    }
    
    public function invoiceDetail(): HasOne
    {
        return $this->hasOne(TransaksiInvoiceDetail::class, 'iId', 'iIdInvoiceDetail');
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
