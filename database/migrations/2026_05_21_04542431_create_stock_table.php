<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock', function (Blueprint $table) {

            $table->integer('iId');
            $table->integer('iBarangid')
            ->nullable();
            $table->integer('iGudangid')
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->integer('iQtybook')
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock');
    }
};
