import { t as InputEditor } from "./InputEditor-Ce5Nh5yD.js";
import { a as InputText, i as InputFile, r as InputEnum } from "./InputPassword-CsN8pLvd.js";
import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/artikel/Edit.jsx
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
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsx(InputText, {
										field: "vTitle",
										label: fieldLabels["vTitle"] || "vTitle",
										value: data["vTitle"] ?? "",
										onChange: (v) => setData("vTitle", v),
										error: errors["vTitle"]
									})
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "row",
								children: /* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsx(InputEditor, {
										field: "vIsi",
										label: fieldLabels["vIsi"] || "vIsi",
										value: data["vIsi"] ?? "",
										onChange: (v) => setData("vIsi", v),
										error: errors["vIsi"]
									})
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [/* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-6",
									children: /* @__PURE__ */ jsx(InputFile, {
										field: "vThumbnails",
										label: fieldLabels["vThumbnails"] || "vThumbnails",
										value: data["vThumbnails"] ?? "",
										onChange: (v) => setData("vThumbnails", v),
										error: errors["vThumbnails"]
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-6",
									children: /* @__PURE__ */ jsx(InputEnum, {
										field: "eTampil",
										label: fieldLabels["eTampil"] || "eTampil",
										value: data["eTampil"] ?? "",
										onChange: (v) => setData("eTampil", v),
										error: errors["eTampil"],
										options: selects?.["eTampil"] || []
									})
								})]
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
