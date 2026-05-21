<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kota';

    protected $fillable = ['iId', 'iIdProvinsi', 'vNama', 'vIbukota', 'vBsni', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
