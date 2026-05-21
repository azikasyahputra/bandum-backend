<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_kategori';

    protected $fillable = ['iId', 'vNama', 'vIcon', 'vIconColor', 'vBackground', 'eFeatured', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
