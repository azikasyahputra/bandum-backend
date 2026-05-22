import { Head, Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination";

const TABLE_COLUMNS = ["vNama", "vProfilepic", "eTipe", "vNamadirektur", "dTanggalberdiri", "eJumlahkaryawan", "vOfficephone", "vNamapic", "vKontakpic", "iIdAlamatutama", "vSiup", "vFilesiup", "vFileaktapendirian", "vFiledomisiliperusahaan", "eVerifikasi", "vDeskripsi"];

export default function Index() {
    const { props } = usePage();
    const { title, table, items, searchValues: initialSearch, relatedTables, primaryKey } = props;

    const builds = {};
    TABLE_COLUMNS.forEach((col) => {
        builds[col] = initialSearch?.[col] || "";
    });
    const [inputs, setInputs] = useState(builds);
    const [timers, setTimers] = useState({});

    const handleSearch = (col, value) => {
        const updated = { ...inputs, [col]: value };
        setInputs(updated);

        clearTimeout(timers[col]);
        const params = {};
        TABLE_COLUMNS.forEach((c) => {
            if (updated[c]) params[c] = updated[c];
        });

        const timer = setTimeout(() => {
            router.get(`/master/vendor`, params, {
                preserveState: true,
                replace: true,
            });
        }, 300);
        setTimers((prev) => ({ ...prev, [col]: timer }));
    };

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            router.delete(`/master/vendor/${id}`);
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
                                <Link href={`/master/vendor/create`} className="main-btn primary-btn-outline rounded-full btn-hover btn-sm">
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
                                            <th key="vNamadirektur">
                                                <h6>Nama Direktur</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vNamadirektur"] || ""}
                                                        onChange={(e) => handleSearch("vNamadirektur", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="dTanggalberdiri">
                                                <h6>Tanggal Berdiri</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["dTanggalberdiri"] || ""}
                                                        onChange={(e) => handleSearch("dTanggalberdiri", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="eJumlahkaryawan">
                                                <h6>Jumlah Karyawan</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["eJumlahkaryawan"] || ""}
                                                        onChange={(e) => handleSearch("eJumlahkaryawan", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vOfficephone">
                                                <h6>Telepon Kantor</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vOfficephone"] || ""}
                                                        onChange={(e) => handleSearch("vOfficephone", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vNamapic">
                                                <h6>Nama PIC</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vNamapic"] || ""}
                                                        onChange={(e) => handleSearch("vNamapic", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="vKontakpic">
                                                <h6>Kontak PIC</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vKontakpic"] || ""}
                                                        onChange={(e) => handleSearch("vKontakpic", e.target.value)}
                                                    />
                                                </div>
                                            </th>
                                            <th key="iIdAlamatutama">
                                                <h6>Alamat Utama</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["iIdAlamatutama"] || ""}
                                                        onChange={(e) => handleSearch("iIdAlamatutama", e.target.value)}
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
                                            <th key="vDeskripsi">
                                                <h6>Deskripsi</h6>
                                                <div className="search-wrap">
                                                    <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={inputs["vDeskripsi"] || ""}
                                                        onChange={(e) => handleSearch("vDeskripsi", e.target.value)}
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
                                                        <td key="vProfilepic"><p>{formatValue("vProfilepic", item["vProfilepic"])}</p></td>
                                                        <td key="eTipe"><p>{formatValue("eTipe", item["eTipe"])}</p></td>
                                                        <td key="vNamadirektur"><p>{formatValue("vNamadirektur", item["vNamadirektur"])}</p></td>
                                                        <td key="dTanggalberdiri"><p>{formatValue("dTanggalberdiri", item["dTanggalberdiri"])}</p></td>
                                                        <td key="eJumlahkaryawan"><p>{formatValue("eJumlahkaryawan", item["eJumlahkaryawan"])}</p></td>
                                                        <td key="vOfficephone"><p>{formatValue("vOfficephone", item["vOfficephone"])}</p></td>
                                                        <td key="vNamapic"><p>{formatValue("vNamapic", item["vNamapic"])}</p></td>
                                                        <td key="vKontakpic"><p>{formatValue("vKontakpic", item["vKontakpic"])}</p></td>
                                                        <td key="iIdAlamatutama"><p>{formatValue("iIdAlamatutama", item["iIdAlamatutama"])}</p></td>
                                                        <td key="vSiup"><p>{formatValue("vSiup", item["vSiup"])}</p></td>
                                                        <td key="vFilesiup"><p>{formatValue("vFilesiup", item["vFilesiup"])}</p></td>
                                                        <td key="vFileaktapendirian"><p>{formatValue("vFileaktapendirian", item["vFileaktapendirian"])}</p></td>
                                                        <td key="vFiledomisiliperusahaan"><p>{formatValue("vFiledomisiliperusahaan", item["vFiledomisiliperusahaan"])}</p></td>
                                                        <td key="eVerifikasi"><p>{formatValue("eVerifikasi", item["eVerifikasi"])}</p></td>
                                                        <td key="vDeskripsi"><p>{formatValue("vDeskripsi", item["vDeskripsi"])}</p></td>
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
                                                                href={`/master/vendor/${item[primaryKey]}`}
                                                                className="text-success action-btn"
                                                                title="Lihat"
                                                            >
                                                                <i className="lni lni-eye"></i>
                                                            </Link>
                                                            <Link
                                                                href={`/master/vendor/${item[primaryKey]}/edit`}
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
                                                <td colSpan={18} style={{ textAlign: "center", padding: "20px 8px" }}>
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
