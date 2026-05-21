<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'wishlist';

    protected $fillable = ['iId', 'iIdUser', 'iIdBarang', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
