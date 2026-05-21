<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPoDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_po_detail';

    protected $fillable = ['iId', 'vPono', 'vReqno', 'iIdOrderRequestDetail', 'iIdBarang', 'iIdBarangKemasan', 'iQty', 'iBonus', 'nHarga', 'iDiscount', 'nDiscount', 'nTotal', 'nPpn', 'nGrandTotal', 'vStatus', 'vPbcreate', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'iQtypb', 'iQtypbbonus', 'eDeleted'];
}
