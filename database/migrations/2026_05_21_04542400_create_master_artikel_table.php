<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_artikel', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vThumbnails', 255)
            ->nullable();
            $table->string('vTitle', 255)
            ->nullable();
            $table->longText('vIsi')
            ->nullable();
            $table->enum('eTampil', ['ya', 'tidak'])
            ->nullable();
            $table->integer('iCreatedid');
            $table->integer('iUpdatedid');
            $table->timestamp('tCreated');
            $table->timestamp('tUpdated');
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('master_artikel');
    }
};
