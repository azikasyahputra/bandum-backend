<?php

namespace Database\Factories;

use App\Models\TransaksiKeranjang;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiKeranjang> */
class TransaksiKeranjangFactory extends Factory
{
    protected $model = TransaksiKeranjang::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdUser' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdKemasan' => fake()->numberBetween(1, 1000),
            'nPrice' => fake()->randomFloat(2, 0, 1000000),
            'nDisc' => fake()->randomFloat(2, 0, 1000000),
            'iQty' => fake()->numberBetween(1, 1000),
            'nJumlah' => fake()->randomFloat(2, 0, 1000000),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
