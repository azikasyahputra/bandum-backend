<?php

namespace Database\Factories;

use App\Models\TransaksiPbDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPbDetail> */
class TransaksiPbDetailFactory extends Factory
{
    protected $model = TransaksiPbDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdPodt' => fake()->numberBetween(1, 1000),
            'vPbno' => null,
            'vNoBatch' => null,
            'dexpired' => fake()->date(),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iQty2' => fake()->numberBetween(1, 1000),
            'iQtyReturn' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nDiscount' => fake()->randomFloat(2, 0, 1000000),
            'iDiscount' => fake()->randomFloat(2, 0, 1000000),
            'iBonus' => fake()->numberBetween(1, 1000),
            'iBonus2' => fake()->numberBetween(1, 1000),
            'iBonusRetur' => fake()->numberBetween(1, 1000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => null,
        ];
    }
}
