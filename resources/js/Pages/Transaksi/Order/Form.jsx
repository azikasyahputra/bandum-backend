import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Form() {
    const { props } = usePage();
    const { title, customers, pembayaran, ekspedisi, jenisPengiriman, barang, kemasan, item } = props;

    const isEdit = !!item;

    const defaultHeader = {};
    const headerFields = [
        "vNoOrder", "iIdCustomer", "vNamaCustomer", "iIdAlamat", "vAlamat",
        "iIdPembayaran", "vPembayaran", "eTipePembayaran",
        "iIdPengiriman", "vPengiriman", "iIdJenisPengiriman", "vJenisPengiriman",
        "vCatatan", "eStatus",
        "nTotal", "nTotalSebelumDiskon", "nTotalDiskon", "nPpn", "nBiayaKirim", "nGrandTotal",
        "vSuratJalan", "vFakturPajak", "eLunas",
    ];
    headerFields.forEach((f) => {
        defaultHeader[f] = isEdit ? item[f] ?? "" : "";
    });

    const { data, setData, post, put, processing, errors } = useForm({
        ...defaultHeader,
        details: isEdit && item.details ? item.details.map((d) => ({ ...d })) : [],
    });

    const [customerAlamatList, setCustomerAlamatList] = useState([]);

    const setHeader = (field, value) => setData(field, value);

    const loadCustomerAlamat = async (customerId) => {
        if (!customerId) return;
        try {
            const res = await fetch(`/transaksi/order/customer-alamat/${customerId}`);
            const list = await res.json();
            setCustomerAlamatList(list);
            if (list.length > 0) {
                setHeader("iIdAlamat", list[0].value);
                setHeader("vAlamat", list[0].label);
            }
        } catch (e) {
            console.error("loadCustomerAlamat error:", e);
        }
    };

    const handleCustomerChange = (val) => {
        const cust = customers.find((c) => c.value == val);
        setHeader("iIdCustomer", val);
        setHeader("vNamaCustomer", cust ? cust.label : "");
        setHeader("iIdAlamat", "");
        setHeader("vAlamat", "");
        loadCustomerAlamat(val);
    };

    const handleAlamatChange = (val) => {
        const al = customerAlamatList.find((a) => a.value == val);
        setHeader("iIdAlamat", val);
        setHeader("vAlamat", al ? al.label : "");
    };

    const handlePembayaranChange = (val) => {
        const p = pembayaran.find((x) => x.value == val);
        setHeader("iIdPembayaran", val);
        setHeader("vPembayaran", p ? p.label : "");
    };

    const handleEkspedisiChange = (val) => {
        const e = ekspedisi.find((x) => x.value == val);
        setHeader("iIdPengiriman", val);
        setHeader("vPengiriman", e ? e.label : "");
    };

    const handleJenisPengirimanChange = (val) => {
        const j = jenisPengiriman.find((x) => x.value == val);
        setHeader("iIdJenisPengiriman", val);
        setHeader("vJenisPengiriman", j ? j.label : "");
    };

    const addDetail = () => {
        setData("details", [...data.details, {
            iIdBarang: "", iIdBarangKemasan: "", nHarga: 0, nDisc: 0,
            iQty: 0, iQtyKecil: 0, nPpn: 0, nTotal: 0,
            iQtyOr: 0, iQtyPo: 0, iQtyPl: 0, iQtyKirim: 0, iQtyRetur: 0,
            eStatus: "", iIsiKemasanKecil: 0,
        }]);
    };

    const removeDetail = (idx) => {
        setData("details", data.details.filter((_, i) => i !== idx));
    };

    const setDetail = (idx, field, val) => {
        if (["nHarga", "nDisc", "iQty"].includes(field)) {
            val = val.replace(/[^0-9.,]/g, "").replace(/,/g, ".");
        }
        const updated = [...data.details];
        updated[idx] = { ...updated[idx], [field]: val };

        if (field === "iIdBarang") {
            const kList = kemasan.filter((k) => k.iIdBarang == val);
            if (kList.length > 0) {
                updated[idx].iIdBarangKemasan = kList[0].value;
                updated[idx].nHarga = kList[0].nHarga || 0;
                updated[idx].iIsiKemasanKecil = 1;
            }
        }

        if (field === "iIdBarangKemasan") {
            const k = kemasan.find((x) => x.value == val);
            if (k) {
                updated[idx].nHarga = k.nHarga || 0;
                updated[idx].iIsiKemasanKecil = 1;
            }
        }

        const row = updated[idx];
        const harga = parseFloat(row.nHarga) || 0;
        const qty = parseInt(row.iQty) || 0;
        const disc = parseFloat(row.nDisc) || 0;
        updated[idx].nTotal = harga * qty * (1 - disc / 100);

        setData("details", updated);
        recalcTotals(updated);
    };

    const kemasanByBarang = (barangId) => kemasan.filter((k) => k.iIdBarang == barangId);

    const recalcTotals = (details) => {
        details = details || data.details;
        let totalSebelumDiskon = 0, totalDiskon = 0;
        details.forEach((row) => {
            const h = parseFloat(row.nHarga) || 0;
            const q = parseInt(row.iQty) || 0;
            const d = parseFloat(row.nDisc) || 0;
            totalSebelumDiskon += h * q;
            totalDiskon += h * q * d / 100;
        });
        const total = totalSebelumDiskon - totalDiskon;
        const ppn = total * 11 / 100;
        const kirim = parseFloat(data.nBiayaKirim) || 0;
        const grand = total + ppn + kirim;

        setHeader("nTotalSebelumDiskon", totalSebelumDiskon);
        setHeader("nTotal", total);
        setHeader("nTotalDiskon", totalDiskon);
        setHeader("nPpn", ppn);
        setHeader("nGrandTotal", grand);
    };

    const doSubmit = (statusOverride) => {
        let totalSebelumDiskon = 0, totalDiskon = 0;
        (data.details || []).forEach((row) => {
            const h = parseFloat(row.nHarga) || 0;
            const q = parseInt(row.iQty) || 0;
            const d = parseFloat(row.nDisc) || 0;
            totalSebelumDiskon += h * q;
            totalDiskon += h * q * d / 100;
        });
        const nTotal = totalSebelumDiskon - totalDiskon;
        const nPpn = nTotal * 11 / 100;
        const nBiayaKirim = parseFloat(data.nBiayaKirim) || 0;
        const nGrandTotal = nTotal + nPpn + nBiayaKirim;

        setData("nTotalSebelumDiskon", totalSebelumDiskon);
        setData("nTotal", nTotal);
        setData("nTotalDiskon", totalDiskon);
        setData("nPpn", nPpn);
        setData("nGrandTotal", nGrandTotal);
        if (statusOverride) setData("eStatus", statusOverride);

        if (isEdit) {
            put(`/transaksi/order/${item.iId}`);
        } else {
            post("/transaksi/order");
        }
    };

    const submit = (e) => {
        e.preventDefault();
        doSubmit();
    };

    return (
        <>
            <Head title={title} />
            <style>{`
                .compact-card .card-style { padding: 18px 22px !important; }
                .compact-card .input-style-1 { margin-bottom: 8px !important; }
                .compact-card .input-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .input-style-1 input,
                .compact-card .input-style-1 textarea,
                .compact-card .input-style-1 select { height: 34px; font-size: 13px; padding: 4px 10px; }
                .compact-card .input-style-1 textarea { height: auto; min-height: 56px; padding: 6px 10px; }
                .compact-card .select-style-1 { margin-bottom: 8px !important; }
                .compact-card .select-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .select-style-1 select { height: 34px; font-size: 13px; padding: 3px 8px; }
                .compact-card .form-check { padding-top: 18px !important; margin-bottom: 6px !important; }
                .compact-card .form-check-label { font-size: 13px; }
                .compact-card hr { margin: 12px 0 !important; }
                .compact-card .section-title { font-size: 14px; font-weight: 600; margin-bottom: 10px; }
                .compact-card .btn-sm-custom { font-size: 13px; padding: 5px 14px; }
                .compact-card .totals-wrap { margin-top: 8px; }
                .compact-card .totals-wrap .input-style-1 { margin-bottom: 4px !important; }
                .compact-card .totals-wrap .input-style-1 label { font-size: 12px; }
                .compact-card .totals-wrap .input-style-1 input { height: 30px; font-size: 13px; }
                .compact-card .action-bar { border-top: 1px solid #eee; margin-top: 12px; padding-top: 12px; }
                .compact-table > :not(caption) > * > * { padding: 5px 8px !important; }
                .compact-table th h6 { font-size: 12px; }
                .compact-table td p { font-size: 12px; }
                .compact-table td { vertical-align: middle; }
                .detail-input { width: 100%; padding: 3px 6px; font-size: 12px; border: 1px solid #e2e8f0; border-radius: 4px; background: #fff; outline: none; box-sizing: border-box; height: 28px; }
                .detail-input:focus { border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
                .detail-select { width: 100%; padding: 2px 4px; font-size: 12px; border: 1px solid #e2e8f0; border-radius: 4px; background: #fff; outline: none; box-sizing: border-box; height: 28px; }
            `}</style>

            <div className="form-elements-wrapper compact-card">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="d-flex justify-content-between align-items-center mb-10">
                                <h6 className="mb-0" style={{fontSize:15}}>{title}</h6>
                                <Link href="/transaksi/order" className="main-btn primary-btn-outline btn-hover btn-sm-custom">
                                    <i className="lni lni-arrow-left mr-5"></i> Kembali
                                </Link>
                            </div>

                            <form onSubmit={submit}>
                                <h6 className="section-title">Informasi Order</h6>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="input-style-1">
                                            <label>No. Order</label>
                                            <input type="text" placeholder="Otomatis" value={data.vNoOrder} onChange={(e) => setHeader("vNoOrder", e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Customer</label>
                                            <div className="select-position">
                                                <select value={data.iIdCustomer} onChange={(e) => handleCustomerChange(e.target.value)}>
                                                    <option value="">Pilih Customer</option>
                                                    {customers.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="input-style-1">
                                            <label>Nama Customer</label>
                                            <input type="text" value={data.vNamaCustomer} onChange={(e) => setHeader("vNamaCustomer", e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Alamat</label>
                                            <div className="select-position">
                                                <select value={data.iIdAlamat} onChange={(e) => handleAlamatChange(e.target.value)}>
                                                    <option value="">Pilih Alamat</option>
                                                    {customerAlamatList.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-style-1">
                                            <label>Alamat</label>
                                            <textarea rows="2" value={data.vAlamat} onChange={(e) => setHeader("vAlamat", e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Pembayaran</label>
                                            <div className="select-position">
                                                <select value={data.iIdPembayaran} onChange={(e) => handlePembayaranChange(e.target.value)}>
                                                    <option value="">Pilih Pembayaran</option>
                                                    {pembayaran.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="input-style-1">
                                            <label>Tipe Pembayaran</label>
                                            <input type="text" value={data.eTipePembayaran} onChange={(e) => setHeader("eTipePembayaran", e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Ekspedisi</label>
                                            <div className="select-position">
                                                <select value={data.iIdPengiriman} onChange={(e) => handleEkspedisiChange(e.target.value)}>
                                                    <option value="">Pilih Ekspedisi</option>
                                                    {ekspedisi.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Jenis Pengiriman</label>
                                            <div className="select-position">
                                                <select value={data.iIdJenisPengiriman} onChange={(e) => handleJenisPengirimanChange(e.target.value)}>
                                                    <option value="">Pilih Jenis</option>
                                                    {jenisPengiriman.map((j) => <option key={j.value} value={j.value}>{j.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="input-style-1">
                                            <label>PPN</label>
                                            <input type="text" inputMode="decimal" value={data.nPpn} onChange={(e) => setHeader("nPpn", e.target.value.replace(/[^0-9.,]/g,"").replace(/,/g,"."))} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Status</label>
                                            <div className="select-position">
                                                <select value={data.eStatus} onChange={(e) => setHeader("eStatus", e.target.value)}>
                                                    <option value="">Pilih Status</option>
                                                    <option value="baru">Baru</option>
                                                    <option value="proses">Proses</option>
                                                    <option value="dikirim">Dikirim</option>
                                                    <option value="selesai">Selesai</option>
                                                    <option value="batal">Batal</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="select-style-1">
                                            <label>Lunas</label>
                                            <div className="select-position">
                                                <select value={data.eLunas} onChange={(e) => setHeader("eLunas", e.target.value)}>
                                                    <option value="tidak">Tidak</option>
                                                    <option value="ya">Ya</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-style-1">
                                            <label>Catatan</label>
                                            <textarea rows="2" value={data.vCatatan} onChange={(e) => setHeader("vCatatan", e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between align-items-center section-title" style={{marginBottom:6}}>
                                    <span>Detail Barang</span>
                                    <button type="button" className="main-btn primary-btn btn-hover btn-sm-custom" onClick={addDetail}>
                                        <i className="lni lni-plus mr-5"></i> Tambah Barang
                                    </button>
                                </div>

                                <div className="table-wrapper table-responsive">
                                    <table className="table compact-table">
                                        <thead>
                                            <tr>
                                                <th><h6>#</h6></th>
                                                <th><h6>Barang</h6></th>
                                                <th><h6>Kemasan</h6></th>
                                                <th style={{width:90}}><h6>Harga</h6></th>
                                                <th style={{width:70}}><h6>Disc (%)</h6></th>
                                                <th style={{width:60}}><h6>Qty</h6></th>
                                                <th style={{width:90}}><h6>Total</h6></th>
                                                <th style={{width:30}}><h6>Aksi</h6></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.details.length > 0 ? data.details.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td><p>{idx + 1}</p></td>
                                                    <td>
                                                        <select className="detail-select" value={row.iIdBarang} onChange={(e) => setDetail(idx, "iIdBarang", e.target.value)}>
                                                            <option value="">Pilih</option>
                                                            {barang.filter((b) => !b.value || b.value == row.iIdBarang || !data.details.some((d, di) => di !== idx && d.iIdBarang == b.value)).map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select className="detail-select" value={row.iIdBarangKemasan} onChange={(e) => setDetail(idx, "iIdBarangKemasan", e.target.value)}>
                                                            <option value="">Pilih</option>
                                                            {kemasanByBarang(row.iIdBarang).map((k) => <option key={k.value} value={k.value}>{k.label}</option>)}
                                                        </select>
                                                    </td>
                                                    <td><input className="detail-input" type="text" inputMode="decimal" value={row.nHarga} onChange={(e) => setDetail(idx, "nHarga", e.target.value)} /></td>
                                                    <td><input className="detail-input" type="text" inputMode="decimal" value={row.nDisc} onChange={(e) => setDetail(idx, "nDisc", e.target.value)} /></td>
                                                    <td><input className="detail-input" type="text" inputMode="numeric" value={row.iQty} onChange={(e) => setDetail(idx, "iQty", e.target.value)} /></td>
                                                    <td><p style={{fontWeight:600,fontSize:12,textAlign:"right"}}>{Number(row.nTotal).toLocaleString()}</p></td>
                                                    <td>
                                                        <button type="button" className="text-danger border-0 bg-transparent p-0" style={{fontSize:13}} onClick={() => removeDetail(idx)} title="Hapus">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )) : (
                                                <tr>
                                                    <td colSpan={8} style={{textAlign:"center",padding:"10px 6px"}}>
                                                        <p style={{color:"#6b7280",fontSize:12}}>Belum ada detail barang.</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        {Object.keys(errors).length > 0 && (
                                            <div className="alert alert-danger" style={{fontSize:13,padding:"8px 12px",marginBottom:12}}>
                                                <ul className="mb-0" style={{paddingLeft:16}}>
                                                    {Object.entries(errors).map(([key, msg]) => (
                                                        <li key={key}>{key}: {msg}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row totals-wrap">
                                    <div className="col-12 col-md-2 offset-md-10">
                                        <div className="d-flex justify-content-between align-items-center" style={{marginBottom:3}}>
                                            <span style={{fontSize:12,color:"#5d657b"}}>Total (Sebelum Diskon)</span>
                                            <span style={{fontWeight:600,fontSize:13}}>{Number(data.nTotalSebelumDiskon || 0).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style={{marginBottom:3}}>
                                            <span style={{fontSize:12,color:"#5d657b"}}>Diskon</span>
                                            <span style={{fontWeight:600,fontSize:13,color:"#dc3545"}}>-{Number(data.nTotalDiskon || 0).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style={{marginBottom:3}}>
                                            <span style={{fontSize:12,color:"#5d657b"}}>Total (Setelah Diskon)</span>
                                            <span style={{fontWeight:600,fontSize:13}}>{Number(data.nTotal || 0).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style={{marginBottom:3}}>
                                            <span style={{fontSize:12,color:"#5d657b"}}>PPN</span>
                                            <span style={{fontWeight:600,fontSize:13}}>{Number(data.nPpn || 0).toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style={{marginBottom:3}}>
                                            <span style={{fontSize:12,color:"#5d657b"}}>Biaya Kirim</span>
                                            <input type="text" inputMode="decimal" value={data.nBiayaKirim} onChange={(e) => setHeader("nBiayaKirim", e.target.value.replace(/[^0-9.,]/g,"").replace(/,/g,"."))} style={{width:90,height:22,fontSize:12,textAlign:"right",border:"1px solid #e2e8f0",borderRadius:3,padding:"1px 4px",outline:"none"}} />
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center" style={{borderTop:"1px solid #ddd",paddingTop:3,marginTop:3}}>
                                            <span style={{fontSize:13,fontWeight:600,color:"#1A2142"}}>Grand Total</span>
                                            <span style={{fontWeight:700,fontSize:15,color:"#365CF5"}}>{Number(data.nGrandTotal || 0).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end action-bar" style={{gap:8}}>
                                    {isEdit && data.eStatus !== "proses" && (
                                        <button type="button" disabled={processing} className="main-btn success-btn btn-hover btn-sm-custom" onClick={() => { if (confirm("Proses order ini?")) doSubmit("proses"); }}>
                                            {processing ? "Menyimpan..." : "Proses"}
                                        </button>
                                    )}
                                    <button type="submit" disabled={processing} className="main-btn primary-btn btn-hover btn-sm-custom">
                                        {processing ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
