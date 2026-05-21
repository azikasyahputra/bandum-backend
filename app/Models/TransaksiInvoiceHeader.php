<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TransaksiInvoiceHeader extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_header';

    protected $fillable = ['iId', 'vNoInvoice', 'iIdPacking', 'vNoPacking', 'iIdOrder', 'vNoOrder', 'iIdCustomer', 'vNamaCustomer', 'nTotal', 'nTotalDiskon', 'nPpn', 'nBiayaKirim', 'nBiayaPacking', 'nGrandTotal', 'eReturAdmin', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];

    public function details(): HasMany
    {
        return $this->hasMany(TransaksiInvoiceDetail::class, 'iIdInvoice', 'iId');
    }
}
