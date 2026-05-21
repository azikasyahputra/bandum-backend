<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPbHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_pb_header';

    protected $fillable = ['iId', 'vPono', 'vPbno', 'dDate', 'vExpb', 'iIdCustomer', 'iIdGudang', 'iIdVendor', 'dTotal', 'dPpn', 'dGrandtotal', 'vStatus', 'vNoFakturSupplier', 'dNoFakturSupplier', 'vNoFakturPajak', 'dFakturPajak', 'vKeterangan', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
