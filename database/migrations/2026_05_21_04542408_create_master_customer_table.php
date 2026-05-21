<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_customer', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255);
            $table->string('vEmail', 255)
            ->nullable();
            $table->integer('iIdUser');
            $table->integer('iIdJenisperusahaan');
            $table->integer('iIdKlasifikasiperusahaan')
            ->nullable();
            $table->string('vProfilepic', 255)
            ->nullable();
            $table->string('vKtp', 255);
            $table->string('vFilektp', 255);
            $table->string('vNpwp', 255);
            $table->string('vFilenpwp', 255);
            $table->string('vSiup', 255)
            ->nullable();
            $table->string('vFilesiup', 255)
            ->nullable();
            $table->string('vFileaktapendirian', 255)
            ->nullable();
            $table->string('vFiledomisiliperusahaan', 255)
            ->nullable();
            $table->enum('eTipe', ['individu', 'perusahaan'])
            ->nullable()
            ->default('Individu');
            $table->enum('eVerifikasi', ['ya', 'tidak'])
            ->default('Tidak');
            $table->enum('isTrustedBuyer', ['ya', 'tidak'])
            ->nullable()
            ->default('Tidak');
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->default('Tidak');
            $table->integer('iCreatedid');
            $table->integer('iUpdatedid');
            $table->timestamp('tCreated')
            ->default('CURRENT_TIMESTAMP');
            $table->timestamp('tUpdated')
            ->default('CURRENT_TIMESTAMP');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('master_customer');
    }
};
