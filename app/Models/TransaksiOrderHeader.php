<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiOrderHeader extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_header';

    protected $fillable = ['iId', 'vNoOrder', 'iIdCustomer', 'vNamaCustomer', 'iIdAlamat', 'vAlamat', 'iIdPembayaran', 'vPembayaran', 'eTipePembayaran', 'iIdPengiriman', 'vPengiriman', 'iIdJenisPengiriman', 'vJenisPengiriman', 'vCatatan', 'eStatus', 'nTotal', 'nTotalDiskon', 'nPpn', 'nBiayaKirim', 'nBiayaPacking', 'nGrandTotal', 'vSuratJalan', 'vFakturPajak', 'eLunas', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
