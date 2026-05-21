<?php

namespace Database\Factories;

use App\Models\StockDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<StockDetail> */
class StockDetailFactory extends Factory
{
    protected $model = StockDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iBarangId' => fake()->numberBetween(1, 1000),
            'vBatch' => null,
            'dexpired' => fake()->date(),
            'iQty' => fake()->numberBetween(1, 1000),
            'iQty2' => fake()->numberBetween(1, 1000),
            'dUpdated' => fake()->date(),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'iGudangId' => fake()->numberBetween(1, 1000),
            'iQtybook' => fake()->numberBetween(1, 1000),
            'iQtySum' => fake()->numberBetween(1, 1000),
        ];
    }
}
