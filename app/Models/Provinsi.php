<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_provinsi';

    protected $fillable = ['iId', 'vNama', 'vIbukota', 'vBsni', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
