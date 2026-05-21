<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subkategori extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_subkategori';

    protected $fillable = ['iId', 'iIdKategori', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
