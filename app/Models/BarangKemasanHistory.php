<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangKemasanHistory extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_kemasan_history';

    protected $fillable = ['iId', 'iIdBarangKemasan', 'iIdBarang', 'vNama', 'nHarga', 'nHargastrike', 'eDeleted', 'nIsi', 'eTerkecil', 'eTerbesar', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
