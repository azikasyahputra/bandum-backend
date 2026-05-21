<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiAr extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_ar';

    protected $fillable = ['iId', 'iIdCustomer', 'vNoOrder', 'vNoPacking', 'vNoInvoice', 'dInvoiceDate', 'dDueDate', 'iTop', 'eTipePembayaran', 'eTipe', 'tCreated', 'tUpdated', 'iCreatedid', 'iUpdatedid', 'eLunas', 'nBiayaKirim', 'nBiayaPacking', 'nTotal', 'nTotalTerbayar'];
}
