<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerAlamat extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_customer_alamat';

    protected $fillable = ['iId', 'vNama', 'iIdCustomer', 'iIdProvinsi', 'iIdKota', 'iIdKecamatan', 'iIdKelurahan', 'vGPS', 'vAlamat', 'vNotelp', 'vNohp', 'eUtama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
