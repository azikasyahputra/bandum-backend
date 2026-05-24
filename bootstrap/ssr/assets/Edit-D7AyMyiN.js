import { a as InputText, i as InputFile, n as InputSelect, r as InputEnum } from "./InputPassword-CsN8pLvd.js";
import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import "./InputTextarea-DKu8Mx6x.js";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/customer/Edit.jsx
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
										children: /* @__PURE__ */ jsx(InputText, {
											field: "vEmail",
											label: fieldLabels["vEmail"] || "vEmail",
											value: data["vEmail"] ?? "",
											onChange: (v) => setData("vEmail", v),
											error: errors["vEmail"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdUser",
											label: fieldLabels["iIdUser"] || "iIdUser",
											value: data["iIdUser"] ?? "",
											onChange: (v) => setData("iIdUser", v),
											error: errors["iIdUser"],
											options: selects?.["iIdUser"] || []
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
											field: "iIdJenisperusahaan",
											label: fieldLabels["iIdJenisperusahaan"] || "iIdJenisperusahaan",
											value: data["iIdJenisperusahaan"] ?? "",
											onChange: (v) => setData("iIdJenisperusahaan", v),
											error: errors["iIdJenisperusahaan"],
											options: selects?.["iIdJenisperusahaan"] || []
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputSelect, {
											field: "iIdKlasifikasiperusahaan",
											label: fieldLabels["iIdKlasifikasiperusahaan"] || "iIdKlasifikasiperusahaan",
											value: data["iIdKlasifikasiperusahaan"] ?? "",
											onChange: (v) => setData("iIdKlasifikasiperusahaan", v),
											error: errors["iIdKlasifikasiperusahaan"],
											options: selects?.["iIdKlasifikasiperusahaan"] || []
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
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vKtp",
											label: fieldLabels["vKtp"] || "vKtp",
											value: data["vKtp"] ?? "",
											onChange: (v) => setData("vKtp", v),
											error: errors["vKtp"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vFilektp",
											label: fieldLabels["vFilektp"] || "vFilektp",
											value: data["vFilektp"] ?? "",
											onChange: (v) => setData("vFilektp", v),
											error: errors["vFilektp"]
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
											field: "vNpwp",
											label: fieldLabels["vNpwp"] || "vNpwp",
											value: data["vNpwp"] ?? "",
											onChange: (v) => setData("vNpwp", v),
											error: errors["vNpwp"]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vFilenpwp",
											label: fieldLabels["vFilenpwp"] || "vFilenpwp",
											value: data["vFilenpwp"] ?? "",
											onChange: (v) => setData("vFilenpwp", v),
											error: errors["vFilenpwp"]
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
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12 col-md-6 col-lg-4",
										children: /* @__PURE__ */ jsx(InputFile, {
											field: "vFilesiup",
											label: fieldLabels["vFilesiup"] || "vFilesiup",
											value: data["vFilesiup"] ?? "",
											onChange: (v) => setData("vFilesiup", v),
											error: errors["vFilesiup"]
										})
									}),
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
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [/* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: /* @__PURE__ */ jsx(InputEnum, {
										field: "eVerifikasi",
										label: fieldLabels["eVerifikasi"] || "eVerifikasi",
										value: data["eVerifikasi"] ?? "",
										onChange: (v) => setData("eVerifikasi", v),
										error: errors["eVerifikasi"],
										options: selects?.["eVerifikasi"] || []
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: /* @__PURE__ */ jsx(InputEnum, {
										field: "isTrustedBuyer",
										label: fieldLabels["isTrustedBuyer"] || "isTrustedBuyer",
										value: data["isTrustedBuyer"] ?? "",
										onChange: (v) => setData("isTrustedBuyer", v),
										error: errors["isTrustedBuyer"],
										options: selects?.["isTrustedBuyer"] || []
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
