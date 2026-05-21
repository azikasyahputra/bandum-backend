<?php

namespace Database\Factories;

use App\Models\TransaksiPoDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPoDetail> */
class TransaksiPoDetailFactory extends Factory
{
    protected $model = TransaksiPoDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vPono' => null,
            'vReqno' => null,
            'iIdOrderRequestDetail' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iBonus' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'iDiscount' => fake()->randomFloat(2, 0, 1000000),
            'nDiscount' => fake()->randomFloat(2, 0, 1000000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["open","parsial","closed"]),
            'vPbcreate' => fake()->randomElement(["ya","sebagian","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'iQtypb' => fake()->numberBetween(1, 1000),
            'iQtypbbonus' => fake()->numberBetween(1, 1000),
            'eDeleted' => null,
        ];
    }
}
