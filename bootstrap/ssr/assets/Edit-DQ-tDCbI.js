import { a as InputTextarea, i as InputFile, o as InputText, r as InputEnum } from "./InputPassword-DtsxK0Gz.js";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/banner/Edit.jsx
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
										children: /* @__PURE__ */ jsx(InputEnum, {
											field: "eTipe",
											label: fieldLabels["eTipe"] || "eTipe",
											value: data["eTipe"] ?? "",
											onChange: (v) => setData("eTipe", v),
											error: errors["eTipe"],
											options: selects?.["eTipe"] || []
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vTitle",
											label: fieldLabels["vTitle"] || "vTitle",
											value: data["vTitle"] ?? "",
											onChange: (v) => setData("vTitle", v),
											error: errors["vTitle"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vNamaLink",
											label: fieldLabels["vNamaLink"] || "vNamaLink",
											value: data["vNamaLink"] ?? "",
											onChange: (v) => setData("vNamaLink", v),
											error: errors["vNamaLink"]
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
											field: "vLink",
											label: fieldLabels["vLink"] || "vLink",
											value: data["vLink"] ?? "",
											onChange: (v) => setData("vLink", v),
											error: errors["vLink"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vImage",
											label: fieldLabels["vImage"] || "vImage",
											value: data["vImage"] ?? "",
											onChange: (v) => setData("vImage", v),
											error: errors["vImage"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputEnum, {
											field: "eTampil",
											label: fieldLabels["eTampil"] || "eTampil",
											value: data["eTampil"] ?? "",
											onChange: (v) => setData("eTampil", v),
											error: errors["eTampil"],
											options: selects?.["eTampil"] || []
										})
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsx(InputTextarea, {
										field: "vDetail",
										label: fieldLabels["vDetail"] || "vDetail",
										value: data["vDetail"] ?? "",
										onChange: (v) => setData("vDetail", v),
										error: errors["vDetail"]
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
