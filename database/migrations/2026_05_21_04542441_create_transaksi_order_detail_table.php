<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_order_detail', function (Blueprint $table) {

            $table->bigInteger('iId');
            $table->integer('iIdOrder');
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->integer('iIdBarang');
            $table->integer('iIdBarangKemasan');
            $table->decimal('nHarga', 15, 2)
            ->nullable();
            $table->decimal('nDisc', 15, 2)
            ->nullable();
            $table->integer('iQty');
            $table->integer('iQtyKecil');
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->integer('iQtyOr')
            ->nullable();
            $table->integer('iQtyPo')
            ->nullable();
            $table->integer('iQtyPl')
            ->nullable();
            $table->integer('iQtyKirim')
            ->nullable();
            $table->integer('iQtyRetur')
            ->nullable();
            $table->enum('eStatus', ['open', 'close'])
            ->nullable();
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->nullable();
            $table->integer('iCreatedid');
            $table->integer('iUpdatedid');
            $table->timestamp('tCreated');
            $table->timestamp('tUpdated');
            $table->integer('iIsiKemasanKecil');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_order_detail');
    }
};
