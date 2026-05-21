<?php

namespace Database\Factories;

use App\Models\TransaksiPbrDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPbrDetail> */
class TransaksiPbrDetailFactory extends Factory
{
    protected $model = TransaksiPbrDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vPbrno' => null,
            'vNoBatch' => null,
            'dexpired' => fake()->date(),
            'iIdPbdt' => fake()->numberBetween(1, 1000),
            'iIdPodt' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iQty2' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'iDiscount' => fake()->randomFloat(2, 0, 1000000),
            'iBonus' => fake()->numberBetween(1, 1000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["belum konfirmasi","konfirmasi"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
