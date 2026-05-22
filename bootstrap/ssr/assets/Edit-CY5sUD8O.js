import { a as InputTextarea, i as InputFile, n as InputSelect, o as InputText, r as InputEnum } from "./InputPassword-DtsxK0Gz.js";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/vendor/Edit.jsx
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
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vProfilepic",
											label: fieldLabels["vProfilepic"] || "vProfilepic",
											value: data["vProfilepic"] ?? "",
											onChange: (v) => setData("vProfilepic", v),
											error: errors["vProfilepic"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputEnum, {
											field: "eTipe",
											label: fieldLabels["eTipe"] || "eTipe",
											value: data["eTipe"] ?? "",
											onChange: (v) => setData("eTipe", v),
											error: errors["eTipe"],
											options: selects?.["eTipe"] || []
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
											field: "vNamadirektur",
											label: fieldLabels["vNamadirektur"] || "vNamadirektur",
											value: data["vNamadirektur"] ?? "",
											onChange: (v) => setData("vNamadirektur", v),
											error: errors["vNamadirektur"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "dTanggalberdiri",
											label: fieldLabels["dTanggalberdiri"] || "dTanggalberdiri",
											value: data["dTanggalberdiri"] ?? "",
											onChange: (v) => setData("dTanggalberdiri", v),
											error: errors["dTanggalberdiri"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputEnum, {
											field: "eJumlahkaryawan",
											label: fieldLabels["eJumlahkaryawan"] || "eJumlahkaryawan",
											value: data["eJumlahkaryawan"] ?? "",
											onChange: (v) => setData("eJumlahkaryawan", v),
											error: errors["eJumlahkaryawan"],
											options: selects?.["eJumlahkaryawan"] || []
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
											field: "vOfficephone",
											label: fieldLabels["vOfficephone"] || "vOfficephone",
											value: data["vOfficephone"] ?? "",
											onChange: (v) => setData("vOfficephone", v),
											error: errors["vOfficephone"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vNamapic",
											label: fieldLabels["vNamapic"] || "vNamapic",
											value: data["vNamapic"] ?? "",
											onChange: (v) => setData("vNamapic", v),
											error: errors["vNamapic"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vKontakpic",
											label: fieldLabels["vKontakpic"] || "vKontakpic",
											value: data["vKontakpic"] ?? "",
											onChange: (v) => setData("vKontakpic", v),
											error: errors["vKontakpic"]
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
											field: "iIdAlamatutama",
											label: fieldLabels["iIdAlamatutama"] || "iIdAlamatutama",
											value: data["iIdAlamatutama"] ?? "",
											onChange: (v) => setData("iIdAlamatutama", v),
											error: errors["iIdAlamatutama"],
											options: selects?.["iIdAlamatutama"] || []
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vSiup",
											label: fieldLabels["vSiup"] || "vSiup",
											value: data["vSiup"] ?? "",
											onChange: (v) => setData("vSiup", v),
											error: errors["vSiup"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vFilesiup",
											label: fieldLabels["vFilesiup"] || "vFilesiup",
											value: data["vFilesiup"] ?? "",
											onChange: (v) => setData("vFilesiup", v),
											error: errors["vFilesiup"]
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vFileaktapendirian",
											label: fieldLabels["vFileaktapendirian"] || "vFileaktapendirian",
											value: data["vFileaktapendirian"] ?? "",
											onChange: (v) => setData("vFileaktapendirian", v),
											error: errors["vFileaktapendirian"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vFiledomisiliperusahaan",
											label: fieldLabels["vFiledomisiliperusahaan"] || "vFiledomisiliperusahaan",
											value: data["vFiledomisiliperusahaan"] ?? "",
											onChange: (v) => setData("vFiledomisiliperusahaan", v),
											error: errors["vFiledomisiliperusahaan"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputEnum, {
											field: "eVerifikasi",
											label: fieldLabels["eVerifikasi"] || "eVerifikasi",
											value: data["eVerifikasi"] ?? "",
											onChange: (v) => setData("eVerifikasi", v),
											error: errors["eVerifikasi"],
											options: selects?.["eVerifikasi"] || []
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsx(InputTextarea, {
										field: "vDeskripsi",
										label: fieldLabels["vDeskripsi"] || "vDeskripsi",
										value: data["vDeskripsi"] ?? "",
										onChange: (v) => setData("vDeskripsi", v),
										error: errors["vDeskripsi"]
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
