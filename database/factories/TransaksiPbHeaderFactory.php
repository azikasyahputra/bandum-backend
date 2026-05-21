<?php

namespace Database\Factories;

use App\Models\TransaksiPbHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPbHeader> */
class TransaksiPbHeaderFactory extends Factory
{
    protected $model = TransaksiPbHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vPono' => null,
            'vPbno' => null,
            'dDate' => fake()->date(),
            'vExpb' => null,
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'iIdGudang' => fake()->numberBetween(1, 1000),
            'iIdVendor' => fake()->numberBetween(1, 1000),
            'dTotal' => fake()->randomFloat(2, 0, 1000000),
            'dPpn' => fake()->randomFloat(2, 0, 1000000),
            'dGrandtotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["belum konfirmasi","konfirmasi","closed"]),
            'vNoFakturSupplier' => null,
            'dNoFakturSupplier' => fake()->date(),
            'vNoFakturPajak' => null,
            'dFakturPajak' => fake()->date(),
            'vKeterangan' => null,
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
