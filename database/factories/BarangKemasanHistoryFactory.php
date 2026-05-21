<?php

namespace Database\Factories;

use App\Models\BarangKemasanHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<BarangKemasanHistory> */
class BarangKemasanHistoryFactory extends Factory
{
    protected $model = BarangKemasanHistory::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nHargastrike' => fake()->randomFloat(2, 0, 1000000),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'nIsi' => fake()->numberBetween(1, 1000),
            'eTerkecil' => fake()->randomElement(["ya","tidak"]),
            'eTerbesar' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
