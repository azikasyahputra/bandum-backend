<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_customer_alamat', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255);
            $table->integer('iIdCustomer');
            $table->integer('iIdProvinsi');
            $table->integer('iIdKota');
            $table->integer('iIdKecamatan');
            $table->integer('iIdKelurahan')
            ->nullable();
            $table->string('vGPS', 255);
            $table->longText('vAlamat');
            $table->string('vNotelp', 255)
            ->nullable();
            $table->string('vNohp', 255)
            ->nullable();
            $table->enum('eUtama', ['ya', 'tidak']);
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
        Schema::dropIfExists('master_customer_alamat');
    }
};
