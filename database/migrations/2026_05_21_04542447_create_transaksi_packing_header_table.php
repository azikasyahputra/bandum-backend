<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_packing_header', function (Blueprint $table) {

            $table->bigInteger('iId');
            $table->string('vNoPacking', 50)
            ->nullable();
            $table->integer('iIdOrder');
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->integer('iIdCustomer');
            $table->string('vNamaCustomer', 100);
            $table->enum('eStatus', ['batal', 'proses', 'confirm'])
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
        Schema::dropIfExists('transaksi_packing_header');
    }
};
