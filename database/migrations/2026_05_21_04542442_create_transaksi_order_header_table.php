<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_order_header', function (Blueprint $table) {

            $table->bigInteger('iId');
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->integer('iIdCustomer');
            $table->string('vNamaCustomer', 100);
            $table->integer('iIdAlamat');
            $table->string('vAlamat', 255)
            ->nullable();
            $table->integer('iIdPembayaran');
            $table->string('vPembayaran', 50)
            ->nullable();
            $table->enum('eTipePembayaran', ['cash', 'kredit'])
            ->nullable();
            $table->string('iIdPengiriman', 255)
            ->nullable();
            $table->string('vPengiriman', 50)
            ->nullable();
            $table->string('iIdJenisPengiriman', 255)
            ->nullable();
            $table->string('vJenisPengiriman', 50)
            ->nullable();
            $table->string('vCatatan', 255)
            ->nullable();
            $table->enum('eStatus', ['baru', 'proses', 'packing', 'dikirim', 'diterima', 'komplain', 'request pelunasan', 'pelunasan terverifikasi', 'selesai', 'batal'])
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->decimal('nTotalDiskon', 15, 2)
            ->nullable();
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nBiayaKirim', 15, 2)
            ->nullable();
            $table->decimal('nBiayaPacking', 15, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 15, 2)
            ->nullable();
            $table->string('vSuratJalan', 255)
            ->nullable();
            $table->string('vFakturPajak', 255)
            ->nullable();
            $table->enum('eLunas', ['tidak', 'sebagian', 'ya'])
            ->nullable();
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->nullable();
            $table->integer('iCreatedid');
            $table->integer('iUpdatedid');
            $table->timestamp('tCreated');
            $table->timestamp('tUpdated');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_order_header');
    }
};
