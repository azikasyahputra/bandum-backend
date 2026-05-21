<?php

declare(strict_types=1);

namespace App\Http\Controllers\Transaksi;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\BarangKemasan;
use App\Models\Customer;
use App\Models\Ekspedisi;
use App\Models\JenisPengiriman;
use App\Models\Pembayaran;
use App\Models\TransaksiOrderDetail;
use App\Models\TransaksiOrderHeader;
use App\Models\TransaksiPackingBatch;
use App\Models\TransaksiPackingDetail;
use App\Models\TransaksiPackingHeader;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class TransaksiOrderController extends Controller
{
    public function index(Request $request): Response
    {
        $query = TransaksiOrderHeader::where(function ($q) {
            $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted');
        });

        $searchCols = ['vNoOrder', 'vNamaCustomer', 'eStatus', 'eLunas'];
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

        return Inertia('Transaksi/Order/Index', [
            'title' => 'Order',
            'items' => $items,
            'searchValues' => $searchValues,
        ]);
    }

    public function create(): Response
    {
        return Inertia('Transaksi/Order/Form', [
            'title' => 'Tambah Order',
            'customers' => Customer::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'pembayaran' => Pembayaran::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'ekspedisi' => Ekspedisi::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'jenisPengiriman' => JenisPengiriman::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'barang' => Barang::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'kemasan' => BarangKemasan::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label', 'iIdBarang', 'nHarga']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = Validator::make($request->all(), [
            'vNoOrder' => 'nullable|string|max:100',
            'iIdCustomer' => 'nullable|integer',
            'vNamaCustomer' => 'nullable|string|max:255',
            'iIdAlamat' => 'nullable|integer',
            'vAlamat' => 'nullable|string',
            'iIdPembayaran' => 'nullable|integer',
            'vPembayaran' => 'nullable|string|max:100',
            'eTipePembayaran' => 'nullable|string|max:50',
            'iIdPengiriman' => 'nullable|integer',
            'vPengiriman' => 'nullable|string|max:100',
            'iIdJenisPengiriman' => 'nullable|integer',
            'vJenisPengiriman' => 'nullable|string|max:100',
            'vCatatan' => 'nullable|string',
            'eStatus' => 'nullable|string|max:50',
            'nTotal' => 'nullable|numeric',
            'nTotalDiskon' => 'nullable|numeric',
            'nPpn' => 'nullable|numeric',
            'nBiayaKirim' => 'nullable|numeric',
            'nBiayaPacking' => 'nullable|numeric',
            'nGrandTotal' => 'nullable|numeric',
            'vSuratJalan' => 'nullable|string|max:100',
            'vFakturPajak' => 'nullable|string|max:100',
            'eLunas' => 'nullable|string|max:10',
            'details' => 'nullable|array',
            'details.*.iIdBarang' => 'nullable|integer',
            'details.*.iIdBarangKemasan' => 'nullable|integer',
            'details.*.nHarga' => 'nullable|numeric',
            'details.*.nDisc' => 'nullable|numeric',
            'details.*.iQty' => 'nullable|integer',
            'details.*.iQtyKecil' => 'nullable|integer',
            'details.*.nPpn' => 'nullable|numeric',
            'details.*.nTotal' => 'nullable|numeric',
            'details.*.iQtyOr' => 'nullable|integer',
            'details.*.iQtyPo' => 'nullable|integer',
            'details.*.iQtyPl' => 'nullable|integer',
            'details.*.iQtyKirim' => 'nullable|integer',
            'details.*.iQtyRetur' => 'nullable|integer',
            'details.*.eStatus' => 'nullable|string|max:50',
            'details.*.iIsiKemasanKecil' => 'nullable|integer',
        ])->validated();

        DB::beginTransaction();
        try {
            $header = TransaksiOrderHeader::create([
                'vNoOrder' => $validated['vNoOrder'] ?? null,
                'iIdCustomer' => $validated['iIdCustomer'] ?? null,
                'vNamaCustomer' => $validated['vNamaCustomer'] ?? null,
                'iIdAlamat' => $validated['iIdAlamat'] ?? null,
                'vAlamat' => $validated['vAlamat'] ?? null,
                'iIdPembayaran' => $validated['iIdPembayaran'] ?? null,
                'vPembayaran' => $validated['vPembayaran'] ?? null,
                'eTipePembayaran' => $validated['eTipePembayaran'] ?? null,
                'iIdPengiriman' => $validated['iIdPengiriman'] ?? null,
                'vPengiriman' => $validated['vPengiriman'] ?? null,
                'iIdJenisPengiriman' => $validated['iIdJenisPengiriman'] ?? null,
                'vJenisPengiriman' => $validated['vJenisPengiriman'] ?? null,
                'vCatatan' => $validated['vCatatan'] ?? null,
                'eStatus' => $validated['eStatus'] ?? null,
                'nTotal' => $validated['nTotal'] ?? 0,
                'nTotalDiskon' => $validated['nTotalDiskon'] ?? 0,
                'nPpn' => $validated['nPpn'] ?? 0,
                'nBiayaKirim' => $validated['nBiayaKirim'] ?? 0,
                'nBiayaPacking' => $validated['nBiayaPacking'] ?? 0,
                'nGrandTotal' => $validated['nGrandTotal'] ?? 0,
                'vSuratJalan' => $validated['vSuratJalan'] ?? null,
                'vFakturPajak' => $validated['vFakturPajak'] ?? null,
                'eLunas' => $validated['eLunas'] ?? 'tidak',
                'iCreatedid' => auth()->id() ?? 1,
                'tCreated' => now(),
            ]);

            if (!empty($validated['details'])) {
                foreach ($validated['details'] as $row) {
                    TransaksiOrderDetail::create([
                        'iIdOrder' => $header->iId,
                        'vNoOrder' => $header->vNoOrder,
                        'iIdBarang' => $row['iIdBarang'] ?? null,
                        'iIdBarangKemasan' => $row['iIdBarangKemasan'] ?? null,
                        'nHarga' => $row['nHarga'] ?? 0,
                        'nDisc' => $row['nDisc'] ?? 0,
                        'iQty' => $row['iQty'] ?? 0,
                        'iQtyKecil' => $row['iQtyKecil'] ?? 0,
                        'nPpn' => $row['nPpn'] ?? 0,
                        'nTotal' => $row['nTotal'] ?? 0,
                        'iQtyOr' => $row['iQtyOr'] ?? 0,
                        'iQtyPo' => $row['iQtyPo'] ?? 0,
                        'iQtyPl' => $row['iQtyPl'] ?? 0,
                        'iQtyKirim' => $row['iQtyKirim'] ?? 0,
                        'iQtyRetur' => $row['iQtyRetur'] ?? 0,
                        'eStatus' => $row['eStatus'] ?? null,
                        'iIsiKemasanKecil' => $row['iIsiKemasanKecil'] ?? null,
                        'tCreated' => now(),
                        'tUpdated' => now(),
                    ]);
                }
            }

            DB::commit();
            return redirect('/transaksi/order')->with('success', 'Data berhasil ditambahkan.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Gagal menyimpan data: ' . $e->getMessage());
        }
    }

    public function edit(int $id): Response
    {
        $item = TransaksiOrderHeader::with('details')->findOrFail($id);

        return Inertia('Transaksi/Order/Form', [
            'title' => 'Edit Order',
            'item' => $item,
            'customers' => Customer::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'pembayaran' => Pembayaran::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'ekspedisi' => Ekspedisi::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'jenisPengiriman' => JenisPengiriman::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'barang' => Barang::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label']),
            'kemasan' => BarangKemasan::where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })->get(['iId as value', 'vNama as label', 'iIdBarang', 'nHarga']),
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $header = TransaksiOrderHeader::findOrFail($id);

        $validated = Validator::make($request->all(), [
            'vNoOrder' => 'nullable|string|max:100',
            'iIdCustomer' => 'nullable|integer',
            'vNamaCustomer' => 'nullable|string|max:255',
            'iIdAlamat' => 'nullable|integer',
            'vAlamat' => 'nullable|string',
            'iIdPembayaran' => 'nullable|integer',
            'vPembayaran' => 'nullable|string|max:100',
            'eTipePembayaran' => 'nullable|string|max:50',
            'iIdPengiriman' => 'nullable|integer',
            'vPengiriman' => 'nullable|string|max:100',
            'iIdJenisPengiriman' => 'nullable|integer',
            'vJenisPengiriman' => 'nullable|string|max:100',
            'vCatatan' => 'nullable|string',
            'eStatus' => 'nullable|string|max:50',
            'nTotal' => 'nullable|numeric',
            'nTotalDiskon' => 'nullable|numeric',
            'nPpn' => 'nullable|numeric',
            'nBiayaKirim' => 'nullable|numeric',
            'nBiayaPacking' => 'nullable|numeric',
            'nGrandTotal' => 'nullable|numeric',
            'vSuratJalan' => 'nullable|string|max:100',
            'vFakturPajak' => 'nullable|string|max:100',
            'eLunas' => 'nullable|string|max:10',
            'details' => 'nullable|array',
            'details.*.iId' => 'nullable|integer',
            'details.*.iIdBarang' => 'nullable|integer',
            'details.*.iIdBarangKemasan' => 'nullable|integer',
            'details.*.nHarga' => 'nullable|numeric',
            'details.*.nDisc' => 'nullable|numeric',
            'details.*.iQty' => 'nullable|integer',
            'details.*.iQtyKecil' => 'nullable|integer',
            'details.*.nPpn' => 'nullable|numeric',
            'details.*.nTotal' => 'nullable|numeric',
            'details.*.iQtyOr' => 'nullable|integer',
            'details.*.iQtyPo' => 'nullable|integer',
            'details.*.iQtyPl' => 'nullable|integer',
            'details.*.iQtyKirim' => 'nullable|integer',
            'details.*.iQtyRetur' => 'nullable|integer',
            'details.*.eStatus' => 'nullable|string|max:50',
            'details.*.iIsiKemasanKecil' => 'nullable|integer',
        ])->validated();

        DB::beginTransaction();
        try {
            $header->update([
                'vNoOrder' => $validated['vNoOrder'] ?? $header->vNoOrder,
                'iIdCustomer' => $validated['iIdCustomer'] ?? $header->iIdCustomer,
                'vNamaCustomer' => $validated['vNamaCustomer'] ?? $header->vNamaCustomer,
                'iIdAlamat' => $validated['iIdAlamat'] ?? $header->iIdAlamat,
                'vAlamat' => $validated['vAlamat'] ?? $header->vAlamat,
                'iIdPembayaran' => $validated['iIdPembayaran'] ?? $header->iIdPembayaran,
                'vPembayaran' => $validated['vPembayaran'] ?? $header->vPembayaran,
                'eTipePembayaran' => $validated['eTipePembayaran'] ?? $header->eTipePembayaran,
                'iIdPengiriman' => $validated['iIdPengiriman'] ?? $header->iIdPengiriman,
                'vPengiriman' => $validated['vPengiriman'] ?? $header->vPengiriman,
                'iIdJenisPengiriman' => $validated['iIdJenisPengiriman'] ?? $header->iIdJenisPengiriman,
                'vJenisPengiriman' => $validated['vJenisPengiriman'] ?? $header->vJenisPengiriman,
                'vCatatan' => $validated['vCatatan'] ?? $header->vCatatan,
                'eStatus' => $validated['eStatus'] ?? $header->eStatus,
                'nTotal' => $validated['nTotal'] ?? 0,
                'nTotalDiskon' => $validated['nTotalDiskon'] ?? 0,
                'nPpn' => $validated['nPpn'] ?? 0,
                'nBiayaKirim' => $validated['nBiayaKirim'] ?? 0,
                'nBiayaPacking' => $validated['nBiayaPacking'] ?? 0,
                'nGrandTotal' => $validated['nGrandTotal'] ?? 0,
                'vSuratJalan' => $validated['vSuratJalan'] ?? $header->vSuratJalan,
                'vFakturPajak' => $validated['vFakturPajak'] ?? $header->vFakturPajak,
                'eLunas' => $validated['eLunas'] ?? $header->eLunas,
                'iUpdatedid' => auth()->id() ?? 1,
                'tUpdated' => now(),
            ]);

            $existingIds = $header->details->pluck('iId')->toArray();
            $submittedIds = collect($validated['details'] ?? [])->pluck('iId')->filter()->toArray();
            $toDelete = array_diff($existingIds, $submittedIds);
            if (!empty($toDelete)) {
                TransaksiOrderDetail::whereIn('iId', $toDelete)->delete();
            }

            if (!empty($validated['details'])) {
                foreach ($validated['details'] as $row) {
                    $data = [
                        'iIdOrder' => $header->iId,
                        'vNoOrder' => $header->vNoOrder,
                        'iIdBarang' => $row['iIdBarang'] ?? null,
                        'iIdBarangKemasan' => $row['iIdBarangKemasan'] ?? null,
                        'nHarga' => $row['nHarga'] ?? 0,
                        'nDisc' => $row['nDisc'] ?? 0,
                        'iQty' => $row['iQty'] ?? 0,
                        'iQtyKecil' => $row['iQtyKecil'] ?? 0,
                        'nPpn' => $row['nPpn'] ?? 0,
                        'nTotal' => $row['nTotal'] ?? 0,
                        'iQtyOr' => $row['iQtyOr'] ?? 0,
                        'iQtyPo' => $row['iQtyPo'] ?? 0,
                        'iQtyPl' => $row['iQtyPl'] ?? 0,
                        'iQtyKirim' => $row['iQtyKirim'] ?? 0,
                        'iQtyRetur' => $row['iQtyRetur'] ?? 0,
                        'eStatus' => $row['eStatus'] ?? null,
                        'iIsiKemasanKecil' => $row['iIsiKemasanKecil'] ?? null,
                        'tCreated' => now(),
                        'tUpdated' => now(),
                    ];

                    if (!empty($row['iId'])) {
                        TransaksiOrderDetail::where('iId', $row['iId'])->update($data);
                    } else {
                        TransaksiOrderDetail::create($data);
                    }
                }
            }
            DB::commit();
            return redirect('/transaksi/order')->with('success', 'Data berhasil diubah.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Gagal menyimpan data: ' . $e->getMessage());
        }
    }

    public function destroy(int $id): RedirectResponse
    {
        $header = TransaksiOrderHeader::findOrFail($id);
        $header->update([
            'eDeleted' => 'ya',
            'iUpdatedid' => auth()->id() ?? 1,
            'tUpdated' => now(),
        ]);

        TransaksiOrderDetail::where('iIdOrder', $id)->update([
            'eDeleted' => 'ya',
        ]);

        return redirect('/transaksi/order')->with('success', 'Data berhasil dihapus.');
    }

    public function customerAlamat(int $customerId): \Illuminate\Http\JsonResponse
    {
        $alamat = \App\Models\CustomerAlamat::where('iIdCustomer', $customerId)
            ->where(function ($q) { $q->where('eDeleted', '!=', 'ya')->orWhereNull('eDeleted'); })
            ->get(['iId as value', 'vAlamat as label', 'vNama']);
        return response()->json($alamat);
    }

    public function checkout(int $id): RedirectResponse
    {
        $order = TransaksiOrderHeader::with('details')->findOrFail($id);

        if ($order->eStatus !== 'Proses') {
            return back()->with('error', 'Status order harus "Proses" untuk checkout.');
        }

        $exists = TransaksiPackingHeader::where('iIdOrder', $id)->exists();
        if ($exists) {
            return back()->with('error', 'Order ini sudah memiliki packing.');
        }

        $userId = auth()->id() ?? 1;
        $vNoPacking = 'PCK-' . now()->format('Ymd') . '-' . str_pad((string)($id), 4, '0', STR_PAD_LEFT);

        DB::beginTransaction();
        try {
            $packing = TransaksiPackingHeader::create([
                'vNoPacking' => $vNoPacking,
                'iIdOrder' => $order->iId,
                'vNoOrder' => $order->vNoOrder,
                'iIdCustomer' => $order->iIdCustomer,
                'vNamaCustomer' => $order->vNamaCustomer,
                'eStatus' => 'proses',
                'nTotal' => $order->nTotal,
                'nTotalDiskon' => $order->nTotalDiskon,
                'nPpn' => $order->nPpn,
                'nBiayaKirim' => $order->nBiayaKirim,
                'nBiayaPacking' => $order->nBiayaPacking,
                'nGrandTotal' => $order->nGrandTotal,
                'eDeleted' => 'tidak',
                'iCreatedid' => $userId,
                'iUpdatedid' => $userId,
                'tCreated' => now(),
                'tUpdated' => now(),
            ]);

            foreach ($order->details as $detail) {
                $packingDetail = TransaksiPackingDetail::create([
                    'iIdOrder' => $order->iId,
                    'iIdOrderDetail' => $detail->iId,
                    'vNoOrder' => $order->vNoOrder,
                    'iIdPacking' => $packing->iId,
                    'vNoPacking' => $vNoPacking,
                    'iIdBarang' => $detail->iIdBarang,
                    'iIdBarangKemasan' => $detail->iIdBarangKemasan,
                    'nHarga' => $detail->nHarga,
                    'nDisc' => $detail->nDisc,
                    'iQty' => $detail->iQty,
                    'nPpn' => $detail->nPpn,
                    'nTotal' => $detail->nTotal,
                    'eStatus' => 'open',
                    'eDeleted' => 'tidak',
                    'iCreatedid' => $userId,
                    'iUpdatedid' => $userId,
                    'tCreated' => now(),
                    'tUpdated' => now(),
                ]);

                TransaksiPackingBatch::create([
                    'iIdOrder' => $order->iId,
                    'iIdOrderDetail' => $detail->iId,
                    'vNoOrder' => $order->vNoOrder,
                    'iIdPacking' => $packing->iId,
                    'vNoPacking' => $vNoPacking,
                    'iIdPackingDetail' => $packingDetail->iId,
                    'iIdBarang' => $detail->iIdBarang,
                    'iIdBarangKemasan' => $detail->iIdBarangKemasan,
                    'vBatch' => '',
                    'iQty' => $detail->iQty,
                    'eDeleted' => 'tidak',
                    'iCreatedid' => $userId,
                    'iUpdatedid' => $userId,
                    'tCreated' => now(),
                    'tUpdated' => now(),
                ]);
            }

            $order->update([
                'eStatus' => 'packing',
                'iUpdatedid' => $userId,
                'tUpdated' => now(),
            ]);

            DB::commit();
            return redirect('/transaksi/order')->with('success', 'Checkout berhasil. Packing telah dibuat.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Gagal checkout: ' . $e->getMessage());
        }
    }
}
