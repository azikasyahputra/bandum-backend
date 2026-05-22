import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { renderToString } from "react-dom/server";
import LayoutGuest from "@/Layouts/LayoutGuest";
import LayoutUser from "@/Layouts/LayoutUser";

const render = await createInertiaApp({
    title: (title) =>
        title ? `${title} - Laravel Inertia React` : "Laravel Inertia React",
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx");
        const module = await pages[`./Pages/${name}.jsx`]();
        module.default.layout = module.default.layout || ((page) => <LayoutUser>{page}</LayoutUser>);
        return module;
    },
    setup: ({ App, props }) => <App {...props} />,
});

const renderPage = (page) => render(page, renderToString);

if (import.meta.env.PROD) {
    createServer(renderPage);
}

export default renderPage;
