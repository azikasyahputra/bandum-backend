<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimoni extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_testimoni';

    protected $fillable = ['iId', 'iIdTransaksi', 'iIdUser', 'vJudul', 'vReview', 'eTampil', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
