<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Testimoni;
use App\Repositories\Contracts\TestimoniRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class TestimoniRepository implements TestimoniRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Testimoni::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($iIdTransaksi = $queryParams['iIdTransaksi'] ?? null) {
            $query->where('iIdTransaksi', $iIdTransaksi);
        }

        if ($iIdUser = $queryParams['iIdUser'] ?? null) {
            $query->where('iIdUser', $iIdUser);
        }

        if ($vJudul = $queryParams['vJudul'] ?? null) {
            $query->where('vJudul', 'like', "%{$vJudul}%");
        }

        if ($vReview = $queryParams['vReview'] ?? null) {
            $query->where('vReview', 'like', "%{$vReview}%");
        }

        if ($eTampil = $queryParams['eTampil'] ?? null) {
            $query->where('eTampil', $eTampil);
        }

        if ($tCreatedFrom = $queryParams['tCreated_from'] ?? null) {
            $query->whereDate('tCreated', '>=', $tCreatedFrom);
        }

        if ($tCreatedTo = $queryParams['tCreated_to'] ?? null) {
            $query->whereDate('tCreated', '<=', $tCreatedTo);
        }

        if ($tUpdatedFrom = $queryParams['tUpdated_from'] ?? null) {
            $query->whereDate('tUpdated', '>=', $tUpdatedFrom);
        }

        if ($tUpdatedTo = $queryParams['tUpdated_to'] ?? null) {
            $query->whereDate('tUpdated', '<=', $tUpdatedTo);
        }

        return $query->paginate(20)->withQueryString();
    }

    public function findOrFail(int $id): Model
    {
        return Testimoni::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Testimoni;
        $model->timestamps = false;
        $model->fill($data)->save();
        return $model;
    }

    public function update(Model $item, array $data): bool
    {
        $item->timestamps = false;
        return $item->update($data);
    }

    public function delete(Model $item): bool
    {
        $item->timestamps = false;
        return $item->update([
            'eDeleted' => 'Ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);
    }

    public function resolveForeignKeys(LengthAwarePaginator $paginator): void
    {
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        foreach ($fields as $col) {
            $enumOptions = $this->enumOptions($col);
            if (!empty($enumOptions)) {
                $selects[$col] = $enumOptions;
            }
        }

        return $selects;
    }

    private function enumOptions(string $col): array
    {
            return match ($col) {
            'eTampil' => [   [   'value' => 'ya',    'label' => 'Ya'],    [   'value' => 'tidak',    'label' => 'Tidak']],
            default => [],
        };
    }
}
