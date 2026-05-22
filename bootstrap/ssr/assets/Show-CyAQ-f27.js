import { Head, Link, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Master/ekspedisi/Show.jsx
function Show() {
	const { props } = usePage();
	const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;
	const formatValue = (col) => {
		const value = item?.[col];
		if (value === null || value === void 0 || value === "") return "-";
		const type = fieldTypes[col] || "text";
		if (type === "enum") {
			const match = (selects?.[col] || []).find((o) => o.value === value);
			return match ? match.label : value;
		}
		if (type === "file") return /* @__PURE__ */ jsx("a", {
			href: value.startsWith("http") ? value : `/storage/${value}`,
			target: "_blank",
			rel: "noopener noreferrer",
			children: value.split("/").pop()
		});
		if (type === "password") return "••••••••";
		return value;
	};
	const fieldGridWidth = (type) => type === "textarea" ? 12 : 4;
	const fieldRows = fields.reduce((acc, field) => {
		const width = fieldGridWidth(fieldTypes[field] || "text");
		const last = acc[acc.length - 1];
		if (last && last.width + width <= 12) {
			last.fields.push(field);
			last.width += width;
		} else acc.push({
			fields: [field],
			width
		});
		return acc;
	}, []);
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
						}),
						fieldRows.map((row, i) => /* @__PURE__ */ jsx("div", {
							className: "row",
							children: row.fields.map((field) => {
								const label = fieldLabels[field] || field;
								return /* @__PURE__ */ jsxs("div", {
									className: (fieldTypes[field] || "text") === "textarea" ? "col-12" : "col-12 col-md-6 col-lg-4",
									children: [/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: 12,
											color: "#5d657b",
											marginBottom: 2
										},
										children: label
									}), /* @__PURE__ */ jsx("p", {
										style: {
											fontSize: 14,
											color: "#1A2142",
											marginBottom: 12
										},
										children: formatValue(field)
									})]
								}, field);
							})
						}, i)),
						/* @__PURE__ */ jsx("div", {
							className: "d-flex justify-content-start pt-15",
							style: {
								borderTop: "1px solid #eee",
								marginTop: 8,
								paddingTop: 12
							},
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
