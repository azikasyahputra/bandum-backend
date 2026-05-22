import { Head, Link, router, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
//#region resources/js/Pages/Transaksi/Packing/Form.jsx
function Form() {
	const { props } = usePage();
	const { title, item } = props;
	const [processing, setProcessing] = useState(false);
	const handleConfirm = () => {
		if (!confirm("Konfirmasi packing ini? Invoice akan dibuat dan status order akan berubah menjadi Dikirim.")) return;
		setProcessing(true);
		router.put(`/transaksi/packing/${item.iId}`, {}, { onFinish: () => setProcessing(false) });
	};
	const statusBadge = (val) => {
		return /* @__PURE__ */ jsx("span", {
			className: `status-btn ${{
				"open": "info-btn",
				"proses": "warning-btn",
				"selesai": "success-btn",
				"batal": "close-btn",
				"Confirm": "success-btn"
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
                .compact-card .card-style { padding: 18px 22px !important; }
                .compact-card .input-style-1 { margin-bottom: 8px !important; }
                .compact-card .input-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .input-style-1 input,
                .compact-card .input-style-1 textarea { height: 34px; font-size: 13px; padding: 4px 10px; }
                .compact-card .input-style-1 input[readonly] { background: #f8fafc; cursor: default; }
                .compact-card .compact-table > :not(caption) > * > * { padding: 5px 8px !important; }
                .compact-card .compact-table th h6 { font-size: 12px; }
                .compact-card .compact-table td p { font-size: 12px; }
                .compact-card .compact-table td { vertical-align: middle; }
                .compact-card .btn-sm-custom { font-size: 13px; padding: 5px 14px; }
                .compact-card .action-bar { border-top: 1px solid #eee; margin-top: 12px; padding-top: 12px; }
            ` }),
		/* @__PURE__ */ jsx("div", {
			className: "form-elements-wrapper compact-card",
			children: /* @__PURE__ */ jsx("div", {
				className: "row",
				children: /* @__PURE__ */ jsx("div", {
					className: "col-lg-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "d-flex justify-content-between align-items-center mb-10",
								children: [/* @__PURE__ */ jsx("h6", {
									className: "mb-0",
									style: { fontSize: 15 },
									children: title
								}), /* @__PURE__ */ jsxs(Link, {
									href: "/transaksi/packing",
									className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
									children: [/* @__PURE__ */ jsx("i", { className: "lni lni-arrow-left mr-5" }), " Kembali"]
								})]
							}),
							/* @__PURE__ */ jsx("h6", {
								className: "section-title",
								style: {
									fontSize: 14,
									fontWeight: 600,
									marginBottom: 10
								},
								children: "Informasi Packing"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "No. Packing" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: item.vNoPacking || "",
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "No. Order" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: item.vNoOrder || "",
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Customer" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: item.vNamaCustomer || "",
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Status" }), /* @__PURE__ */ jsx("div", {
												style: { paddingTop: 4 },
												children: statusBadge(item.eStatus)
											})]
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Total (Sebelum Diskon)" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number((item.nTotal || 0) + (item.nTotalDiskon || 0)).toLocaleString(),
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Diskon" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number(item.nTotalDiskon || 0).toLocaleString(),
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Total (Setelah Diskon)" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number(item.nTotal || 0).toLocaleString(),
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "PPN" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number(item.nPpn || 0).toLocaleString(),
												readOnly: true
											})]
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Biaya Kirim" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number(item.nBiayaKirim || 0).toLocaleString(),
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Biaya Packing" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number(item.nBiayaPacking || 0).toLocaleString(),
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "Grand Total" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: Number(item.nGrandTotal || 0).toLocaleString(),
												readOnly: true,
												style: {
													fontWeight: 700,
													color: "#365CF5"
												}
											})]
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("hr", {}),
							/* @__PURE__ */ jsx("h6", {
								className: "section-title",
								style: {
									fontSize: 14,
									fontWeight: 600,
									marginBottom: 10
								},
								children: "Detail Barang"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table compact-table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "#" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Barang" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Kemasan" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Harga" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Disc (%)" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Qty" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Total" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Status" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: item.details && item.details.length > 0 ? item.details.map((row, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: idx + 1 }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: row.iIdBarang || "-" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: row.iIdBarangKemasan || "-" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: Number(row.nHarga || 0).toLocaleString() }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: row.nDisc || 0 }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: row.iQty || 0 }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", {
											style: {
												fontWeight: 600,
												textAlign: "right"
											},
											children: Number(row.nTotal || 0).toLocaleString()
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: row.eStatus || "-" }) })
									] }, row.iId || idx)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
										colSpan: 8,
										style: {
											textAlign: "center",
											padding: "10px 6px"
										},
										children: /* @__PURE__ */ jsx("p", {
											style: {
												color: "#6b7280",
												fontSize: 12
											},
											children: "Belum ada detail barang."
										})
									}) }) })]
								})
							}),
							item.eStatus !== "Confirm" && /* @__PURE__ */ jsx("div", {
								className: "d-flex justify-content-end action-bar",
								style: { gap: 8 },
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									disabled: processing,
									className: "main-btn success-btn-outline rounded-full btn-hover btn-sm",
									onClick: handleConfirm,
									children: processing ? "Memproses..." : "Confirm"
								})
							})
						]
					})
				})
			})
		})
	] });
}
//#endregion
export { Form as default };
