import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Components/Forms/FormActions.jsx
function FormActions({ backUrl, processing, isEdit, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "d-flex justify-content-between align-items-center pt-15",
		style: {
			borderTop: "1px solid #eee",
			marginTop: 8,
			paddingTop: 12
		},
		children: [backUrl ? /* @__PURE__ */ jsxs(Link, {
			href: backUrl,
			className: "main-btn danger-btn-outline rounded-full btn-hover btn-sm",
			children: [/* @__PURE__ */ jsx("i", { className: "lni lni-arrow-left me-1" }), " Kembali"]
		}) : /* @__PURE__ */ jsx("div", {}), children || /* @__PURE__ */ jsx("button", {
			type: "submit",
			disabled: processing,
			className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm",
			children: processing ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"
		})]
	});
}
//#endregion
export { FormActions as t };
