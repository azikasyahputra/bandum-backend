<?php

namespace Database\Factories;

use App\Models\TransaksiPackingBatch;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPackingBatch> */
class TransaksiPackingBatchFactory extends Factory
{
    protected $model = TransaksiPackingBatch::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'iIdOrderDetail' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdPacking' => fake()->numberBetween(1, 1000),
            'vNoPacking' => null,
            'iIdPackingDetail' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'vBatch' => fake()->word(),
            'iQty' => fake()->numberBetween(1, 1000),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
