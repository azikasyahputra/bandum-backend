<?php

namespace Database\Factories;

use App\Models\TransaksiOrderRequestDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiOrderRequestDetail> */
class TransaksiOrderRequestDetailFactory extends Factory
{
    protected $model = TransaksiOrderRequestDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vReqno' => null,
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iBonus' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'dDiscount' => fake()->randomFloat(2, 0, 1000000),
            'nDiscount' => fake()->randomFloat(2, 0, 1000000),
            'dTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["open","parsial","closed"]),
            'iQtypo' => fake()->numberBetween(1, 1000),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => null,
        ];
    }
}
