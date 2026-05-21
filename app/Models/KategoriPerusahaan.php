<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KategoriPerusahaan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kategori_perusahaan';

    protected $fillable = ['iId', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
