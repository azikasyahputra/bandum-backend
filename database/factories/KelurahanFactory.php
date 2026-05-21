<?php

namespace Database\Factories;

use App\Models\Kelurahan;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<Kelurahan> */
class KelurahanFactory extends Factory
{
    protected $model = Kelurahan::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdProvinsi' => fake()->numberBetween(1, 1000),
            'iIdKota' => fake()->numberBetween(1, 1000),
            'iIdKecamatan' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'vKodepos' => null,
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
