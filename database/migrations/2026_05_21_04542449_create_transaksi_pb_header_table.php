<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_pb_header', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vPono', 50)
            ->nullable();
            $table->string('vPbno', 50)
            ->nullable();
            $table->date('dDate')
            ->nullable();
            $table->string('vExpb', 50)
            ->nullable();
            $table->integer('iIdCustomer')
            ->nullable();
            $table->integer('iIdGudang')
            ->nullable();
            $table->integer('iIdVendor')
            ->nullable();
            $table->decimal('dTotal', 15, 2)
            ->nullable();
            $table->decimal('dPpn', 15, 2)
            ->nullable();
            $table->decimal('dGrandtotal', 15, 2)
            ->nullable();
            $table->enum('vStatus', ['belum konfirmasi', 'konfirmasi', 'closed'])
            ->nullable();
            $table->string('vNoFakturSupplier', 100)
            ->nullable();
            $table->date('dNoFakturSupplier')
            ->nullable();
            $table->string('vNoFakturPajak', 255)
            ->nullable();
            $table->date('dFakturPajak')
            ->nullable();
            $table->string('vKeterangan', 255)
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
        Schema::dropIfExists('transaksi_pb_header');
    }
};
