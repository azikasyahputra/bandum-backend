<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang';

    protected $fillable = ['iId', 'vNama', 'iIdBrand', 'iIdKategori', 'iIdSubkategori', 'vDeskripsisingkat', 'vDeskripsidetail', 'eBestselling', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
