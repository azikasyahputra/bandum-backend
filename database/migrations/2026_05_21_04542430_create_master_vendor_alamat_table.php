<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_vendor_alamat', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255)
            ->nullable();
            $table->longText('vAlamat');
            $table->integer('iIdVendor');
            $table->integer('iIdProvinsi');
            $table->integer('iIdKota');
            $table->integer('iIdKecamatan');
            $table->integer('iIdKelurahan');
            $table->string('vGPS', 255)
            ->nullable();
            $table->string('vNotelp', 255)
            ->nullable();
            $table->string('vNohp', 255)
            ->nullable();
            $table->enum('eUtama', ['ya', 'tidak'])
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
        Schema::dropIfExists('master_vendor_alamat');
    }
};
