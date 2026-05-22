import { t as Pagination } from "./Pagination-CEaEfh_7.js";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
//#region resources/js/Pages/Master/ekspedisi/Index.jsx
var TABLE_COLUMNS = ["vNama"];
function Index() {
	const { props } = usePage();
	const { title, table, items, searchValues: initialSearch, relatedTables, primaryKey } = props;
	const builds = {};
	TABLE_COLUMNS.forEach((col) => {
		builds[col] = initialSearch?.[col] || "";
	});
	const [inputs, setInputs] = useState(builds);
	const [timers, setTimers] = useState({});
	const handleSearch = (col, value) => {
		const updated = {
			...inputs,
			[col]: value
		};
		setInputs(updated);
		clearTimeout(timers[col]);
		const params = {};
		TABLE_COLUMNS.forEach((c) => {
			if (updated[c]) params[c] = updated[c];
		});
		const timer = setTimeout(() => {
			router.get(`/master/ekspedisi`, params, {
				preserveState: true,
				replace: true
			});
		}, 300);
		setTimers((prev) => ({
			...prev,
			[col]: timer
		}));
	};
	const handleDelete = (id) => {
		if (confirm("Yakin ingin menghapus data ini?")) router.delete(`/master/ekspedisi/${id}`);
	};
	const formatValue = (col, value) => {
		if (value === null || value === void 0) return "-";
		if (col.startsWith("e") || col.startsWith("is")) {
			if (value === "ya" || value === 1 || value === true || value === "true") return /* @__PURE__ */ jsx("span", {
				className: "status-btn active-btn",
				children: "Ya"
			});
			return /* @__PURE__ */ jsx("span", {
				className: "status-btn close-btn",
				children: "Tidak"
			});
		}
		if (col.startsWith("dTanggal") || col.startsWith("t")) {
			if (typeof value === "string") return value.split(" ")[0];
			return value;
		}
		if (col.startsWith("vImage") || col.startsWith("vPicture") || col.startsWith("vProfilepic") || col.startsWith("vThumbnails") || col.startsWith("vIcon")) {
			if (value && value !== "") return /* @__PURE__ */ jsx("img", {
				src: value.startsWith("http") ? value : `/storage/${value}`,
				alt: "",
				style: {
					width: 35,
					height: 35,
					objectFit: "cover",
					borderRadius: 4
				}
			});
			return "-";
		}
		const str = String(value);
		return str.length > 40 ? str.substring(0, 40) + "..." : str;
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title }),
		/* @__PURE__ */ jsx("style", { children: `
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
            ` }),
		/* @__PURE__ */ jsx("div", {
			className: "tables-wrapper",
			children: /* @__PURE__ */ jsx("div", {
				className: "row",
				children: /* @__PURE__ */ jsx("div", {
					className: "col-lg-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "d-flex justify-content-between align-items-center mb-10",
								style: { gap: 12 },
								children: [/* @__PURE__ */ jsx("h6", {
									className: "mb-0",
									children: title
								}), /* @__PURE__ */ jsxs(Link, {
									href: `/master/ekspedisi/create`,
									className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
									children: [/* @__PURE__ */ jsx("i", { className: "lni lni-plus mr-5" }), "Tambah"]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table compact-table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "#" }) }),
										/* @__PURE__ */ jsxs("th", { children: [/* @__PURE__ */ jsx("h6", { children: "Nama" }), /* @__PURE__ */ jsxs("div", {
											className: "search-wrap",
											children: [/* @__PURE__ */ jsx("svg", {
												className: "search-icon",
												fill: "none",
												stroke: "currentColor",
												viewBox: "0 0 24 24",
												strokeWidth: "2",
												children: /* @__PURE__ */ jsx("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
												})
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												placeholder: "Cari",
												className: "search-input",
												value: inputs["vNama"] || "",
												onChange: (e) => handleSearch("vNama", e.target.value)
											})]
										})] }, "vNama"),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Aksi" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: items.data && items.data.length > 0 ? items.data.map((item, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: items.from + idx }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: formatValue("vNama", item["vNama"]) }) }, "vNama"),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", {
											className: "action d-flex",
											style: {
												gap: 5,
												alignItems: "center"
											},
											children: [
												relatedTables && relatedTables.map((rt) => /* @__PURE__ */ jsx(Link, {
													href: `/master/${rt.route}?${rt.foreignKey}=${item[primaryKey]}`,
													className: "text-info action-btn",
													title: rt.label,
													children: /* @__PURE__ */ jsx("i", { className: "lni lni-list" })
												}, rt.route)),
												relatedTables && relatedTables.length > 0 && /* @__PURE__ */ jsx("div", { style: {
													width: 1,
													height: 14,
													background: "#ddd"
												} }),
												/* @__PURE__ */ jsx(Link, {
													href: `/master/ekspedisi/${item[primaryKey]}`,
													className: "text-success action-btn",
													title: "Lihat",
													children: /* @__PURE__ */ jsx("i", { className: "lni lni-eye" })
												}),
												/* @__PURE__ */ jsx(Link, {
													href: `/master/ekspedisi/${item[primaryKey]}/edit`,
													className: "text-primary action-btn",
													title: "Edit",
													children: /* @__PURE__ */ jsx("i", { className: "lni lni-pencil-alt" })
												}),
												/* @__PURE__ */ jsx("button", {
													className: "text-danger border-0 bg-transparent p-0 action-btn",
													onClick: () => handleDelete(item[primaryKey]),
													title: "Hapus",
													children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
												})
											]
										}) })
									] }, item[primaryKey])) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
										colSpan: 3,
										style: {
											textAlign: "center",
											padding: "20px 8px"
										},
										children: /* @__PURE__ */ jsx("p", {
											style: { color: "#6b7280" },
											children: "Belum ada data."
										})
									}) }) })]
								})
							}),
							/* @__PURE__ */ jsx(Pagination, { items })
						]
					})
				})
			})
		})
	] });
}
//#endregion
export { Index as default };
