<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_invoice_return_header', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vNoInvoiceReturn', 50)
            ->nullable();
            $table->string('vNoInvoice', 50)
            ->nullable();
            $table->string('vNoOrder', 50)
            ->nullable();
            $table->integer('iIdCustomer')
            ->nullable();
            $table->date('dDate')
            ->nullable();
            $table->string('vKeterangan', 100)
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 15, 2)
            ->nullable();
            $table->integer('iReturAll')
            ->nullable();
            $table->enum('eStatus', ['proses', 'confirm'])
            ->nullable();
            $table->integer('iGudangId')
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_invoice_return_header');
    }
};
