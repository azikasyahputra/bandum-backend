<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPbrDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_pbr_detail';

    protected $fillable = ['iId', 'vPbrno', 'vNoBatch', 'dexpired', 'iIdPbdt', 'iIdPodt', 'iIdBarang', 'iIdBarangKemasan', 'iQty', 'iQty2', 'nHarga', 'iDiscount', 'iBonus', 'nTotal', 'nPpn', 'nGrandTotal', 'vStatus', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
