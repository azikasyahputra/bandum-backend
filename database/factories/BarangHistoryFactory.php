<?php

namespace Database\Factories;

use App\Models\BarangHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<BarangHistory> */
class BarangHistoryFactory extends Factory
{
    protected $model = BarangHistory::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'iIdBarang' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'iIdBrand' => fake()->numberBetween(1, 1000),
            'iIdKategori' => fake()->numberBetween(1, 1000),
            'iIdSubkategori' => fake()->numberBetween(1, 1000),
            'vDeskripsisingkat' => fake()->word(),
            'vDeskripsidetail' => fake()->word(),
            'eBestselling' => fake()->randomElement(["ya","tidak"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
