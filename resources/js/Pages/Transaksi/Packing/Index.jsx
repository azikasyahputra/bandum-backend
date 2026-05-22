import { Head, Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination";

export default function Index() {
    const { props } = usePage();
    const { title, items, searchValues: initialSearch } = props;

    const [inputs, setInputs] = useState({
        vNoPacking: initialSearch?.vNoPacking || "",
        vNoOrder: initialSearch?.vNoOrder || "",
        vNamaCustomer: initialSearch?.vNamaCustomer || "",
        eStatus: initialSearch?.eStatus || "",
    });
    const [timers, setTimers] = useState({});

    const handleSearch = (col, value) => {
        const updated = { ...inputs, [col]: value };
        setInputs(updated);
        clearTimeout(timers[col]);

        const params = {};
        Object.entries(updated).forEach(([k, v]) => { if (v) params[k] = v; });

        const timer = setTimeout(() => {
            router.get("/transaksi/packing", params, { preserveState: true, replace: true });
        }, 300);
        setTimers((prev) => ({ ...prev, [col]: timer }));
    };

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            router.delete(`/transaksi/packing/${id}`);
        }
    };

    const statusBadge = (val) => {
        const map = { "open": "info-btn", "proses": "warning-btn", "selesai": "success-btn", "batal": "close-btn" };
        return <span className={`status-btn ${map[val] || "info-btn"}`} style={{ fontSize: 12, padding: "2px 8px" }}>{val}</span>;
    };

    return (
        <>
            <Head title={title} />
            <style>{`
                .compact-table > :not(caption) > * > * { padding: 10px 14px !important; }
                .compact-table th h6 { font-size: 14px; }
                .compact-table td p { font-size: 14px; }
                .search-input { display: block; width: 100%; min-width: 80px; padding: 5px 8px; font-size: 13px; border: 1px solid #e2e8f0; border-radius: 5px; background: #f8fafc; outline: none; transition: all 0.15s ease; box-sizing: border-box; }
                .search-input:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
                .action-btn { font-size: 20px; }
            `}</style>

            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="d-flex justify-content-between align-items-center mb-10" style={{ gap: 12 }}>
                                <h6 className="mb-0">{title}</h6>
                            </div>

                            <div className="table-wrapper table-responsive">
                                <table className="table compact-table">
                                    <thead>
                                        <tr>
                                            <th><h6>#</h6></th>
                                            <th>
                                                <h6>No. Packing</h6>
                                                <input className="search-input" placeholder="Cari" value={inputs.vNoPacking} onChange={(e) => handleSearch("vNoPacking", e.target.value)} />
                                            </th>
                                            <th>
                                                <h6>No. Order</h6>
                                                <input className="search-input" placeholder="Cari" value={inputs.vNoOrder} onChange={(e) => handleSearch("vNoOrder", e.target.value)} />
                                            </th>
                                            <th>
                                                <h6>Customer</h6>
                                                <input className="search-input" placeholder="Cari" value={inputs.vNamaCustomer} onChange={(e) => handleSearch("vNamaCustomer", e.target.value)} />
                                            </th>
                                            <th><h6>Grand Total</h6></th>
                                            <th>
                                                <h6>Status</h6>
                                                <input className="search-input" placeholder="Cari" value={inputs.eStatus} onChange={(e) => handleSearch("eStatus", e.target.value)} />
                                            </th>
                                            <th><h6>Aksi</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.data && items.data.length > 0 ? items.data.map((item, idx) => (
                                            <tr key={item.iId}>
                                                <td><p>{items.from + idx}</p></td>
                                                <td><p>{item.vNoPacking || "-"}</p></td>
                                                <td><p>{item.vNoOrder || "-"}</p></td>
                                                <td><p>{item.vNamaCustomer || "-"}</p></td>
                                                <td><p>{item.nGrandTotal ? Number(item.nGrandTotal).toLocaleString() : "-"}</p></td>
                                                <td><p>{statusBadge(item.eStatus)}</p></td>
                                                <td>
                                                    <div className="action d-flex" style={{ gap: 5, alignItems: "center" }}>
                                                        <a href={`/transaksi/packing/${item.iId}/edit`} className="text-primary action-btn" title="Edit" onClick={(e) => { e.preventDefault(); router.visit(`/transaksi/packing/${item.iId}/edit`); }}>
                                                            <i className="lni lni-pencil-alt"></i>
                                                        </a>
                                                        <button className="text-danger border-0 bg-transparent p-0 action-btn" onClick={() => handleDelete(item.iId)} title="Hapus">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={7} style={{ textAlign: "center", padding: "20px 8px" }}>
                                                    <p style={{ color: "#6b7280" }}>Belum ada data.</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <Pagination items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
