<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_faq';

    protected $fillable = ['iId', 'vTitle', 'vIsi', 'eTampil', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eDeleted'];
}
