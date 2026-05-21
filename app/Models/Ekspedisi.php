<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ekspedisi extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_ekspedisi';

    protected $fillable = ['iId', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
