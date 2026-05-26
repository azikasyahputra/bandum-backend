<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangKemasan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_kemasan';

    protected $fillable = ['iId', 'iIdBarang', 'vNama', 'nHarga', 'nHargastrike', 'vSku', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
