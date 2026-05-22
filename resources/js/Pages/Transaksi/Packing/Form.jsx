import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Form() {
    const { props } = usePage();
    const { title, item } = props;
    const [processing, setProcessing] = useState(false);

    const handleConfirm = () => {
        if (!confirm("Konfirmasi packing ini? Invoice akan dibuat dan status order akan berubah menjadi Dikirim.")) return;
        setProcessing(true);
        router.put(`/transaksi/packing/${item.iId}`, {}, {
            onFinish: () => setProcessing(false),
        });
    };

    const statusBadge = (val) => {
        const map = { "open": "info-btn", "proses": "warning-btn", "selesai": "success-btn", "batal": "close-btn", "Confirm": "success-btn" };
        return <span className={`status-btn ${map[val] || "info-btn"}`} style={{ fontSize: 12, padding: "2px 8px" }}>{val}</span>;
    };

    return (
        <>
            <Head title={title} />
            <style>{`
                .compact-card .card-style { padding: 18px 22px !important; }
                .compact-card .input-style-1 { margin-bottom: 8px !important; }
                .compact-card .input-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .input-style-1 input,
                .compact-card .input-style-1 textarea { height: 34px; font-size: 13px; padding: 4px 10px; }
                .compact-card .input-style-1 input[readonly] { background: #f8fafc; cursor: default; }
                .compact-card .compact-table > :not(caption) > * > * { padding: 5px 8px !important; }
                .compact-card .compact-table th h6 { font-size: 12px; }
                .compact-card .compact-table td p { font-size: 12px; }
                .compact-card .compact-table td { vertical-align: middle; }
                .compact-card .btn-sm-custom { font-size: 13px; padding: 5px 14px; }
                .compact-card .action-bar { border-top: 1px solid #eee; margin-top: 12px; padding-top: 12px; }
            `}</style>

            <div className="form-elements-wrapper compact-card">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h6 className="mb-0" style={{ fontSize: 15 }}>{title}</h6>
                                <Link href="/transaksi/packing" className="main-btn primary-btn-outline rounded-full btn-hover btn-sm">
                                    <i className="lni lni-arrow-left mr-5"></i> Kembali
                                </Link>
                            </div>

                            <h6 className="section-title" style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
                                Informasi Packing
                            </h6>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>No. Packing</label>
                                        <input type="text" value={item.vNoPacking || ""} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>No. Order</label>
                                        <input type="text" value={item.vNoOrder || ""} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>Customer</label>
                                        <input type="text" value={item.vNamaCustomer || ""} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>Status</label>
                                        <div style={{ paddingTop: 4 }}>
                                            {statusBadge(item.eStatus)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>Total (Sebelum Diskon)</label>
                                        <input type="text" value={Number((item.nTotal || 0) + (item.nTotalDiskon || 0)).toLocaleString()} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>Diskon</label>
                                        <input type="text" value={Number(item.nTotalDiskon || 0).toLocaleString()} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>Total (Setelah Diskon)</label>
                                        <input type="text" value={Number(item.nTotal || 0).toLocaleString()} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>PPN</label>
                                        <input type="text" value={Number(item.nPpn || 0).toLocaleString()} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="input-style-1">
                                        <label>Biaya Kirim</label>
                                        <input type="text" value={Number(item.nBiayaKirim || 0).toLocaleString()} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="input-style-1">
                                        <label>Biaya Packing</label>
                                        <input type="text" value={Number(item.nBiayaPacking || 0).toLocaleString()} readOnly />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="input-style-1">
                                        <label>Grand Total</label>
                                        <input type="text" value={Number(item.nGrandTotal || 0).toLocaleString()} readOnly style={{ fontWeight: 700, color: "#365CF5" }} />
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <h6 className="section-title" style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
                                Detail Barang
                            </h6>

                            <div className="table-wrapper table-responsive">
                                <table className="table compact-table">
                                    <thead>
                                        <tr>
                                            <th><h6>#</h6></th>
                                            <th><h6>Barang</h6></th>
                                            <th><h6>Kemasan</h6></th>
                                            <th><h6>Harga</h6></th>
                                            <th><h6>Disc (%)</h6></th>
                                            <th><h6>Qty</h6></th>
                                            <th><h6>Total</h6></th>
                                            <th><h6>Status</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.details && item.details.length > 0 ? item.details.map((row, idx) => (
                                            <tr key={row.iId || idx}>
                                                <td><p>{idx + 1}</p></td>
                                                <td><p>{row.iIdBarang || "-"}</p></td>
                                                <td><p>{row.iIdBarangKemasan || "-"}</p></td>
                                                <td><p>{Number(row.nHarga || 0).toLocaleString()}</p></td>
                                                <td><p>{row.nDisc || 0}</p></td>
                                                <td><p>{row.iQty || 0}</p></td>
                                                <td><p style={{ fontWeight: 600, textAlign: "right" }}>{Number(row.nTotal || 0).toLocaleString()}</p></td>
                                                <td><p>{row.eStatus || "-"}</p></td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={8} style={{ textAlign: "center", padding: "10px 6px" }}>
                                                    <p style={{ color: "#6b7280", fontSize: 12 }}>Belum ada detail barang.</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {item.eStatus !== "Confirm" && (
                                <div className="d-flex justify-content-end action-bar" style={{ gap: 8 }}>
                                    <button type="button" disabled={processing} className="main-btn success-btn-outline rounded-full btn-hover btn-sm" onClick={handleConfirm}>
                                        {processing ? "Memproses..." : "Confirm"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
