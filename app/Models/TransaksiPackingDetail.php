<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPackingDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_packing_detail';

    protected $fillable = ['iId', 'iIdOrder', 'iIdOrderDetail', 'vNoOrder', 'iIdPacking', 'vNoPacking', 'iIdBarang', 'iIdBarangKemasan', 'nHarga', 'nDisc', 'iQty', 'nPpn', 'nTotal', 'eStatus', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
