<?php

namespace Database\Factories;

use App\Models\Vendor;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<Vendor> */
class VendorFactory extends Factory
{
    protected $model = Vendor::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'vProfilepic' => null,
            'eTipe' => fake()->randomElement(["principal\/pemegang merk","authorized distributor","trading umum\/toko ritel","wholesaler\/stockist"]),
            'vNamadirektur' => null,
            'dTanggalberdiri' => fake()->date(),
            'eJumlahkaryawan' => fake()->randomElement(["<10","10-50","50-100","100-200",">200"]),
            'vOfficephone' => fake()->phoneNumber(),
            'vNamapic' => null,
            'vKontakpic' => null,
            'iIdAlamatutama' => fake()->numberBetween(1, 1000),
            'vSiup' => null,
            'vFilesiup' => null,
            'vFileaktapendirian' => null,
            'vFiledomisiliperusahaan' => null,
            'vDeskripsi' => null,
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'eVerifikasi' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
