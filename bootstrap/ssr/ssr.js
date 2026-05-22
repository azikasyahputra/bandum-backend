import "./assets/LayoutGuest-C4UoXS7Q.js";
import { Link, createInertiaApp, router, usePage } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { renderToString } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { route } from "ziggy-js";
//#region resources/js/Layouts/Sidebar.jsx
var sidebarGroups = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: "lni lni-grid-alt",
		items: [{
			label: "eCommerce",
			href: "/dashboard"
		}],
		open: true
	},
	{
		id: "pages",
		label: "Pages",
		icon: "lni lni-files",
		items: [{
			label: "Settings",
			href: "/settings"
		}, {
			label: "Blank Page",
			href: "/blank-page"
		}]
	},
	{
		label: "Invoice",
		icon: "lni lni-empty-file",
		href: "/invoice"
	},
	{
		id: "auth",
		label: "Auth",
		icon: "lni lni-enter",
		items: [{
			label: "Sign In",
			href: "/signin"
		}, {
			label: "Sign Up",
			href: "/signup"
		}]
	},
	{ divider: true },
	{
		id: "master",
		label: "Master",
		icon: "lni lni-database",
		items: [
			{
				label: "Artikel",
				href: "/master/artikel"
			},
			{
				label: "Banner",
				href: "/master/banner"
			},
			{
				label: "Barang",
				href: "/master/barang"
			},
			{
				label: "Brand",
				href: "/master/brand"
			},
			{
				label: "Customer",
				href: "/master/customer"
			},
			{
				label: "Ekspedisi",
				href: "/master/ekspedisi"
			},
			{
				label: "FAQ",
				href: "/master/faq"
			},
			{
				label: "Features",
				href: "/master/features"
			},
			{
				label: "Gudang",
				href: "/master/gudang"
			},
			{
				label: "Jenis Pengiriman",
				href: "/master/jenis-pengiriman"
			},
			{
				label: "Kategori",
				href: "/master/kategori"
			},
			{
				label: "Kategori Perusahaan",
				href: "/master/kategori-perusahaan"
			},
			{
				label: "Kecamatan",
				href: "/master/kecamatan"
			},
			{
				label: "Kelurahan",
				href: "/master/kelurahan"
			},
			{
				label: "Klasifikasi Perusahaan",
				href: "/master/klasifikasi-perusahaan"
			},
			{
				label: "Kota",
				href: "/master/kota"
			},
			{
				label: "Negara",
				href: "/master/negara"
			},
			{
				label: "Pembayaran",
				href: "/master/pembayaran"
			},
			{
				label: "Provinsi",
				href: "/master/provinsi"
			},
			{
				label: "Roles",
				href: "/master/roles"
			},
			{
				label: "Settings",
				href: "/master/settings"
			},
			{
				label: "Subkategori",
				href: "/master/subkategori"
			},
			{
				label: "Testimoni",
				href: "/master/testimoni"
			},
			{
				label: "Tipe Pembayaran",
				href: "/master/tipe-pembayaran"
			},
			{
				label: "Users",
				href: "/master/users"
			},
			{
				label: "Vendor",
				href: "/master/vendor"
			}
		]
	},
	{
		id: "transaksi",
		label: "Transaksi",
		icon: "lni lni-cart",
		items: [
			{
				label: "Order",
				href: "/transaksi/order"
			},
			{
				label: "Packing",
				href: "/transaksi/packing"
			},
			{
				label: "Invoice",
				href: "/transaksi/invoice"
			}
		]
	},
	{
		id: "ui-elements",
		label: "UI Elements",
		icon: "lni lni-layout",
		items: [
			{
				label: "Alerts",
				href: "/alerts"
			},
			{
				label: "Buttons",
				href: "/buttons"
			},
			{
				label: "Cards",
				href: "/cards"
			},
			{
				label: "Typography",
				href: "/typography"
			}
		]
	},
	{
		id: "icons",
		label: "Icons",
		icon: "lni lni-display",
		items: [{
			label: "LineIcons",
			href: "/icons"
		}, {
			label: "MDI Icons",
			href: "/mdi-icons"
		}]
	},
	{
		id: "forms",
		label: "Forms",
		icon: "lni lni-write",
		items: [{
			label: "Form Elements",
			href: "/form-elements"
		}]
	},
	{
		label: "Tables",
		icon: "lni lni-layout",
		href: "/tables"
	},
	{ divider: true },
	{
		label: "Notifications",
		icon: "lni lni-alarm",
		href: "/notifications"
	}
];
function SidebarLink({ href, children, className = "" }) {
	if (href === "#") return /* @__PURE__ */ jsx("a", {
		href,
		className,
		children
	});
	return /* @__PURE__ */ jsx(Link, {
		href,
		className,
		children
	});
}
function SidebarItem({ item, currentUrl, isOpen, onToggle }) {
	if (item.divider) return /* @__PURE__ */ jsx("span", {
		className: "divider",
		children: /* @__PURE__ */ jsx("hr", {})
	});
	const isActive = item.href && item.href !== "#" && currentUrl === item.href;
	if (!item.items) return /* @__PURE__ */ jsx("li", {
		className: `nav-item ${isActive ? "active" : ""}`,
		children: /* @__PURE__ */ jsxs(SidebarLink, {
			href: item.href,
			children: [/* @__PURE__ */ jsx("span", {
				className: "icon",
				children: /* @__PURE__ */ jsx("i", { className: item.icon })
			}), /* @__PURE__ */ jsx("span", {
				className: "text",
				children: item.label
			})]
		})
	});
	const collapseId = `ddmenu-${item.id}`;
	return /* @__PURE__ */ jsxs("li", {
		className: "nav-item nav-item-has-children",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: isOpen ? "" : "collapsed",
			onClick: onToggle,
			"aria-controls": collapseId,
			"aria-expanded": isOpen,
			"aria-label": `Toggle ${item.label} navigation`,
			children: [/* @__PURE__ */ jsx("span", {
				className: "icon",
				children: /* @__PURE__ */ jsx("i", { className: item.icon })
			}), /* @__PURE__ */ jsx("span", {
				className: "text",
				children: item.label
			})]
		}), /* @__PURE__ */ jsx("ul", {
			id: collapseId,
			className: `dropdown-nav sidebar-submenu ${isOpen ? "show" : "is-collapsed"}`,
			children: item.items.map((child) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SidebarLink, {
				href: child.href,
				className: child.href !== "#" && currentUrl === child.href ? "active" : "",
				children: child.label
			}) }, `${item.id}-${child.label}`))
		})]
	});
}
function Sidebar({ sidebarOpen }) {
	const { url } = usePage();
	const [openMenus, setOpenMenus] = useState(() => sidebarGroups.reduce((menus, item) => {
		if (item.items && (item.open || item.items.some((child) => child.href === url))) menus[item.id] = true;
		return menus;
	}, {}));
	const toggleMenu = (id) => {
		setOpenMenus((menus) => ({
			...menus,
			[id]: !menus[id]
		}));
	};
	return /* @__PURE__ */ jsxs("aside", {
		className: `sidebar-nav-wrapper ${sidebarOpen ? "active" : ""}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "navbar-logo",
			children: /* @__PURE__ */ jsx(Link, {
				href: "/",
				children: /* @__PURE__ */ jsx("span", {
					style: {
						fontSize: 20,
						fontWeight: 700,
						letterSpacing: 1
					},
					children: "BandumOffice"
				})
			})
		}), /* @__PURE__ */ jsx("nav", {
			className: "sidebar-nav",
			children: /* @__PURE__ */ jsx("ul", { children: sidebarGroups.map((item, index) => /* @__PURE__ */ jsx(SidebarItem, {
				item,
				currentUrl: url,
				isOpen: Boolean(openMenus[item.id]),
				onToggle: () => toggleMenu(item.id)
			}, item.id || item.label || `divider-${index}`)) })
		})]
	});
}
//#endregion
//#region resources/js/Layouts/Header.jsx
var asset = (path) => `/assets/${path}`;
var notifications = [{
	name: "John Doe",
	action: "comment on a product.",
	image: "images/lead/lead-6.png",
	body: "Lorem ipsum dolor sit amet, consect etur adipiscing elit Vivamus tortor.",
	time: "10 mins ago"
}, {
	name: "Jonathon",
	action: "like on a product.",
	image: "images/lead/lead-1.png",
	body: "Lorem ipsum dolor sit amet, consect etur adipiscing elit Vivamus tortor.",
	time: "10 mins ago"
}];
var messages = [
	{
		name: "Jacob Jones",
		body: "Hey! I came across your profile and ...",
		image: "images/lead/lead-5.png",
		time: "10 mins ago"
	},
	{
		name: "John Doe",
		body: "Would you mind please checking out",
		image: "images/lead/lead-3.png",
		time: "12 mins ago"
	},
	{
		name: "Anee Lee",
		body: "Hey! are you available for freelance?",
		image: "images/lead/lead-2.png",
		time: "1h ago"
	}
];
function Header({ sidebarOpen, toggleSidebar, scrolled }) {
	const { props } = usePage();
	const { auth } = props;
	const user = useMemo(() => ({
		name: auth?.user?.name || "Adam Joe",
		email: auth?.user?.email || "Email@gmail.com",
		role: auth?.user?.role || "Admin"
	}), [auth?.user]);
	return /* @__PURE__ */ jsx("header", {
		className: "header",
		style: { boxShadow: scrolled ? "0px 0px 30px 0px rgba(200, 208, 216, 0.30)" : "none" },
		children: /* @__PURE__ */ jsx("div", {
			className: "container-fluid",
			children: /* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col-lg-5 col-md-5 col-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "header-left d-flex align-items-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "menu-toggle-btn mr-15",
							children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								id: "menu-toggle",
								className: "main-btn primary-btn btn-hover",
								onClick: toggleSidebar,
								children: [/* @__PURE__ */ jsx("i", { className: `lni ${sidebarOpen ? "lni-menu" : "lni-chevron-left"} me-2` }), "Menu"]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "header-search d-none d-md-flex",
							children: /* @__PURE__ */ jsxs("form", {
								action: "#",
								children: [/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Search..."
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									children: /* @__PURE__ */ jsx("i", { className: "lni lni-search-alt" })
								})]
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "col-lg-7 col-md-7 col-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "header-right",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "notification-box ml-15 d-none d-md-flex",
								children: [/* @__PURE__ */ jsxs("button", {
									className: "dropdown-toggle",
									type: "button",
									id: "notification",
									"data-bs-toggle": "dropdown",
									"aria-expanded": "false",
									children: [/* @__PURE__ */ jsx("i", { className: "lni lni-alarm fs-5" }), /* @__PURE__ */ jsx("span", {})]
								}), /* @__PURE__ */ jsx("ul", {
									className: "dropdown-menu dropdown-menu-end",
									"aria-labelledby": "notification",
									children: notifications.map((notification) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
										href: "#",
										children: [/* @__PURE__ */ jsx("div", {
											className: "image",
											children: /* @__PURE__ */ jsx("img", {
												src: asset(notification.image),
												alt: ""
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "content",
											children: [
												/* @__PURE__ */ jsxs("h6", { children: [notification.name, /* @__PURE__ */ jsxs("span", {
													className: "text-regular",
													children: [" ", notification.action]
												})] }),
												/* @__PURE__ */ jsx("p", { children: notification.body }),
												/* @__PURE__ */ jsx("span", { children: notification.time })
											]
										})]
									}) }, `${notification.name}-${notification.action}`))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "header-message-box ml-15 d-none d-md-flex",
								children: [/* @__PURE__ */ jsxs("button", {
									className: "dropdown-toggle",
									type: "button",
									id: "message",
									"data-bs-toggle": "dropdown",
									"aria-expanded": "false",
									children: [/* @__PURE__ */ jsx("i", { className: "lni lni-envelope fs-5" }), /* @__PURE__ */ jsx("span", {})]
								}), /* @__PURE__ */ jsx("ul", {
									className: "dropdown-menu dropdown-menu-end",
									"aria-labelledby": "message",
									children: messages.map((message) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
										href: "#",
										children: [/* @__PURE__ */ jsx("div", {
											className: "image",
											children: /* @__PURE__ */ jsx("img", {
												src: asset(message.image),
												alt: ""
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "content",
											children: [
												/* @__PURE__ */ jsx("h6", { children: message.name }),
												/* @__PURE__ */ jsx("p", { children: message.body }),
												/* @__PURE__ */ jsx("span", { children: message.time })
											]
										})]
									}) }, `${message.name}-${message.time}`))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "profile-box ml-15",
								children: [/* @__PURE__ */ jsx("button", {
									className: "dropdown-toggle bg-transparent border-0",
									type: "button",
									id: "profile",
									"data-bs-toggle": "dropdown",
									"aria-expanded": "false",
									children: /* @__PURE__ */ jsx("div", {
										className: "profile-info",
										children: /* @__PURE__ */ jsxs("div", {
											className: "info",
											children: [/* @__PURE__ */ jsx("div", {
												className: "image",
												children: /* @__PURE__ */ jsx("img", {
													src: asset("images/profile/profile-image.png"),
													alt: ""
												})
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h6", {
												className: "fw-500",
												children: user.name
											}), /* @__PURE__ */ jsx("p", { children: user.role })] })]
										})
									})
								}), /* @__PURE__ */ jsxs("ul", {
									className: "dropdown-menu dropdown-menu-end",
									"aria-labelledby": "profile",
									children: [
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", {
											className: "author-info d-flex align-items-center p-1",
											children: [/* @__PURE__ */ jsx("div", {
												className: "image",
												children: /* @__PURE__ */ jsx("img", {
													src: asset("images/profile/profile-image.png"),
													alt: "Profile"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "content",
												children: [/* @__PURE__ */ jsx("h4", {
													className: "text-sm",
													children: user.name
												}), /* @__PURE__ */ jsx("a", {
													className: "text-muted text-xs",
													href: `mailto:${user.email}`,
													children: user.email
												})]
											})]
										}) }),
										/* @__PURE__ */ jsx("li", { className: "divider" }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "#",
											children: [/* @__PURE__ */ jsx("i", { className: "lni lni-user" }), " View Profile"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "#",
											children: [/* @__PURE__ */ jsx("i", { className: "lni lni-alarm" }), " Notifications"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "#",
											children: [/* @__PURE__ */ jsx("i", { className: "lni lni-inbox" }), " Messages"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "#",
											children: [/* @__PURE__ */ jsx("i", { className: "lni lni-cog" }), " Settings"]
										}) }),
										/* @__PURE__ */ jsx("li", { className: "divider" }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
											type: "button",
											className: "dropdown-item border-0 bg-transparent",
											onClick: () => router.post(route("logout")),
											children: [/* @__PURE__ */ jsx("i", { className: "lni lni-exit" }), " Sign Out"]
										}) })
									]
								})]
							})
						]
					})
				})]
			})
		})
	});
}
//#endregion
//#region resources/js/Layouts/Footer.jsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "footer",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-fluid",
			children: /* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col-md-6 order-last order-md-first",
					children: /* @__PURE__ */ jsx("div", {
						className: "copyright text-center text-md-start",
						children: /* @__PURE__ */ jsxs("p", {
							className: "text-sm",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" BandumOffice"
							]
						})
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "col-md-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "terms d-flex justify-content-center justify-content-md-end",
						children: [/* @__PURE__ */ jsx("a", {
							href: "#0",
							children: "Term & Conditions"
						}), /* @__PURE__ */ jsx("a", {
							href: "#0",
							className: "ml-15",
							children: "Privacy & Policy"
						})]
					})
				})]
			})
		})
	});
}
//#endregion
//#region resources/js/Layouts/LayoutUser.jsx
function LayoutUser({ children }) {
	const { component, props } = usePage();
	const { title } = props;
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pageTitle = title || component || "Dashboard";
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 0);
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const toggleSidebar = () => setSidebarOpen((open) => !open);
	const closeSidebar = () => setSidebarOpen(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			id: "preloader",
			style: { display: "none" },
			children: /* @__PURE__ */ jsx("div", { className: "spinner" })
		}),
		/* @__PURE__ */ jsx(Sidebar, { sidebarOpen }),
		/* @__PURE__ */ jsx("button", {
			type: "button",
			className: `overlay border-0 ${sidebarOpen ? "active" : ""}`,
			onClick: closeSidebar,
			"aria-label": "Close sidebar"
		}),
		/* @__PURE__ */ jsxs("main", {
			className: `main-wrapper ${sidebarOpen ? "active" : ""}`,
			children: [
				/* @__PURE__ */ jsx(Header, {
					sidebarOpen,
					toggleSidebar,
					scrolled
				}),
				/* @__PURE__ */ jsx("section", {
					className: "section",
					children: /* @__PURE__ */ jsxs("div", {
						className: "container-fluid",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "title-wrapper pt-30",
								children: /* @__PURE__ */ jsxs("div", {
									className: "row align-items-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "col-md-6",
										children: /* @__PURE__ */ jsx("div", {
											className: "title",
											children: /* @__PURE__ */ jsx("h2", { children: pageTitle })
										})
									}), /* @__PURE__ */ jsx("div", {
										className: "col-md-6",
										children: /* @__PURE__ */ jsx("div", {
											className: "breadcrumb-wrapper",
											children: /* @__PURE__ */ jsx("nav", {
												"aria-label": "breadcrumb",
												children: /* @__PURE__ */ jsxs("ol", {
													className: "breadcrumb",
													children: [/* @__PURE__ */ jsx("li", {
														className: "breadcrumb-item",
														children: /* @__PURE__ */ jsx(Link, {
															href: "/dashboard",
															children: "Dashboard"
														})
													}), /* @__PURE__ */ jsx("li", {
														className: "breadcrumb-item active",
														"aria-current": "page",
														children: pageTitle
													})]
												})
											})
										})
									})]
								})
							}),
							props.flash?.success && /* @__PURE__ */ jsxs("div", {
								className: "alert alert-success alert-dismissible fade show",
								role: "alert",
								children: [props.flash.success, /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "btn-close",
									"data-bs-dismiss": "alert",
									"aria-label": "Close"
								})]
							}),
							children
						]
					})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		}),
		/* @__PURE__ */ jsx("a", {
			href: "#0",
			className: "scroll-top btn-hover",
			children: /* @__PURE__ */ jsx("i", { className: "lni lni-chevron-up" })
		})
	] });
}
//#endregion
//#region resources/js/ssr.jsx
var render = await createInertiaApp({
	title: (title) => title ? `${title} - Laravel Inertia React` : "Laravel Inertia React",
	resolve: async (name) => {
		const module = await (/* @__PURE__ */ Object.assign({
			"./Pages/Alerts.jsx": () => import("./assets/Alerts-e4CzA40W.js"),
			"./Pages/BlankPage.jsx": () => import("./assets/BlankPage-BEpZWBwG.js"),
			"./Pages/Buttons.jsx": () => import("./assets/Buttons-CGpbfeir.js"),
			"./Pages/Cards.jsx": () => import("./assets/Cards-CNF4Ma1v.js"),
			"./Pages/Dashboard.jsx": () => import("./assets/Dashboard-Cw6Vg36d.js"),
			"./Pages/FormElements.jsx": () => import("./assets/FormElements-xzZsIUWG.js"),
			"./Pages/Icons.jsx": () => import("./assets/Icons-BB35Dsm4.js"),
			"./Pages/Invoice.jsx": () => import("./assets/Invoice-BCLSKZ8Z.js"),
			"./Pages/Master/artikel/Create.jsx": () => import("./assets/Create-CS8Szq7N.js"),
			"./Pages/Master/artikel/Edit.jsx": () => import("./assets/Edit-BZ271aB6.js"),
			"./Pages/Master/artikel/Index.jsx": () => import("./assets/Index-pbR-Dzr1.js"),
			"./Pages/Master/artikel/Show.jsx": () => import("./assets/Show-oZaBjFqg.js"),
			"./Pages/Master/banner/Create.jsx": () => import("./assets/Create-x2UGlOov.js"),
			"./Pages/Master/banner/Edit.jsx": () => import("./assets/Edit-DQ-tDCbI.js"),
			"./Pages/Master/banner/Index.jsx": () => import("./assets/Index-BpVpz9Ja.js"),
			"./Pages/Master/banner/Show.jsx": () => import("./assets/Show-CEVn9TIQ.js"),
			"./Pages/Master/barang/Create.jsx": () => import("./assets/Create-BJAmQ1ok.js"),
			"./Pages/Master/barang/Edit.jsx": () => import("./assets/Edit-B8AcQ-2Q.js"),
			"./Pages/Master/barang/Index.jsx": () => import("./assets/Index-DJVGhVd8.js"),
			"./Pages/Master/barang/Show.jsx": () => import("./assets/Show-DZhxHEaJ.js"),
			"./Pages/Master/barang-kemasan/Create.jsx": () => import("./assets/Create-pl-8Vqqo.js"),
			"./Pages/Master/barang-kemasan/Edit.jsx": () => import("./assets/Edit-CV4oXdCo.js"),
			"./Pages/Master/barang-kemasan/Index.jsx": () => import("./assets/Index-WA9o1Aq-.js"),
			"./Pages/Master/barang-kemasan/Show.jsx": () => import("./assets/Show-_Cz25m9W.js"),
			"./Pages/Master/barang-media/Create.jsx": () => import("./assets/Create-BmS_-SVW.js"),
			"./Pages/Master/barang-media/Edit.jsx": () => import("./assets/Edit-Ccy9mBJT.js"),
			"./Pages/Master/barang-media/Index.jsx": () => import("./assets/Index-CtZ5VlMB.js"),
			"./Pages/Master/barang-media/Show.jsx": () => import("./assets/Show-C2TG3Z0E.js"),
			"./Pages/Master/brand/Create.jsx": () => import("./assets/Create-BW3PNOVA.js"),
			"./Pages/Master/brand/Edit.jsx": () => import("./assets/Edit-CU6x_vXg.js"),
			"./Pages/Master/brand/Index.jsx": () => import("./assets/Index-BvrmA7Zs.js"),
			"./Pages/Master/brand/Show.jsx": () => import("./assets/Show-0G8mP2wr.js"),
			"./Pages/Master/customer/Create.jsx": () => import("./assets/Create-D4wQa2GF.js"),
			"./Pages/Master/customer/Edit.jsx": () => import("./assets/Edit-CdIIjpBN.js"),
			"./Pages/Master/customer/Index.jsx": () => import("./assets/Index-DxGeAw5Q.js"),
			"./Pages/Master/customer/Show.jsx": () => import("./assets/Show-Ch0ngZs5.js"),
			"./Pages/Master/customer-alamat/Create.jsx": () => import("./assets/Create-OQu_m2Ky.js"),
			"./Pages/Master/customer-alamat/Edit.jsx": () => import("./assets/Edit-1l35P57Y.js"),
			"./Pages/Master/customer-alamat/Index.jsx": () => import("./assets/Index-3dPJtbF9.js"),
			"./Pages/Master/customer-alamat/Show.jsx": () => import("./assets/Show-Dg0e5xWe.js"),
			"./Pages/Master/ekspedisi/Create.jsx": () => import("./assets/Create-D4di7CWs.js"),
			"./Pages/Master/ekspedisi/Edit.jsx": () => import("./assets/Edit-O42RgOZq.js"),
			"./Pages/Master/ekspedisi/Index.jsx": () => import("./assets/Index-BuV6hspw.js"),
			"./Pages/Master/ekspedisi/Show.jsx": () => import("./assets/Show-CyAQ-f27.js"),
			"./Pages/Master/faq/Create.jsx": () => import("./assets/Create-CEBZnsHl.js"),
			"./Pages/Master/faq/Edit.jsx": () => import("./assets/Edit-Cb60mGPK.js"),
			"./Pages/Master/faq/Index.jsx": () => import("./assets/Index-CwCxLeJm.js"),
			"./Pages/Master/faq/Show.jsx": () => import("./assets/Show-DxHRa46f.js"),
			"./Pages/Master/features/Create.jsx": () => import("./assets/Create-CyZAnGbO.js"),
			"./Pages/Master/features/Edit.jsx": () => import("./assets/Edit-ByBvQKE9.js"),
			"./Pages/Master/features/Index.jsx": () => import("./assets/Index-C8LThH2O.js"),
			"./Pages/Master/features/Show.jsx": () => import("./assets/Show-B5oZ75zF.js"),
			"./Pages/Master/gudang/Create.jsx": () => import("./assets/Create-CIFjyFH8.js"),
			"./Pages/Master/gudang/Edit.jsx": () => import("./assets/Edit-CV37sNSL.js"),
			"./Pages/Master/gudang/Index.jsx": () => import("./assets/Index-JuWcqC7S.js"),
			"./Pages/Master/gudang/Show.jsx": () => import("./assets/Show-5kRxNCg-.js"),
			"./Pages/Master/jenis-pengiriman/Create.jsx": () => import("./assets/Create-D7Ue1bXQ.js"),
			"./Pages/Master/jenis-pengiriman/Edit.jsx": () => import("./assets/Edit-D0NtZxSH.js"),
			"./Pages/Master/jenis-pengiriman/Index.jsx": () => import("./assets/Index-BZUAoS54.js"),
			"./Pages/Master/jenis-pengiriman/Show.jsx": () => import("./assets/Show-BGhIqQxA.js"),
			"./Pages/Master/kategori/Create.jsx": () => import("./assets/Create-BxGhoYFK.js"),
			"./Pages/Master/kategori/Edit.jsx": () => import("./assets/Edit-Bx0V2PrH.js"),
			"./Pages/Master/kategori/Index.jsx": () => import("./assets/Index-LcN2kooP.js"),
			"./Pages/Master/kategori/Show.jsx": () => import("./assets/Show-BP4002rg.js"),
			"./Pages/Master/kategori-perusahaan/Create.jsx": () => import("./assets/Create-DTJzSkGW.js"),
			"./Pages/Master/kategori-perusahaan/Edit.jsx": () => import("./assets/Edit-DwOlK9B0.js"),
			"./Pages/Master/kategori-perusahaan/Index.jsx": () => import("./assets/Index-CJqX6aTa.js"),
			"./Pages/Master/kategori-perusahaan/Show.jsx": () => import("./assets/Show-C_Muoezo.js"),
			"./Pages/Master/kecamatan/Create.jsx": () => import("./assets/Create-BO5iapbr.js"),
			"./Pages/Master/kecamatan/Edit.jsx": () => import("./assets/Edit-C_C8BccQ.js"),
			"./Pages/Master/kecamatan/Index.jsx": () => import("./assets/Index-DXxtizea.js"),
			"./Pages/Master/kecamatan/Show.jsx": () => import("./assets/Show-BejBmKa4.js"),
			"./Pages/Master/kelurahan/Create.jsx": () => import("./assets/Create-BCWj7wym.js"),
			"./Pages/Master/kelurahan/Edit.jsx": () => import("./assets/Edit-BwVp7NPn.js"),
			"./Pages/Master/kelurahan/Index.jsx": () => import("./assets/Index-BYulww9e.js"),
			"./Pages/Master/kelurahan/Show.jsx": () => import("./assets/Show-Dew4iDxm.js"),
			"./Pages/Master/klasifikasi-perusahaan/Create.jsx": () => import("./assets/Create-BiVFRWYL.js"),
			"./Pages/Master/klasifikasi-perusahaan/Edit.jsx": () => import("./assets/Edit-C3h4o3BE.js"),
			"./Pages/Master/klasifikasi-perusahaan/Index.jsx": () => import("./assets/Index-Dc76jKni.js"),
			"./Pages/Master/klasifikasi-perusahaan/Show.jsx": () => import("./assets/Show-DskYpjyI.js"),
			"./Pages/Master/kota/Create.jsx": () => import("./assets/Create-CSH_UY1b.js"),
			"./Pages/Master/kota/Edit.jsx": () => import("./assets/Edit-Cye2SyHV.js"),
			"./Pages/Master/kota/Index.jsx": () => import("./assets/Index-Dddku6t0.js"),
			"./Pages/Master/kota/Show.jsx": () => import("./assets/Show-mz2hOoJX.js"),
			"./Pages/Master/negara/Create.jsx": () => import("./assets/Create-DjutDw1P.js"),
			"./Pages/Master/negara/Edit.jsx": () => import("./assets/Edit-CYWMmxSg.js"),
			"./Pages/Master/negara/Index.jsx": () => import("./assets/Index-Cx60t0Fo.js"),
			"./Pages/Master/negara/Show.jsx": () => import("./assets/Show-Dmctmyq7.js"),
			"./Pages/Master/pembayaran/Create.jsx": () => import("./assets/Create-AEQCuqUk.js"),
			"./Pages/Master/pembayaran/Edit.jsx": () => import("./assets/Edit-iruVDNBF.js"),
			"./Pages/Master/pembayaran/Index.jsx": () => import("./assets/Index-ZiNgofdn.js"),
			"./Pages/Master/pembayaran/Show.jsx": () => import("./assets/Show-CaZP8jSh.js"),
			"./Pages/Master/provinsi/Create.jsx": () => import("./assets/Create-Dv8j-v1y.js"),
			"./Pages/Master/provinsi/Edit.jsx": () => import("./assets/Edit-C0aHeiup.js"),
			"./Pages/Master/provinsi/Index.jsx": () => import("./assets/Index-Czmgrajq.js"),
			"./Pages/Master/provinsi/Show.jsx": () => import("./assets/Show-DBhk2lAr.js"),
			"./Pages/Master/roles/Create.jsx": () => import("./assets/Create-gt-UiPU_.js"),
			"./Pages/Master/roles/Edit.jsx": () => import("./assets/Edit-YEkKpk_l.js"),
			"./Pages/Master/roles/Index.jsx": () => import("./assets/Index-ikLQOjxm.js"),
			"./Pages/Master/roles/Show.jsx": () => import("./assets/Show-eWBwE3hL.js"),
			"./Pages/Master/settings/Create.jsx": () => import("./assets/Create-C3FmQ75H.js"),
			"./Pages/Master/settings/Edit.jsx": () => import("./assets/Edit-joZw6BaD.js"),
			"./Pages/Master/settings/Index.jsx": () => import("./assets/Index-DljhygOk.js"),
			"./Pages/Master/settings/Show.jsx": () => import("./assets/Show-kllE5VDq.js"),
			"./Pages/Master/subkategori/Create.jsx": () => import("./assets/Create-DSRCaeCZ.js"),
			"./Pages/Master/subkategori/Edit.jsx": () => import("./assets/Edit-DTxc_vzR.js"),
			"./Pages/Master/subkategori/Index.jsx": () => import("./assets/Index-CWf_rJHS.js"),
			"./Pages/Master/subkategori/Show.jsx": () => import("./assets/Show-B-oXzLU_.js"),
			"./Pages/Master/testimoni/Create.jsx": () => import("./assets/Create-DaqYdNen.js"),
			"./Pages/Master/testimoni/Edit.jsx": () => import("./assets/Edit-Dp-OFyAh.js"),
			"./Pages/Master/testimoni/Index.jsx": () => import("./assets/Index-4vTyyY-x.js"),
			"./Pages/Master/testimoni/Show.jsx": () => import("./assets/Show-CAOpT7wa.js"),
			"./Pages/Master/tipe-pembayaran/Create.jsx": () => import("./assets/Create-DfG4Gq50.js"),
			"./Pages/Master/tipe-pembayaran/Edit.jsx": () => import("./assets/Edit-C8PxmuB4.js"),
			"./Pages/Master/tipe-pembayaran/Index.jsx": () => import("./assets/Index-Cyji0xWF.js"),
			"./Pages/Master/tipe-pembayaran/Show.jsx": () => import("./assets/Show-DRMkfu7K.js"),
			"./Pages/Master/users/Create.jsx": () => import("./assets/Create-B_-13E7o.js"),
			"./Pages/Master/users/Edit.jsx": () => import("./assets/Edit-Ca4FgTHR.js"),
			"./Pages/Master/users/Index.jsx": () => import("./assets/Index-DnALY0fB.js"),
			"./Pages/Master/users/Show.jsx": () => import("./assets/Show-CyeLAJN-.js"),
			"./Pages/Master/vendor/Create.jsx": () => import("./assets/Create-B3RS_BgV.js"),
			"./Pages/Master/vendor/Edit.jsx": () => import("./assets/Edit-CY5sUD8O.js"),
			"./Pages/Master/vendor/Index.jsx": () => import("./assets/Index-QRQlqg0_.js"),
			"./Pages/Master/vendor/Show.jsx": () => import("./assets/Show-BBxMq0br.js"),
			"./Pages/Master/vendor-alamat/Create.jsx": () => import("./assets/Create-BqnxCRpo.js"),
			"./Pages/Master/vendor-alamat/Edit.jsx": () => import("./assets/Edit-CpNcXvXV.js"),
			"./Pages/Master/vendor-alamat/Index.jsx": () => import("./assets/Index-B1a5LLe3.js"),
			"./Pages/Master/vendor-alamat/Show.jsx": () => import("./assets/Show-CzwnpCg1.js"),
			"./Pages/MdiIcons.jsx": () => import("./assets/MdiIcons-FGjWzAIN.js"),
			"./Pages/Notifications.jsx": () => import("./assets/Notifications-CttYvgYu.js"),
			"./Pages/Settings.jsx": () => import("./assets/Settings-DybcX3Fl.js"),
			"./Pages/SignIn.jsx": () => import("./assets/SignIn-BaO1LDtb.js"),
			"./Pages/SignUp.jsx": () => import("./assets/SignUp-C6YRhU9C.js"),
			"./Pages/Tables.jsx": () => import("./assets/Tables-D9XDkbL9.js"),
			"./Pages/Transaksi/Invoice/Form.jsx": () => import("./assets/Form-BpQon9jw.js"),
			"./Pages/Transaksi/Invoice/Index.jsx": () => import("./assets/Index-Dy_V4meJ.js"),
			"./Pages/Transaksi/Order/Form.jsx": () => import("./assets/Form-v2ZSJPo4.js"),
			"./Pages/Transaksi/Order/Index.jsx": () => import("./assets/Index-CNZpkrLg.js"),
			"./Pages/Transaksi/Packing/Form.jsx": () => import("./assets/Form-D_V87fmJ.js"),
			"./Pages/Transaksi/Packing/Index.jsx": () => import("./assets/Index-Ch2Dps_8.js"),
			"./Pages/Typography.jsx": () => import("./assets/Typography-DiSUiRdy.js")
		}))[`./Pages/${name}.jsx`]();
		module.default.layout = module.default.layout || ((page) => /* @__PURE__ */ jsx(LayoutUser, { children: page }));
		return module;
	},
	setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
});
var renderPage = (page) => render(page, renderToString);
createServer(renderPage);
//#endregion
export { renderPage as default };
