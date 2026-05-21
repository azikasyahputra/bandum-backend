<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_kategori', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255)
            ->nullable();
            $table->string('vIcon', 255)
            ->nullable();
            $table->string('vIconColor', 255)
            ->nullable();
            $table->string('vBackground', 255)
            ->nullable();
            $table->enum('eFeatured', ['ya', 'tidak'])
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
        Schema::dropIfExists('master_kategori');
    }
};
