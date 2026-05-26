import { Head, Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination";
import DateRangePicker from "@/Components/DateRangePicker";

const TABLE_COLUMNS = ["vThumbnails", "vTitle", "vIsi", "eTampil"];

export default function Index() {
    const { props } = usePage();
    const {
        title,
        table,
        items,
        searchValues: initialSearch,
        relatedTables,
        primaryKey,
    } = props;

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
            router.get(`/master/artikel`, params, {
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
            router.delete(`/master/artikel/${id}`);
        }
    };

    const formatValue = (col, value) => {
        if (value === null || value === undefined) return "-";

        if (col.startsWith("e") || col.startsWith("is")) {
            if (
                value === "Ya" ||
                value === 1 ||
                value === true ||
                value === "true"
            ) {
                return <span className="status-btn active-btn">Ya</span>;
            }
            return <span className="status-btn close-btn">Tidak</span>;
        }

        if (col.startsWith("dTanggal") || col.startsWith("t")) {
            if (typeof value === "string") return value.split(" ")[0];
            return value;
        }
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
                            <div
                                className="d-flex justify-content-between align-items-center mb-10"
                                style={{ gap: 12 }}
                            >
                                <h6 className="mb-0">{title}</h6>
                                <Link
                                    href={`/master/artikel/create`}
                                    className="main-btn primary-btn-outline rounded-full btn-hover btn-sm"
                                >
                                    <i className="lni lni-plus mr-5"></i>
                                    Tambah
                                </Link>
                            </div>

                            <div className="table-wrapper table-responsive">
                                <table className="table compact-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <h6>#</h6>
                                            </th>
                                            <th key="vTitle">
                                                <h6>Title</h6>
                                                <div className="search-wrap">
                                                    <svg
                                                        className="search-icon"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                                        />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={
                                                            inputs["vTitle"] ||
                                                            ""
                                                        }
                                                        onChange={(e) =>
                                                            handleSearch(
                                                                "vTitle",
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </th>
                                            <th key="vIsi">
                                                <h6>Isi</h6>
                                                <div className="search-wrap">
                                                    <svg
                                                        className="search-icon"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                                        />
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        placeholder="Cari"
                                                        className="search-input"
                                                        value={
                                                            inputs["vIsi"] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleSearch(
                                                                "vIsi",
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </th>
                                            <th
                                                key="eTampil"
                                                style={{
                                                    width: 100,
                                                    minWidth: 100,
                                                }}
                                            >
                                                <h6>Tampil</h6>
                                                <select
                                                    className="search-input"
                                                    style={{
                                                        minWidth: 70,
                                                        paddingLeft: 8,
                                                    }}
                                                    value={
                                                        inputs["eTampil"] || ""
                                                    }
                                                    onChange={(e) =>
                                                        handleSearch(
                                                            "eTampil",
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Semua
                                                    </option>
                                                    <option value="Ya">
                                                        Ya
                                                    </option>
                                                    <option value="Tidak">
                                                        Tidak
                                                    </option>
                                                </select>
                                            </th>
                                            <th
                                                key="tUpdated"
                                                style={{
                                                    minWidth: 160,
                                                    width: 160,
                                                }}
                                            >
                                                <h6>Diubah</h6>
                                                <div style={{ marginTop: 4 }}>
                                                    <DateRangePicker
                                                        from={
                                                            dateRanges.tUpdated_from
                                                        }
                                                        to={
                                                            dateRanges.tUpdated_to
                                                        }
                                                        onChange={
                                                            handleDateRange
                                                        }
                                                        label="Filter tanggal"
                                                    />
                                                </div>
                                            </th>
                                            <th>
                                                <h6>Aksi</h6>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.data && items.data.length > 0 ? (
                                            items.data.map((item, idx) => (
                                                <tr key={item[primaryKey]}>
                                                    <td>
                                                        <p>
                                                            {items.from + idx}
                                                        </p>
                                                    </td>
                                                    <td key="vTitle">
                                                        <p>
                                                            {item["vTitle"] ||
                                                                "-"}
                                                        </p>
                                                    </td>
                                                    <td key="vIsi">
                                                        <p>
                                                            {item["vIsi"]
                                                                ? item.vIsi
                                                                      .length >
                                                                  50
                                                                    ? item.vIsi.substring(
                                                                          0,
                                                                          50,
                                                                      ) + "..."
                                                                    : item.vIsi
                                                                : "-"}
                                                        </p>
                                                    </td>
                                                    <td
                                                        key="eTampil"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <p>
                                                            {formatValue(
                                                                "eTampil",
                                                                item["eTampil"],
                                                            )}
                                                        </p>
                                                    </td>
                                                    <td
                                                        key="tUpdated"
                                                        style={{
                                                            whiteSpace:
                                                                "nowrap",
                                                        }}
                                                    >
                                                        <p>
                                                            {item?.tUpdated
                                                                ? String(
                                                                      item.tUpdated,
                                                                  )
                                                                : item?.tCreated
                                                                  ? String(
                                                                        item.tCreated,
                                                                    )
                                                                  : "-"}
                                                            <br />
                                                            {item?.vUpdater ||
                                                                "-"}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="action d-flex"
                                                            style={{
                                                                gap: 5,
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            {relatedTables &&
                                                                relatedTables.map(
                                                                    (rt) => (
                                                                        <Link
                                                                            key={
                                                                                rt.route
                                                                            }
                                                                            href={`/master/${rt.route}?${rt.foreignKey}=${item[primaryKey]}`}
                                                                            className="text-info action-btn"
                                                                            title={
                                                                                rt.label
                                                                            }
                                                                        >
                                                                            <i className="lni lni-list"></i>
                                                                        </Link>
                                                                    ),
                                                                )}
                                                            {relatedTables &&
                                                                relatedTables.length >
                                                                    0 && (
                                                                    <div
                                                                        style={{
                                                                            width: 1,
                                                                            height: 14,
                                                                            background:
                                                                                "#ddd",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                            <Link
                                                                href={`/master/artikel/${item[primaryKey]}`}
                                                                className="text-success action-btn"
                                                                title="Lihat"
                                                            >
                                                                <i className="lni lni-eye"></i>
                                                            </Link>
                                                            <Link
                                                                href={`/master/artikel/${item[primaryKey]}/edit`}
                                                                className="text-primary action-btn"
                                                                title="Edit"
                                                            >
                                                                <i className="lni lni-pencil-alt"></i>
                                                            </Link>
                                                            <button
                                                                className="text-danger border-0 bg-transparent p-0 action-btn"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        item[
                                                                            primaryKey
                                                                        ],
                                                                    )
                                                                }
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
                                                <td
                                                    colSpan={7}
                                                    style={{
                                                        textAlign: "center",
                                                        padding: "20px 8px",
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            color: "#6b7280",
                                                        }}
                                                    >
                                                        Belum ada data.
                                                    </p>
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
