<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_settings', function (Blueprint $table) {

            $table->bigIncrements('iId');
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
            $table->enum('eTipe', ['handphone', 'telpon', 'alamat', 'email'])
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('master_settings');
    }
};
