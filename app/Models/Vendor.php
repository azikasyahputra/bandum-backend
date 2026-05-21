<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_vendor';

    protected $fillable = ['iId', 'vNama', 'vProfilepic', 'eTipe', 'vNamadirektur', 'dTanggalberdiri', 'eJumlahkaryawan', 'vOfficephone', 'vNamapic', 'vKontakpic', 'iIdAlamatutama', 'vSiup', 'vFilesiup', 'vFileaktapendirian', 'vFiledomisiliperusahaan', 'vDeskripsi', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'eVerifikasi'];
}
