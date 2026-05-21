import { Link } from "@inertiajs/react";

export default function LayoutGuest({ children }) {
    return (
        <div className="guest-layout">
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
}
