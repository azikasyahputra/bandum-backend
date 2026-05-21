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
    {
        id: "pages",
        label: "Pages",
        icon: "lni lni-files",
        items: [
            { label: "Settings", href: "/settings" },
            { label: "Blank Page", href: "/blank-page" },
        ],
    },
    {
        label: "Invoice",
        icon: "lni lni-empty-file",
        href: "/invoice",
    },
    {
        id: "auth",
        label: "Auth",
        icon: "lni lni-enter",
        items: [
            { label: "Sign In", href: "/signin" },
            { label: "Sign Up", href: "/signup" },
        ],
    },
    {
        divider: true,
    },
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
    {
        id: "ui-elements",
        label: "UI Elements",
        icon: "lni lni-layout",
        items: [
            { label: "Alerts", href: "/alerts" },
            { label: "Buttons", href: "/buttons" },
            { label: "Cards", href: "/cards" },
            { label: "Typography", href: "/typography" },
        ],
    },
    {
        id: "icons",
        label: "Icons",
        icon: "lni lni-display",
        items: [
            { label: "LineIcons", href: "/icons" },
            { label: "MDI Icons", href: "/mdi-icons" },
        ],
    },
    {
        id: "forms",
        label: "Forms",
        icon: "lni lni-write",
        items: [{ label: "Form Elements", href: "/form-elements" }],
    },
    {
        label: "Tables",
        icon: "lni lni-layout",
        href: "/tables",
    },
    {
        divider: true,
    },
    {
        label: "Notifications",
        icon: "lni lni-alarm",
        href: "/notifications",
    },
];

function SidebarLink({ href, children, className = "" }) {
    if (href === "#") {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

function SidebarItem({ item, currentUrl, isOpen, onToggle }) {
    if (item.divider) {
        return (
            <span className="divider">
                <hr />
            </span>
        );
    }

    const isActive = item.href && item.href !== "#" && currentUrl === item.href;

    if (!item.items) {
        return (
            <li className={`nav-item ${isActive ? "active" : ""}`}>
                <SidebarLink href={item.href}>
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
                                child.href !== "#" && currentUrl === child.href
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

export default function Sidebar({ sidebarOpen }) {
    const { url } = usePage();
    const [openMenus, setOpenMenus] = useState(() =>
        sidebarGroups.reduce((menus, item) => {
            if (
                item.items &&
                (item.open || item.items.some((child) => child.href === url))
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
                    <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 1 }}>BandumOffice</span>
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
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
