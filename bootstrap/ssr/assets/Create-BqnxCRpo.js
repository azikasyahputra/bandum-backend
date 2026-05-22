import { a as InputTextarea, n as InputSelect, o as InputText, r as InputEnum } from "./InputPassword-DtsxK0Gz.js";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/vendor-alamat/Create.jsx
function Form() {
	const { props } = usePage();
	const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;
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
				children: /* @__PURE__ */ jsxs("div", {
					className: "card-style mb-30",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "d-flex justify-content-between align-items-center mb-25",
						children: [/* @__PURE__ */ jsx("h6", {
							className: "mb-0",
							children: title
						}), /* @__PURE__ */ jsxs(Link, {
							href: `/master/${table}`,
							className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
							children: [/* @__PURE__ */ jsx("i", {
								className: "lni lni-arrow-left mr-5",
								style: { fontSize: 13 }
							}), "Kembali"]
						})]
					}), /* @__PURE__ */ jsxs("form", {
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
											field: "iIdVendor",
											label: fieldLabels["iIdVendor"] || "iIdVendor",
											value: data["iIdVendor"] ?? "",
											onChange: (v) => setData("iIdVendor", v),
											error: errors["iIdVendor"],
											options: selects?.["iIdVendor"] || []
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
							/* @__PURE__ */ jsx("div", {
								className: "d-flex justify-content-end pt-15",
								style: {
									borderTop: "1px solid #eee",
									marginTop: 8,
									paddingTop: 12
								},
								children: /* @__PURE__ */ jsx("button", {
									type: "submit",
									disabled: processing,
									className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
									children: processing ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"
								})
							})
						]
					})]
				})
			})
		})
	})] });
}
//#endregion
export { Form as default };
