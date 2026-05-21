<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gudang extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_gudang';

    protected $fillable = ['iId', 'vNama', 'eStatus', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'eDeleted'];
}
