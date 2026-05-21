<?php

namespace Database\Factories;

use App\Models\BarangMedia;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<BarangMedia> */
class BarangMediaFactory extends Factory
{
    protected $model = BarangMedia::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'eTipe' => fake()->randomElement(["video","gambar","gambar utama"]),
            'vLink' => null,
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
