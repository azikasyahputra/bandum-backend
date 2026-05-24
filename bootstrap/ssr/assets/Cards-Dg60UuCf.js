import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Cards.jsx
function Cards() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Cards" }), /* @__PURE__ */ jsxs("div", {
		className: "cards-styles pt-30",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "row",
				children: [
					{
						id: 1,
						author: "Hammad",
						adminImage: "/assets/images/cards/card-style-1/admin-1.png",
						cardImage: "/assets/images/cards/card-style-1/card-1.jpg"
					},
					{
						id: 2,
						author: "Mahmud",
						adminImage: "/assets/images/cards/card-style-1/admin-2.png",
						cardImage: "/assets/images/cards/card-style-1/card-2.jpg"
					},
					{
						id: 3,
						author: "Jamil Kareem",
						adminImage: "/assets/images/cards/card-style-1/admin-3.png",
						cardImage: "/assets/images/cards/card-style-1/card-3.jpg"
					}
				].map((item) => /* @__PURE__ */ jsx("div", {
					className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style-1 mb-30",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "card-meta",
								children: [/* @__PURE__ */ jsx("div", {
									className: "image",
									children: /* @__PURE__ */ jsx("img", {
										src: item.adminImage,
										alt: ""
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "text",
									children: /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-medium",
										children: ["Posted by : ", /* @__PURE__ */ jsx("a", {
											href: "#0",
											children: item.author
										})]
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "card-image",
								children: /* @__PURE__ */ jsx("a", {
									href: "#0",
									children: /* @__PURE__ */ jsx("img", {
										src: item.cardImage,
										alt: ""
									})
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "card-content",
								children: [/* @__PURE__ */ jsx("h4", { children: /* @__PURE__ */ jsx("a", {
									href: "#0",
									children: " Card Title here "
								}) }), /* @__PURE__ */ jsx("p", { children: "With supporting text below as a natural lead-in to additional content. consectetur adipiscing elit. Integer posuere erat a ante." })]
							})
						]
					})
				}, item.id))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col-12",
					children: /* @__PURE__ */ jsx("div", {
						className: "title mt-30 mb-30",
						children: /* @__PURE__ */ jsx("h2", { children: "Cards 2" })
					})
				}), [
					{
						id: 1,
						cardImage: "/assets/images/cards/card-style-2/card-1.jpg"
					},
					{
						id: 2,
						cardImage: "/assets/images/cards/card-style-2/card-2.jpg"
					},
					{
						id: 3,
						cardImage: "/assets/images/cards/card-style-2/card-3.jpg"
					}
				].map((item) => /* @__PURE__ */ jsx("div", {
					className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style-2 mb-30",
						children: [/* @__PURE__ */ jsx("div", {
							className: "card-image",
							children: /* @__PURE__ */ jsx("a", {
								href: "#0",
								children: /* @__PURE__ */ jsx("img", {
									src: item.cardImage,
									alt: ""
								})
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "card-content",
							children: [/* @__PURE__ */ jsx("h4", { children: /* @__PURE__ */ jsx("a", {
								href: "#0",
								children: "Card Title here "
							}) }), /* @__PURE__ */ jsx("p", { children: "With supporting text below as a natural lead-in to additional content. consectetur adipiscing elit. Integer posuere erat a ante." })]
						})]
					})
				}, item.id))]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col-12",
					children: /* @__PURE__ */ jsx("div", {
						className: "title mt-30 mb-30",
						children: /* @__PURE__ */ jsx("h2", { children: "Cards 3" })
					})
				}), [
					1,
					2,
					3
				].map((id) => /* @__PURE__ */ jsx("div", {
					className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
					children: /* @__PURE__ */ jsx("div", {
						className: "card-style-3 mb-30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "card-content",
							children: [
								/* @__PURE__ */ jsx("h4", { children: /* @__PURE__ */ jsx("a", {
									href: "#0",
									children: "Card Title here "
								}) }),
								/* @__PURE__ */ jsx("p", { children: "With supporting text below as a natural lead-in to additional content. consectetur adipiscing elit. Integer posuere erat a ante. With supporting text below as a natural lead-in to additional content. consectetur adipiscing elit. Integer posuere erat a ante." }),
								/* @__PURE__ */ jsx("a", {
									href: "#0",
									className: "read-more",
									children: "Read More"
								})
							]
						})
					})
				}, id))]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col-12",
					children: /* @__PURE__ */ jsx("div", {
						className: "title mt-30 mb-30",
						children: /* @__PURE__ */ jsx("h2", { children: "Cards 4" })
					})
				}), [
					{
						id: 1,
						cardImage: "/assets/images/cards/card-style-4/card-1.png"
					},
					{
						id: 2,
						cardImage: "/assets/images/cards/card-style-4/card-2.png"
					},
					{
						id: 3,
						cardImage: "/assets/images/cards/card-style-4/card-3.png"
					}
				].map((item) => /* @__PURE__ */ jsx("div", {
					className: "col-xl-4 col-lg-4 col-md-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "card-style-4 mb-30",
						children: [/* @__PURE__ */ jsx("div", {
							className: "card-image",
							children: /* @__PURE__ */ jsx("a", {
								href: "#0",
								children: /* @__PURE__ */ jsx("img", {
									src: item.cardImage,
									alt: ""
								})
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "card-content",
							children: [
								/* @__PURE__ */ jsx("h4", { children: /* @__PURE__ */ jsx("a", {
									href: "#0",
									children: "Card Title here "
								}) }),
								/* @__PURE__ */ jsx("p", { children: "With supporting text below as a natural lead-in to additional content. consectetur adipiscing elit. Integer posuere erat a ante." }),
								/* @__PURE__ */ jsx("a", {
									href: "#0",
									className: "read-more",
									children: "Read More"
								})
							]
						})]
					})
				}, item.id))]
			})
		]
	})] });
}
//#endregion
export { Cards as default };
