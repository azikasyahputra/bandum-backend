<?php

namespace Database\Factories;

use App\Models\KlasifikasiPerusahaan;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<KlasifikasiPerusahaan> */
class KlasifikasiPerusahaanFactory extends Factory
{
    protected $model = KlasifikasiPerusahaan::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNama' => null,
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
