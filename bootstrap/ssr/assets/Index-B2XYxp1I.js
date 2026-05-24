import { t as Pagination } from "./Pagination-gMUXfdz1.js";
import { Head, router, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
//#region resources/js/Pages/Transaksi/Packing/Index.jsx
function Index() {
	const { props } = usePage();
	const { title, items, searchValues: initialSearch } = props;
	const [inputs, setInputs] = useState({
		vNoPacking: initialSearch?.vNoPacking || "",
		vNoOrder: initialSearch?.vNoOrder || "",
		vNamaCustomer: initialSearch?.vNamaCustomer || "",
		eStatus: initialSearch?.eStatus || ""
	});
	const [timers, setTimers] = useState({});
	const handleSearch = (col, value) => {
		const updated = {
			...inputs,
			[col]: value
		};
		setInputs(updated);
		clearTimeout(timers[col]);
		const params = {};
		Object.entries(updated).forEach(([k, v]) => {
			if (v) params[k] = v;
		});
		const timer = setTimeout(() => {
			router.get("/transaksi/packing", params, {
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
		if (confirm("Yakin ingin menghapus data ini?")) router.delete(`/transaksi/packing/${id}`);
	};
	const statusBadge = (val) => {
		return /* @__PURE__ */ jsx("span", {
			className: `status-btn ${{
				"open": "info-btn",
				"proses": "warning-btn",
				"selesai": "success-btn",
				"batal": "close-btn"
			}[val] || "info-btn"}`,
			style: {
				fontSize: 12,
				padding: "2px 8px"
			},
			children: val
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title }),
		/* @__PURE__ */ jsx("style", { children: `
                .compact-table > :not(caption) > * > * { padding: 10px 14px !important; }
                .compact-table th h6 { font-size: 14px; }
                .compact-table td p { font-size: 14px; }
                .search-input { display: block; width: 100%; min-width: 80px; padding: 5px 8px; font-size: 13px; border: 1px solid #e2e8f0; border-radius: 5px; background: #f8fafc; outline: none; transition: all 0.15s ease; box-sizing: border-box; }
                .search-input:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
                .action-btn { font-size: 20px; }
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
							/* @__PURE__ */ jsx("div", {
								className: "d-flex justify-content-between align-items-center mb-10",
								style: { gap: 12 },
								children: /* @__PURE__ */ jsx("h6", {
									className: "mb-0",
									children: title
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table compact-table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "#" }) }),
										/* @__PURE__ */ jsxs("th", { children: [/* @__PURE__ */ jsx("h6", { children: "No. Packing" }), /* @__PURE__ */ jsx("input", {
											className: "search-input",
											placeholder: "Cari",
											value: inputs.vNoPacking,
											onChange: (e) => handleSearch("vNoPacking", e.target.value)
										})] }),
										/* @__PURE__ */ jsxs("th", { children: [/* @__PURE__ */ jsx("h6", { children: "No. Order" }), /* @__PURE__ */ jsx("input", {
											className: "search-input",
											placeholder: "Cari",
											value: inputs.vNoOrder,
											onChange: (e) => handleSearch("vNoOrder", e.target.value)
										})] }),
										/* @__PURE__ */ jsxs("th", { children: [/* @__PURE__ */ jsx("h6", { children: "Customer" }), /* @__PURE__ */ jsx("input", {
											className: "search-input",
											placeholder: "Cari",
											value: inputs.vNamaCustomer,
											onChange: (e) => handleSearch("vNamaCustomer", e.target.value)
										})] }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Grand Total" }) }),
										/* @__PURE__ */ jsxs("th", { children: [/* @__PURE__ */ jsx("h6", { children: "Status" }), /* @__PURE__ */ jsx("input", {
											className: "search-input",
											placeholder: "Cari",
											value: inputs.eStatus,
											onChange: (e) => handleSearch("eStatus", e.target.value)
										})] }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Aksi" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: items.data && items.data.length > 0 ? items.data.map((item, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: items.from + idx }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.vNoPacking || "-" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.vNoOrder || "-" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.vNamaCustomer || "-" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.nGrandTotal ? Number(item.nGrandTotal).toLocaleString() : "-" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: statusBadge(item.eStatus) }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", {
											className: "action d-flex",
											style: {
												gap: 5,
												alignItems: "center"
											},
											children: [/* @__PURE__ */ jsx("a", {
												href: `/transaksi/packing/${item.iId}/edit`,
												className: "text-primary action-btn",
												title: "Edit",
												onClick: (e) => {
													e.preventDefault();
													router.visit(`/transaksi/packing/${item.iId}/edit`);
												},
												children: /* @__PURE__ */ jsx("i", { className: "lni lni-pencil-alt" })
											}), /* @__PURE__ */ jsx("button", {
												className: "text-danger border-0 bg-transparent p-0 action-btn",
												onClick: () => handleDelete(item.iId),
												title: "Hapus",
												children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
											})]
										}) })
									] }, item.iId)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
										colSpan: 7,
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
