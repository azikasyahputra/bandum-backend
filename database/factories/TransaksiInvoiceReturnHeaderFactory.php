<?php

namespace Database\Factories;

use App\Models\TransaksiInvoiceReturnHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiInvoiceReturnHeader> */
class TransaksiInvoiceReturnHeaderFactory extends Factory
{
    protected $model = TransaksiInvoiceReturnHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNoInvoiceReturn' => null,
            'vNoInvoice' => null,
            'vNoOrder' => null,
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'dDate' => fake()->date(),
            'vKeterangan' => null,
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'iReturAll' => fake()->numberBetween(1, 1000),
            'eStatus' => fake()->randomElement(["proses","confirm"]),
            'iGudangId' => fake()->numberBetween(1, 1000),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
