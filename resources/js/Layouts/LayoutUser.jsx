import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutUser({ children }) {
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

    return (
        <>
            <div id="preloader" style={{ display: "none" }}>
                <div className="spinner"></div>
            </div>

            <Sidebar sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />

            <button
                type="button"
                className={`overlay border-0 ${sidebarOpen ? "active" : ""}`}
                onClick={closeSidebar}
                aria-label="Close sidebar"
            ></button>

            <main className={`main-wrapper ${sidebarOpen ? "active" : ""}`}>
                <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} scrolled={scrolled} />

                <section className="section">
                    <div className="container-fluid">
                        <div className="title-wrapper pt-30">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="title">
                                        <h2>{pageTitle}</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="breadcrumb-wrapper">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href="/dashboard">Dashboard</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    {pageTitle}
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {props.flash?.success && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {props.flash.success}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )}

                        {children}
                    </div>
                </section>

                <Footer />
            </main>

            <a href="#0" className="scroll-top btn-hover">
                <i className="lni lni-chevron-up"></i>
            </a>
        </>
    );
}
