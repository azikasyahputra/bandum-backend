<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TransaksiOrderHeader extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_order_header';

    protected $fillable = ['iId', 'vNoOrder', 'iIdCustomer', 'vNamaCustomer', 'iIdAlamat', 'vAlamat', 'iIdPembayaran', 'vPembayaran', 'eTipePembayaran', 'iIdPengiriman', 'vPengiriman', 'iIdJenisPengiriman', 'vJenisPengiriman', 'vCatatan', 'eStatus', 'nTotal', 'nTotalDiskon', 'nPpn', 'nBiayaKirim', 'nBiayaPacking', 'nGrandTotal', 'vSuratJalan', 'vFakturPajak', 'eLunas', 'eDeleted', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated'];

    public function details(): HasMany
    {
        return $this->hasMany(TransaksiOrderDetail::class, 'iIdOrder', 'iId')
            ->where(function ($q) {
                $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
            });
    }
}
