import "./assets/LayoutGuest-BJS4wZ-z.js";
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
function SidebarLink({ href, children, className = "", title, onClick }) {
	if (href === "#") return /* @__PURE__ */ jsx("a", {
		href,
		className,
		"data-title": title,
		onClick,
		children
	});
	return /* @__PURE__ */ jsx(Link, {
		href,
		className,
		"data-title": title,
		onClick,
		children
	});
}
function SidebarItem({ item, currentUrl, isOpen, onToggle, mini, onToggleSidebar }) {
	const [showFlyout, setShowFlyout] = useState(false);
	if (item.divider) return /* @__PURE__ */ jsx("span", {
		className: "divider",
		children: /* @__PURE__ */ jsx("hr", {})
	});
	const isActive = item.href && item.href !== "#" && currentUrl === item.href;
	if (mini) return /* @__PURE__ */ jsxs("li", {
		className: `nav-item ${isActive ? "active" : ""} ${item.items ? "nav-item-has-children" : ""}`,
		onMouseEnter: () => setShowFlyout(true),
		onMouseLeave: () => setShowFlyout(false),
		children: [!item.items ? /* @__PURE__ */ jsx(SidebarLink, {
			href: item.href,
			title: item.label,
			onClick: onToggleSidebar,
			children: /* @__PURE__ */ jsx("span", {
				className: "icon",
				children: /* @__PURE__ */ jsx("i", { className: item.icon })
			})
		}) : /* @__PURE__ */ jsx("button", {
			type: "button",
			className: isOpen ? "" : "collapsed",
			onClick: () => {
				onToggleSidebar();
				onToggle();
			},
			children: /* @__PURE__ */ jsx("span", {
				className: "icon",
				children: /* @__PURE__ */ jsx("i", { className: item.icon })
			})
		}), showFlyout && /* @__PURE__ */ jsxs("div", {
			className: "sidebar-flyout",
			children: [/* @__PURE__ */ jsx("div", {
				className: "sidebar-flyout-header",
				children: item.label
			}), item.items ? /* @__PURE__ */ jsx("ul", {
				className: "sidebar-flyout-menu",
				children: item.items.map((child) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SidebarLink, {
					href: child.href,
					className: child.href !== "#" && currentUrl === child.href ? "active" : "",
					children: child.label
				}) }, child.label))
			}) : /* @__PURE__ */ jsx(SidebarLink, {
				href: item.href,
				className: "sidebar-flyout-link",
				children: item.label
			})]
		})]
	});
	if (!item.items) return /* @__PURE__ */ jsx("li", {
		className: `nav-item ${isActive ? "active" : ""}`,
		children: /* @__PURE__ */ jsxs(SidebarLink, {
			href: item.href,
			title: item.label,
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
			"data-title": item.label,
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
function Sidebar({ sidebarOpen, onToggleSidebar }) {
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
			children: /* @__PURE__ */ jsxs(Link, {
				href: "/",
				children: [/* @__PURE__ */ jsx("span", {
					className: "logo-full",
					style: {
						fontSize: 20,
						fontWeight: 700,
						letterSpacing: 1
					},
					children: "BandumOffice"
				}), /* @__PURE__ */ jsx("span", {
					className: "logo-mini",
					style: {
						display: "none",
						fontSize: 18,
						fontWeight: 700
					},
					children: "BO"
				})]
			})
		}), /* @__PURE__ */ jsx("nav", {
			className: "sidebar-nav",
			children: /* @__PURE__ */ jsx("ul", { children: sidebarGroups.map((item, index) => /* @__PURE__ */ jsx(SidebarItem, {
				item,
				currentUrl: url,
				isOpen: Boolean(openMenus[item.id]),
				onToggle: () => toggleMenu(item.id),
				mini: sidebarOpen,
				onToggleSidebar
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
							children: /* @__PURE__ */ jsx("button", {
								type: "button",
								id: "menu-toggle",
								className: "main-btn primary-btn btn-hover",
								onClick: toggleSidebar,
								children: /* @__PURE__ */ jsx("i", { className: "lni lni-menu" })
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
	const [sidebarOpen, setSidebarOpen] = useState(() => {
		try {
			return localStorage.getItem("sidebarMini") === "true";
		} catch {
			return false;
		}
	});
	const [scrolled, setScrolled] = useState(false);
	const pageTitle = title || component || "Dashboard";
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 0);
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const toggleSidebar = () => setSidebarOpen((open) => {
		const next = !open;
		localStorage.setItem("sidebarMini", next);
		return next;
	});
	const closeSidebar = () => setSidebarOpen(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			id: "preloader",
			style: { display: "none" },
			children: /* @__PURE__ */ jsx("div", { className: "spinner" })
		}),
		/* @__PURE__ */ jsx(Sidebar, {
			sidebarOpen,
			onToggleSidebar: toggleSidebar
		}),
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
			"./Pages/Alerts.jsx": () => import("./assets/Alerts-BdIER4ac.js"),
			"./Pages/BlankPage.jsx": () => import("./assets/BlankPage-BHtfvLfj.js"),
			"./Pages/Buttons.jsx": () => import("./assets/Buttons-BBptZaSi.js"),
			"./Pages/Cards.jsx": () => import("./assets/Cards-Dg60UuCf.js"),
			"./Pages/Dashboard.jsx": () => import("./assets/Dashboard-DNS6DIcp.js"),
			"./Pages/FormElements.jsx": () => import("./assets/FormElements-Dm2cs-81.js"),
			"./Pages/Icons.jsx": () => import("./assets/Icons-Bp98GiuV.js"),
			"./Pages/Invoice.jsx": () => import("./assets/Invoice-Cfif2ZlU.js"),
			"./Pages/Master/artikel/Create.jsx": () => import("./assets/Create-DcfIqFJO.js"),
			"./Pages/Master/artikel/Edit.jsx": () => import("./assets/Edit-C0W4fzsx.js"),
			"./Pages/Master/artikel/Index.jsx": () => import("./assets/Index-DD7Vufpd.js"),
			"./Pages/Master/artikel/Show.jsx": () => import("./assets/Show-BCGYdB6z.js"),
			"./Pages/Master/banner/Create.jsx": () => import("./assets/Create-BL_jbdzu.js"),
			"./Pages/Master/banner/Edit.jsx": () => import("./assets/Edit-B0lJ_fZp.js"),
			"./Pages/Master/banner/Index.jsx": () => import("./assets/Index-B-uZEfWi.js"),
			"./Pages/Master/banner/Show.jsx": () => import("./assets/Show-B92CzI40.js"),
			"./Pages/Master/barang/Create.jsx": () => import("./assets/Create-DgfugyPi.js"),
			"./Pages/Master/barang/Edit.jsx": () => import("./assets/Edit-DQhcpow5.js"),
			"./Pages/Master/barang/Index.jsx": () => import("./assets/Index-BaQsW3WO.js"),
			"./Pages/Master/barang/Show.jsx": () => import("./assets/Show-TaysA0oL.js"),
			"./Pages/Master/barang-kemasan/Create.jsx": () => import("./assets/Create-BCtAn4KS.js"),
			"./Pages/Master/barang-kemasan/Edit.jsx": () => import("./assets/Edit-lMuz5xPs.js"),
			"./Pages/Master/barang-kemasan/Index.jsx": () => import("./assets/Index-C_hB_9b0.js"),
			"./Pages/Master/barang-kemasan/Show.jsx": () => import("./assets/Show-CDv01qpH.js"),
			"./Pages/Master/barang-media/Create.jsx": () => import("./assets/Create-D7IzIWCY.js"),
			"./Pages/Master/barang-media/Edit.jsx": () => import("./assets/Edit-Qav9rbCw.js"),
			"./Pages/Master/barang-media/Index.jsx": () => import("./assets/Index-jHeEjJt5.js"),
			"./Pages/Master/barang-media/Show.jsx": () => import("./assets/Show-BMOMql_W.js"),
			"./Pages/Master/brand/Create.jsx": () => import("./assets/Create-Ce0TlnNr.js"),
			"./Pages/Master/brand/Edit.jsx": () => import("./assets/Edit-B1w18gwp.js"),
			"./Pages/Master/brand/Index.jsx": () => import("./assets/Index-D6_JJ8z7.js"),
			"./Pages/Master/brand/Show.jsx": () => import("./assets/Show-Cyfeujef.js"),
			"./Pages/Master/customer/Create.jsx": () => import("./assets/Create-CMeqNCqr.js"),
			"./Pages/Master/customer/Edit.jsx": () => import("./assets/Edit-D7AyMyiN.js"),
			"./Pages/Master/customer/Index.jsx": () => import("./assets/Index-DF5c2fwB.js"),
			"./Pages/Master/customer/Show.jsx": () => import("./assets/Show-RIbUw_ny.js"),
			"./Pages/Master/customer-alamat/Create.jsx": () => import("./assets/Create-Drdnyf_l2.js"),
			"./Pages/Master/customer-alamat/Edit.jsx": () => import("./assets/Edit-BloWJk2M2.js"),
			"./Pages/Master/customer-alamat/Index.jsx": () => import("./assets/Index-C1JhfAVd.js"),
			"./Pages/Master/customer-alamat/Show.jsx": () => import("./assets/Show-Cau7g7vL.js"),
			"./Pages/Master/ekspedisi/Create.jsx": () => import("./assets/Create-DUSQRcEh.js"),
			"./Pages/Master/ekspedisi/Edit.jsx": () => import("./assets/Edit-ka8aSmLc.js"),
			"./Pages/Master/ekspedisi/Index.jsx": () => import("./assets/Index-CBmyott_.js"),
			"./Pages/Master/ekspedisi/Show.jsx": () => import("./assets/Show-DTYqmalj.js"),
			"./Pages/Master/faq/Create.jsx": () => import("./assets/Create-kAzAI1EE.js"),
			"./Pages/Master/faq/Edit.jsx": () => import("./assets/Edit-D9s70EAk.js"),
			"./Pages/Master/faq/Index.jsx": () => import("./assets/Index-BVBk41bW.js"),
			"./Pages/Master/faq/Show.jsx": () => import("./assets/Show-DG43bMYB.js"),
			"./Pages/Master/features/Create.jsx": () => import("./assets/Create-D-AmOKqa.js"),
			"./Pages/Master/features/Edit.jsx": () => import("./assets/Edit-Bvvu9LL8.js"),
			"./Pages/Master/features/Index.jsx": () => import("./assets/Index-C2B3-Ub-.js"),
			"./Pages/Master/features/Show.jsx": () => import("./assets/Show-BYIYKJHX.js"),
			"./Pages/Master/gudang/Create.jsx": () => import("./assets/Create-kflqqXHs.js"),
			"./Pages/Master/gudang/Edit.jsx": () => import("./assets/Edit-CcSAY_Jg.js"),
			"./Pages/Master/gudang/Index.jsx": () => import("./assets/Index-BUaJjl_M.js"),
			"./Pages/Master/gudang/Show.jsx": () => import("./assets/Show-DaEFCY5u.js"),
			"./Pages/Master/jenis-pengiriman/Create.jsx": () => import("./assets/Create-CYuMl3iI.js"),
			"./Pages/Master/jenis-pengiriman/Edit.jsx": () => import("./assets/Edit-CbcwNRyf.js"),
			"./Pages/Master/jenis-pengiriman/Index.jsx": () => import("./assets/Index-BYGiRkuR.js"),
			"./Pages/Master/jenis-pengiriman/Show.jsx": () => import("./assets/Show-7gPq79gy.js"),
			"./Pages/Master/kategori/Create.jsx": () => import("./assets/Create-ByPWH-Lz.js"),
			"./Pages/Master/kategori/Edit.jsx": () => import("./assets/Edit-CC9zrd7w.js"),
			"./Pages/Master/kategori/Index.jsx": () => import("./assets/Index-BiNLFP3d.js"),
			"./Pages/Master/kategori/Show.jsx": () => import("./assets/Show-D_o_vKnF.js"),
			"./Pages/Master/kategori-perusahaan/Create.jsx": () => import("./assets/Create-49vZzO96.js"),
			"./Pages/Master/kategori-perusahaan/Edit.jsx": () => import("./assets/Edit-O8QAMFWa.js"),
			"./Pages/Master/kategori-perusahaan/Index.jsx": () => import("./assets/Index-BiNBNAb_.js"),
			"./Pages/Master/kategori-perusahaan/Show.jsx": () => import("./assets/Show-WWiVtDdG.js"),
			"./Pages/Master/kecamatan/Create.jsx": () => import("./assets/Create-DjvCpdCh.js"),
			"./Pages/Master/kecamatan/Edit.jsx": () => import("./assets/Edit-DeEHP4gT.js"),
			"./Pages/Master/kecamatan/Index.jsx": () => import("./assets/Index-SH9DzUZG.js"),
			"./Pages/Master/kecamatan/Show.jsx": () => import("./assets/Show-BRorchIW.js"),
			"./Pages/Master/kelurahan/Create.jsx": () => import("./assets/Create-CtNiw93B.js"),
			"./Pages/Master/kelurahan/Edit.jsx": () => import("./assets/Edit-DGVQ2dEj.js"),
			"./Pages/Master/kelurahan/Index.jsx": () => import("./assets/Index-DHl0hCFZ.js"),
			"./Pages/Master/kelurahan/Show.jsx": () => import("./assets/Show-CcsIEAPd.js"),
			"./Pages/Master/klasifikasi-perusahaan/Create.jsx": () => import("./assets/Create-CipLZRF1.js"),
			"./Pages/Master/klasifikasi-perusahaan/Edit.jsx": () => import("./assets/Edit-Dr8_50Se.js"),
			"./Pages/Master/klasifikasi-perusahaan/Index.jsx": () => import("./assets/Index-GOvTfrg6.js"),
			"./Pages/Master/klasifikasi-perusahaan/Show.jsx": () => import("./assets/Show-GajrEzrc.js"),
			"./Pages/Master/kota/Create.jsx": () => import("./assets/Create-zqlLva-h.js"),
			"./Pages/Master/kota/Edit.jsx": () => import("./assets/Edit-8MrrzKz5.js"),
			"./Pages/Master/kota/Index.jsx": () => import("./assets/Index-DHUqTlSI.js"),
			"./Pages/Master/kota/Show.jsx": () => import("./assets/Show-udKw1nza.js"),
			"./Pages/Master/negara/Create.jsx": () => import("./assets/Create-BL_PEN5u.js"),
			"./Pages/Master/negara/Edit.jsx": () => import("./assets/Edit-Cb9Pskrd.js"),
			"./Pages/Master/negara/Index.jsx": () => import("./assets/Index-DwhK5VVE.js"),
			"./Pages/Master/negara/Show.jsx": () => import("./assets/Show-enGToEVM.js"),
			"./Pages/Master/pembayaran/Create.jsx": () => import("./assets/Create-CDPzmDSd.js"),
			"./Pages/Master/pembayaran/Edit.jsx": () => import("./assets/Edit-CaH0CyGd.js"),
			"./Pages/Master/pembayaran/Index.jsx": () => import("./assets/Index-Bs7ruv3b.js"),
			"./Pages/Master/pembayaran/Show.jsx": () => import("./assets/Show-CPC8vqKH.js"),
			"./Pages/Master/provinsi/Create.jsx": () => import("./assets/Create-Bb8zB1eK.js"),
			"./Pages/Master/provinsi/Edit.jsx": () => import("./assets/Edit-lSUDyIxf.js"),
			"./Pages/Master/provinsi/Index.jsx": () => import("./assets/Index-D_u-u_3_.js"),
			"./Pages/Master/provinsi/Show.jsx": () => import("./assets/Show-DGYy1nrp.js"),
			"./Pages/Master/roles/Create.jsx": () => import("./assets/Create-kKkJhYIU.js"),
			"./Pages/Master/roles/Edit.jsx": () => import("./assets/Edit-BWV_mzAt.js"),
			"./Pages/Master/roles/Index.jsx": () => import("./assets/Index-BF4k2-Dt.js"),
			"./Pages/Master/roles/Show.jsx": () => import("./assets/Show-p7OZ-fB_.js"),
			"./Pages/Master/settings/Create.jsx": () => import("./assets/Create-BjdBBQD9.js"),
			"./Pages/Master/settings/Edit.jsx": () => import("./assets/Edit-TJaPnm-g.js"),
			"./Pages/Master/settings/Index.jsx": () => import("./assets/Index-CYbeuHdd.js"),
			"./Pages/Master/settings/Show.jsx": () => import("./assets/Show-DjjRLsWy.js"),
			"./Pages/Master/subkategori/Create.jsx": () => import("./assets/Create-D_Vc2M-X.js"),
			"./Pages/Master/subkategori/Edit.jsx": () => import("./assets/Edit-CrRgVpwG.js"),
			"./Pages/Master/subkategori/Index.jsx": () => import("./assets/Index-6fulPEEP.js"),
			"./Pages/Master/subkategori/Show.jsx": () => import("./assets/Show-BYY6z5G4.js"),
			"./Pages/Master/testimoni/Create.jsx": () => import("./assets/Create-DTlXO4zC.js"),
			"./Pages/Master/testimoni/Edit.jsx": () => import("./assets/Edit-5FugA-g8.js"),
			"./Pages/Master/testimoni/Index.jsx": () => import("./assets/Index-D26ZK-pl.js"),
			"./Pages/Master/testimoni/Show.jsx": () => import("./assets/Show-BQq5k2vJ.js"),
			"./Pages/Master/tipe-pembayaran/Create.jsx": () => import("./assets/Create-BdcXZRlt.js"),
			"./Pages/Master/tipe-pembayaran/Edit.jsx": () => import("./assets/Edit-mV9z2bxT.js"),
			"./Pages/Master/tipe-pembayaran/Index.jsx": () => import("./assets/Index-CNzV971s.js"),
			"./Pages/Master/tipe-pembayaran/Show.jsx": () => import("./assets/Show-CpGYQ7IT.js"),
			"./Pages/Master/users/Create.jsx": () => import("./assets/Create-BHUk3mvo.js"),
			"./Pages/Master/users/Edit.jsx": () => import("./assets/Edit-BUkf2GBN.js"),
			"./Pages/Master/users/Index.jsx": () => import("./assets/Index-ykOeNNWv.js"),
			"./Pages/Master/users/Show.jsx": () => import("./assets/Show-D-g5g_SV.js"),
			"./Pages/Master/vendor/Create.jsx": () => import("./assets/Create-DAtDxi-n.js"),
			"./Pages/Master/vendor/Edit.jsx": () => import("./assets/Edit-jW2ujO-R.js"),
			"./Pages/Master/vendor/Index.jsx": () => import("./assets/Index-CtdWmllF.js"),
			"./Pages/Master/vendor/Show.jsx": () => import("./assets/Show-C1qXHftq.js"),
			"./Pages/Master/vendor-alamat/Create.jsx": () => import("./assets/Create-Db40i0bi.js"),
			"./Pages/Master/vendor-alamat/Edit.jsx": () => import("./assets/Edit-DmhFUcJ7.js"),
			"./Pages/Master/vendor-alamat/Index.jsx": () => import("./assets/Index-U8NWuGMI.js"),
			"./Pages/Master/vendor-alamat/Show.jsx": () => import("./assets/Show-BBkPG-qo.js"),
			"./Pages/MdiIcons.jsx": () => import("./assets/MdiIcons-DfW-FdAS.js"),
			"./Pages/Notifications.jsx": () => import("./assets/Notifications-DB_wNKyt.js"),
			"./Pages/Settings.jsx": () => import("./assets/Settings-DDCZyljs.js"),
			"./Pages/SignIn.jsx": () => import("./assets/SignIn-D7owPPNk.js"),
			"./Pages/SignUp.jsx": () => import("./assets/SignUp-CHz7sKlE.js"),
			"./Pages/Tables.jsx": () => import("./assets/Tables-NaYmKawj.js"),
			"./Pages/Transaksi/Invoice/Form.jsx": () => import("./assets/Form-C406t_ys.js"),
			"./Pages/Transaksi/Invoice/Index.jsx": () => import("./assets/Index-DS5Rxq_F.js"),
			"./Pages/Transaksi/Order/Form.jsx": () => import("./assets/Form-CapS4toY.js"),
			"./Pages/Transaksi/Order/Index.jsx": () => import("./assets/Index-vOGmvlaK.js"),
			"./Pages/Transaksi/Packing/Form.jsx": () => import("./assets/Form-5xSKcWnp.js"),
			"./Pages/Transaksi/Packing/Index.jsx": () => import("./assets/Index-B2XYxp1I.js"),
			"./Pages/Typography.jsx": () => import("./assets/Typography-CFfQVwFj.js")
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
