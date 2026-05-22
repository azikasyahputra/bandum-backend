import { useMemo } from "react";
import { router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

const asset = (path) => `/assets/${path}`;

const notifications = [
    {
        name: "John Doe",
        action: "comment on a product.",
        image: "images/lead/lead-6.png",
        body: "Lorem ipsum dolor sit amet, consect etur adipiscing elit Vivamus tortor.",
        time: "10 mins ago",
    },
    {
        name: "Jonathon",
        action: "like on a product.",
        image: "images/lead/lead-1.png",
        body: "Lorem ipsum dolor sit amet, consect etur adipiscing elit Vivamus tortor.",
        time: "10 mins ago",
    },
];

const messages = [
    {
        name: "Jacob Jones",
        body: "Hey! I came across your profile and ...",
        image: "images/lead/lead-5.png",
        time: "10 mins ago",
    },
    {
        name: "John Doe",
        body: "Would you mind please checking out",
        image: "images/lead/lead-3.png",
        time: "12 mins ago",
    },
    {
        name: "Anee Lee",
        body: "Hey! are you available for freelance?",
        image: "images/lead/lead-2.png",
        time: "1h ago",
    },
];

export default function Header({ sidebarOpen, toggleSidebar, scrolled }) {
    const { props } = usePage();
    const { auth } = props;

    const user = useMemo(
        () => ({
            name: auth?.user?.name || "Adam Joe",
            email: auth?.user?.email || "Email@gmail.com",
            role: auth?.user?.role || "Admin",
        }),
        [auth?.user],
    );

    return (
        <header
            className="header"
            style={{
                boxShadow: scrolled ? "0px 0px 30px 0px rgba(200, 208, 216, 0.30)" : "none",
            }}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-6">
                        <div className="header-left d-flex align-items-center">
                            <div className="menu-toggle-btn mr-15">
                                <button
                                    type="button"
                                    id="menu-toggle"
                                    className="main-btn primary-btn btn-hover"
                                    onClick={toggleSidebar}
                                >
                                    <i
                                        className={`lni ${
                                            sidebarOpen ? "lni-menu" : "lni-chevron-left"
                                        } me-2`}
                                    ></i>
                                    Menu
                                </button>
                            </div>
                            <div className="header-search d-none d-md-flex">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <i className="lni lni-search-alt"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-7 col-6">
                        <div className="header-right">
                            <div className="notification-box ml-15 d-none d-md-flex">
                                <button
                                    className="dropdown-toggle"
                                    type="button"
                                    id="notification"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="lni lni-alarm fs-5"></i>
                                    <span></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notification">
                                    {notifications.map((notification) => (
                                        <li key={`${notification.name}-${notification.action}`}>
                                            <a href="#">
                                                <div className="image">
                                                    <img src={asset(notification.image)} alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6>
                                                        {notification.name}
                                                        <span className="text-regular">
                                                            {" "}
                                                            {notification.action}
                                                        </span>
                                                    </h6>
                                                    <p>{notification.body}</p>
                                                    <span>{notification.time}</span>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="header-message-box ml-15 d-none d-md-flex">
                                <button
                                    className="dropdown-toggle"
                                    type="button"
                                    id="message"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="lni lni-envelope fs-5"></i>
                                    <span></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="message">
                                    {messages.map((message) => (
                                        <li key={`${message.name}-${message.time}`}>
                                            <a href="#">
                                                <div className="image">
                                                    <img src={asset(message.image)} alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6>{message.name}</h6>
                                                    <p>{message.body}</p>
                                                    <span>{message.time}</span>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="profile-box ml-15">
                                <button
                                    className="dropdown-toggle bg-transparent border-0"
                                    type="button"
                                    id="profile"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className="profile-info">
                                        <div className="info">
                                            <div className="image">
                                                <img src={asset("images/profile/profile-image.png")} alt="" />
                                            </div>
                                            <div>
                                                <h6 className="fw-500">{user.name}</h6>
                                                <p>{user.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile">
                                    <li>
                                        <div className="author-info d-flex align-items-center p-1">
                                            <div className="image">
                                                <img
                                                    src={asset("images/profile/profile-image.png")}
                                                    alt="Profile"
                                                />
                                            </div>
                                            <div className="content">
                                                <h4 className="text-sm">{user.name}</h4>
                                                <a className="text-muted text-xs" href={`mailto:${user.email}`}>
                                                    {user.email}
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-user"></i> View Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-alarm"></i> Notifications
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-inbox"></i> Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-cog"></i> Settings
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <button
                                            type="button"
                                            className="dropdown-item border-0 bg-transparent"
                                            onClick={() => router.post(route("logout"))}
                                        >
                                            <i className="lni lni-exit"></i> Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
