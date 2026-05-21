<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiHistory extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'transaksi_history';

    protected $fillable = ['iId', 'iIdTransaction', 'vTransactionNumber', 'eTransactionType', 'iIdBarang', 'vNamaBarang', 'vBatch', 'iIdGudang', 'iIdBarangKemasan', 'vBarangKemasan', 'iQtybef', 'iQty', 'iQtyend', 'dTranscationDate', 'vTransactionReference', 'iCreatedid', 'iUpdatedid', 'tCreated', 'tUpdated', 'nHarga', 'nTotal'];
}
