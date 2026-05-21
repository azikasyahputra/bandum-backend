<?php

namespace Database\Factories;

use App\Models\TransaksiOrderHeader;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<TransaksiOrderHeader> */
class TransaksiOrderHeaderFactory extends Factory
{
    protected $model = TransaksiOrderHeader::class;

    public function definition(): array
    {
        return [
            'iId' => fake()->numberBetween(1, 1000),
            'vNoOrder' => null,
            'iIdCustomer' => fake()->numberBetween(1, 1000),
            'vNamaCustomer' => fake()->word(),
            'iIdAlamat' => fake()->numberBetween(1, 1000),
            'vAlamat' => null,
            'iIdPembayaran' => fake()->numberBetween(1, 1000),
            'vPembayaran' => null,
            'eTipePembayaran' => fake()->randomElement(["cash","kredit"]),
            'iIdPengiriman' => null,
            'vPengiriman' => null,
            'iIdJenisPengiriman' => null,
            'vJenisPengiriman' => null,
            'vCatatan' => null,
            'eStatus' => fake()->randomElement(["baru","proses","packing","dikirim","diterima","komplain","request pelunasan","pelunasan terverifikasi","selesai","batal"]),
            'nTotal' => fake()->randomFloat(2, 0, 1000000),
            'nTotalDiskon' => fake()->randomFloat(2, 0, 1000000),
            'nPpn' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaKirim' => fake()->randomFloat(2, 0, 1000000),
            'nBiayaPacking' => fake()->randomFloat(2, 0, 1000000),
            'nGrandTotal' => fake()->randomFloat(2, 0, 1000000),
            'vSuratJalan' => null,
            'vFakturPajak' => null,
            'eLunas' => fake()->randomElement(["tidak","sebagian","ya"]),
            'eDeleted' => fake()->randomElement(["ya","tidak"]),
            'iCreatedid' => fake()->numberBetween(1, 1000),
            'iUpdatedid' => fake()->numberBetween(1, 1000),
            'tCreated' => fake()->dateTime(),
            'tUpdated' => fake()->dateTime(),
        ];
    }
}
