import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

const asset = (path) => `/assets/${path}`;

const sidebarGroups = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: "lni lni-grid-alt",
        items: [{ label: "eCommerce", href: "/dashboard" }],
        open: true,
    },
    // {
    //     id: "pages",
    //     label: "Pages",
    //     icon: "lni lni-files",
    //     items: [
    //         { label: "Settings", href: "/settings" },
    //         { label: "Blank Page", href: "/blank-page" },
    //     ],
    // },
    // {
    //     label: "Invoice",
    //     icon: "lni lni-empty-file",
    //     href: "/invoice",
    // },
    // {
    //     id: "auth",
    //     label: "Auth",
    //     icon: "lni lni-enter",
    //     items: [
    //         { label: "Sign In", href: "/signin" },
    //         { label: "Sign Up", href: "/signup" },
    //     ],
    // },
    // {
    //     divider: true,
    // },
    {
        id: "master",
        label: "Master",
        icon: "lni lni-database",
        items: [
            { label: "Artikel", href: "/master/artikel" },
            { label: "Banner", href: "/master/banner" },
            { label: "Barang", href: "/master/barang" },
            { label: "Brand", href: "/master/brand" },
            { label: "Customer", href: "/master/customer" },
            { label: "Ekspedisi", href: "/master/ekspedisi" },
            { label: "FAQ", href: "/master/faq" },
            { label: "Features", href: "/master/features" },
            { label: "Gudang", href: "/master/gudang" },
            { label: "Jenis Pengiriman", href: "/master/jenis-pengiriman" },
            { label: "Kategori", href: "/master/kategori" },
            {
                label: "Kategori Perusahaan",
                href: "/master/kategori-perusahaan",
            },
            { label: "Kecamatan", href: "/master/kecamatan" },
            { label: "Kelurahan", href: "/master/kelurahan" },
            {
                label: "Klasifikasi Perusahaan",
                href: "/master/klasifikasi-perusahaan",
            },
            { label: "Kota", href: "/master/kota" },
            { label: "Negara", href: "/master/negara" },
            { label: "Pembayaran", href: "/master/pembayaran" },
            { label: "Provinsi", href: "/master/provinsi" },
            { label: "Roles", href: "/master/roles" },
            { label: "Settings", href: "/master/settings" },
            { label: "Subkategori", href: "/master/subkategori" },
            { label: "Testimoni", href: "/master/testimoni" },
            { label: "Tipe Pembayaran", href: "/master/tipe-pembayaran" },
            { label: "Users", href: "/master/users" },
            { label: "Vendor", href: "/master/vendor" },
        ],
    },
    {
        id: "transaksi",
        label: "Transaksi",
        icon: "lni lni-cart",
        items: [
            { label: "Order", href: "/transaksi/order" },
            { label: "Packing", href: "/transaksi/packing" },
            { label: "Invoice", href: "/transaksi/invoice" },
        ],
    },
    // {
    //     id: "ui-elements",
    //     label: "UI Elements",
    //     icon: "lni lni-layout",
    //     items: [
    //         { label: "Alerts", href: "/alerts" },
    //         { label: "Buttons", href: "/buttons" },
    //         { label: "Cards", href: "/cards" },
    //         { label: "Typography", href: "/typography" },
    //     ],
    // },
    // {
    //     id: "icons",
    //     label: "Icons",
    //     icon: "lni lni-display",
    //     items: [
    //         { label: "LineIcons", href: "/icons" },
    //         { label: "MDI Icons", href: "/mdi-icons" },
    //     ],
    // },
    // {
    //     id: "forms",
    //     label: "Forms",
    //     icon: "lni lni-write",
    //     items: [{ label: "Form Elements", href: "/form-elements" }],
    // },
    // {
    //     label: "Tables",
    //     icon: "lni lni-layout",
    //     href: "/tables",
    // },
    // {
    //     divider: true,
    // },
    // {
    //     label: "Notifications",
    //     icon: "lni lni-alarm",
    //     href: "/notifications",
    // },
];

function isActiveLink(href, currentUrl) {
    if (href === "#" || !href) return false;
    if (currentUrl === href) return true;
    if (currentUrl.startsWith(href + "/")) return true;
    return false;
}

