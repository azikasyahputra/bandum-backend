<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Features extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_features';

    protected $fillable = ['iId', 'vTitle', 'vDesc', 'vIcon', 'eTampil', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
}
