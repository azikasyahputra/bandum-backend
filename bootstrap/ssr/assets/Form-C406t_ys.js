import { Head, Link, router, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
//#region resources/js/Pages/Transaksi/Invoice/Form.jsx
function Form() {
	const { props } = usePage();
	const { title, item, order } = props;
	const [processing, setProcessing] = useState(false);
	const [suratJalan, setSuratJalan] = useState(null);
	const [fakturPajak, setFakturPajak] = useState(null);
	const [dragField, setDragField] = useState(null);
	const sjRef = useRef(null);
	const fpRef = useRef(null);
	const handleDrop = (field, e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragField(null);
		const file = e.dataTransfer.files?.[0];
		if (file) if (field === "vSuratJalan") setSuratJalan(file);
		else setFakturPajak(file);
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
                .upload-square { width: 100%; height: 150px; border: 2px dashed #d1d5db; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; position: relative; overflow: hidden; }
                .upload-square:hover { border-color: #3b82f6; background: #f0f7ff; }
                .upload-square.dragover { border-color: #365cf5; background: #f0f4ff; }
                .upload-square.has-file { border-color: #365cf5; background: #f9fafb; }
                .upload-square .preview-img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; }
                .upload-square .overlay-bar { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; padding: 4px 8px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .upload-square .upload-icon { font-size: 24px; color: #9ca3af; }
                .upload-square .upload-text { font-size: 12px; color: #9ca3af; margin-top: 6px; text-align: center; padding: 0 8px; line-height: 1.3; }
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
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [/* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: "input-style-1",
										children: [
											/* @__PURE__ */ jsx("label", { children: "Surat Jalan" }),
											/* @__PURE__ */ jsx("div", {
												className: `upload-square ${dragField === "vSuratJalan" ? "dragover" : ""} ${suratJalan || order?.vSuratJalan ? "has-file" : ""}`,
												onClick: () => sjRef.current?.click(),
												onDragOver: (e) => {
													e.preventDefault();
													e.stopPropagation();
													setDragField("vSuratJalan");
												},
												onDragLeave: (e) => {
													e.preventDefault();
													e.stopPropagation();
													setDragField(null);
												},
												onDrop: (e) => handleDrop("vSuratJalan", e),
												children: (() => {
													const previewSrc = suratJalan?.type?.startsWith("image/") ? URL.createObjectURL(suratJalan) : order?.vSuratJalan && /\.(jpe?g|png)$/i.test(order.vSuratJalan) ? fileUrl(order.vSuratJalan) : null;
													if (previewSrc) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
														src: previewSrc,
														alt: "",
														className: "preview-img"
													}), /* @__PURE__ */ jsx("div", {
														className: "overlay-bar",
														children: suratJalan?.name || order?.vSuratJalan?.split("/")?.pop() || ""
													})] });
													if (suratJalan || order?.vSuratJalan) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("i", { className: "lni lni-file lni-upload" }), /* @__PURE__ */ jsx("div", {
														className: "upload-text",
														children: suratJalan?.name || order?.vSuratJalan?.split("/")?.pop()
													})] });
													return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("i", { className: "lni lni-upload upload-icon" }), /* @__PURE__ */ jsx("div", {
														className: "upload-text",
														children: "Klik atau seret file"
													})] });
												})()
											}),
											/* @__PURE__ */ jsx("input", {
												ref: sjRef,
												id: "file-vSuratJalan",
												type: "file",
												accept: ".jpeg,.jpg,.png,.pdf",
												style: { display: "none" },
												onChange: (e) => handleFileChange("vSuratJalan", e)
											}),
											(suratJalan || order?.vSuratJalan) && /* @__PURE__ */ jsx("div", {
												style: {
													textAlign: "right",
													marginTop: 6
												},
												children: /* @__PURE__ */ jsxs("a", {
													href: suratJalan ? URL.createObjectURL(suratJalan) : fileUrl(order.vSuratJalan),
													target: "_blank",
													rel: "noopener noreferrer",
													style: {
														display: "inline-flex",
														alignItems: "center",
														gap: 4,
														fontSize: 12,
														color: "#365cf5",
														textDecoration: "none"
													},
													children: [/* @__PURE__ */ jsx("i", {
														className: "lni lni-eye",
														style: { fontSize: 14 }
													}), "Lihat File"]
												})
											})
										]
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: "input-style-1",
										children: [
											/* @__PURE__ */ jsx("label", { children: "Faktur Pajak" }),
											/* @__PURE__ */ jsx("div", {
												className: `upload-square ${dragField === "vFakturPajak" ? "dragover" : ""} ${fakturPajak || order?.vFakturPajak ? "has-file" : ""}`,
												onClick: () => fpRef.current?.click(),
												onDragOver: (e) => {
													e.preventDefault();
													e.stopPropagation();
													setDragField("vFakturPajak");
												},
												onDragLeave: (e) => {
													e.preventDefault();
													e.stopPropagation();
													setDragField(null);
												},
												onDrop: (e) => handleDrop("vFakturPajak", e),
												children: (() => {
													const previewSrc = fakturPajak?.type?.startsWith("image/") ? URL.createObjectURL(fakturPajak) : order?.vFakturPajak && /\.(jpe?g|png)$/i.test(order.vFakturPajak) ? fileUrl(order.vFakturPajak) : null;
													if (previewSrc) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
														src: previewSrc,
														alt: "",
														className: "preview-img"
													}), /* @__PURE__ */ jsx("div", {
														className: "overlay-bar",
														children: fakturPajak?.name || order?.vFakturPajak?.split("/")?.pop() || ""
													})] });
													if (fakturPajak || order?.vFakturPajak) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("i", { className: "lni lni-file lni-upload" }), /* @__PURE__ */ jsx("div", {
														className: "upload-text",
														children: fakturPajak?.name || order?.vFakturPajak?.split("/")?.pop()
													})] });
													return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("i", { className: "lni lni-upload upload-icon" }), /* @__PURE__ */ jsx("div", {
														className: "upload-text",
														children: "Klik atau seret file"
													})] });
												})()
											}),
											/* @__PURE__ */ jsx("input", {
												ref: fpRef,
												id: "file-vFakturPajak",
												type: "file",
												accept: ".jpeg,.jpg,.png,.pdf",
												style: { display: "none" },
												onChange: (e) => handleFileChange("vFakturPajak", e)
											}),
											(fakturPajak || order?.vFakturPajak) && /* @__PURE__ */ jsx("div", {
												style: {
													textAlign: "right",
													marginTop: 6
												},
												children: /* @__PURE__ */ jsxs("a", {
													href: fakturPajak ? URL.createObjectURL(fakturPajak) : fileUrl(order.vFakturPajak),
													target: "_blank",
													rel: "noopener noreferrer",
													style: {
														display: "inline-flex",
														alignItems: "center",
														gap: 4,
														fontSize: 12,
														color: "#365cf5",
														textDecoration: "none"
													},
													children: [/* @__PURE__ */ jsx("i", {
														className: "lni lni-eye",
														style: { fontSize: 14 }
													}), "Lihat File"]
												})
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ jsx("hr", {}),
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
							/* @__PURE__ */ jsxs("div", {
								className: "d-flex justify-content-between align-items-center action-bar",
								children: [/* @__PURE__ */ jsxs(Link, {
									href: "/transaksi/invoice",
									className: "main-btn danger-btn-outline rounded-full btn-hover btn-sm",
									children: [/* @__PURE__ */ jsx("i", { className: "lni lni-arrow-left me-1" }), " Kembali"]
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									disabled: processing || !suratJalan && !fakturPajak,
									className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
									onClick: handleSave,
									children: processing ? "Menyimpan..." : "Simpan Dokumen"
								})]
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
