<?php

namespace Database\Factories;

use App\Models\BarangKemasan;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<BarangKemasan> */
class BarangKemasanFactory extends Factory
{
    protected $model = BarangKemasan::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nHargastrike' => fake()->randomFloat(2, 0, 1000000),
            'vSku' => fake()->unique()->regexify('BRG[A-Z0-9]{4}-\d{2}'),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
