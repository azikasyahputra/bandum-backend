<?php

namespace Database\Factories;

use App\Models\TransaksiInvoiceHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiInvoiceHeader> */
class TransaksiInvoiceHeaderFactory extends Factory
{
    protected $model = TransaksiInvoiceHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNoInvoice' => null,
            'iIdPacking' => fake()->numberBetween(1, 1000),
            'vNoPacking' => null,
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'vNamaCustomer' => fake()->word(),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nTotalDiskon' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaKirim' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaPacking' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'eReturAdmin' => fake()->randomElement(["ya","tidak"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
