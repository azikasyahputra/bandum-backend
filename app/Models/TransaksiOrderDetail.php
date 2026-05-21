<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiOrderDetail extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_detail';

    protected $fillable = ['iId', 'iIdOrder', 'vNoOrder', 'iIdBarang', 'iIdBarangKemasan', 'nHarga', 'nDisc', 'iQty', 'iQtyKecil', 'nPpn', 'nTotal', 'iQtyOr', 'iQtyPo', 'iQtyPl', 'iQtyKirim', 'iQtyRetur', 'eStatus', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'iIsiKemasanKecil'];
}
