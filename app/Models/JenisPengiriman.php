<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JenisPengiriman extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_jenis_pengiriman';

    protected $fillable = ['iId', 'iIdExpedisi', 'vNama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
