<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_history', function (Blueprint $table) {

            $table->integer('iId');
            $table->integer('iIdTransaction')
            ->nullable();
            $table->string('vTransactionNumber', 30)
            ->nullable();
            $table->enum('eTransactionType', ['iss-so', 'rct-so', 'rct-po', 'iss-po'])
            ->nullable();
            $table->integer('iIdBarang')
            ->nullable();
            $table->string('vNamaBarang', 100)
            ->nullable();
            $table->string('vBatch', 30)
            ->nullable();
            $table->integer('iIdGudang')
            ->nullable();
            $table->integer('iIdBarangKemasan')
            ->nullable();
            $table->string('vBarangKemasan', 20)
            ->nullable();
            $table->integer('iQtybef')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->integer('iQtyend')
            ->nullable();
            $table->date('dTranscationDate')
            ->nullable();
            $table->string('vTransactionReference', 50)
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->decimal('nHarga', 10, 2)
            ->nullable();
            $table->decimal('nTotal', 10, 0)
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_history');
    }
};
