<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KlasifikasiPerusahaan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_klasifikasi_perusahaan';

    protected $fillable = ['iId', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
