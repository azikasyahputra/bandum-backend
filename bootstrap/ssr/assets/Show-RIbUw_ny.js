import { t as FormActions } from "./FormActions-BhQ8Vfi9.js";
import { Head, Link, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/customer/Show.jsx
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
	const formatFile = (col) => {
		const value = item?.[col];
		if (!value) return "-";
		const src = value.startsWith("http") ? value : "/storage/" + value;
		const filename = value.split("/").pop();
		const isImage = /\.(jpe?g|png|gif|webp|svg)$/i.test(value);
		return /* @__PURE__ */ jsxs("div", { children: [isImage && /* @__PURE__ */ jsxs("div", {
			style: {
				width: "100%",
				height: 150,
				border: "2px solid #d1d5db",
				borderRadius: 8,
				position: "relative",
				overflow: "hidden",
				background: "#f9fafb",
				marginBottom: 6
			},
			children: [/* @__PURE__ */ jsx("img", {
				src,
				alt: filename,
				onError: (e) => {
					e.target.style.display = "none";
				},
				style: {
					width: "100%",
					height: "100%",
					objectFit: "cover",
					position: "absolute",
					top: 0,
					left: 0
				}
			}), /* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					background: "rgba(0,0,0,0.5)",
					color: "#fff",
					fontSize: 11,
					padding: "4px 8px",
					textAlign: "center",
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				children: filename
			})]
		}), /* @__PURE__ */ jsx("div", {
			style: { textAlign: "right" },
			children: /* @__PURE__ */ jsxs("a", {
				href: src,
				target: "_blank",
				rel: "noopener noreferrer",
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: 4,
					fontSize: 12,
					color: "#365cf5",
					textDecoration: "none"
				},
				children: [
					/* @__PURE__ */ jsx("i", {
						className: "lni lni-eye",
						style: { fontSize: 14 }
					}),
					"Lihat ",
					isImage ? "Gambar" : "File"
				]
			})
		})] });
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
										children: fieldLabels["vEmail"] || "vEmail"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("vEmail")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdUser"] || "iIdUser"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdUser")
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
										children: fieldLabels["iIdJenisperusahaan"] || "iIdJenisperusahaan"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdJenisperusahaan")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["iIdKlasifikasiperusahaan"] || "iIdKlasifikasiperusahaan"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("iIdKlasifikasiperusahaan")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["eTipe"] || "eTipe"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatValue("eTipe")
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
										children: fieldLabels["vProfilepic"] || "vProfilepic"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vProfilepic")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vKtp"] || "vKtp"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vKtp")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vFilektp"] || "vFilektp"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vFilektp")
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
										children: fieldLabels["vNpwp"] || "vNpwp"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vNpwp")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vFilenpwp"] || "vFilenpwp"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vFilenpwp")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vSiup"] || "vSiup"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vSiup")
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
										children: fieldLabels["vFilesiup"] || "vFilesiup"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vFilesiup")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vFileaktapendirian"] || "vFileaktapendirian"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vFileaktapendirian")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "show-field-label",
										children: fieldLabels["vFiledomisiliperusahaan"] || "vFiledomisiliperusahaan"
									}), /* @__PURE__ */ jsx("p", {
										className: "show-field-value",
										children: formatFile("vFiledomisiliperusahaan")
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "row",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "col-12 col-md-6 col-lg-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "show-field-label",
									children: fieldLabels["eVerifikasi"] || "eVerifikasi"
								}), /* @__PURE__ */ jsx("p", {
									className: "show-field-value",
									children: formatValue("eVerifikasi")
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "col-12 col-md-6 col-lg-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "show-field-label",
									children: fieldLabels["isTrustedBuyer"] || "isTrustedBuyer"
								}), /* @__PURE__ */ jsx("p", {
									className: "show-field-value",
									children: formatValue("isTrustedBuyer")
								})]
							})]
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
