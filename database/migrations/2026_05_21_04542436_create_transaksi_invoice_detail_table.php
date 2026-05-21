<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_invoice_detail', function (Blueprint $table) {

            $table->bigInteger('iId');
            $table->integer('iIdInvoice');
            $table->string('vNoInvoice', 50)
            ->nullable();
            $table->integer('iIdOrder');
            $table->integer('iIdOrderDetail');
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->integer('iIdPacking');
            $table->integer('iIdPackingDetail');
            $table->string('vNoPacking', 50)
            ->nullable();
            $table->integer('iIdBarang');
            $table->integer('iIdBarangKemasan');
            $table->decimal('nHarga', 15, 2)
            ->nullable();
            $table->decimal('nDisc', 15, 2)
            ->nullable();
            $table->integer('iQty');
            $table->integer('iQtyKecil');
            $table->integer('iQtyRetur');
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->enum('eStatus', ['open', 'close'])
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
        Schema::dropIfExists('transaksi_invoice_detail');
    }
};
