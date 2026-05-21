<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VendorAlamat extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_vendor_alamat';

    protected $fillable = ['iId', 'vNama', 'vAlamat', 'iIdVendor', 'iIdProvinsi', 'iIdKota', 'iIdKecamatan', 'iIdKelurahan', 'vGPS', 'vNotelp', 'vNohp', 'eUtama', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
