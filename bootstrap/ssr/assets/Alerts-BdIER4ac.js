import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Alerts.jsx
var alertsData = [
	{
		type: "primary",
		label: "Primary",
		heading: "#4A6CF7",
		desc: "Excitement, Energy, Passion, Courage, Attention"
	},
	{
		type: "danger",
		label: "Danger",
		heading: "#D50100",
		desc: "Excitement, Energy, Passion, Courage, Attention"
	},
	{
		type: "orange",
		label: "Orange",
		heading: "#D50100",
		desc: "Excitement, Energy, Passion, Courage, Attention"
	},
	{
		type: "warning",
		label: "Warning",
		heading: "#D50100",
		desc: "Enthusiasm, Opportunity, Spontaneity, Happiness, Positivity"
	},
	{
		type: "info",
		label: "Info",
		heading: "#D50100",
		desc: "Growth, Harmony, Kindness, Dependability"
	},
	{
		type: "success",
		label: "Success",
		heading: "#D50100",
		desc: "Safety, Harmony, Stability, Reliability, Balance"
	},
	{
		type: "secondary",
		label: "Secondary",
		heading: "#D50100",
		desc: "Safety, Harmony, Stability, Reliability, Balance"
	},
	{
		type: "gray",
		label: "Gray",
		heading: "#D50100",
		desc: "Safety, Harmony, Stability, Reliability, Balance"
	},
	{
		type: "black",
		label: "Black",
		heading: "#D50100",
		desc: "Safety, Harmony, Stability, Reliability, Balance"
	}
];
function Alerts() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Alerts" }), /* @__PURE__ */ jsx("div", {
		className: "alerts-wrapper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "card-style mb-30",
			children: [
				/* @__PURE__ */ jsx("h5", {
					className: "text-medium mb-25",
					children: "Default Alert"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm mb-30",
					children: "Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "alert-list-wrapper",
					children: alertsData.map((alert, idx) => /* @__PURE__ */ jsxs("div", {
						className: `alert-box ${alert.type}-alert pl-100`,
						children: [/* @__PURE__ */ jsx("div", {
							className: "left",
							children: /* @__PURE__ */ jsx("h5", {
								className: "text-bold",
								children: alert.label
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "alert",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "alert-heading",
								children: alert.heading
							}), /* @__PURE__ */ jsx("p", {
								className: "text-medium",
								children: alert.desc
							})]
						})]
					}, idx))
				})
			]
		})
	})] });
}
//#endregion
export { Alerts as default };