function SidebarLink({ href, children, className = "", title, onClick }) {
    if (href === "#") {
        return (
            <a
                href={href}
                className={className}
                data-title={title}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }
    return (
        <Link
            href={href}
            className={className}
            data-title={title}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

function SidebarItem({
    item,
    currentUrl,
    isOpen,
    onToggle,
    mini,
    onToggleSidebar,
}) {
    const [showFlyout, setShowFlyout] = useState(false);

    if (item.divider) {
        return (
            <span className="divider">
                <hr />
            </span>
        );
    }

    const isActive = isActiveLink(item.href, currentUrl);

    if (mini) {
        return (
            <li
                className={`nav-item ${isActive ? "active" : ""} ${item.items ? "nav-item-has-children" : ""}`}
                onMouseEnter={() => setShowFlyout(true)}
                onMouseLeave={() => setShowFlyout(false)}
            >
                {!item.items ? (
                    <SidebarLink
                        href={item.href}
                        title={item.label}
                        onClick={onToggleSidebar}
                    >
                        <span className="icon">
                            <i className={item.icon}></i>
                        </span>
                    </SidebarLink>
                ) : (
                    <button
                        type="button"
                        className={isOpen ? "" : "collapsed"}
                        onClick={() => {
                            onToggleSidebar();
                            onToggle();
                        }}
                    >
                        <span className="icon">
                            <i className={item.icon}></i>
                        </span>
                    </button>
                )}
                {showFlyout && (
                    <div className="sidebar-flyout">
                        <div className="sidebar-flyout-header">
                            {item.label}
                        </div>
                        {item.items ? (
                            <ul className="sidebar-flyout-menu">
                                {item.items.map((child) => (
                                    <li key={child.label}>
                                        <SidebarLink
                                            href={child.href}
                                            className={
                                                isActiveLink(
                                                    child.href,
                                                    currentUrl,
                                                )
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {child.label}
                                        </SidebarLink>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <SidebarLink
                                href={item.href}
                                className="sidebar-flyout-link"
                            >
                                {item.label}
                            </SidebarLink>
                        )}
                    </div>
                )}
            </li>
        );
    }

    if (!item.items) {
        return (
            <li className={`nav-item ${isActive ? "active" : ""}`}>
                <SidebarLink href={item.href} title={item.label}>
                    <span className="icon">
                        <i className={item.icon}></i>
                    </span>
                    <span className="text">{item.label}</span>
                </SidebarLink>
            </li>
        );
    }

    const collapseId = `ddmenu-${item.id}`;

    return (
        <li className="nav-item nav-item-has-children">
            <button
                type="button"
                className={isOpen ? "" : "collapsed"}
                onClick={onToggle}
                aria-controls={collapseId}
                aria-expanded={isOpen}
                aria-label={`Toggle ${item.label} navigation`}
                data-title={item.label}
            >
                <span className="icon">
                    <i className={item.icon}></i>
                </span>
                <span className="text">{item.label}</span>
            </button>
            <ul
                id={collapseId}
                className={`dropdown-nav sidebar-submenu ${isOpen ? "show" : "is-collapsed"}`}
            >
                {item.items.map((child) => (
                    <li key={`${item.id}-${child.label}`}>
                        <SidebarLink
                            href={child.href}
                            className={
                                isActiveLink(child.href, currentUrl)
                                    ? "active"
                                    : ""
                            }
                        >
                            {child.label}
                        </SidebarLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default function Sidebar({ sidebarOpen, onToggleSidebar }) {
    const { url } = usePage();
    const [openMenus, setOpenMenus] = useState(() =>
        sidebarGroups.reduce((menus, item) => {
            if (
                item.items &&
                (item.open ||
                    item.items.some((child) => isActiveLink(child.href, url)))
            ) {
                menus[item.id] = true;
            }
            return menus;
        }, {}),
    );

    const toggleMenu = (id) => {
        setOpenMenus((menus) => ({
            ...menus,
            [id]: !menus[id],
        }));
    };

    return (
        <aside className={`sidebar-nav-wrapper ${sidebarOpen ? "active" : ""}`}>
            <div className="navbar-logo">
                <Link href="/">
                    <span
                        className="logo-full"
                        style={{
                            fontSize: 20,
                            fontWeight: 700,
                            letterSpacing: 1,
                        }}
                    >
                        BandumOffice
                    </span>
                    <span
                        className="logo-mini"
                        style={{
                            display: "none",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        BO
                    </span>
                </Link>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {sidebarGroups.map((item, index) => (
                        <SidebarItem
                            key={item.id || item.label || `divider-${index}`}
                            item={item}
                            currentUrl={url}
                            isOpen={Boolean(openMenus[item.id])}
                            onToggle={() => toggleMenu(item.id)}
                            mini={sidebarOpen}
                            onToggleSidebar={onToggleSidebar}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
