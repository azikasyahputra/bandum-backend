import { a as InputText, n as InputSelect, r as InputEnum } from "./InputPassword-CsN8pLvd.js";
import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import "./InputTextarea-DKu8Mx6x.js";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/barang-kemasan/Create.jsx
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
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdBarang",
											label: fieldLabels["iIdBarang"] || "iIdBarang",
											value: data["iIdBarang"] ?? "",
											onChange: (v) => setData("iIdBarang", v),
											error: errors["iIdBarang"],
											options: selects?.["iIdBarang"] || []
										})
									}),
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
										children: /* @__PURE__ */ jsx(InputText, {
											field: "nHarga",
											label: fieldLabels["nHarga"] || "nHarga",
											value: data["nHarga"] ?? "",
											onChange: (v) => setData("nHarga", v),
											error: errors["nHarga"]
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
											field: "nHargastrike",
											label: fieldLabels["nHargastrike"] || "nHargastrike",
											value: data["nHargastrike"] ?? "",
											onChange: (v) => setData("nHargastrike", v),
											error: errors["nHargastrike"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "nIsi",
											label: fieldLabels["nIsi"] || "nIsi",
											value: data["nIsi"] ?? "",
											onChange: (v) => setData("nIsi", v),
											error: errors["nIsi"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputEnum, {
											field: "eTerkecil",
											label: fieldLabels["eTerkecil"] || "eTerkecil",
											value: data["eTerkecil"] ?? "",
											onChange: (v) => setData("eTerkecil", v),
											error: errors["eTerkecil"],
											options: selects?.["eTerkecil"] || []
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: /* @__PURE__ */ jsx(InputEnum, {
										field: "eTerbesar",
										label: fieldLabels["eTerbesar"] || "eTerbesar",
										value: data["eTerbesar"] ?? "",
										onChange: (v) => setData("eTerbesar", v),
										error: errors["eTerbesar"],
										options: selects?.["eTerbesar"] || []
									})
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
