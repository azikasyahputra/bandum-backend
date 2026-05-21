<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiAp extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_ap';

    protected $fillable = ['iId', 'vPbno', 'vPono', 'iIdVendor', 'nTotal', 'nPpn', 'nGrandTotal', 'dDuedate', 'nTotaldibayar', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];
}
