<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_pbr_header', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vPbrno', 20)
            ->nullable();
            $table->string('vPbno', 20)
            ->nullable();
            $table->string('vPono', 20)
            ->nullable();
            $table->date('dDate')
            ->nullable();
            $table->integer('iIdCustomer')
            ->nullable();
            $table->integer('iIdGudang')
            ->nullable();
            $table->integer('iIdVendor')
            ->nullable();
            $table->decimal('nTotal', 20, 2)
            ->nullable();
            $table->decimal('nPpn', 20, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 20, 2)
            ->nullable();
            $table->enum('vStatus', ['belum konfirmasi', 'konfirmasi'])
            ->nullable();
            $table->string('vNoFakturSupplier', 100)
            ->nullable();
            $table->date('dFakturSupplier')
            ->nullable();
            $table->string('vKeterangan', 255)
            ->nullable();
            $table->string('vFakturPajak', 255)
            ->nullable();
            $table->date('dFakturPajak')
            ->nullable();
            $table->enum('vType', ['return admin', 'return asli'])
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
        Schema::dropIfExists('transaksi_pbr_header');
    }
};
