<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangHistory extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_history';

    protected $fillable = ['iId', 'iIdBarang', 'vNama', 'iIdBrand', 'iIdKategori', 'iIdSubkategori', 'vDeskripsisingkat', 'vDeskripsidetail', 'eBestselling', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
