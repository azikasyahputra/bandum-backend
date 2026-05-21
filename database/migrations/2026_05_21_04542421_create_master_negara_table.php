<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_negara', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255)
            ->nullable();
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->nullable();
            $table->string('vKode', 255)
            ->nullable();
            $table->integer('iCreatedid')
            ->nullable();
            $table->integer('iUpdatedid')
            ->nullable();
            $table->timestamp('tCreated');
            $table->timestamp('tUpdated');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('master_negara');
    }
};
