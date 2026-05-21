<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceReturnHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_return_header';

    protected $fillable = ['iId', 'vNoInvoiceReturn', 'vNoInvoice', 'vNoOrder', 'iIdCustomer', 'dDate', 'vKeterangan', 'nTotal', 'nPpn', 'nGrandTotal', 'iReturAll', 'eStatus', 'iGudangId', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated'];
}
