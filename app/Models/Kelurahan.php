<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelurahan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kelurahan';

    protected $fillable = ['iId', 'iIdProvinsi', 'iIdKota', 'iIdKecamatan', 'vNama', 'vKodepos', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
