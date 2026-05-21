<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_keranjang', function (Blueprint $table) {

            $table->bigInteger('iId');
            $table->integer('iIdUser');
            $table->integer('iIdBarang');
            $table->integer('iIdKemasan');
            $table->decimal('nPrice', 15, 2)
            ->nullable();
            $table->decimal('nDisc', 14, 6)
            ->nullable();
            $table->integer('iQty');
            $table->decimal('nJumlah', 15, 2)
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
        Schema::dropIfExists('transaksi_keranjang');
    }
};
