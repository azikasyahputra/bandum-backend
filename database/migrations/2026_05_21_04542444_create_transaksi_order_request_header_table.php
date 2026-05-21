<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi_order_request_header', function (Blueprint $table) {

            $table->integer('iId');
            $table->string('vReqno', 50)
            ->nullable();
            $table->date('dDate')
            ->nullable();
            $table->integer('iIdGudang')
            ->nullable();
            $table->integer('iIdCustomer')
            ->nullable();
            $table->integer('iIdVendor')
            ->nullable();
            $table->integer('iTop')
            ->nullable();
            $table->decimal('dTotal', 15, 2)
            ->nullable();
            $table->decimal('dPpn', 15, 2)
            ->nullable();
            $table->decimal('dGrandtotal', 15, 2)
            ->nullable();
            $table->enum('vStatus', ['baru', 'proses', 'confirm'])
            ->nullable();
            $table->enum('vType', ['sales', 'stock'])
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
        Schema::dropIfExists('transaksi_order_request_header');
    }
};
