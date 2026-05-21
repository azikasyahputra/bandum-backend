import { Head } from "@inertiajs/react";

const items = [
    ["W", "warning-bg", "Wrapped Bitcoin is now listed on Unity Exchange", "25 min ago", false],
    ["V", "secondary-bg", "Vivamus tortor, odio viverra malesuada sapien dui.", "30 min ago", false],
    ["S", "success-bg", "Srapped Citcoin is now listed on Unity Exchange", "35 min ago", false],
    ["T", "primary-bg", "Trapped Eitcoin is now listed on Unity Exchange", "25 min ago", true],
    ["U", "info-bg", "Urapped Bitcoin is now listed on Unity Exchange", "25 min ago", true],
    ["W", "info-bg", "Wrapped Space is now listed on producthunt", "25 min ago", true],
    ["L", "warning-bg", "Lindy Uikit on trending", "25 min ago", true],
    ["C", "danger-bg", "Classify is on sell", "25 min ago", false],
];

export default function Notifications() {
    return (
        <>
            <Head title="Notifications" />
            
            <div className="notification-wrapper">
                <div className="card-style">
                    {items.map(([letter, colorClass, title, time, read], index) => (
                        <div className={`single-notification ${read ? "readed" : ""}`} key={`${title}-${index}`}>
                            <div className="checkbox">
                                <div className="form-check checkbox-style mb-20">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={`notification-checkbox-${index}`}
                                    />
                                </div>
                            </div>
                            <div className="notification">
                                <div className={`image ${colorClass}`}>
                                    <span>{letter}</span>
                                </div>
                                <a href="#" className="content">
                                    <h6>{title}</h6>
                                    <p className="text-sm text-gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tortor, odio
                                        viverra malesuada sapien dui. Penatibus id amet lectus facilisi tincidunt at
                                        non.
                                    </p>
                                    <span className="text-sm text-medium text-gray">{time}</span>
                                </a>
                            </div>
                            <div className="action">
                                <button type="button" className="delete-btn">
                                    <i className="lni lni-trash-can"></i>
                                </button>
                                <button
                                    type="button"
                                    className="more-btn dropdown-toggle"
                                    id={`moreAction-${index}`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="lni lni-more-alt"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`moreAction-${index}`}>
                                    <li className="dropdown-item">
                                        <a href="#" className="text-gray">
                                            Mark as Read
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="text-gray">
                                            Reply
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
