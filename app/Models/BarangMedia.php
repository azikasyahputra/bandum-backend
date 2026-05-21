<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangMedia extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_media';

    protected $fillable = ['iId', 'iIdBarang', 'eTipe', 'vLink', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
