<?php

declare(strict_types=1);

namespace App\Http\Controllers\Transaksi;

use App\Http\Controllers\Controller;
use App\Models\TransaksiInvoiceDetail;
use App\Models\TransaksiInvoiceHeader;
use App\Models\TransaksiOrderHeader;
use App\Models\TransaksiPackingDetail;
use App\Models\TransaksiPackingHeader;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class TransaksiPackingController extends Controller
{
    public function index(Request $request): Response
    {
        $query = TransaksiPackingHeader::where(function ($q) {
            $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
        });

        $searchCols = ['vNoPacking', 'vNoOrder', 'vNamaCustomer', 'eStatus'];
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

        return Inertia('Transaksi/Packing/Index', [
            'title' => 'Packing',
            'items' => $items,
            'searchValues' => $searchValues,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = TransaksiPackingHeader::with('details')->findOrFail($id);

        return Inertia('Transaksi/Packing/Form', [
            'title' => 'Edit Packing',
            'item' => $item,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $packing = TransaksiPackingHeader::with('details')->findOrFail($id);

        if ($packing->eStatus === 'Confirm') {
            return back()->with('error', 'Packing sudah dikonfirmasi.');
        }

        $userId = auth()->id() ?? 1;

        DB::beginTransaction();
        try {
            $vNoInvoice = 'INV-' . now()->format('Ymd') . '-' . str_pad((string)($id), 4, '0', STR_PAD_LEFT);

            $invoice = TransaksiInvoiceHeader::create([
                'vNoInvoice' => $vNoInvoice,
                'iIdPacking' => $packing->iId,
                'vNoPacking' => $packing->vNoPacking,
                'iIdOrder' => $packing->iIdOrder,
                'vNoOrder' => $packing->vNoOrder,
                'iIdCustomer' => $packing->iIdCustomer,
                'vNamaCustomer' => $packing->vNamaCustomer,
                'nTotal' => $packing->nTotal,
                'nTotalDiskon' => $packing->nTotalDiskon,
                'nPpn' => $packing->nPpn,
                'nBiayaKirim' => $packing->nBiayaKirim,
                'nBiayaPacking' => $packing->nBiayaPacking,
                'nGrandTotal' => $packing->nGrandTotal,
                'eReturAdmin' => 'tidak',
                'eDeleted' => 'tidak',
                'iCreatedid' => $userId,
                'iUpdatedid' => $userId,
                'tCreated' => now(),
                'tUpdated' => now(),
            ]);

            foreach ($packing->details as $detail) {
                TransaksiInvoiceDetail::create([
                    'iIdInvoice' => $invoice->iId,
                    'vNoInvoice' => $vNoInvoice,
                    'iIdOrder' => $detail->iIdOrder,
                    'iIdOrderDetail' => $detail->iIdOrderDetail,
                    'vNoOrder' => $detail->vNoOrder,
                    'iIdPacking' => $packing->iId,
                    'iIdPackingDetail' => $detail->iId,
                    'vNoPacking' => $packing->vNoPacking,
                    'iIdBarang' => $detail->iIdBarang,
                    'iIdBarangKemasan' => $detail->iIdBarangKemasan,
                    'nHarga' => $detail->nHarga,
                    'nDisc' => $detail->nDisc,
                    'iQty' => $detail->iQty,
                    'iQtyKecil' => $detail->iQtyKecil ?? 0,
                    'iQtyRetur' => 0,
                    'nPpn' => $detail->nPpn,
                    'nTotal' => $detail->nTotal,
                    'eStatus' => 'Close',
                    'eDeleted' => 'tidak',
                    'iCreatedid' => $userId,
                    'iUpdatedid' => $userId,
                    'tCreated' => now(),
                    'tUpdated' => now(),
                ]);

                $detail->update([
                    'eStatus' => 'Close',
                    'iUpdatedid' => $userId,
                    'tUpdated' => now(),
                ]);
            }

            $packing->update([
                'eStatus' => 'Confirm',
                'iUpdatedid' => $userId,
                'tUpdated' => now(),
            ]);

            TransaksiOrderHeader::where('iId', $packing->iIdOrder)->update([
                'eStatus' => 'Dikirim',
                'iUpdatedid' => $userId,
                'tUpdated' => now(),
            ]);

            DB::commit();
            return redirect('/transaksi/packing')->with('success', 'Packing berhasil dikonfirmasi.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Gagal konfirmasi packing: ' . $e->getMessage());
        }
    }

    public function destroy(int $id): RedirectResponse
    {
        $header = TransaksiPackingHeader::findOrFail($id);
        $header->update([
            'eDeleted' => 'ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);

        TransaksiPackingDetail::where('iIdPacking', $id)->update([
            'eDeleted' => 'ya',
        ]);

        return redirect('/transaksi/packing')->with('success', 'Data berhasil dihapus.');
    }
}
