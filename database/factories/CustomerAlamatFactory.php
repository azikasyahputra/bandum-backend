<?php

namespace Database\Factories;

use App\Models\CustomerAlamat;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<CustomerAlamat> */
class CustomerAlamatFactory extends Factory
{
    protected $model = CustomerAlamat::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNama' => fake()->word(),
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'iIdProvinsi' => fake()->numberBetween(1, 1000),
            'iIdKota' => fake()->numberBetween(1, 1000),
            'iIdKecamatan' => fake()->numberBetween(1, 1000),
            'iIdKelurahan' => fake()->numberBetween(1, 1000),
            'vGPS' => fake()->word(),
            'vAlamat' => fake()->word(),
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
