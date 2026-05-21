<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiInvoiceReturnDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_invoice_return_detail';

    protected $fillable = ['iId', 'iBarangId', 'vNoInvoiceReturn', 'vNoSo', 'iSodetId', 'iKemasan', 'iQty', 'dHpp', 'dTotal', 'dPpn', 'dGrandtotal', 'iCreatedId', 'iUpdatedId', 'tCreated', 'tUpdated', 'vBatch', 'iInvId', 'iBonus', 'iMultiBatch', 'dExpired', 'dDiscount'];
}
