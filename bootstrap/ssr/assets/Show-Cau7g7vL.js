import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import { Head, Link, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/customer-alamat/Show.jsx
function Show() {
	const { props } = usePage();
	const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;
	const formatValue = (col) => {
		const value = item?.[col];
		if (value === null || value === void 0 || value === "") return "-";
		if ((fieldTypes[col] || "text") === "enum") {
			const match = (selects?.[col] || []).find((o) => o.value === value);
			return match ? match.label : value;
		}
		return value;
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title }), /* @__PURE__ */ jsx("div", {
		className: "form-elements-wrapper form-sm",
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
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vNama"] || "vNama"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("vNama")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdCustomer"] || "iIdCustomer"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdCustomer")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdProvinsi"] || "iIdProvinsi"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdProvinsi")
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "row",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdKota"] || "iIdKota"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdKota")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdKecamatan"] || "iIdKecamatan"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdKecamatan")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdKelurahan"] || "iIdKelurahan"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdKelurahan")
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "row",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vGPS"] || "vGPS"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("vGPS")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vNotelp"] || "vNotelp"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("vNotelp")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vNohp"] || "vNohp"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("vNohp")
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "row",
							children: /* @__PURE__ */ jsxs("div", {
								className: "col-12",
								children: [/* @__PURE__ */ jsx("p", {
									className: "show-field-label",
									children: fieldLabels["vAlamat"] || "vAlamat"
								}), /* @__PURE__ */ jsx("p", {
									className: "show-field-value",
									children: formatValue("vAlamat")
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "row",
							children: /* @__PURE__ */ jsxs("div", {
								className: "col-12 col-md-6 col-lg-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "show-field-label",
									children: fieldLabels["eUtama"] || "eUtama"
								}), /* @__PURE__ */ jsx("p", {
									className: "show-field-value",
									children: formatValue("eUtama")
								})]
							})
						}),
						/* @__PURE__ */ jsx(FormActions, {
							backUrl: `/master/${table}`,
							children: /* @__PURE__ */ jsxs(Link, {
								href: `/master/${table}/${item?.[primaryKey]}/edit`,
								className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
								children: [/* @__PURE__ */ jsx("i", { className: "lni lni-pencil-alt mr-5" }), "Edit"]
							})
						})
					]
				})
			})
		})
	})] });
}
//#endregion
export { Show as default };
