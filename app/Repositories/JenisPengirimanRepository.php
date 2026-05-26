<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Ekspedisi;
use App\Models\JenisPengiriman;
use App\Repositories\Contracts\JenisPengirimanRepositoryContract;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;

class JenisPengirimanRepository implements JenisPengirimanRepositoryContract
{
    public function paginate(array $columns, array $searchCols, array $queryParams): LengthAwarePaginator
    {
        $query = JenisPengiriman::query()
            ->whereNull('eDeleted')
            ->orWhere('eDeleted', '!=', 'Ya');

        if ($iIdExpedisi = $queryParams['iIdExpedisi'] ?? null) {
            if (is_numeric($iIdExpedisi)) {
                $query->where('iIdExpedisi', $iIdExpedisi);
            } else {
                $relatedIds = Ekspedisi::where('vNama', 'like', "%{$iIdExpedisi}%")->pluck('iId');
                $query->whereIn('iIdExpedisi', $relatedIds);
            }
        }

        if ($vNama = $queryParams['vNama'] ?? null) {
            $query->where('vNama', 'like', "%{$vNama}%");
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
        return JenisPengiriman::where('iId', $id)->firstOrFail();
    }

    public function create(array $data): Model
    {
        $model = new JenisPengiriman;
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
        $items = $paginator->items();

        if (empty($items)) {
            return;
        }

        $ids = collect($items)->pluck('iIdExpedisi')->unique()->filter()->values();

        if ($ids->isEmpty()) {
            return;
        }

        $related = Ekspedisi::whereIn('iId', $ids)->pluck('vNama', 'iId');

        foreach ($items as $item) {
            if ($related->has($item->iIdExpedisi)) {
                $item->iIdExpedisi = $related->get($item->iIdExpedisi);
            }
        }
    }

    public function selectData(array $fields): array
    {
        $selects = [];

        $selects['iIdExpedisi'] = Ekspedisi::whereNull('eDeleted')->orWhere('eDeleted', '!=', 'Ya')->get(['iId as value', 'vNama as label']);

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
            return [];
    }
}
