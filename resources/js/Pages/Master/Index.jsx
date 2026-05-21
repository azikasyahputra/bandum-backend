import { Head, Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index() {
    const { props } = usePage();
    const { title, table, items, columns, columnLabels, searchValues: initialSearch } = props;

    const builds = {};
    columns.forEach((col) => {
        builds[col] = initialSearch?.[col] || "";
    });
    const [inputs, setInputs] = useState(builds);
    const [timers, setTimers] = useState({});

    const handleSearch = (col, value) => {
        const updated = { ...inputs, [col]: value };
        setInputs(updated);

        clearTimeout(timers[col]);
        const params = {};
        columns.forEach((c) => {
            if (updated[c]) params[c] = updated[c];
        });

        const timer = setTimeout(() => {
            router.get(`/master/${table}`, params, {
                preserveState: true,
                replace: true,
            });
        }, 300);
        setTimers((prev) => ({ ...prev, [col]: timer }));
    };

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            router.delete(`/master/${table}/${id}`);
        }
    };

    const formatValue = (col, value) => {
        if (value === null || value === undefined) return "-";

        if (col.startsWith("e") || col.startsWith("is")) {
            if (value === "ya" || value === 1 || value === true || value === "true") {
                return <span className="status-btn active-btn" style={{ fontSize: 12, padding: "2px 8px" }}>Ya</span>;
            }
            return <span className="status-btn close-btn" style={{ fontSize: 12, padding: "2px 8px" }}>Tidak</span>;
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

        return String(value).length > 40 ? String(value).substring(0, 40) + "..." : value;
    };

    return (
        <>
            <Head title={title} />

            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30" style={{ padding: "16px 20px" }}>
                            <div className="d-flex justify-content-between align-items-center mb-10" style={{ gap: 12 }}>
                                <h6 className="mb-0" style={{ fontSize: 15 }}>{title}</h6>
                                <Link href={`/master/${table}/create`} className="main-btn primary-btn btn-hover" style={{ fontSize: 13, padding: "6px 14px", whiteSpace: "nowrap" }}>
                                    <i className="lni lni-plus mr-5" style={{ fontSize: 13 }}></i>
                                    Tambah
                                </Link>
                            </div>

                            <div className="table-wrapper table-responsive" style={{ marginTop: 4 }}>
                                <table className="table" style={{ marginBottom: 0 }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: "6px 8px", fontSize: 12, whiteSpace: "nowrap", verticalAlign: "top" }}>#</th>
                                            {columns.map((col) => (
                                                <th key={col} style={{ padding: "6px 8px", fontSize: 12, whiteSpace: "nowrap", verticalAlign: "top" }}>
                                                    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4, color: "#333" }}>
                                                        {columnLabels[col] || col}
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                        <svg
                                                            style={{
                                                                position: "absolute",
                                                                left: 6,
                                                                top: "50%",
                                                                transform: "translateY(-50%)",
                                                                width: 12,
                                                                height: 12,
                                                                color: "#999",
                                                                pointerEvents: "none",
                                                            }}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="2"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            placeholder="Cari"
                                                            value={inputs[col] || ""}
                                                            onChange={(e) => handleSearch(col, e.target.value)}
                                                            style={{
                                                                display: "block",
                                                                width: "100%",
                                                                minWidth: 70,
                                                                padding: "4px 6px 4px 22px",
                                                                fontSize: 11,
                                                                border: "1px solid #e2e8f0",
                                                                borderRadius: 6,
                                                                backgroundColor: "#f8fafc",
                                                                outline: "none",
                                                                transition: "all 0.15s ease",
                                                                boxSizing: "border-box",
                                                            }}
                                                            onFocus={(e) => {
                                                                e.target.style.borderColor = "#3b82f6";
                                                                e.target.style.backgroundColor = "#fff";
                                                                e.target.style.boxShadow = "0 0 0 2px rgba(59,130,246,0.15)";
                                                            }}
                                                            onBlur={(e) => {
                                                                e.target.style.borderColor = "#e2e8f0";
                                                                e.target.style.backgroundColor = "#f8fafc";
                                                                e.target.style.boxShadow = "none";
                                                            }}
                                                        />
                                                    </div>
                                                </th>
                                            ))}
                                            <th style={{ padding: "6px 8px", fontSize: 12, whiteSpace: "nowrap", verticalAlign: "top" }}>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.data && items.data.length > 0 ? (
                                            items.data.map((item, idx) => (
                                                <tr key={item.iId}>
                                                    <td style={{ padding: "6px 8px", fontSize: 13 }}>{items.from + idx}</td>
                                                    {columns.map((col) => (
                                                        <td key={col} style={{ padding: "6px 8px", fontSize: 13 }}>
                                                            {formatValue(col, item[col])}
                                                        </td>
                                                    ))}
                                                    <td style={{ padding: "6px 8px", fontSize: 13 }}>
                                                        <div className="action d-flex" style={{ gap: 6 }}>
                                                            <Link
                                                                href={`/master/${table}/${item.iId}/edit`}
                                                                className="text-primary"
                                                                title="Edit"
                                                                style={{ fontSize: 15 }}
                                                            >
                                                                <i className="lni lni-pencil-alt"></i>
                                                            </Link>
                                                            <button
                                                                className="text-danger border-0 bg-transparent p-0"
                                                                onClick={() => handleDelete(item.iId)}
                                                                title="Hapus"
                                                                style={{ fontSize: 15 }}
                                                            >
                                                                <i className="lni lni-trash-can"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={columns.length + 2} style={{ textAlign: "center", padding: "20px 8px", fontSize: 13, color: "#6b7280" }}>
                                                    Belum ada data.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {items.data && items.data.length > 0 && items.links && (
                                <div className="d-flex justify-content-between align-items-center mt-10" style={{ paddingTop: 8 }}>
                                    <p className="text-sm mb-0" style={{ fontSize: 12 }}>
                                        {items.from} - {items.to} dari {items.total}
                                    </p>
                                    <nav>
                                        <ul className="pagination mb-0" style={{ margin: 0 }}>
                                            {items.links.map((link, i) => (
                                                <li
                                                    key={i}
                                                    className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                                    style={{ margin: 0 }}
                                                >
                                                    {link.url ? (
                                                        <Link
                                                            href={link.url}
                                                            className="page-link"
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                            style={{ padding: "4px 10px", fontSize: 12 }}
                                                        />
                                                    ) : (
                                                        <span className="page-link" dangerouslySetInnerHTML={{ __html: link.label }} style={{ padding: "4px 10px", fontSize: 12 }} />
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
