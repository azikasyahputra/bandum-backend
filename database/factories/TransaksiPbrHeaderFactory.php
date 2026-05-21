<?php

namespace Database\Factories;

use App\Models\TransaksiPbrHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPbrHeader> */
class TransaksiPbrHeaderFactory extends Factory
{
    protected $model = TransaksiPbrHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vPbrno' => null,
            'vPbno' => null,
            'vPono' => null,
            'dDate' => fake()->date(),
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'iIdGudang' => fake()->numberBetween(1, 1000),
            'iIdVendor' => fake()->numberBetween(1, 1000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["belum konfirmasi","konfirmasi"]),
            'vNoFakturSupplier' => null,
            'dFakturSupplier' => fake()->date(),
            'vKeterangan' => null,
            'vFakturPajak' => null,
            'dFakturPajak' => fake()->date(),
            'vType' => fake()->randomElement(["return admin","return asli"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
