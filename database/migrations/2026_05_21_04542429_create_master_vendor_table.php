<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_vendor', function (Blueprint $table) {

            $table->bigIncrements('iId');
            $table->string('vNama', 255)
            ->nullable();
            $table->string('vProfilepic', 255)
            ->nullable();
            $table->enum('eTipe', ['principal/pemegang merk', 'authorized distributor', 'trading umum/toko ritel', 'wholesaler/stockist'])
            ->nullable();
            $table->string('vNamadirektur', 255)
            ->nullable();
            $table->date('dTanggalberdiri');
            $table->enum('eJumlahkaryawan', ['<10', '10-50', '50-100', '100-200', '>200'])
            ->nullable();
            $table->string('vOfficephone', 255)
            ->nullable();
            $table->string('vNamapic', 255)
            ->nullable();
            $table->string('vKontakpic', 255)
            ->nullable();
            $table->integer('iIdAlamatutama');
            $table->string('vSiup', 255)
            ->nullable();
            $table->string('vFilesiup', 255)
            ->nullable();
            $table->string('vFileaktapendirian', 255)
            ->nullable();
            $table->string('vFiledomisiliperusahaan', 255)
            ->nullable();
            $table->text('vDeskripsi')
            ->nullable();
            $table->enum('eDeleted', ['ya', 'tidak'])
            ->nullable();
            $table->integer('iCreatedid');
            $table->integer('iUpdatedid');
            $table->timestamp('tCreated');
            $table->timestamp('tUpdated');
            $table->enum('eVerifikasi', ['ya', 'tidak'])
            ->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('master_vendor');
    }
};
