import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
//#region resources/js/Pages/Transaksi/Order/Form.jsx
function Form() {
	const { props } = usePage();
	const { title, customers, pembayaran, ekspedisi, jenisPengiriman, barang, kemasan, item } = props;
	const isEdit = !!item;
	const readOnly = isEdit && !["baru", "proses"].includes(item.eStatus);
	const defaultHeader = {};
	[
		"vNoOrder",
		"iIdCustomer",
		"vNamaCustomer",
		"iIdAlamat",
		"vAlamat",
		"iIdPembayaran",
		"vPembayaran",
		"eTipePembayaran",
		"iIdPengiriman",
		"vPengiriman",
		"iIdJenisPengiriman",
		"vJenisPengiriman",
		"vCatatan",
		"eStatus",
		"nTotal",
		"nTotalSebelumDiskon",
		"nTotalDiskon",
		"nPpn",
		"nBiayaKirim",
		"nGrandTotal",
		"vSuratJalan",
		"vFakturPajak",
		"eLunas"
	].forEach((f) => {
		defaultHeader[f] = isEdit ? item[f] ?? "" : "";
	});
	const { data, setData, post, put, processing, errors } = useForm({
		...defaultHeader,
		details: isEdit && item.details ? item.details.map((d) => ({ ...d })) : []
	});
	const [customerAlamatList, setCustomerAlamatList] = useState([]);
	const setHeader = (field, value) => setData(field, value);
	const loadCustomerAlamat = async (customerId) => {
		if (!customerId) return;
		try {
			const list = await (await fetch(`/transaksi/order/customer-alamat/${customerId}`)).json();
			setCustomerAlamatList(list);
			if (list.length > 0) {
				setHeader("iIdAlamat", list[0].value);
				setHeader("vAlamat", list[0].label);
			}
		} catch (e) {
			console.error("loadCustomerAlamat error:", e);
		}
	};
	const handleCustomerChange = (val) => {
		const cust = customers.find((c) => c.value == val);
		setHeader("iIdCustomer", val);
		setHeader("vNamaCustomer", cust ? cust.label : "");
		setHeader("iIdAlamat", "");
		setHeader("vAlamat", "");
		loadCustomerAlamat(val);
	};
	const handleAlamatChange = (val) => {
		const al = customerAlamatList.find((a) => a.value == val);
		setHeader("iIdAlamat", val);
		setHeader("vAlamat", al ? al.label : "");
	};
	const handlePembayaranChange = (val) => {
		const p = pembayaran.find((x) => x.value == val);
		setHeader("iIdPembayaran", val);
		setHeader("vPembayaran", p ? p.label : "");
	};
	const handleEkspedisiChange = (val) => {
		const e = ekspedisi.find((x) => x.value == val);
		setHeader("iIdPengiriman", val);
		setHeader("vPengiriman", e ? e.label : "");
	};
	const handleJenisPengirimanChange = (val) => {
		const j = jenisPengiriman.find((x) => x.value == val);
		setHeader("iIdJenisPengiriman", val);
		setHeader("vJenisPengiriman", j ? j.label : "");
	};
	const addDetail = () => {
		setData("details", [...data.details, {
			iIdBarang: "",
			iIdBarangKemasan: "",
			nHarga: 0,
			nDisc: 0,
			iQty: 0,
			iQtyKecil: 0,
			nPpn: 0,
			nTotal: 0,
			iQtyOr: 0,
			iQtyPo: 0,
			iQtyPl: 0,
			iQtyKirim: 0,
			iQtyRetur: 0,
			eStatus: "",
			iIsiKemasanKecil: 0
		}]);
	};
	const removeDetail = (idx) => {
		setData("details", data.details.filter((_, i) => i !== idx));
	};
	const setDetail = (idx, field, val) => {
		if ([
			"nHarga",
			"nDisc",
			"iQty"
		].includes(field)) val = val.replace(/[^0-9.,]/g, "").replace(/,/g, ".");
		const updated = [...data.details];
		updated[idx] = {
			...updated[idx],
			[field]: val
		};
		if (field === "iIdBarang") {
			const kList = kemasan.filter((k) => k.iIdBarang == val);
			if (kList.length > 0) {
				updated[idx].iIdBarangKemasan = kList[0].value;
				updated[idx].nHarga = kList[0].nHarga || 0;
				updated[idx].iIsiKemasanKecil = 1;
			}
		}
		if (field === "iIdBarangKemasan") {
			const k = kemasan.find((x) => x.value == val);
			if (k) {
				updated[idx].nHarga = k.nHarga || 0;
				updated[idx].iIsiKemasanKecil = 1;
			}
		}
		const row = updated[idx];
		const harga = parseFloat(row.nHarga) || 0;
		const qty = parseInt(row.iQty) || 0;
		const disc = parseFloat(row.nDisc) || 0;
		updated[idx].nTotal = harga * qty * (1 - disc / 100);
		setData("details", updated);
		recalcTotals(updated);
	};
	const kemasanByBarang = (barangId) => kemasan.filter((k) => k.iIdBarang == barangId);
	const recalcTotals = (details) => {
		details = details || data.details;
		let totalSebelumDiskon = 0, totalDiskon = 0;
		details.forEach((row) => {
			const h = parseFloat(row.nHarga) || 0;
			const q = parseInt(row.iQty) || 0;
			const d = parseFloat(row.nDisc) || 0;
			totalSebelumDiskon += h * q;
			totalDiskon += h * q * d / 100;
		});
		const total = totalSebelumDiskon - totalDiskon;
		const ppn = total * 11 / 100;
		const kirim = parseFloat(data.nBiayaKirim) || 0;
		const grand = total + ppn + kirim;
		setHeader("nTotalSebelumDiskon", totalSebelumDiskon);
		setHeader("nTotal", total);
		setHeader("nTotalDiskon", totalDiskon);
		setHeader("nPpn", ppn);
		setHeader("nGrandTotal", grand);
	};
	const doSubmit = (statusOverride) => {
		let totalSebelumDiskon = 0, totalDiskon = 0;
		(data.details || []).forEach((row) => {
			const h = parseFloat(row.nHarga) || 0;
			const q = parseInt(row.iQty) || 0;
			const d = parseFloat(row.nDisc) || 0;
			totalSebelumDiskon += h * q;
			totalDiskon += h * q * d / 100;
		});
		const nTotal = totalSebelumDiskon - totalDiskon;
		const nPpn = nTotal * 11 / 100;
		const nBiayaKirim = parseFloat(data.nBiayaKirim) || 0;
		const nGrandTotal = nTotal + nPpn + nBiayaKirim;
		setData("nTotalSebelumDiskon", totalSebelumDiskon);
		setData("nTotal", nTotal);
		setData("nTotalDiskon", totalDiskon);
		setData("nPpn", nPpn);
		setData("nGrandTotal", nGrandTotal);
		if (statusOverride) setData("eStatus", statusOverride);
		if (isEdit) put(`/transaksi/order/${item.iId}`);
		else post("/transaksi/order");
	};
	const submit = (e) => {
		e.preventDefault();
		if (readOnly) return;
		doSubmit();
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title }),
		/* @__PURE__ */ jsx("style", { children: `
                .compact-card .card-style { padding: 18px 22px !important; }
                .compact-card .input-style-1 { margin-bottom: 8px !important; }
                .compact-card .input-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .input-style-1 input,
                .compact-card .input-style-1 textarea,
                .compact-card .input-style-1 select { height: 34px; font-size: 13px; padding: 4px 10px; }
                .compact-card .input-style-1 textarea { height: auto; min-height: 56px; padding: 6px 10px; }
                .compact-card .select-style-1 { margin-bottom: 8px !important; }
                .compact-card .select-style-1 label { font-size: 12px; margin-bottom: 2px; }
                .compact-card .select-style-1 select { height: 34px; font-size: 13px; padding: 3px 8px; }
                .compact-card .form-check { padding-top: 18px !important; margin-bottom: 6px !important; }
                .compact-card .form-check-label { font-size: 13px; }
                .compact-card hr { margin: 12px 0 !important; }

                .compact-card .btn-sm-custom { font-size: 13px; padding: 5px 14px; }
                .compact-card .totals-wrap { margin-top: 8px; }
                .compact-card .totals-wrap .input-style-1 { margin-bottom: 4px !important; }
                .compact-card .totals-wrap .input-style-1 label { font-size: 12px; }
                .compact-card .totals-wrap .input-style-1 input { height: 30px; font-size: 13px; }
                .compact-card .action-bar { border-top: 1px solid #eee; margin-top: 12px; padding-top: 12px; }
                .compact-table > :not(caption) > * > * { padding: 5px 8px !important; }
                .compact-table th h6 { font-size: 12px; }
                .compact-table td p { font-size: 12px; }
                .compact-table td { vertical-align: middle; }
                .detail-input { width: 100%; padding: 3px 6px; font-size: 12px; border: 1px solid #e2e8f0; border-radius: 4px; background: #fff; outline: none; box-sizing: border-box; height: 28px; }
                .detail-input:focus { border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
                .detail-select { width: 100%; padding: 2px 4px; font-size: 12px; border: 1px solid #e2e8f0; border-radius: 4px; background: #fff; outline: none; box-sizing: border-box; height: 28px; }
            ` }),
		/* @__PURE__ */ jsx("div", {
			className: "form-elements-wrapper compact-card",
			children: /* @__PURE__ */ jsx("div", {
				className: "row",
				children: /* @__PURE__ */ jsx("div", {
					className: "col-lg-12",
					children: /* @__PURE__ */ jsx("div", {
						className: "card-style mb-30",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							children: [
								readOnly && /* @__PURE__ */ jsxs("div", {
									className: "alert alert-info",
									style: {
										fontSize: 13,
										padding: "6px 12px",
										marginBottom: 10
									},
									children: [
										/* @__PURE__ */ jsx("i", { className: "lni lni-lock mr-5" }),
										" ",
										"Form ini hanya dapat dilihat (status:",
										" ",
										/* @__PURE__ */ jsx("strong", { children: item.eStatus }),
										")"
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "row",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "input-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "No. Order" }), /* @__PURE__ */ jsx("input", {
													type: "text",
													placeholder: "Otomatis",
													value: data.vNoOrder,
													readOnly,
													onChange: (e) => setHeader("vNoOrder", e.target.value)
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Customer" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.iIdCustomer,
														disabled: readOnly,
														onChange: (e) => handleCustomerChange(e.target.value),
														children: [/* @__PURE__ */ jsx("option", {
															value: "",
															children: "Pilih Customer"
														}), customers.map((c) => /* @__PURE__ */ jsx("option", {
															value: c.value,
															children: c.label
														}, c.value))]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "input-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Nama Customer" }), /* @__PURE__ */ jsx("input", {
													type: "text",
													value: data.vNamaCustomer,
													readOnly,
													onChange: (e) => setHeader("vNamaCustomer", e.target.value)
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Alamat" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.iIdAlamat,
														disabled: readOnly,
														onChange: (e) => handleAlamatChange(e.target.value),
														children: [/* @__PURE__ */ jsx("option", {
															value: "",
															children: "Pilih Alamat"
														}), customerAlamatList.map((a) => /* @__PURE__ */ jsx("option", {
															value: a.value,
															children: a.label
														}, a.value))]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12",
											children: /* @__PURE__ */ jsxs("div", {
												className: "input-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Alamat" }), /* @__PURE__ */ jsx("textarea", {
													rows: "2",
													value: data.vAlamat,
													readOnly,
													onChange: (e) => setHeader("vAlamat", e.target.value)
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Pembayaran" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.iIdPembayaran,
														disabled: readOnly,
														onChange: (e) => handlePembayaranChange(e.target.value),
														children: [/* @__PURE__ */ jsx("option", {
															value: "",
															children: "Pilih Pembayaran"
														}), pembayaran.map((p) => /* @__PURE__ */ jsx("option", {
															value: p.value,
															children: p.label
														}, p.value))]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "input-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Tipe Pembayaran" }), /* @__PURE__ */ jsx("input", {
													type: "text",
													value: data.eTipePembayaran,
													readOnly,
													onChange: (e) => setHeader("eTipePembayaran", e.target.value)
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Ekspedisi" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.iIdPengiriman,
														disabled: readOnly,
														onChange: (e) => handleEkspedisiChange(e.target.value),
														children: [/* @__PURE__ */ jsx("option", {
															value: "",
															children: "Pilih Ekspedisi"
														}), ekspedisi.map((e) => /* @__PURE__ */ jsx("option", {
															value: e.value,
															children: e.label
														}, e.value))]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-3",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Jenis Pengiriman" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.iIdJenisPengiriman,
														disabled: readOnly,
														onChange: (e) => handleJenisPengirimanChange(e.target.value),
														children: [/* @__PURE__ */ jsx("option", {
															value: "",
															children: "Pilih Jenis"
														}), jenisPengiriman.map((j) => /* @__PURE__ */ jsx("option", {
															value: j.value,
															children: j.label
														}, j.value))]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "input-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "PPN" }), /* @__PURE__ */ jsx("input", {
													type: "text",
													inputMode: "decimal",
													value: data.nPpn,
													readOnly,
													onChange: (e) => setHeader("nPpn", e.target.value.replace(/[^0-9.,]/g, "").replace(/,/g, "."))
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Status" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.eStatus,
														disabled: readOnly,
														onChange: (e) => setHeader("eStatus", e.target.value),
														children: [
															/* @__PURE__ */ jsx("option", {
																value: "",
																children: "Pilih Status"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "baru",
																children: "Baru"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "proses",
																children: "Proses"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "dikirim",
																children: "Dikirim"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "selesai",
																children: "Selesai"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "batal",
																children: "Batal"
															})
														]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12 col-md-6 col-lg-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "select-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Lunas" }), /* @__PURE__ */ jsx("div", {
													className: "select-position",
													children: /* @__PURE__ */ jsxs("select", {
														value: data.eLunas,
														disabled: readOnly,
														onChange: (e) => setHeader("eLunas", e.target.value),
														children: [/* @__PURE__ */ jsx("option", {
															value: "tidak",
															children: "Tidak"
														}), /* @__PURE__ */ jsx("option", {
															value: "ya",
															children: "Ya"
														})]
													})
												})]
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "col-12",
											children: /* @__PURE__ */ jsxs("div", {
												className: "input-style-1",
												children: [/* @__PURE__ */ jsx("label", { children: "Catatan" }), /* @__PURE__ */ jsx("textarea", {
													rows: "2",
													value: data.vCatatan,
													readOnly,
													onChange: (e) => setHeader("vCatatan", e.target.value)
												})]
											})
										})
									]
								}),
								/* @__PURE__ */ jsx("hr", {}),
								/* @__PURE__ */ jsx("div", {
									className: "d-flex justify-content-end",
									style: { marginBottom: 6 },
									children: !readOnly && /* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
										onClick: addDetail,
										children: [
											/* @__PURE__ */ jsx("i", { className: "lni lni-plus mr-5" }),
											" ",
											"Tambah Barang"
										]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "table-wrapper table-responsive",
									children: /* @__PURE__ */ jsxs("table", {
										className: "table compact-table",
										children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "#" }) }),
											/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Barang" }) }),
											/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Kemasan" }) }),
											/* @__PURE__ */ jsx("th", {
												style: { width: 90 },
												children: /* @__PURE__ */ jsx("h6", { children: "Harga" })
											}),
											/* @__PURE__ */ jsx("th", {
												style: { width: 70 },
												children: /* @__PURE__ */ jsx("h6", { children: "Disc (%)" })
											}),
											/* @__PURE__ */ jsx("th", {
												style: { width: 60 },
												children: /* @__PURE__ */ jsx("h6", { children: "Qty" })
											}),
											/* @__PURE__ */ jsx("th", {
												style: { width: 90 },
												children: /* @__PURE__ */ jsx("h6", { children: "Total" })
											}),
											/* @__PURE__ */ jsx("th", {
												style: { width: 30 },
												children: /* @__PURE__ */ jsx("h6", { children: "Aksi" })
											})
										] }) }), /* @__PURE__ */ jsx("tbody", { children: data.details.length > 0 ? data.details.map((row, idx) => /* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: idx + 1 }) }),
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("select", {
												className: "detail-select",
												value: row.iIdBarang,
												disabled: readOnly,
												onChange: (e) => setDetail(idx, "iIdBarang", e.target.value),
												children: [/* @__PURE__ */ jsx("option", {
													value: "",
													children: "Pilih"
												}), barang.filter((b) => !b.value || b.value == row.iIdBarang || !data.details.some((d, di) => di !== idx && d.iIdBarang == b.value)).map((b) => /* @__PURE__ */ jsx("option", {
													value: b.value,
													children: b.label
												}, b.value))]
											}) }),
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("select", {
												className: "detail-select",
												value: row.iIdBarangKemasan,
												disabled: readOnly,
												onChange: (e) => setDetail(idx, "iIdBarangKemasan", e.target.value),
												children: [/* @__PURE__ */ jsx("option", {
													value: "",
													children: "Pilih"
												}), kemasanByBarang(row.iIdBarang).map((k) => /* @__PURE__ */ jsx("option", {
													value: k.value,
													children: k.label
												}, k.value))]
											}) }),
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("input", {
												className: "detail-input",
												type: "text",
												inputMode: "decimal",
												value: row.nHarga,
												readOnly,
												onChange: (e) => setDetail(idx, "nHarga", e.target.value)
											}) }),
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("input", {
												className: "detail-input",
												type: "text",
												inputMode: "decimal",
												value: row.nDisc,
												readOnly,
												onChange: (e) => setDetail(idx, "nDisc", e.target.value)
											}) }),
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("input", {
												className: "detail-input",
												type: "text",
												inputMode: "numeric",
												value: row.iQty,
												readOnly,
												onChange: (e) => setDetail(idx, "iQty", e.target.value)
											}) }),
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", {
												style: {
													fontWeight: 600,
													fontSize: 12,
													textAlign: "right"
												},
												children: Number(row.nTotal).toLocaleString()
											}) }),
											/* @__PURE__ */ jsx("td", { children: !readOnly && /* @__PURE__ */ jsx("button", {
												type: "button",
												className: "text-danger border-0 bg-transparent p-0",
												style: { fontSize: 13 },
												onClick: () => removeDetail(idx),
												title: "Hapus",
												children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
											}) })
										] }, idx)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
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
									className: "row",
									children: /* @__PURE__ */ jsx("div", {
										className: "col-12",
										children: Object.keys(errors).length > 0 && /* @__PURE__ */ jsx("div", {
											className: "alert alert-danger",
											style: {
												fontSize: 13,
												padding: "8px 12px",
												marginBottom: 12
											},
											children: /* @__PURE__ */ jsx("ul", {
												className: "mb-0",
												style: { paddingLeft: 16 },
												children: Object.entries(errors).map(([key, msg]) => /* @__PURE__ */ jsxs("li", { children: [
													key,
													": ",
													msg
												] }, key))
											})
										})
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "row totals-wrap",
									children: /* @__PURE__ */ jsxs("div", {
										className: "col-12 col-md-2 offset-md-10",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "d-flex justify-content-between align-items-center",
												style: { marginBottom: 3 },
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 12,
														color: "#5d657b"
													},
													children: "Total (Sebelum Diskon)"
												}), /* @__PURE__ */ jsx("span", {
													style: {
														fontWeight: 600,
														fontSize: 13
													},
													children: Number(data.nTotalSebelumDiskon || 0).toLocaleString()
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "d-flex justify-content-between align-items-center",
												style: { marginBottom: 3 },
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 12,
														color: "#5d657b"
													},
													children: "Diskon"
												}), /* @__PURE__ */ jsxs("span", {
													style: {
														fontWeight: 600,
														fontSize: 13,
														color: "#dc3545"
													},
													children: ["-", Number(data.nTotalDiskon || 0).toLocaleString()]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "d-flex justify-content-between align-items-center",
												style: { marginBottom: 3 },
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 12,
														color: "#5d657b"
													},
													children: "Total (Setelah Diskon)"
												}), /* @__PURE__ */ jsx("span", {
													style: {
														fontWeight: 600,
														fontSize: 13
													},
													children: Number(data.nTotal || 0).toLocaleString()
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "d-flex justify-content-between align-items-center",
												style: { marginBottom: 3 },
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 12,
														color: "#5d657b"
													},
													children: "PPN"
												}), /* @__PURE__ */ jsx("span", {
													style: {
														fontWeight: 600,
														fontSize: 13
													},
													children: Number(data.nPpn || 0).toLocaleString()
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "d-flex justify-content-between align-items-center",
												style: { marginBottom: 3 },
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 12,
														color: "#5d657b"
													},
													children: "Biaya Kirim"
												}), /* @__PURE__ */ jsx("input", {
													type: "text",
													inputMode: "decimal",
													value: data.nBiayaKirim,
													readOnly,
													onChange: (e) => setHeader("nBiayaKirim", e.target.value.replace(/[^0-9.,]/g, "").replace(/,/g, ".")),
													style: {
														width: 90,
														height: 22,
														fontSize: 12,
														textAlign: "right",
														border: "1px solid #e2e8f0",
														borderRadius: 3,
														padding: "1px 4px",
														outline: "none"
													}
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "d-flex justify-content-between align-items-center",
												style: {
													borderTop: "1px solid #ddd",
													paddingTop: 3,
													marginTop: 3
												},
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: 13,
														fontWeight: 600,
														color: "#1A2142"
													},
													children: "Grand Total"
												}), /* @__PURE__ */ jsx("span", {
													style: {
														fontWeight: 700,
														fontSize: 15,
														color: "#365CF5"
													},
													children: Number(data.nGrandTotal || 0).toLocaleString()
												})]
											})
										]
									})
								}),
								!readOnly && /* @__PURE__ */ jsxs("div", {
									className: "d-flex justify-content-between align-items-center action-bar",
									children: [/* @__PURE__ */ jsxs(Link, {
										href: "/transaksi/order",
										className: "main-btn danger-btn-outline rounded-full btn-hover btn-sm",
										children: [/* @__PURE__ */ jsx("i", { className: "lni lni-arrow-left me-1" }), " Kembali"]
									}), /* @__PURE__ */ jsxs("div", {
										className: "d-flex",
										style: { gap: 8 },
										children: [
											isEdit && data.eStatus === "Baru" && /* @__PURE__ */ jsx("button", {
												type: "button",
												disabled: processing,
												className: "main-btn success-btn-outline rounded-full btn-hover btn-sm",
												onClick: () => {
													if (confirm("Proses order ini?")) doSubmit("proses");
												},
												children: processing ? "Menyimpan..." : "Proses"
											}),
											isEdit && data.eStatus === "Proses" && /* @__PURE__ */ jsx("button", {
												type: "button",
												disabled: processing,
												className: "main-btn warning-btn-outline rounded-full btn-hover btn-sm",
												onClick: () => {
													if (confirm("Checkout order ini?")) router.post(`/transaksi/order/${item.iId}/checkout`);
												},
												children: processing ? "Memproses..." : "Checkout"
											}),
											/* @__PURE__ */ jsx("button", {
												type: "submit",
												disabled: processing,
												className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
												children: processing ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"
											})
										]
									})]
								})
							]
						})
					})
				})
			})
		})
	] });
}
//#endregion
export { Form as default };
