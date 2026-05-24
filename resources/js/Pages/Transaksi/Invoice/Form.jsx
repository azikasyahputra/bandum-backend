import { Head, Link, router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function Form() {
    const { props } = usePage();
    const { title, item, order } = props;
    const [processing, setProcessing] = useState(false);
    const [suratJalan, setSuratJalan] = useState(null);
    const [fakturPajak, setFakturPajak] = useState(null);
    const [dragField, setDragField] = useState(null);

    const sjRef = useRef(null);
    const fpRef = useRef(null);

    const handleDrop = (field, e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragField(null);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (field === "vSuratJalan") setSuratJalan(file);
            else setFakturPajak(file);
        }
    };

    const handleFileChange = (field, e) => {
        const file = e.target.files?.[0];
        if (file) {
            if (field === "vSuratJalan") setSuratJalan(file);
            else setFakturPajak(file);
        }
    };

    const handleSave = () => {
        if (!suratJalan && !fakturPajak) return;
        setProcessing(true);

        const formData = new FormData();
        formData.append("_method", "PUT");
        if (suratJalan) formData.append("vSuratJalan", suratJalan);
        if (fakturPajak) formData.append("vFakturPajak", fakturPajak);

        router.post(`/transaksi/invoice/${item.iId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            onFinish: () => setProcessing(false),
        });
    };

    const fileUrl = (path) => path ? (path.startsWith("http") ? path : `/storage/${path}`) : null;

    return (
        <>
            <Head title={title} />
            <style>{`
                .compact-card .card-style { padding: 18px 22px !important; }
                .compact-card .input-style-1 { margin-bottom: 8px !important; }
                .compact-card .input-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .input-style-1 input { height: 34px; font-size: 13px; padding: 4px 10px; background: #f8fafc; cursor: default; }
                .compact-card .compact-table > :not(caption) > * > * { padding: 5px 8px !important; }
                .compact-card .compact-table th h6 { font-size: 12px; }
                .compact-card .compact-table td p { font-size: 12px; }
                .compact-card .compact-table td { vertical-align: middle; }
                .compact-card .btn-sm-custom { font-size: 13px; padding: 5px 14px; }
                .compact-card .action-bar { border-top: 1px solid #eee; margin-top: 12px; padding-top: 12px; }
                .upload-square { width: 100%; height: 150px; border: 2px dashed #d1d5db; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; position: relative; overflow: hidden; }
                .upload-square:hover { border-color: #3b82f6; background: #f0f7ff; }
                .upload-square.dragover { border-color: #365cf5; background: #f0f4ff; }
                .upload-square.has-file { border-color: #365cf5; background: #f9fafb; }
                .upload-square .preview-img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; }
                .upload-square .overlay-bar { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; padding: 4px 8px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .upload-square .upload-icon { font-size: 24px; color: #9ca3af; }
                .upload-square .upload-text { font-size: 12px; color: #9ca3af; margin-top: 6px; text-align: center; padding: 0 8px; line-height: 1.3; }
            `}</style>

            <div className="form-elements-wrapper compact-card">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="input-style-1">
                                        <label>No. Invoice</label>
                                        <input type="text" value={item.vNoInvoice || ""} readOnly />
                                    </div>
                                </div>
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

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-style-1">
                                        <label>Surat Jalan</label>
                                        <div
                                            className={`upload-square ${dragField === "vSuratJalan" ? "dragover" : ""} ${suratJalan || order?.vSuratJalan ? "has-file" : ""}`}
                                            onClick={() => sjRef.current?.click()}
                                            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDragField("vSuratJalan"); }}
                                            onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setDragField(null); }}
                                            onDrop={(e) => handleDrop("vSuratJalan", e)}
                                        >
                                            {(() => {
                                                const previewSrc = suratJalan?.type?.startsWith("image/") ? URL.createObjectURL(suratJalan) : (order?.vSuratJalan && /\.(jpe?g|png)$/i.test(order.vSuratJalan) ? fileUrl(order.vSuratJalan) : null);
                                                if (previewSrc) {
                                                    return <>
                                                        <img src={previewSrc} alt="" className="preview-img" />
                                                        <div className="overlay-bar">{suratJalan?.name || order?.vSuratJalan?.split("/")?.pop() || ""}</div>
                                                    </>;
                                                }
                                                if (suratJalan || order?.vSuratJalan) {
                                                    return <>
                                                        <i className="lni lni-file lni-upload"></i>
                                                        <div className="upload-text">{suratJalan?.name || order?.vSuratJalan?.split("/")?.pop()}</div>
                                                    </>;
                                                }
                                                return <>
                                                    <i className="lni lni-upload upload-icon"></i>
                                                    <div className="upload-text">Klik atau seret file</div>
                                                </>;
                                            })()}
                                        </div>
                                        <input ref={sjRef} id="file-vSuratJalan" type="file" accept=".jpeg,.jpg,.png,.pdf" style={{ display: "none" }} onChange={(e) => handleFileChange("vSuratJalan", e)} />
                                        {(suratJalan || order?.vSuratJalan) && (
                                            <div style={{ textAlign: "right", marginTop: 6 }}>
                                                <a href={suratJalan ? URL.createObjectURL(suratJalan) : fileUrl(order.vSuratJalan)} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#365cf5", textDecoration: "none" }}>
                                                    <i className="lni lni-eye" style={{ fontSize: 14 }}></i>
                                                    Lihat File
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-style-1">
                                        <label>Faktur Pajak</label>
                                        <div
                                            className={`upload-square ${dragField === "vFakturPajak" ? "dragover" : ""} ${fakturPajak || order?.vFakturPajak ? "has-file" : ""}`}
                                            onClick={() => fpRef.current?.click()}
                                            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDragField("vFakturPajak"); }}
                                            onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setDragField(null); }}
                                            onDrop={(e) => handleDrop("vFakturPajak", e)}
                                        >
                                            {(() => {
                                                const previewSrc = fakturPajak?.type?.startsWith("image/") ? URL.createObjectURL(fakturPajak) : (order?.vFakturPajak && /\.(jpe?g|png)$/i.test(order.vFakturPajak) ? fileUrl(order.vFakturPajak) : null);
                                                if (previewSrc) {
                                                    return <>
                                                        <img src={previewSrc} alt="" className="preview-img" />
                                                        <div className="overlay-bar">{fakturPajak?.name || order?.vFakturPajak?.split("/")?.pop() || ""}</div>
                                                    </>;
                                                }
                                                if (fakturPajak || order?.vFakturPajak) {
                                                    return <>
                                                        <i className="lni lni-file lni-upload"></i>
                                                        <div className="upload-text">{fakturPajak?.name || order?.vFakturPajak?.split("/")?.pop()}</div>
                                                    </>;
                                                }
                                                return <>
                                                    <i className="lni lni-upload upload-icon"></i>
                                                    <div className="upload-text">Klik atau seret file</div>
                                                </>;
                                            })()}
                                        </div>
                                        <input ref={fpRef} id="file-vFakturPajak" type="file" accept=".jpeg,.jpg,.png,.pdf" style={{ display: "none" }} onChange={(e) => handleFileChange("vFakturPajak", e)} />
                                        {(fakturPajak || order?.vFakturPajak) && (
                                            <div style={{ textAlign: "right", marginTop: 6 }}>
                                                <a href={fakturPajak ? URL.createObjectURL(fakturPajak) : fileUrl(order.vFakturPajak)} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#365cf5", textDecoration: "none" }}>
                                                    <i className="lni lni-eye" style={{ fontSize: 14 }}></i>
                                                    Lihat File
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <hr />


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

                            <div className="d-flex justify-content-between align-items-center action-bar">
                                <Link href="/transaksi/invoice" className="main-btn danger-btn-outline rounded-full btn-hover btn-sm">
                                    <i className="lni lni-arrow-left me-1"></i> Kembali
                                </Link>
                                <button type="button" disabled={processing || (!suratJalan && !fakturPajak)} className="main-btn primary-btn-outline rounded-full btn-hover btn-sm" onClick={handleSave}>
                                    {processing ? "Menyimpan..." : "Simpan Dokumen"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
