<?php

namespace Database\Factories;

use App\Models\TransaksiOrderRequestHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiOrderRequestHeader> */
class TransaksiOrderRequestHeaderFactory extends Factory
{
    protected $model = TransaksiOrderRequestHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vReqno' => null,
            'dDate' => fake()->date(),
            'iIdGudang' => fake()->numberBetween(1, 1000),
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'iIdVendor' => fake()->numberBetween(1, 1000),
            'iTop' => fake()->numberBetween(1, 1000),
            'dTotal' => fake()->randomFloat(2, 0, 1000000),
            'dPpn' => fake()->randomFloat(2, 0, 1000000),
            'dGrandtotal' => fake()->randomFloat(2, 0, 1000000),
            'vStatus' => fake()->randomElement(["baru","proses","confirm"]),
            'vType' => fake()->randomElement(["sales","stock"]),
            'vKeterangan' => null,
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tUpdated' => fake()->dateTime(),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
        ];
    }
}
