<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceDetail extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_detail';

    protected $fillable = [
        'iIdInvoice', 
        'vNoInvoice', 
        'iIdOrder', 
        'iIdOrderDetail', 
        'vNoOrder', 
        'iIdPacking', 
        'iIdPackingDetail', 
        'vNoPacking', 
        'iIdBarang', 
        'iIdBarangKemasan', 
        'nHarga', 
        'nDisc', 
        'nQty',  
        'nQtyRetur', 
        'nPpn', 
        'nTotal', 
        'eStatus', 
        'eDeleted'
    ];
    
    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($transaksiinvoicedetail) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $transaksiinvoicedetail->iCreatedid = auth()->id();
            $transaksiinvoicedetail->iUpdatedid = auth()->id();
        });

        static::updating(function ($transaksiinvoicedetail) {
            $transaksiinvoicedetail->iUpdatedid = auth()->id();
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
        return $this->hasOne(TransaksiInvoiceHeader::class, 'iId', 'iIdInvoice');
    }    

    public function orderHeader(): HasOne
    {
        return $this->hasOne(TransaksiOrderHeader::class, 'iId', 'iIdOrder');
    }
    public function orderDetail(): HasOne
    {
        return $this->hasOne(TransaksiOrderDetail::class, 'iId', 'iIdOrderDetail');
    }    

    public function packingHeader(): HasOne
    {
        return $this->hasOne(TransaksiPackingHeader::class, 'iId', 'iIdPacking');
    }    

    public function packingDetail(): HasOne
    {
        return $this->hasOne(TransaksiPackingDetail::class, 'iId', 'iIdPackingDetail');
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
