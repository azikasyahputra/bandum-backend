<?php

namespace Database\Factories;

use App\Models\Features;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<Features> */
class FeaturesFactory extends Factory
{
    protected $model = Features::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vTitle' => null,
            'vDesc' => null,
            'vIcon' => null,
            'eTampil' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
