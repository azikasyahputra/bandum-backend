<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_artikel';

    protected $fillable = ['iId', 'vThumbnails', 'vTitle', 'vIsi', 'eTampil', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
}
