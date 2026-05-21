<?php

namespace Database\Factories;

use App\Models\TransaksiInvoiceDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiInvoiceDetail> */
class TransaksiInvoiceDetailFactory extends Factory
{
    protected $model = TransaksiInvoiceDetail::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdInvoice' => fake()->numberBetween(1, 1000),
            'vNoInvoice' => null,
            'iIdOrder' => fake()->numberBetween(1, 1000),
            'iIdOrderDetail' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdPacking' => fake()->numberBetween(1, 1000),
            'iIdPackingDetail' => fake()->numberBetween(1, 1000),
            'vNoPacking' => null,
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nDisc' => fake()->randomFloat(2, 0, 1000000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iQtyKecil' => fake()->numberBetween(1, 1000),
            'iQtyRetur' => fake()->numberBetween(1, 1000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'eStatus' => fake()->randomElement(["open","close"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
