<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_header';

    protected $fillable = ['iId', 'vNoInvoice', 'iIdPacking', 'vNoPacking', 'iIdOrder', 'vNoOrder', 'iIdCustomer', 'vNamaCustomer', 'nTotal', 'nTotalDiskon', 'nPpn', 'nBiayaKirim', 'nBiayaPacking', 'nGrandTotal', 'eReturAdmin', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
