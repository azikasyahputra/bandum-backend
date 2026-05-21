<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<Customer> */
class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNama' => fake()->word(),
            'vEmail' => null,
            'iIdUser' => fake()->numberBetween(1, 1000),
            'iIdJenisperusahaan' => fake()->numberBetween(1, 1000),
            'iIdKlasifikasiperusahaan' => fake()->numberBetween(1, 1000),
            'vProfilepic' => null,
            'vKtp' => fake()->word(),
            'vFilektp' => fake()->word(),
            'vNpwp' => fake()->word(),
            'vFilenpwp' => fake()->word(),
            'vSiup' => null,
            'vFilesiup' => null,
            'vFileaktapendirian' => null,
            'vFiledomisiliperusahaan' => null,
            'eTipe' => fake()->randomElement(["individu","perusahaan"]),
            'eVerifikasi' => fake()->randomElement(["ya","tidak"]),
            'isTrustedBuyer' => fake()->randomElement(["ya","tidak"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
