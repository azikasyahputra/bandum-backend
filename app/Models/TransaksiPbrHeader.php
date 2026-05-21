<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPbrHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_pbr_header';

    protected $fillable = ['iId', 'vPbrno', 'vPbno', 'vPono', 'dDate', 'iIdCustomer', 'iIdGudang', 'iIdVendor', 'nTotal', 'nPpn', 'nGrandTotal', 'vStatus', 'vNoFakturSupplier', 'dFakturSupplier', 'vKeterangan', 'vFakturPajak', 'dFakturPajak', 'vType', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
