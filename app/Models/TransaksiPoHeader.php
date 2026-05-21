<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPoHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_po_header';

    protected $fillable = ['iId', 'vPbno', 'vPono', 'vReqno', 'vNoOrder', 'dDate', 'iSupplierId', 'iPelangganId', 'iTop', 'nTotal', 'nPpn', 'nGrandTotal', 'vStatus', 'vType', 'vNoFakturVendor', 'vPbcreate', 'iGudangId', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted', 'vKeterangan'];
}
