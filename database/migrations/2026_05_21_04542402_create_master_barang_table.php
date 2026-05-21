<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_barang', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255)
            ->nullable();
            $table->integer('iIdBrand');
            $table->integer('iIdKategori');
            $table->integer('iIdSubkategori');
            $table->longText('vDeskripsisingkat');
            $table->longText('vDeskripsidetail');
            $table->enum('eBestselling', ['ya', 'tidak'])
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
        Schema::dropIfExists('master_barang');
    }
};
