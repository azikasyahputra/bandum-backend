import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Invoice.jsx
function Invoice() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Invoice" }), /* @__PURE__ */ jsx("div", {
		className: "invoice-wrapper",
		children: /* @__PURE__ */ jsx("div", {
			className: "row",
			children: /* @__PURE__ */ jsx("div", {
				className: "col-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "invoice-card card-style mb-30",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "invoice-header",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "invoice-for",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "mb-10",
										children: "Invoice"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm",
										children: "Admin Dashboard Design & Development"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "invoice-logo",
									children: /* @__PURE__ */ jsx("img", {
										src: "/assets/images/invoice/uideck-logo.svg",
										alt: ""
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "invoice-date",
									children: [
										/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "Date Issued:" }), " 20/02/2024"] }),
										/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "Date Due:" }), " 20/02/2028"] }),
										/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "Order ID:" }), " #5467"] })
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "invoice-address",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "address-item",
								children: [
									/* @__PURE__ */ jsx("h5", {
										className: "text-bold",
										children: "From"
									}),
									/* @__PURE__ */ jsx("h1", { children: "John Doe" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm",
										children: "3891 Ranchview Dr. Richardson, California 62639"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-sm",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-medium",
											children: "Email:"
										}), " admin@example.com"]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "address-item",
								children: [
									/* @__PURE__ */ jsx("h5", {
										className: "text-bold",
										children: "To"
									}),
									/* @__PURE__ */ jsx("h1", { children: "Santa Gosh" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm",
										children: "2972 Westheimer Rd. Santa Ana, Illinois 85486"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-sm",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-medium",
											children: "Email:"
										}), " admin@example.com"]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "table-responsive",
							children: /* @__PURE__ */ jsxs("table", {
								className: "invoice-table table",
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
									/* @__PURE__ */ jsx("th", {
										className: "service",
										children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Service"
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "desc",
										children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Descriptions"
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "qty",
										children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Qty"
										})
									}),
									/* @__PURE__ */ jsx("th", {
										className: "amount",
										children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Amounts"
										})
									})
								] }) }), /* @__PURE__ */ jsxs("tbody", { children: [
									[
										[
											"Admin Dashboard",
											"Design and Development Service",
											"3",
											"$700"
										],
										[
											"Landing Page",
											"Landing Page Ui kit design and Development",
											"1",
											"$1000"
										],
										[
											"Web design",
											"Web Design and Development and Seo",
											"2",
											"$4000"
										]
									].map(([service, description, qty, amount]) => /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", {
											className: "text-sm",
											children: service
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", {
											className: "text-sm",
											children: description
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", {
											className: "text-sm",
											children: qty
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", {
											className: "text-sm",
											children: amount
										}) })
									] }, service)),
									/* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Subtotal"
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-bold",
											children: "$5700"
										}) })
									] }),
									/* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Discount"
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-bold",
											children: "45%"
										}) })
									] }),
									/* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-medium",
											children: "Shipping Charge"
										}) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h6", {
											className: "text-sm text-bold",
											children: "Free"
										}) })
									] }),
									/* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", {}),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h4", { children: "Total" }) }),
										/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("h4", { children: "$3135" }) })
									] })
								] })]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "note-wrapper warning-alert py-4 px-sm-3 px-lg-5",
							children: /* @__PURE__ */ jsxs("div", {
								className: "alert",
								children: [/* @__PURE__ */ jsx("h5", {
									className: "text-bold mb-15",
									children: "Notes:"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray",
									children: "All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above."
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "invoice-action",
							children: /* @__PURE__ */ jsxs("ul", {
								className: "d-flex flex-wrap align-items-center justify-content-center",
								children: [/* @__PURE__ */ jsx("li", {
									className: "m-2",
									children: /* @__PURE__ */ jsx("a", {
										href: "#",
										className: "main-btn primary-btn-outline btn-hover",
										children: "Download Invoice"
									})
								}), /* @__PURE__ */ jsx("li", {
									className: "m-2",
									children: /* @__PURE__ */ jsx("a", {
										href: "#",
										className: "main-btn primary-btn btn-hover",
										children: "Send Invoice"
									})
								})]
							})
						})
					]
				})
			})
		})
	})] });
}
//#endregion
export { Invoice as default };
