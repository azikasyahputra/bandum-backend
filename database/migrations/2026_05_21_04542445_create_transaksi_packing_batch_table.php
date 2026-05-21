<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_packing_batch', function (Blueprint $table) {

            $table->bigInteger('iId');
            $table->integer('iIdOrder');
            $table->integer('iIdOrderDetail');
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->integer('iIdPacking');
            $table->string('vNoPacking', 50)
            ->nullable();
            $table->integer('iIdPackingDetail');
            $table->integer('iIdBarang');
            $table->integer('iIdBarangKemasan');
            $table->string('vBatch', 50);
            $table->integer('iQty');
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
        Schema::dropIfExists('transaksi_packing_batch');
    }
};
