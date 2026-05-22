import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/BlankPage.jsx
function BlankPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Blank Page" }), /* @__PURE__ */ jsx("div", {
		className: "row",
		children: /* @__PURE__ */ jsx("div", {
			className: "col-12",
			children: /* @__PURE__ */ jsx("div", {
				className: "card-style mb-30",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-sm text-gray mb-0",
					children: "Blank page content goes here."
				})
			})
		})
	})] });
}
//#endregion
export { BlankPage as default };
