<?php

namespace Database\Factories;

use App\Models\Testimoni;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<Testimoni> */
class TestimoniFactory extends Factory
{
    protected $model = Testimoni::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdTransaksi' => fake()->numberBetween(1, 1000),
            'iIdUser' => fake()->numberBetween(1, 1000),
            'vJudul' => null,
            'vReview' => null,
            'eTampil' => fake()->randomElement(["ya","tidak"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
