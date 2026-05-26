<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Banner;
use App\Repositories\Contracts\BannerRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class BannerRepository implements BannerRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = Banner::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($eTipe = $queryParams['eTipe'] ?? null) {
            $query->where('eTipe', $eTipe);
        }

        if ($vTitle = $queryParams['vTitle'] ?? null) {
            $query->where('vTitle', 'like', "%{$vTitle}%");
        }

        if ($vDetail = $queryParams['vDetail'] ?? null) {
            $query->where('vDetail', 'like', "%{$vDetail}%");
        }

        if ($vNamaLink = $queryParams['vNamaLink'] ?? null) {
            $query->where('vNamaLink', 'like', "%{$vNamaLink}%");
        }

        if ($vLink = $queryParams['vLink'] ?? null) {
            $query->where('vLink', 'like', "%{$vLink}%");
        }

        if ($vImage = $queryParams['vImage'] ?? null) {
            $query->where('vImage', 'like', "%{$vImage}%");
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
        return Banner::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new Banner;
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
            'eTipe' => [   [   'value' => 'Big Banner',    'label' => 'Big Banner'],    [   'value' => 'Small Banner 1',    'label' => 'Small Banner 1'],    [   'value' => 'Small Banner 2',    'label' => 'Small Banner 2']],
            default => [],
        };
    }
}
