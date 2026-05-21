<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_pbr_detail', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vPbrno', 20)
            ->nullable();
            $table->string('vNoBatch', 255)
            ->nullable();
            $table->date('dexpired')
            ->nullable();
            $table->integer('iIdPbdt')
            ->nullable();
            $table->integer('iIdPodt')
            ->nullable();
            $table->integer('iIdBarang')
            ->nullable();
            $table->integer('iIdBarangKemasan')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->integer('iQty2')
            ->nullable();
            $table->decimal('nHarga', 20, 2)
            ->nullable();
            $table->decimal('iDiscount', 7, 4)
            ->nullable();
            $table->integer('iBonus')
            ->nullable();
            $table->decimal('nTotal', 20, 2)
            ->nullable();
            $table->decimal('nPpn', 20, 0)
            ->nullable();
            $table->decimal('nGrandTotal', 20, 0)
            ->nullable();
            $table->enum('vStatus', ['belum konfirmasi', 'konfirmasi'])
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
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_pbr_detail');
    }
};
