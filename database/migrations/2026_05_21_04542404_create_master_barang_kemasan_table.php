<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_barang_kemasan', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->integer('iIdBarang');
            $table->string('vNama', 255)
            ->nullable();
            $table->decimal('nHarga', 14, 0)
            ->nullable();
            $table->decimal('nHargastrike', 14, 0)
            ->nullable();
            $table->string('vSku', 255)
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
        Schema::dropIfExists('master_barang_kemasan');
    }
};
