import { a as InputText, n as InputSelect } from "./InputPassword-CsN8pLvd.js";
import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import "./InputTextarea-DKu8Mx6x.js";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/kota/Create.jsx
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
											field: "iIdProvinsi",
											label: fieldLabels["iIdProvinsi"] || "iIdProvinsi",
											value: data["iIdProvinsi"] ?? "",
											onChange: (v) => setData("iIdProvinsi", v),
											error: errors["iIdProvinsi"],
											options: selects?.["iIdProvinsi"] || []
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
											field: "vIbukota",
											label: fieldLabels["vIbukota"] || "vIbukota",
											value: data["vIbukota"] ?? "",
											onChange: (v) => setData("vIbukota", v),
											error: errors["vIbukota"]
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: /* @__PURE__ */ jsx(InputText, {
										field: "vBsni",
										label: fieldLabels["vBsni"] || "vBsni",
										value: data["vBsni"] ?? "",
										onChange: (v) => setData("vBsni", v),
										error: errors["vBsni"]
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
