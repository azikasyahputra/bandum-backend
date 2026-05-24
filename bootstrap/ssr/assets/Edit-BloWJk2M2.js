import { a as InputText, n as InputSelect, r as InputEnum } from "./InputPassword-CsN8pLvd.js";
import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import { t as InputTextarea } from "./InputTextarea-DKu8Mx6x.js";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/customer-alamat/Edit.jsx
function Form() {
	const { props } = usePage();
	const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey, audit } = props;
	const isEdit = !!item;
	const defaultData = {};
	fields.forEach((field) => {
		defaultData[field] = isEdit ? item[field] ?? "" : "";
	});
	const { data, setData, post, put, processing, errors } = useForm(defaultData);
	const submit = (e) => {
		e.preventDefault();
		if (isEdit) put(`/master/${table}/${item[primaryKey]}`);
		else post(`/master/${table}`);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title }), /* @__PURE__ */ jsx("div", {
		className: "form-elements-wrapper form-sm",
		children: /* @__PURE__ */ jsx("div", {
			className: "row",
			children: /* @__PURE__ */ jsx("div", {
				className: "col-lg-12",
				children: /* @__PURE__ */ jsx("div", {
					className: "card-style mb-30",
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: submit,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vNama",
											label: fieldLabels["vNama"] || "vNama",
											value: data["vNama"] ?? "",
											onChange: (v) => setData("vNama", v),
											error: errors["vNama"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdCustomer",
											label: fieldLabels["iIdCustomer"] || "iIdCustomer",
											value: data["iIdCustomer"] ?? "",
											onChange: (v) => setData("iIdCustomer", v),
											error: errors["iIdCustomer"],
											options: selects?.["iIdCustomer"] || []
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdProvinsi",
											label: fieldLabels["iIdProvinsi"] || "iIdProvinsi",
											value: data["iIdProvinsi"] ?? "",
											onChange: (v) => setData("iIdProvinsi", v),
											error: errors["iIdProvinsi"],
											options: selects?.["iIdProvinsi"] || []
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdKota",
											label: fieldLabels["iIdKota"] || "iIdKota",
											value: data["iIdKota"] ?? "",
											onChange: (v) => setData("iIdKota", v),
											error: errors["iIdKota"],
											options: selects?.["iIdKota"] || []
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdKecamatan",
											label: fieldLabels["iIdKecamatan"] || "iIdKecamatan",
											value: data["iIdKecamatan"] ?? "",
											onChange: (v) => setData("iIdKecamatan", v),
											error: errors["iIdKecamatan"],
											options: selects?.["iIdKecamatan"] || []
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdKelurahan",
											label: fieldLabels["iIdKelurahan"] || "iIdKelurahan",
											value: data["iIdKelurahan"] ?? "",
											onChange: (v) => setData("iIdKelurahan", v),
											error: errors["iIdKelurahan"],
											options: selects?.["iIdKelurahan"] || []
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vGPS",
											label: fieldLabels["vGPS"] || "vGPS",
											value: data["vGPS"] ?? "",
											onChange: (v) => setData("vGPS", v),
											error: errors["vGPS"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vNotelp",
											label: fieldLabels["vNotelp"] || "vNotelp",
											value: data["vNotelp"] ?? "",
											onChange: (v) => setData("vNotelp", v),
											error: errors["vNotelp"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vNohp",
											label: fieldLabels["vNohp"] || "vNohp",
											value: data["vNohp"] ?? "",
											onChange: (v) => setData("vNohp", v),
											error: errors["vNohp"]
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsx(InputTextarea, {
										field: "vAlamat",
										label: fieldLabels["vAlamat"] || "vAlamat",
										value: data["vAlamat"] ?? "",
										onChange: (v) => setData("vAlamat", v),
										error: errors["vAlamat"]
									})
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: /* @__PURE__ */ jsx(InputEnum, {
										field: "eUtama",
										label: fieldLabels["eUtama"] || "eUtama",
										value: data["eUtama"] ?? "",
										onChange: (v) => setData("eUtama", v),
										error: errors["eUtama"],
										options: selects?.["eUtama"] || []
									})
								})
							}),
							audit && /* @__PURE__ */ jsx("div", {
								className: "row",
								style: {
									marginTop: 12,
									paddingTop: 12,
									borderTop: "1px solid #eee"
								},
								children: /* @__PURE__ */ jsxs("div", {
									className: "col-12",
									children: [/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: 11,
											fontWeight: 600,
											color: "#94a3b8",
											marginBottom: 8,
											textTransform: "uppercase",
											letterSpacing: .5
										},
										children: "Audit Trail"
									}), /* @__PURE__ */ jsxs("div", {
										className: "row",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "col-6 col-md-3",
												children: [/* @__PURE__ */ jsx("p", {
													className: "show-field-label",
													children: "Dibuat Oleh"
												}), /* @__PURE__ */ jsx("p", {
													className: "show-field-value",
													children: audit.creator || "-"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "col-6 col-md-3",
												children: [/* @__PURE__ */ jsx("p", {
													className: "show-field-label",
													children: "Tanggal Dibuat"
												}), /* @__PURE__ */ jsx("p", {
													className: "show-field-value",
													children: audit.createdAt || "-"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "col-6 col-md-3",
												children: [/* @__PURE__ */ jsx("p", {
													className: "show-field-label",
													children: "Diubah Oleh"
												}), /* @__PURE__ */ jsx("p", {
													className: "show-field-value",
													children: audit.updater || "-"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "col-6 col-md-3",
												children: [/* @__PURE__ */ jsx("p", {
													className: "show-field-label",
													children: "Tanggal Diubah"
												}), /* @__PURE__ */ jsx("p", {
													className: "show-field-value",
													children: audit.updatedAt || "-"
												})]
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ jsx(FormActions, {
								backUrl: `/master/${table}`,
								processing,
								isEdit
							})
						]
					})
				})
			})
		})
	})] });
}
//#endregion
export { Form as default };
