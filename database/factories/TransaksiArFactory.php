<?php

namespace Database\Factories;

use App\Models\TransaksiAr;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiAr> */
class TransaksiArFactory extends Factory
{
    protected $model = TransaksiAr::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'vNoPacking' => null,
            'vNoInvoice' => null,
            'dInvoiceDate' => fake()->date(),
            'dDueDate' => fake()->date(),
            'iTop' => null,
            'eTipePembayaran' => fake()->randomElement(["cash","kredit"]),
            'eTipe' => fake()->randomElement(["sales","retur"]),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'eLunas' => fake()->randomElement(["ya","tidak"]),
            'nBiayaKirim' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaPacking' => fake()->randomFloat(2, 0, 1000000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nTotalTerbayar' => fake()->randomFloat(2, 0, 1000000),
        ];
    }
}
