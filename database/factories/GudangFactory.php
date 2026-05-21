<?php

namespace Database\Factories;

use App\Models\Gudang;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<Gudang> */
class GudangFactory extends Factory
{
    protected $model = Gudang::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'eStatus' => null,
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
