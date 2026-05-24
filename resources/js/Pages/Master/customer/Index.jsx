import { Head, Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination";

const TABLE_COLUMNS = ["vNama", "vEmail", "iIdUser", "iIdJenisperusahaan", "iIdKlasifikasiperusahaan", "eTipe", "vProfilepic", "vKtp", "vFilektp", "vNpwp", "vFilenpwp", "vSiup", "vFilesiup", "vFileaktapendirian", "vFiledomisiliperusahaan", "eVerifikasi", "isTrustedBuyer"];

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
            router.get(`/master/customer`, params, {
                preserveState: true,
                replace: true,
            });
        }, 300);
        setTimers((prev) => ({ ...prev, [col]: timer }));
    };

    const handleDateRange = (field, value) => {
        const updated = { ...dateRanges, [field]: value };
        setDateRanges(updated);

        clearTimeout(timers[field]);
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
        setTimers((prev) => ({ ...prev, [field]: timer }));
    };

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            router.delete(`/master/customer/${id}`);
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
                                <Link href={`/master/customer/create`} className="main-btn primary-btn-outline rounded-full btn-hover btn-sm">
                                    <i className="lni lni-plus mr-5"></i>
                                    Tambah
                                </Link>
                            </div>

                            <div className="table-wrapper table-responsive">
                                <table className="table compact-table">
                                    <thead>
                                        <tr>
                                            <th><h6>#</h6></th>
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
                                            <th key="vEmail">
                                                <h6>Email</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vEmail"] || ""}
                                                        onChange={(e) => handleSearch("vEmail", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="iIdUser">
                                                <h6>User</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdUser"] || ""}
                                                        onChange={(e) => handleSearch("iIdUser", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="iIdJenisperusahaan">
                                                <h6>Jenis Perusahaan</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdJenisperusahaan"] || ""}
                                                        onChange={(e) => handleSearch("iIdJenisperusahaan", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="iIdKlasifikasiperusahaan">
                                                <h6>Klasifikasi Perusahaan</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdKlasifikasiperusahaan"] || ""}
                                                        onChange={(e) => handleSearch("iIdKlasifikasiperusahaan", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="eTipe">
                                                <h6>Tipe</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["eTipe"] || ""}
                                                        onChange={(e) => handleSearch("eTipe", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vProfilepic">
                                                <h6>Foto Profil</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vProfilepic"] || ""}
                                                        onChange={(e) => handleSearch("vProfilepic", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vKtp">
                                                <h6>KTP</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vKtp"] || ""}
                                                        onChange={(e) => handleSearch("vKtp", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vFilektp">
                                                <h6>File KTP</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vFilektp"] || ""}
                                                        onChange={(e) => handleSearch("vFilektp", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vNpwp">
                                                <h6>NPWP</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vNpwp"] || ""}
                                                        onChange={(e) => handleSearch("vNpwp", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vFilenpwp">
                                                <h6>File NPWP</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vFilenpwp"] || ""}
                                                        onChange={(e) => handleSearch("vFilenpwp", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vSiup">
                                                <h6>SIUP</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vSiup"] || ""}
                                                        onChange={(e) => handleSearch("vSiup", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vFilesiup">
                                                <h6>File SIUP</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vFilesiup"] || ""}
                                                        onChange={(e) => handleSearch("vFilesiup", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vFileaktapendirian">
                                                <h6>Akta Pendirian</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vFileaktapendirian"] || ""}
                                                        onChange={(e) => handleSearch("vFileaktapendirian", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vFiledomisiliperusahaan">
                                                <h6>Domisili Perusahaan</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vFiledomisiliperusahaan"] || ""}
                                                        onChange={(e) => handleSearch("vFiledomisiliperusahaan", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="eVerifikasi">
                                                <h6>Verifikasi</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["eVerifikasi"] || ""}
                                                        onChange={(e) => handleSearch("eVerifikasi", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="isTrustedBuyer">
                                                <h6>Trusted Buyer</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["isTrustedBuyer"] || ""}
                                                        onChange={(e) => handleSearch("isTrustedBuyer", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vCreator">
                                                <h6>Dibuat</h6>
                                                <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                                                    <input type="date" className="search-input" style={{ padding: "5px 8px", minWidth: 0, width: "50%" }}
                                                        value={dateRanges.tCreated_from}
                                                        onChange={(e) => handleDateRange("tCreated_from", e.target.value)}
                                                        placeholder="Dari"
                                                    />
                                                    <input type="date" className="search-input" style={{ padding: "5px 8px", minWidth: 0, width: "50%" }}
                                                        value={dateRanges.tCreated_to}
                                                        onChange={(e) => handleDateRange("tCreated_to", e.target.value)}
                                                        placeholder="Sampai"
                                                    />
                                                </div>
                                            </th>
                                            <th key="tUpdated">
                                                <h6>Diubah</h6>
                                                <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                                                    <input type="date" className="search-input" style={{ padding: "5px 8px", minWidth: 0, width: "50%" }}
                                                        value={dateRanges.tUpdated_from}
                                                        onChange={(e) => handleDateRange("tUpdated_from", e.target.value)}
                                                        placeholder="Dari"
                                                    />
                                                    <input type="date" className="search-input" style={{ padding: "5px 8px", minWidth: 0, width: "50%" }}
                                                        value={dateRanges.tUpdated_to}
                                                        onChange={(e) => handleDateRange("tUpdated_to", e.target.value)}
                                                        placeholder="Sampai"
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
                                                        <td key="vNama"><p>{formatValue("vNama", item["vNama"])}</p></td>
                                                        <td key="vEmail"><p>{formatValue("vEmail", item["vEmail"])}</p></td>
                                                        <td key="iIdUser"><p>{formatValue("iIdUser", item["iIdUser"])}</p></td>
                                                        <td key="iIdJenisperusahaan"><p>{formatValue("iIdJenisperusahaan", item["iIdJenisperusahaan"])}</p></td>
                                                        <td key="iIdKlasifikasiperusahaan"><p>{formatValue("iIdKlasifikasiperusahaan", item["iIdKlasifikasiperusahaan"])}</p></td>
                                                        <td key="eTipe"><p>{formatValue("eTipe", item["eTipe"])}</p></td>
                                                        <td key="vProfilepic"><p>{formatValue("vProfilepic", item["vProfilepic"])}</p></td>
                                                        <td key="vKtp"><p>{formatValue("vKtp", item["vKtp"])}</p></td>
                                                        <td key="vFilektp"><p>{formatValue("vFilektp", item["vFilektp"])}</p></td>
                                                        <td key="vNpwp"><p>{formatValue("vNpwp", item["vNpwp"])}</p></td>
                                                        <td key="vFilenpwp"><p>{formatValue("vFilenpwp", item["vFilenpwp"])}</p></td>
                                                        <td key="vSiup"><p>{formatValue("vSiup", item["vSiup"])}</p></td>
                                                        <td key="vFilesiup"><p>{formatValue("vFilesiup", item["vFilesiup"])}</p></td>
                                                        <td key="vFileaktapendirian"><p>{formatValue("vFileaktapendirian", item["vFileaktapendirian"])}</p></td>
                                                        <td key="vFiledomisiliperusahaan"><p>{formatValue("vFiledomisiliperusahaan", item["vFiledomisiliperusahaan"])}</p></td>
                                                        <td key="eVerifikasi"><p>{formatValue("eVerifikasi", item["eVerifikasi"])}</p></td>
                                                        <td key="isTrustedBuyer"><p>{formatValue("isTrustedBuyer", item["isTrustedBuyer"])}</p></td>
                                                    <td key="vCreator"><p>{item?.tCreated ? String(item.tCreated) : "-"} / {item?.vCreator || (item?.iCreatedid ? "-" : "-")}</p></td>
                                                        <td key="tUpdated"><p>{item?.tUpdated ? String(item.tUpdated) : item?.tCreated ? String(item.tCreated) : "-"} / {item?.vUpdater || (item?.iUpdatedid ? "-" : "-")}</p></td>
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
                                                                href={`/master/customer/${item[primaryKey]}`}
                                                                className="text-success action-btn"
                                                                title="Lihat"
                                                            >
                                                                <i className="lni lni-eye"></i>
                                                            </Link>
                                                            <Link
                                                                href={`/master/customer/${item[primaryKey]}/edit`}
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
                                                <td colSpan={21} style={{ textAlign: "center", padding: "20px 8px" }}>
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
