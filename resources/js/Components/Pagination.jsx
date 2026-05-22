import { Link } from "@inertiajs/react";

function filterPaginationLinks(links) {
    if (!links || links.length < 3) return links;
    const prev = links[0];
    const next = links[links.length - 1];
    const pages = links.slice(1, -1);
    const firstPage = pages[0];
    const lastPage = pages[pages.length - 1];
    const first = { url: firstPage.url, label: "\u00AB First", active: false };
    const last = { url: lastPage.url, label: "Last \u00BB", active: false };
    const activeIdx = pages.findIndex(l => l.active);
    let start = Math.max(0, activeIdx - 2);
    let end = Math.min(pages.length, start + 5);
    if (end - start < 5) start = Math.max(0, end - 5);
    return [first, prev, ...pages.slice(start, end), next, last];
}

export default function Pagination({ items }) {
    if (!items?.data?.length || !items?.links) return null;

    const links = filterPaginationLinks(items.links);

    return (
        <div className="d-flex justify-content-center mt-10 pagination-wrapper">
            <nav>
                <ul className="pagination mb-0 pagination-list">
                    {links.map((link, i) => (
                        <li key={i} style={{ margin: 0 }}>
                            {link.url ? (
                                <Link
                                    href={link.url}
                                    className={`pagination-link${link.active ? " pagination-link--active" : ""}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ) : (
                                <span
                                    className="pagination-link pagination-link--disabled"
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
