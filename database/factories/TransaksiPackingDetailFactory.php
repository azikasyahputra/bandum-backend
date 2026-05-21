<?php

namespace Database\Factories;

use App\Models\TransaksiPackingDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPackingDetail> */
class TransaksiPackingDetailFactory extends Factory
{
    protected $model = TransaksiPackingDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'iIdOrderDetail' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdPacking' => fake()->numberBetween(1, 1000),
            'vNoPacking' => null,
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nDisc' => fake()->randomFloat(2, 0, 1000000),
            'iQty' => fake()->numberBetween(1, 1000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'eStatus' => fake()->randomElement(["open","close"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
