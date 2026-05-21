<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiKeranjang extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_keranjang';

    protected $fillable = ['iId', 'iIdUser', 'iIdBarang', 'iIdKemasan', 'nPrice', 'nDisc', 'iQty', 'nJumlah', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
