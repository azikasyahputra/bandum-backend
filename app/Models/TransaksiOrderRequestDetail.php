<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiOrderRequestDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_request_detail';

    protected $fillable = ['iId', 'vReqno', 'iIdOrder', 'vNoOrder', 'iIdBarang', 'iIdBarangKemasan', 'iQty', 'iBonus', 'nHarga', 'dDiscount', 'nDiscount', 'dTotal', 'nPpn', 'nGrandTotal', 'vStatus', 'iQtypo', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
