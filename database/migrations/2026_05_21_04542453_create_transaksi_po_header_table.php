<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_po_header', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vPbno', 50)
            ->nullable();
            $table->string('vPono', 20)
            ->nullable();
            $table->string('vReqno', 20)
            ->nullable();
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->date('dDate')
            ->nullable();
            $table->integer('iSupplierId')
            ->nullable();
            $table->integer('iPelangganId')
            ->nullable();
            $table->integer('iTop')
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 15, 2)
            ->nullable();
            $table->enum('vStatus', ['belum konfirmasi', 'konfirmasi', 'closed', 'proses', 'pb sebagian'])
            ->nullable();
            $table->enum('vType', ['sales', 'stock'])
            ->nullable();
            $table->string('vNoFakturVendor', 100)
            ->nullable();
            $table->enum('vPbcreate', ['ya', 'sebagian', 'tidak'])
            ->nullable();
            $table->integer('iGudangId')
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->nullable();
            $table->string('vKeterangan', 255)
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_po_header');
    }
};
