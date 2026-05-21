<?php

namespace Database\Factories;

use App\Models\TransaksiPoHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiPoHeader> */
class TransaksiPoHeaderFactory extends Factory
{
    protected $model = TransaksiPoHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vPbno' => null,
            'vPono' => null,
            'vReqno' => null,
            'vNoOrder' => null,
            'dDate' => fake()->date(),
            'iSupplierId' => fake()->numberBetween(1, 1000),
            'iPelangganId' => fake()->numberBetween(1, 1000),
            'iTop' => fake()->numberBetween(1, 1000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["belum konfirmasi","konfirmasi","closed","proses","pb sebagian"]),
            'vType' => fake()->randomElement(["sales","stock"]),
            'vNoFakturVendor' => null,
            'vPbcreate' => fake()->randomElement(["ya","sebagian","tidak"]),
            'iGudangId' => fake()->numberBetween(1, 1000),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'vKeterangan' => null,
        ];
    }
}
