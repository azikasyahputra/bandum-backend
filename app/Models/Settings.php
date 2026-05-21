<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_settings';

    protected $fillable = ['iId', 'vIsi', 'eTampil', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted', 'eTipe'];
}
