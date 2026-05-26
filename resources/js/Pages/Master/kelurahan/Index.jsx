import { Head, Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination";
import DateRangePicker from "@/Components/DateRangePicker";

const TABLE_COLUMNS = ["iIdProvinsi", "iIdKota", "iIdKecamatan", "vNama", "vKodepos"];

export default function Index() {
    const { props } = usePage();
    const { title, table, items, searchValues: initialSearch, relatedTables, primaryKey } = props;

    const builds = {};
    TABLE_COLUMNS.forEach((col) => {
        builds[col] = initialSearch?.[col] || "";
    });
    const [inputs, setInputs] = useState(builds);
    const [timers, setTimers] = useState({});
    const [dateRanges, setDateRanges] = useState({
        tCreated_from: initialSearch?.tCreated_from || "",
        tCreated_to: initialSearch?.tCreated_to || "",
        tUpdated_from: initialSearch?.tUpdated_from || "",
        tUpdated_to: initialSearch?.tUpdated_to || "",
    });

    const handleSearch = (col, value) => {
        const updated = { ...inputs, [col]: value };
        setInputs(updated);

        clearTimeout(timers[col]);
        const params = {};
        TABLE_COLUMNS.forEach((c) => {
            if (updated[c]) params[c] = updated[c];
        });
        Object.entries(dateRanges).forEach(([k, v]) => {
            if (v) params[k] = v;
        });

        const timer = setTimeout(() => {
            router.get(`/master/kelurahan`, params, {
                preserveState: true,
                replace: true,
            });
        }, 300);
        setTimers((prev) => ({ ...prev, [col]: timer }));
    };

        const commitDateRange = (updated) => {
        clearTimeout(timers["_range"]);
        const params = {};
        TABLE_COLUMNS.forEach((c) => {
            if (inputs[c]) params[c] = inputs[c];
        });
        Object.entries(updated).forEach(([k, v]) => {
            if (v) params[k] = v;
        });
        const timer = setTimeout(() => {
            router.get(`/master/${table}`, params, {
                preserveState: true,
                replace: true,
            });
        }, 300);
        setTimers((prev) => ({ ...prev, _range: timer }));
    };
    const handleDateRange = (action, value) => {
        if (action === "clear") {
            const cleared = { tUpdated_from: "", tUpdated_to: "" };
            setDateRanges((prev) => ({ ...prev, ...cleared }));
            commitDateRange(cleared);
            return;
        }
        const field = action === "from" ? "tUpdated_from" : "tUpdated_to";
        const updated = { ...dateRanges, [field]: value };
        setDateRanges(updated);
        commitDateRange(updated);
    };


    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            router.delete(`/master/kelurahan/${id}`);
        }
    };

    const formatValue = (col, value) => {
        if (value === null || value === undefined) return "-";

        if (col.startsWith("e") || col.startsWith("is")) {
            if (value === "ya" || value === 1 || value === true || value === "true") {
                return <span className="status-btn active-btn">Ya</span>;
            }
            return <span className="status-btn close-btn">Tidak</span>;
        }

        if (col.startsWith("dTanggal") || col.startsWith("t")) {
            if (typeof value === "string") return value.split(" ")[0];
            return value;
        }

        if (col.startsWith("vImage") || col.startsWith("vPicture") || col.startsWith("vProfilepic") || col.startsWith("vThumbnails") || col.startsWith("vIcon")) {
            if (value && value !== "") {
                const src = value.startsWith("http") ? value : `/storage/${value}`;
                return <img src={src} alt="" style={{ width: 35, height: 35, objectFit: "cover", borderRadius: 4 }} />;
            }
            return "-";
        }

        const str = String(value);
        return str.length > 40 ? str.substring(0, 40) + "..." : str;
    };

    return (
        <>
            <Head title={title} />

            <style>{`
                .compact-table > :not(caption) > * > * {
                    padding: 10px 14px !important;
                }
                .compact-table th h6 {
                    font-size: 14px;
                    margin-bottom: 6px;
                }
                .compact-table td p {
                    font-size: 14px;
                }
                .compact-table .search-input {
                    display: block;
                    width: 100%;
                    min-width: 80px;
                    padding: 5px 8px 5px 24px;
                    font-size: 13px;
                    border: 1px solid #e2e8f0;
                    border-radius: 5px;
                    background: #f8fafc;
                    outline: none;
                    transition: all 0.15s ease;
                    box-sizing: border-box;
                }
                .compact-table .search-input:focus {
                    border-color: #3b82f6;
                    background: #fff;
                    box-shadow: 0 0 0 2px rgba(59,130,246,0.15);
                }
                .compact-table .search-wrap {
                    position: relative;
                }
                .compact-table .search-icon {
                    position: absolute;
                    left: 6px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 13px;
                    height: 13px;
                    color: #999;
                    pointer-events: none;
                }
                .compact-table .action-btn {
                    font-size: 20px;
                }
            `}</style>

            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="d-flex justify-content-between align-items-center mb-10" style={{ gap: 12 }}>
                                <h6 className="mb-0">{title}</h6>
                                <Link href={`/master/kelurahan/create`} className="main-btn primary-btn-outline rounded-full btn-hover btn-sm">
                                    <i className="lni lni-plus mr-5"></i>
                                    Tambah
                                </Link>
                            </div>

                            <div className="table-wrapper table-responsive">
                                <table className="table compact-table">
                                    <thead>
                                        <tr>
                                            <th><h6>#</h6></th>
                                            <th key="iIdProvinsi">
                                                <h6>Provinsi</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdProvinsi"] || ""}
                                                        onChange={(e) => handleSearch("iIdProvinsi", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="iIdKota">
                                                <h6>Kota</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdKota"] || ""}
                                                        onChange={(e) => handleSearch("iIdKota", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="iIdKecamatan">
                                                <h6>Kecamatan</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdKecamatan"] || ""}
                                                        onChange={(e) => handleSearch("iIdKecamatan", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vNama">
                                                <h6>Nama</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vNama"] || ""}
                                                        onChange={(e) => handleSearch("vNama", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vKodepos">
                                                <h6>Kode Pos</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vKodepos"] || ""}
                                                        onChange={(e) => handleSearch("vKodepos", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                                                                        <th key="tUpdated" style={{ minWidth: 160, width: 160 }}>
                                                <h6>Diubah</h6>
                                                <div style={{ marginTop: 4 }}>
                                                    <DateRangePicker
                                                        from={dateRanges.tUpdated_from}
                                                        to={dateRanges.tUpdated_to}
                                                        onChange={handleDateRange}
                                                        label="Filter tanggal"
                                                    />
                                                </div>
                                            </th>
                                            <th><h6>Aksi</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.data && items.data.length > 0 ? (
                                            items.data.map((item, idx) => (
                                                <tr key={item[primaryKey]}>
                                                    <td><p>{items.from + idx}</p></td>
                                                        <td key="iIdProvinsi"><p>{formatValue("iIdProvinsi", item["iIdProvinsi"])}</p></td>
                                                        <td key="iIdKota"><p>{formatValue("iIdKota", item["iIdKota"])}</p></td>
                                                        <td key="iIdKecamatan"><p>{formatValue("iIdKecamatan", item["iIdKecamatan"])}</p></td>
                                                        <td key="vNama"><p>{formatValue("vNama", item["vNama"])}</p></td>
                                                        <td key="vKodepos"><p>{formatValue("vKodepos", item["vKodepos"])}</p></td>
                                                        <td key="tUpdated" style={{ whiteSpace: "nowrap" }}>
                                                            <p>
                                                                {item?.tUpdated
                                                                    ? String(item.tUpdated)
                                                                    : item?.tCreated
                                                                      ? String(item.tCreated)
                                                                      : "-"}
                                                                <br />
                                                                {item?.vUpdater || "-"}
                                                            </p>
                                                        </td>
                                                        <td>
                                                        <div className="action d-flex" style={{ gap: 5, alignItems: "center" }}>
                                                            {relatedTables && relatedTables.map((rt) => (
                                                                <Link
                                                                    key={rt.route}
                                                                    href={`/master/${rt.route}?${rt.foreignKey}=${item[primaryKey]}`}
                                                                    className="text-info action-btn"
                                                                    title={rt.label}
                                                                >
                                                                    <i className="lni lni-list"></i>
                                                                </Link>
                                                            ))}
                                                            {relatedTables && relatedTables.length > 0 && (
                                                                <div style={{ width: 1, height: 14, background: "#ddd" }}></div>
                                                            )}
                                                            <Link
                                                                href={`/master/kelurahan/${item[primaryKey]}`}
                                                                className="text-success action-btn"
                                                                title="Lihat"
                                                            >
                                                                <i className="lni lni-eye"></i>
                                                            </Link>
                                                            <Link
                                                                href={`/master/kelurahan/${item[primaryKey]}/edit`}
                                                                className="text-primary action-btn"
                                                                title="Edit"
                                                            >
                                                                <i className="lni lni-pencil-alt"></i>
                                                            </Link>
                                                            <button
                                                                className="text-danger border-0 bg-transparent p-0 action-btn"
                                                                onClick={() => handleDelete(item[primaryKey])}
                                                                title="Hapus"
                                                            >
                                                                <i className="lni lni-trash-can"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={8} style={{ textAlign: "center", padding: "20px 8px" }}>
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
