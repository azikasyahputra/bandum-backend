<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipePembayaran extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_tipe_pembayaran';

    protected $fillable = ['iId', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
