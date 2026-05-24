import "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Buttons.jsx
var buttonTypes = [
	{
		label: "Primary",
		baseClass: "primary-btn"
	},
	{
		label: "Secondary",
		baseClass: "secondary-btn"
	},
	{
		label: "Success",
		baseClass: "success-btn"
	},
	{
		label: "Danger",
		baseClass: "danger-btn"
	},
	{
		label: "Warning",
		baseClass: "warning-btn"
	},
	{
		label: "Info",
		baseClass: "info-btn"
	},
	{
		label: "Dark",
		baseClass: "dark-btn"
	},
	{
		label: "Light",
		baseClass: "light-btn"
	},
	{
		label: "Active",
		baseClass: "active-btn"
	},
	{
		label: "Deactive",
		baseClass: "deactive-btn"
	}
];
var buttonSections = [
	{
		title: "Square Buttons",
		subtitle: "",
		modifierClass: "square-btn",
		btnTypeSuffix: ""
	},
	{
		title: "Default Buttons",
		subtitle: "(3px Corner Round)",
		modifierClass: "",
		btnTypeSuffix: ""
	},
	{
		title: "Rounded Buttons",
		subtitle: "(Full Rounded)",
		modifierClass: "rounded-full",
		btnTypeSuffix: ""
	},
	{
		title: "Square Outline Buttons",
		subtitle: "",
		modifierClass: "square-btn",
		btnTypeSuffix: "-outline"
	},
	{
		title: "Default Outline Buttons",
		subtitle: "(3 Px Round)",
		modifierClass: "",
		btnTypeSuffix: "-outline"
	},
	{
		title: "Default Outline Buttons",
		subtitle: "(Full Rounded)",
		modifierClass: "rounded-full",
		btnTypeSuffix: "-outline"
	},
	{
		title: "Square Light Buttons",
		subtitle: "",
		modifierClass: "square-btn",
		btnTypeSuffix: "-light"
	},
	{
		title: "Default Light Buttons",
		subtitle: "(3 Px Round)",
		modifierClass: "",
		btnTypeSuffix: "-light"
	},
	{
		title: "Default Light Buttons",
		subtitle: "(Full Rounded)",
		modifierClass: "rounded-full",
		btnTypeSuffix: "-light"
	}
];
function Buttons() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", {
		className: "buttons-cards-wrapper",
		children: /* @__PURE__ */ jsx("div", {
			className: "row",
			children: buttonSections.map((section, idx) => /* @__PURE__ */ jsx("div", {
				className: "col-lg-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "card-style mb-30",
					children: [/* @__PURE__ */ jsxs("h5", {
						className: "text-medium mb-25",
						children: [section.title, section.subtitle && /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
							className: "text-sm text-regular",
							children: section.subtitle
						})] })]
					}), /* @__PURE__ */ jsx("ul", {
						className: "buttons-group",
						children: buttonTypes.map((btn, btnIdx) => {
							return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
								type: "button",
								className: `main-btn ${section.btnTypeSuffix ? `${btn.baseClass}${section.btnTypeSuffix}` : btn.baseClass} ${section.modifierClass} btn-hover`,
								children: btn.label
							}) }, btnIdx);
						})
					})]
				})
			}, idx))
		})
	}) });
}
//#endregion
export { Buttons as default };
