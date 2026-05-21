<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_provinsi', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 100)
            ->nullable();
            $table->string('vIbukota', 100)
            ->nullable();
            $table->char('vBsni', 5)
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
        Schema::dropIfExists('master_provinsi');
    }
};
