<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kecamatan';

    protected $fillable = ['iId', 'iIdProvinsi', 'iIdKota', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
