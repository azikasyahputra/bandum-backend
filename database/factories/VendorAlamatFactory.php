<?php

namespace Database\Factories;

use App\Models\VendorAlamat;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<VendorAlamat> */
class VendorAlamatFactory extends Factory
{
    protected $model = VendorAlamat::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'vAlamat' => fake()->word(),
            'iIdVendor' => fake()->numberBetween(1, 1000),
            'iIdProvinsi' => fake()->numberBetween(1, 1000),
            'iIdKota' => fake()->numberBetween(1, 1000),
            'iIdKecamatan' => fake()->numberBetween(1, 1000),
            'iIdKelurahan' => fake()->numberBetween(1, 1000),
            'vGPS' => null,
            'vNotelp' => fake()->phoneNumber(),
            'vNohp' => fake()->phoneNumber(),
            'eUtama' => fake()->randomElement(["ya","tidak"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
