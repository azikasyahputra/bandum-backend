import "../css/app.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import LayoutGuest from "@/Layouts/LayoutGuest";
import LayoutUser from "@/Layouts/LayoutUser";

const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

createInertiaApp({
    title: (title) =>
        title ? `${title} - Laravel Inertia React` : "Laravel Inertia React",
    resolve: (name) => {
        let page = pages[`./Pages/${name}.jsx`];
        
        // Use LayoutUser as the default layout for all pages unless explicitly defined
        // inside the component (e.g., Page.layout = page => <LayoutGuest>{page}</LayoutGuest>)
        page.default.layout = page.default.layout || ((page) => <LayoutUser>{page}</LayoutUser>);
        
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#fff",
        showSpinner: true,
    },
});
