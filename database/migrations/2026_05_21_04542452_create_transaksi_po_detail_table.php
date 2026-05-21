<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_po_detail', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vPono', 20)
            ->nullable();
            $table->string('vReqno', 100)
            ->nullable();
            $table->integer('iIdOrderRequestDetail')
            ->nullable();
            $table->integer('iIdBarang')
            ->nullable();
            $table->integer('iIdBarangKemasan')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->integer('iBonus')
            ->nullable();
            $table->decimal('nHarga', 15, 2)
            ->nullable();
            $table->decimal('iDiscount', 7, 4)
            ->nullable();
            $table->decimal('nDiscount', 15, 2)
            ->nullable();
            $table->decimal('nTotal', 15, 2)
            ->nullable();
            $table->decimal('nPpn', 15, 2)
            ->nullable();
            $table->decimal('nGrandTotal', 15, 2)
            ->nullable();
            $table->enum('vStatus', ['open', 'parsial', 'closed'])
            ->nullable();
            $table->enum('vPbcreate', ['ya', 'sebagian', 'tidak'])
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->integer('iQtypb')
            ->nullable();
            $table->integer('iQtypbbonus')
            ->nullable();
            $table->string('eDeleted', 5)
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_po_detail');
    }
};
