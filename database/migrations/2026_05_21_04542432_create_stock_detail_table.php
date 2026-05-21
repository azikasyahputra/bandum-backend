<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_detail', function (Blueprint $table) {

            $table->integer('iId');
            $table->integer('iBarangId')
            ->nullable();
            $table->string('vBatch', 255)
            ->nullable();
            $table->date('dexpired')
            ->nullable();
            $table->integer('iQty')
            ->nullable();
            $table->integer('iQty2')
            ->nullable();
            $table->date('dUpdated')
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tCreated')
            ->nullable();
            $table->timestamp('tUpdated')
            ->nullable();
            $table->integer('iGudangId')
            ->nullable();
            $table->integer('iQtybook')
            ->nullable();
            $table->integer('iQtySum')
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_detail');
    }
};
