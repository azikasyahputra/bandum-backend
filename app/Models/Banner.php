<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_banner';

    protected $fillable = ['iId', 'eTipe', 'vTitle', 'vDetail', 'vNamaLink', 'vLink', 'vImage', 'eTampil', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
