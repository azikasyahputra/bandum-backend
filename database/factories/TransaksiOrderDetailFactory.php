<?php

namespace Database\Factories;

use App\Models\TransaksiOrderDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiOrderDetail> */
class TransaksiOrderDetailFactory extends Factory
{
    protected $model = TransaksiOrderDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nDisc' => fake()->randomFloat(2, 0, 1000000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iQtyKecil' => fake()->numberBetween(1, 1000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'iQtyOr' => fake()->numberBetween(1, 1000),
            'iQtyPo' => fake()->numberBetween(1, 1000),
            'iQtyPl' => fake()->numberBetween(1, 1000),
            'iQtyKirim' => fake()->numberBetween(1, 1000),
            'iQtyRetur' => fake()->numberBetween(1, 1000),
            'eStatus' => fake()->randomElement(["open","close"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'iIsiKemasanKecil' => fake()->numberBetween(1, 1000),
        ];
    }
}
