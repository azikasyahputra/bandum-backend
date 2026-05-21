<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiOrderRequestHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_request_header';

    protected $fillable = ['iId', 'vReqno', 'dDate', 'iIdGudang', 'iIdCustomer', 'iIdVendor', 'iTop', 'dTotal', 'dPpn', 'dGrandtotal', 'vStatus', 'vType', 'vKeterangan', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
