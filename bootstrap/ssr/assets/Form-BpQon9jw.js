import { Head, Link, router, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
//#region resources/js/Pages/Transaksi/Invoice/Form.jsx
function Form() {
	const { props } = usePage();
	const { title, item, order } = props;
	const [processing, setProcessing] = useState(false);
	const [suratJalan, setSuratJalan] = useState(null);
	const [fakturPajak, setFakturPajak] = useState(null);
	const handleUpload = (field) => {
		const input = document.getElementById(`file-${field}`);
		if (input) input.click();
	};
	const handleFileChange = (field, e) => {
		const file = e.target.files?.[0];
		if (file) if (field === "vSuratJalan") setSuratJalan(file);
		else setFakturPajak(file);
	};
	const handleSave = () => {
		if (!suratJalan && !fakturPajak) return;
		setProcessing(true);
		const formData = new FormData();
		formData.append("_method", "PUT");
		if (suratJalan) formData.append("vSuratJalan", suratJalan);
		if (fakturPajak) formData.append("vFakturPajak", fakturPajak);
		router.post(`/transaksi/invoice/${item.iId}`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
			onFinish: () => setProcessing(false)
		});
	};
	const fileUrl = (path) => path ? path.startsWith("http") ? path : `/storage/${path}` : null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title }),
		/* @__PURE__ */ jsx("style", { children: `
                .compact-card .card-style { padding: 18px 22px !important; }
                .compact-card .input-style-1 { margin-bottom: 8px !important; }
                .compact-card .input-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .input-style-1 input { height: 34px; font-size: 13px; padding: 4px 10px; background: #f8fafc; cursor: default; }
                .compact-card .compact-table > :not(caption) > * > * { padding: 5px 8px !important; }
                .compact-card .compact-table th h6 { font-size: 12px; }
                .compact-card .compact-table td p { font-size: 12px; }
                .compact-card .compact-table td { vertical-align: middle; }
                .compact-card .btn-sm-custom { font-size: 13px; padding: 5px 14px; }
                .compact-card .action-bar { border-top: 1px solid #eee; margin-top: 12px; padding-top: 12px; }
                .upload-area { cursor: pointer; border: 1px dashed #d1d5db; border-radius: 6px; padding: 8px 12px; display: flex; align-items: center; gap: 8px; transition: all 0.15s; }
                .upload-area:hover { border-color: #3b82f6; background: #f0f7ff; }
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
									href: "/transaksi/invoice",
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
								children: "Informasi Invoice"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "input-style-1",
											children: [/* @__PURE__ */ jsx("label", { children: "No. Invoice" }), /* @__PURE__ */ jsx("input", {
												type: "text",
												value: item.vNoInvoice || "",
												readOnly: true
											})]
										})
									}),
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
								children: "Dokumen"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [/* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: "input-style-1",
										children: [
											/* @__PURE__ */ jsx("label", { children: "Surat Jalan" }),
											/* @__PURE__ */ jsxs("div", {
												className: "upload-area",
												onClick: () => handleUpload("vSuratJalan"),
												children: [/* @__PURE__ */ jsx("i", {
													className: "lni lni-upload",
													style: {
														fontSize: 16,
														color: "#6b7280"
													}
												}), suratJalan ? /* @__PURE__ */ jsx("span", {
													style: { fontSize: 13 },
													children: suratJalan.name
												}) : order?.vSuratJalan ? /* @__PURE__ */ jsxs("a", {
													href: fileUrl(order.vSuratJalan),
													target: "_blank",
													rel: "noopener noreferrer",
													onClick: (e) => e.stopPropagation(),
													style: {
														fontSize: 13,
														color: "#3b82f6"
													},
													children: [/* @__PURE__ */ jsx("i", { className: "lni lni-eye mr-5" }), " Lihat file"]
												}) : /* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 13,
														color: "#9ca3af"
													},
													children: "Klik untuk upload"
												})]
											}),
											/* @__PURE__ */ jsx("input", {
												id: "file-vSuratJalan",
												type: "file",
												accept: ".jpeg,.jpg,.png,.pdf",
												style: { display: "none" },
												onChange: (e) => handleFileChange("vSuratJalan", e)
											})
										]
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: "input-style-1",
										children: [
											/* @__PURE__ */ jsx("label", { children: "Faktur Pajak" }),
											/* @__PURE__ */ jsxs("div", {
												className: "upload-area",
												onClick: () => handleUpload("vFakturPajak"),
												children: [/* @__PURE__ */ jsx("i", {
													className: "lni lni-upload",
													style: {
														fontSize: 16,
														color: "#6b7280"
													}
												}), fakturPajak ? /* @__PURE__ */ jsx("span", {
													style: { fontSize: 13 },
													children: fakturPajak.name
												}) : order?.vFakturPajak ? /* @__PURE__ */ jsxs("a", {
													href: fileUrl(order.vFakturPajak),
													target: "_blank",
													rel: "noopener noreferrer",
													onClick: (e) => e.stopPropagation(),
													style: {
														fontSize: 13,
														color: "#3b82f6"
													},
													children: [/* @__PURE__ */ jsx("i", { className: "lni lni-eye mr-5" }), " Lihat file"]
												}) : /* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 13,
														color: "#9ca3af"
													},
													children: "Klik untuk upload"
												})]
											}),
											/* @__PURE__ */ jsx("input", {
												id: "file-vFakturPajak",
												type: "file",
												accept: ".jpeg,.jpg,.png,.pdf",
												style: { display: "none" },
												onChange: (e) => handleFileChange("vFakturPajak", e)
											})
										]
									})
								})]
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
							/* @__PURE__ */ jsx("div", {
								className: "d-flex justify-content-end action-bar",
								style: { gap: 8 },
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									disabled: processing || !suratJalan && !fakturPajak,
									className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
									onClick: handleSave,
									children: processing ? "Menyimpan..." : "Simpan Dokumen"
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
