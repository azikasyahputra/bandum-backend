<?php

namespace Database\Factories;

use App\Models\TransaksiInvoiceReturnDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiInvoiceReturnDetail> */
class TransaksiInvoiceReturnDetailFactory extends Factory
{
    protected $model = TransaksiInvoiceReturnDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iBarangId' => fake()->numberBetween(1, 1000),
            'vNoInvoiceReturn' => null,
            'vNoSo' => null,
            'iSodetId' => fake()->numberBetween(1, 1000),
            'iKemasan' => fake()->numberBetween(1, 1000),
            'iQty' => fake()->numberBetween(1, 1000),
            'dHpp' => fake()->randomFloat(2, 0, 1000000),
            'dTotal' => fake()->randomFloat(2, 0, 1000000),
            'dPpn' => fake()->randomFloat(2, 0, 1000000),
            'dGrandtotal' => fake()->randomFloat(2, 0, 1000000),
            'iCreatedId' => fake()->numberBetween(1, 1000),
            'iUpdatedId' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'vBatch' => null,
            'iInvId' => fake()->numberBetween(1, 1000),
            'iBonus' => fake()->numberBetween(1, 1000),
            'iMultiBatch' => fake()->numberBetween(1, 1000),
            'dExpired' => fake()->date(),
            'dDiscount' => fake()->randomFloat(2, 0, 1000000),
        ];
    }
}
