<?php

namespace Database\Factories;

use App\Models\JenisPengiriman;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<JenisPengiriman> */
class JenisPengirimanFactory extends Factory
{
    protected $model = JenisPengiriman::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdExpedisi' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
