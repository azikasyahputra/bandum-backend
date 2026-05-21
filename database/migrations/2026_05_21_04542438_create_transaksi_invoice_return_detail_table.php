<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_invoice_return_detail', function (Blueprint $table) {

            $table->integer('iId');
            $table->integer('iBarangId')
            ->nullable();
            $table->string('vNoInvoiceReturn', 100)
            ->nullable();
            $table->string('vNoSo', 20)
            ->nullable();
            $table->integer('iSodetId')
            ->nullable();
            $table->integer('iKemasan')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->decimal('dHpp', 10, 0)
            ->nullable();
            $table->decimal('dTotal', 10, 0)
            ->nullable();
            $table->decimal('dPpn', 10, 0)
            ->nullable();
            $table->decimal('dGrandtotal', 10, 0)
            ->nullable();
            $table->integer('iCreatedId')
            ->nullable();
            $table->integer('iUpdatedId')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->string('vBatch', 20)
            ->nullable();
            $table->integer('iInvId')
            ->nullable();
            $table->integer('iBonus')
            ->nullable();
            $table->integer('iMultiBatch')
            ->nullable();
            $table->date('dExpired')
            ->nullable();
            $table->decimal('dDiscount', 10, 2)
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_invoice_return_detail');
    }
};
