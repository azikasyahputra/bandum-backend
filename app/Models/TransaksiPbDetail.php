<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPbDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_pb_detail';

    protected $fillable = ['iId', 'iIdPodt', 'vPbno', 'vNoBatch', 'dexpired', 'iIdBarang', 'iIdBarangKemasan', 'iQty', 'iQty2', 'iQtyReturn', 'nHarga', 'nDiscount', 'iDiscount', 'iBonus', 'iBonus2', 'iBonusRetur', 'nTotal', 'nPpn', 'nGrandTotal', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
