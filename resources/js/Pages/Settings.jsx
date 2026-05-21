import { Head } from "@inertiajs/react";

export default function Settings() {
    return (
        <>
            <Head title="Settings" />
            
            <div className="row">
                <div className="col-lg-6">
                    <div className="card-style settings-card-1 mb-30">
                        <div className="title mb-30 d-flex justify-content-between align-items-center">
                            <h6>My Profile</h6>
                            <button type="button" className="border-0 bg-transparent">
                                <i className="lni lni-pencil-alt"></i>
                            </button>
                        </div>
                        <div className="profile-info">
                            <div className="d-flex align-items-center mb-30">
                                <div className="profile-image">
                                    <img src="/assets/images/profile/profile-1.png" alt="" />
                                    <div className="update-image">
                                        <input id="profile-photo" type="file" />
                                        <label htmlFor="profile-photo">
                                            <i className="lni lni-cloud-upload"></i>
                                        </label>
                                    </div>
                                </div>
                                <div className="profile-meta">
                                    <h5 className="text-bold text-dark mb-10">John Doe</h5>
                                    <p className="text-sm text-gray">Web & UI/UX Design</p>
                                </div>
                            </div>
                            <div className="input-style-1">
                                <label htmlFor="profile-email">Email</label>
                                <input
                                    id="profile-email"
                                    type="email"
                                    placeholder="admin@example.com"
                                    defaultValue="admin@example.com"
                                />
                            </div>
                            <div className="input-style-1">
                                <label htmlFor="profile-password">Password</label>
                                <input id="profile-password" type="password" defaultValue="admin@example.com" />
                            </div>
                            <div className="input-style-1">
                                <label htmlFor="profile-website">Website</label>
                                <input
                                    id="profile-website"
                                    type="text"
                                    placeholder="www.uideck.com"
                                    defaultValue="www.uideck.com"
                                />
                            </div>
                            <div className="input-style-1">
                                <label htmlFor="profile-bio">Bio</label>
                                <textarea
                                    id="profile-bio"
                                    placeholder="Write your bio here"
                                    rows="4"
                                    defaultValue="Crafted for - Business, Startup, SaaS, Apps, Event, Software, Agency, Resume and Portfolio. All Landing Pages comes with clean design and responsive layout. Also packed with all essential sections, elements, and features you need to launch"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card-style settings-card-2 mb-30">
                        <div className="title mb-30">
                            <h6>My Profile</h6>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-12">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-name">Full Name</label>
                                        <input id="settings-name" type="text" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-email">Email</label>
                                        <input id="settings-email" type="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-company">Company</label>
                                        <input id="settings-company" type="text" placeholder="Company" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-address">Address</label>
                                        <input id="settings-address" type="text" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="col-xxl-4">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-city">City</label>
                                        <input id="settings-city" type="text" placeholder="City" />
                                    </div>
                                </div>
                                <div className="col-xxl-4">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-zip">Zip Code</label>
                                        <input id="settings-zip" type="text" placeholder="Zip Code" />
                                    </div>
                                </div>
                                <div className="col-xxl-4">
                                    <div className="select-style-1">
                                        <label htmlFor="settings-country">Country</label>
                                        <div className="select-position">
                                            <select id="settings-country" className="light-bg" defaultValue="">
                                                <option value="">Select category</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                                <option value="canada">Canada</option>
                                                <option value="india">India</option>
                                                <option value="bangladesh">Bangladesh</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-style-1">
                                        <label htmlFor="settings-about">About Me</label>
                                        <textarea id="settings-about" placeholder="Type here" rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="main-btn primary-btn btn-hover">
                                        Update Profile
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
