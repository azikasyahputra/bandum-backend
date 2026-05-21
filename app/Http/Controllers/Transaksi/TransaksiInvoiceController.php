<?php

declare(strict_types=1);

namespace App\Http\Controllers\Transaksi;

use App\Http\Controllers\Controller;
use App\Models\TransaksiInvoiceHeader;
use App\Models\TransaksiOrderHeader;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class TransaksiInvoiceController extends Controller
{
    public function index(Request $request): Response
    {
        $query = TransaksiInvoiceHeader::where(function ($q) {
            $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
        });

        $searchCols = ['vNoInvoice', 'vNoOrder', 'vNamaCustomer'];
        foreach ($searchCols as $col) {
            $val = $request->query($col);
            if ($val !== null && $val !== '') {
                $query->where($col, 'like', "%{$val}%");
            }
        }

        $items = $query->orderBy('iId', 'desc')->paginate(20)->withQueryString();

        $searchValues = [];
        foreach ($searchCols as $col) {
            $searchValues[$col] = $request->query($col, '');
        }

        return Inertia('Transaksi/Invoice/Index', [
            'title' => 'Invoice',
            'items' => $items,
            'searchValues' => $searchValues,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = TransaksiInvoiceHeader::with('details')->findOrFail($id);

        $order = TransaksiOrderHeader::find($item->iIdOrder);

        return Inertia('Transaksi/Invoice/Form', [
            'title' => 'Detail Invoice',
            'item' => $item,
            'order' => $order,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $invoice = TransaksiInvoiceHeader::findOrFail($id);
        $order = TransaksiOrderHeader::findOrFail($invoice->iIdOrder);

        $rules = [
            'vSuratJalan' => 'nullable|string|max:255',
            'vFakturPajak' => 'nullable|string|max:255',
        ];

        if ($request->hasFile('vSuratJalan')) {
            $rules['vSuratJalan'] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
        }
        if ($request->hasFile('vFakturPajak')) {
            $rules['vFakturPajak'] = 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048';
        }

        $validated = Validator::make($request->all(), $rules)->validated();

        $updateData = [];
        foreach (['vSuratJalan', 'vFakturPajak'] as $col) {
            if ($request->hasFile($col)) {
                $file = $request->file($col);
                $path = $file->store("uploads/order/{$col}", 'public');
                $updateData[$col] = $path;
            } elseif (isset($validated[$col]) && $validated[$col] !== '') {
                $updateData[$col] = $validated[$col];
            }
        }

        if (!empty($updateData)) {
            $updateData['iUpdatedid'] = auth()->id() ?? 1;
            $updateData['tUpdated'] = now();
            $order->update($updateData);
        }

        return redirect("/transaksi/invoice/{$id}/edit")->with('success', 'Dokumen berhasil disimpan.');
    }
}
