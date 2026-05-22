import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Tables.jsx
var asset = (path) => `/assets/${path}`;
var leadsData = [
	{
		name: "Courtney Henry",
		email: "yourmail@gmail.com",
		phone: "(303)555 3343523",
		company: "UIdeck digital agency",
		image: "images/lead/lead-1.png"
	},
	{
		name: "John Doe",
		email: "yourmail@gmail.com",
		phone: "(303)555 3343523",
		company: "Graygrids digital agency",
		image: "images/lead/lead-2.png"
	},
	{
		name: "David Smith",
		email: "yourmail@gmail.com",
		phone: "(303)555 3343523",
		company: "Abc agency",
		image: "images/lead/lead-3.png"
	}
];
var stripedData = [
	{
		account: "AC336 508 2157",
		balance: "$523"
	},
	{
		account: "AC336 756 0987",
		balance: "$123"
	},
	{
		account: "AC336 098 8765",
		balance: "$223"
	}
];
var headOptionsData = [
	{
		first: "Albert",
		last: "Miles",
		handle: "@albert_miles"
	},
	{
		first: "John",
		last: "Doe",
		handle: "@john_doe"
	},
	{
		first: "David",
		last: "Smith",
		handle: "@davidsmith"
	}
];
var statusData = [
	{
		name: "Esther Howard",
		email: "yourmail@gmail.com",
		project: "Admin Dashboard Design",
		status: "Active",
		statusClass: "active-btn",
		image: "images/lead/lead-1.png"
	},
	{
		name: "D. Jonathon",
		email: "yourmail@gmail.com",
		project: "React Dashboard",
		status: "Active",
		statusClass: "active-btn",
		image: "images/lead/lead-2.png"
	},
	{
		name: "John Doe",
		email: "yourmail@gmail.com",
		project: "Bootstrap Template",
		status: "Done",
		statusClass: "success-btn",
		image: "images/lead/lead-3.png"
	},
	{
		name: "Rayhan Jamil",
		email: "yourmail@gmail.com",
		project: "Css Grid Template",
		status: "Pending",
		statusClass: "info-btn",
		image: "images/lead/lead-4.png"
	}
];
function Tables() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Tables" }), /* @__PURE__ */ jsxs("div", {
		className: "tables-wrapper",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "row",
				children: /* @__PURE__ */ jsx("div", {
					className: "col-lg-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-10",
								children: "Data Table"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm mb-20",
								children: "For basic styling—light padding and only horizontal dividers—use the class table."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", {
											className: "lead-info",
											children: /* @__PURE__ */ jsx("h6", { children: "Lead" })
										}),
										/* @__PURE__ */ jsx("th", {
											className: "lead-email",
											children: /* @__PURE__ */ jsx("h6", { children: "Email" })
										}),
										/* @__PURE__ */ jsx("th", {
											className: "lead-phone",
											children: /* @__PURE__ */ jsx("h6", { children: "Phone No" })
										}),
										/* @__PURE__ */ jsx("th", {
											className: "lead-company",
											children: /* @__PURE__ */ jsx("h6", { children: "Company" })
										}),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Action" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: leadsData.map((lead, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsxs("div", {
												className: "lead",
												children: [/* @__PURE__ */ jsx("div", {
													className: "lead-image",
													children: /* @__PURE__ */ jsx("img", {
														src: asset(lead.image),
														alt: ""
													})
												}), /* @__PURE__ */ jsx("div", {
													className: "lead-text",
													children: /* @__PURE__ */ jsx("p", { children: lead.name })
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", {
												href: "#0",
												children: lead.email
											}) })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("p", { children: lead.phone })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("p", { children: lead.company })
										}),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("div", {
											className: "action",
											children: /* @__PURE__ */ jsx("button", {
												className: "text-danger",
												children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
											})
										}) })
									] }, idx)) })]
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col-lg-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-10",
								children: "Striped Table"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm mb-20",
								children: "For Striped Table—light padding and only horizontal dividers."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table striped-table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", {}),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Account No" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Balance" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Action" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: stripedData.map((item, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("div", {
											className: "check-input-primary",
											children: /* @__PURE__ */ jsx("input", {
												className: "form-check-input",
												type: "checkbox",
												id: `checkbox-${idx + 1}`
											})
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.account }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.balance }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("div", {
											className: "action",
											children: /* @__PURE__ */ jsx("button", {
												className: "text-danger",
												children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
											})
										}) })
									] }, idx)) })]
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "col-lg-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-10",
								children: "Table head options"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm mb-20",
								children: "Use one of two modifier classes to make thead appear light or dark gray."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table striped-table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", {}),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "First Name" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Last Name" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Username" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: headOptionsData.map((item, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("h6", {
											className: "text-sm",
											children: ["#", idx + 1]
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.first }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.last }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: item.handle }) })
									] }, idx)) })]
								})
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "row",
				children: /* @__PURE__ */ jsx("div", {
					className: "col-lg-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-10",
								children: "Data Table Status"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm mb-20",
								children: "For basic styling—light padding and only horizontal dividers—use the class table."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "table-wrapper table-responsive",
								children: /* @__PURE__ */ jsxs("table", {
									className: "table",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "#" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Name" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Email" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Project" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Status" }) }),
										/* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("h6", { children: "Action" }) })
									] }) }), /* @__PURE__ */ jsx("tbody", { children: statusData.map((item, idx) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("div", {
											className: "employee-image",
											children: /* @__PURE__ */ jsx("img", {
												src: asset(item.image),
												alt: ""
											})
										}) }),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("p", { children: item.name })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", {
												href: "#0",
												children: item.email
											}) })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("p", { children: item.project })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "min-width",
											children: /* @__PURE__ */ jsx("span", {
												className: `status-btn ${item.statusClass}`,
												children: item.status
											})
										}),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("div", {
											className: "action",
											children: /* @__PURE__ */ jsx("button", {
												className: "text-danger",
												children: /* @__PURE__ */ jsx("i", { className: "lni lni-trash-can" })
											})
										}) })
									] }, idx)) })]
								})
							})
						]
					})
				})
			})
		]
	})] });
}
//#endregion
export { Tables as default };
