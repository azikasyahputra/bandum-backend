<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_pb_detail', function (Blueprint $table) {

            $table->integer('iId');
            $table->integer('iIdPodt')
            ->nullable();
            $table->string('vPbno', 20)
            ->nullable();
            $table->string('vNoBatch', 255)
            ->nullable();
            $table->date('dexpired')
            ->nullable();
            $table->integer('iIdBarang')
            ->nullable();
            $table->integer('iIdBarangKemasan')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->integer('iQty2')
            ->nullable();
            $table->integer('iQtyReturn')
            ->nullable();
            $table->decimal('nHarga', 15, 2)
            ->nullable();
            $table->decimal('nDiscount', 15, 2)
            ->nullable();
            $table->decimal('iDiscount', 7, 4)
            ->nullable();
            $table->integer('iBonus')
            ->nullable();
            $table->integer('iBonus2')
            ->nullable();
            $table->integer('iBonusRetur')
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 15, 2)
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->string('eDeleted', 5)
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_pb_detail');
    }
};
