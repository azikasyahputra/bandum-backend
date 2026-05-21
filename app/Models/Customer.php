<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_customer';

    protected $fillable = ['iId', 'vNama', 'vEmail', 'iIdUser', 'iIdJenisperusahaan', 'iIdKlasifikasiperusahaan', 'vProfilepic', 'vKtp', 'vFilektp', 'vNpwp', 'vFilenpwp', 'vSiup', 'vFilesiup', 'vFileaktapendirian', 'vFiledomisiliperusahaan', 'eTipe', 'eVerifikasi', 'isTrustedBuyer', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
