<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPackingBatch extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_packing_batch';

    protected $fillable = ['iId', 'iIdOrder', 'iIdOrderDetail', 'vNoOrder', 'iIdPacking', 'vNoPacking', 'iIdPackingDetail', 'iIdBarang', 'iIdBarangKemasan', 'vBatch', 'iQty', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
