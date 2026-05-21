<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_gudang', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 30)
            ->nullable();
            $table->string('eStatus', 255)
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
        Schema::dropIfExists('master_gudang');
    }
};
