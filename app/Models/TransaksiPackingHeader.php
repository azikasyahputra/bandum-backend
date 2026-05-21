<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPackingHeader extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_packing_header';

    protected $fillable = ['iId', 'vNoPacking', 'iIdOrder', 'vNoOrder', 'iIdCustomer', 'vNamaCustomer', 'eStatus', 'nTotal', 'nTotalDiskon', 'nPpn', 'nBiayaKirim', 'nBiayaPacking', 'nGrandTotal', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
