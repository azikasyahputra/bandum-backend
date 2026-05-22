import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Notifications.jsx
var items = [
	[
		"W",
		"warning-bg",
		"Wrapped Bitcoin is now listed on Unity Exchange",
		"25 min ago",
		false
	],
	[
		"V",
		"secondary-bg",
		"Vivamus tortor, odio viverra malesuada sapien dui.",
		"30 min ago",
		false
	],
	[
		"S",
		"success-bg",
		"Srapped Citcoin is now listed on Unity Exchange",
		"35 min ago",
		false
	],
	[
		"T",
		"primary-bg",
		"Trapped Eitcoin is now listed on Unity Exchange",
		"25 min ago",
		true
	],
	[
		"U",
		"info-bg",
		"Urapped Bitcoin is now listed on Unity Exchange",
		"25 min ago",
		true
	],
	[
		"W",
		"info-bg",
		"Wrapped Space is now listed on producthunt",
		"25 min ago",
		true
	],
	[
		"L",
		"warning-bg",
		"Lindy Uikit on trending",
		"25 min ago",
		true
	],
	[
		"C",
		"danger-bg",
		"Classify is on sell",
		"25 min ago",
		false
	]
];
function Notifications() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Notifications" }), /* @__PURE__ */ jsx("div", {
		className: "notification-wrapper",
		children: /* @__PURE__ */ jsx("div", {
			className: "card-style",
			children: items.map(([letter, colorClass, title, time, read], index) => /* @__PURE__ */ jsxs("div", {
				className: `single-notification ${read ? "readed" : ""}`,
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "checkbox",
						children: /* @__PURE__ */ jsx("div", {
							className: "form-check checkbox-style mb-20",
							children: /* @__PURE__ */ jsx("input", {
								className: "form-check-input",
								type: "checkbox",
								value: "",
								id: `notification-checkbox-${index}`
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "notification",
						children: [/* @__PURE__ */ jsx("div", {
							className: `image ${colorClass}`,
							children: /* @__PURE__ */ jsx("span", { children: letter })
						}), /* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "content",
							children: [
								/* @__PURE__ */ jsx("h6", { children: title }),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray",
									children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tortor, odio viverra malesuada sapien dui. Penatibus id amet lectus facilisi tincidunt at non."
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-sm text-medium text-gray",
									children: time
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "action",
						children: [
							/* @__PURE__ */ jsx("button", {
								type: "button",
								className: "delete-btn",
								children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								className: "more-btn dropdown-toggle",
								id: `moreAction-${index}`,
								"data-bs-toggle": "dropdown",
								"aria-expanded": "false",
								children: /* @__PURE__ */ jsx("i", { className: "lni lni-more-alt" })
							}),
							/* @__PURE__ */ jsxs("ul", {
								className: "dropdown-menu dropdown-menu-end",
								"aria-labelledby": `moreAction-${index}`,
								children: [/* @__PURE__ */ jsx("li", {
									className: "dropdown-item",
									children: /* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-gray",
										children: "Mark as Read"
									})
								}), /* @__PURE__ */ jsx("li", {
									className: "dropdown-item",
									children: /* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-gray",
										children: "Reply"
									})
								})]
							})
						]
					})
				]
			}, `${title}-${index}`))
		})
	})] });
}
//#endregion
export { Notifications as default };
