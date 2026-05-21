<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockDetail extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'stock_detail';

    protected $fillable = ['iId', 'iBarangId', 'vBatch', 'dexpired', 'iQty', 'iQty2', 'dUpdated', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'iGudangId', 'iQtybook', 'iQtySum'];
}
