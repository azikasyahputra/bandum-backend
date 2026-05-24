import { a as InputText, t as InputPassword } from "./InputPassword-CsN8pLvd.js";
import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import "./InputTextarea-DKu8Mx6x.js";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/users/Create.jsx
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
										children: /* @__PURE__ */ jsx(InputText, {
											field: "name",
											label: fieldLabels["name"] || "name",
											value: data["name"] ?? "",
											onChange: (v) => setData("name", v),
											error: errors["name"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "email",
											label: fieldLabels["email"] || "email",
											value: data["email"] ?? "",
											onChange: (v) => setData("email", v),
											error: errors["email"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "role",
											label: fieldLabels["role"] || "role",
											value: data["role"] ?? "",
											onChange: (v) => setData("role", v),
											error: errors["role"]
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: /* @__PURE__ */ jsx(InputPassword, {
										field: "password",
										label: fieldLabels["password"] || "password",
										value: data["password"] ?? "",
										onChange: (v) => setData("password", v),
										error: errors["password"],
										isEdit
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
