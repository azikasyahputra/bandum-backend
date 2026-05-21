<?php

namespace Database\Factories;

use App\Models\TransaksiHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiHistory> */
class TransaksiHistoryFactory extends Factory
{
    protected $model = TransaksiHistory::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdTransaction' => fake()->numberBetween(1, 1000),
            'vTransactionNumber' => null,
            'eTransactionType' => fake()->randomElement(["iss-so","rct-so","rct-po","iss-po"]),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'vNamaBarang' => null,
            'vBatch' => null,
            'iIdGudang' => fake()->numberBetween(1, 1000),
            'iIdBarangKemasan' => fake()->numberBetween(1, 1000),
            'vBarangKemasan' => null,
            'iQtybef' => fake()->numberBetween(1, 1000),
            'iQty' => fake()->numberBetween(1, 1000),
            'iQtyend' => fake()->numberBetween(1, 1000),
            'dTranscationDate' => fake()->date(),
            'vTransactionReference' => null,
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
            'nHarga' => fake()->randomFloat(2, 0, 1000000),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
        ];
    }
}
