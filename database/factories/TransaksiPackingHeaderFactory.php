<?php

namespace Database\Factories;

use App\Models\TransaksiPackingHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPackingHeader> */
class TransaksiPackingHeaderFactory extends Factory
{
    protected $model = TransaksiPackingHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNoPacking' => null,
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'vNamaCustomer' => fake()->word(),
            'eStatus' => fake()->randomElement(["batal","proses","confirm"]),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nTotalDiskon' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaKirim' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaPacking' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
