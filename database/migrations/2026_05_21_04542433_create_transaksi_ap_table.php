<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_ap', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vPbno', 20)
            ->nullable();
            $table->string('vPono', 20)
            ->nullable();
            $table->integer('iIdVendor');
            $table->decimal('nTotal', 14, 2)
            ->nullable();
            $table->decimal('nPpn', 14, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 14, 2)
            ->nullable();
            $table->date('dDuedate')
            ->nullable();
            $table->decimal('nTotaldibayar', 14, 2)
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->dateTime('tCreated')
            ->nullable();
            $table->dateTime('tUpdated')
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_ap');
    }
};
