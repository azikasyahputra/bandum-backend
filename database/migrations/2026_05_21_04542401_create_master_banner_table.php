<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_banner', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->enum('eTipe', ['big banner', 'small banner 1', 'small banner 2'])
            ->nullable();
            $table->string('vTitle', 255)
            ->nullable();
            $table->string('vDetail', 255)
            ->nullable();
            $table->string('vNamaLink', 255)
            ->nullable();
            $table->string('vLink', 255)
            ->nullable();
            $table->string('vImage', 255)
            ->nullable();
            $table->enum('eTampil', ['ya', 'tidak'])
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
        Schema::dropIfExists('master_banner');
    }
};
