<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_detail';

    protected $fillable = ['iId', 'iIdInvoice', 'vNoInvoice', 'iIdOrder', 'iIdOrderDetail', 'vNoOrder', 'iIdPacking', 'iIdPackingDetail', 'vNoPacking', 'iIdBarang', 'iIdBarangKemasan', 'nHarga', 'nDisc', 'iQty', 'iQtyKecil', 'iQtyRetur', 'nPpn', 'nTotal', 'eStatus', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
