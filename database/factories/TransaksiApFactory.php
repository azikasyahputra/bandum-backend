<?php

namespace Database\Factories;

use App\Models\TransaksiAp;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiAp> */
class TransaksiApFactory extends Factory
{
    protected $model = TransaksiAp::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vPbno' => null,
            'vPono' => null,
            'iIdVendor' => fake()->numberBetween(1, 1000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'dDuedate' => fake()->date(),
            'nTotaldibayar' => fake()->randomFloat(2, 0, 1000000),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
