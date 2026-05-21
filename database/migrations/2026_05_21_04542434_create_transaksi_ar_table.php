<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_ar', function (Blueprint $table) {

            $table->integer('iId');
            $table->integer('iIdCustomer')
            ->nullable();
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->string('vNoPacking', 50)
            ->nullable();
            $table->string('vNoInvoice', 50)
            ->nullable();
            $table->date('dInvoiceDate')
            ->nullable();
            $table->date('dDueDate')
            ->nullable();
            $table->string('iTop', 255)
            ->nullable();
            $table->enum('eTipePembayaran', ['cash', 'kredit'])
            ->nullable();
            $table->enum('eTipe', ['sales', 'retur'])
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->enum('eLunas', ['ya', 'tidak'])
            ->nullable();
            $table->decimal('nBiayaKirim', 15, 2)
            ->nullable();
            $table->decimal('nBiayaPacking', 15, 2)
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->decimal('nTotalTerbayar', 15, 2)
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_ar');
    }
};
