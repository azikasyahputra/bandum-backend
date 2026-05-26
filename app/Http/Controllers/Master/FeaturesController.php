<?php

declare(strict_types=1);

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Services\FeaturesService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class FeaturesController extends Controller
{
    public function __construct(
        private FeaturesService $service,
    ) {}

    public function index(Request $request): Response
    {
        return inertia('Master/' . $this->service->tableRoute() . '/Index', $this->service->paginated($request));
    }

    public function show(int $id): Response
    {
        return inertia('Master/' . $this->service->tableRoute() . '/Show', $this->service->detail($id));
    }

    public function create(): Response
    {
        return inertia('Master/' . $this->service->tableRoute() . '/Create', $this->service->create());
    }

    public function store(Request $request): RedirectResponse
    {
        $id = $this->service->store($request);

        return redirect("/master/" . $this->service->tableRoute() . "/{$id}/edit")->with('success', 'Data berhasil ditambahkan.');
    }

    public function edit(int $id): Response
    {
        return inertia('Master/' . $this->service->tableRoute() . '/Edit', $this->service->edit($id));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $this->service->update($request, $id);

        return redirect("/master/" . $this->service->tableRoute() . "/{$id}/edit")->with('success', 'Data berhasil diubah.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $this->service->destroy($id);

        return redirect("/master/" . $this->service->tableRoute())->with('success', 'Data berhasil dihapus.');
    }
}
