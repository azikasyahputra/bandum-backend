<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'stock';

    protected $fillable = ['iId', 'iBarangid', 'iGudangid', 'iCreatedid', 'tCreated', 'iUpdatedid', 'tUpdated', 'iQty', 'iQtybook'];
}
