<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Negara extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_negara';

    protected $fillable = ['iId', 'vNama', 'eDeleted', 'vKode', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
