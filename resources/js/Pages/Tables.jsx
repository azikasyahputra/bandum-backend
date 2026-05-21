import { Head } from "@inertiajs/react";

const asset = (path) => `/assets/${path}`;

const leadsData = [
    { name: "Courtney Henry", email: "yourmail@gmail.com", phone: "(303)555 3343523", company: "UIdeck digital agency", image: "images/lead/lead-1.png" },
    { name: "John Doe", email: "yourmail@gmail.com", phone: "(303)555 3343523", company: "Graygrids digital agency", image: "images/lead/lead-2.png" },
    { name: "David Smith", email: "yourmail@gmail.com", phone: "(303)555 3343523", company: "Abc agency", image: "images/lead/lead-3.png" },
];

const stripedData = [
    { account: "AC336 508 2157", balance: "$523" },
    { account: "AC336 756 0987", balance: "$123" },
    { account: "AC336 098 8765", balance: "$223" },
];

const headOptionsData = [
    { first: "Albert", last: "Miles", handle: "@albert_miles" },
    { first: "John", last: "Doe", handle: "@john_doe" },
    { first: "David", last: "Smith", handle: "@davidsmith" },
];

const statusData = [
    { name: "Esther Howard", email: "yourmail@gmail.com", project: "Admin Dashboard Design", status: "Active", statusClass: "active-btn", image: "images/lead/lead-1.png" },
    { name: "D. Jonathon", email: "yourmail@gmail.com", project: "React Dashboard", status: "Active", statusClass: "active-btn", image: "images/lead/lead-2.png" },
    { name: "John Doe", email: "yourmail@gmail.com", project: "Bootstrap Template", status: "Done", statusClass: "success-btn", image: "images/lead/lead-3.png" },
    { name: "Rayhan Jamil", email: "yourmail@gmail.com", project: "Css Grid Template", status: "Pending", statusClass: "info-btn", image: "images/lead/lead-4.png" },
];

export default function Tables() {
    return (
        <>
            <Head title="Tables" />
            
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h6 className="mb-10">Data Table</h6>
                            <p className="text-sm mb-20">
                                For basic styling—light padding and only horizontal dividers—use the class table.
                            </p>
                            <div className="table-wrapper table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="lead-info"><h6>Lead</h6></th>
                                            <th className="lead-email"><h6>Email</h6></th>
                                            <th className="lead-phone"><h6>Phone No</h6></th>
                                            <th className="lead-company"><h6>Company</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leadsData.map((lead, idx) => (
                                            <tr key={idx}>
                                                <td className="min-width">
                                                    <div className="lead">
                                                        <div className="lead-image">
                                                            <img src={asset(lead.image)} alt="" />
                                                        </div>
                                                        <div className="lead-text">
                                                            <p>{lead.name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="min-width">
                                                    <p><a href="#0">{lead.email}</a></p>
                                                </td>
                                                <td className="min-width">
                                                    <p>{lead.phone}</p>
                                                </td>
                                                <td className="min-width">
                                                    <p>{lead.company}</p>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-style mb-30">
                            <h6 className="mb-10">Striped Table</h6>
                            <p className="text-sm mb-20">
                                For Striped Table—light padding and only horizontal dividers.
                            </p>
                            <div className="table-wrapper table-responsive">
                                <table className="table striped-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th><h6>Account No</h6></th>
                                            <th><h6>Balance</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stripedData.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <div className="check-input-primary">
                                                        <input className="form-check-input" type="checkbox" id={`checkbox-${idx+1}`} />
                                                    </div>
                                                </td>
                                                <td><p>{item.account}</p></td>
                                                <td><p>{item.balance}</p></td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card-style mb-30">
                            <h6 className="mb-10">Table head options</h6>
                            <p className="text-sm mb-20">
                                Use one of two modifier classes to make thead appear light or dark gray.
                            </p>
                            <div className="table-wrapper table-responsive">
                                <table className="table striped-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th><h6>First Name</h6></th>
                                            <th><h6>Last Name</h6></th>
                                            <th><h6>Username</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {headOptionsData.map((item, idx) => (
                                            <tr key={idx}>
                                                <td><h6 className="text-sm">#{idx+1}</h6></td>
                                                <td><p>{item.first}</p></td>
                                                <td><p>{item.last}</p></td>
                                                <td><p>{item.handle}</p></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h6 className="mb-10">Data Table Status</h6>
                            <p className="text-sm mb-20">
                                For basic styling—light padding and only horizontal dividers—use the class table.
                            </p>
                            <div className="table-wrapper table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><h6>#</h6></th>
                                            <th><h6>Name</h6></th>
                                            <th><h6>Email</h6></th>
                                            <th><h6>Project</h6></th>
                                            <th><h6>Status</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {statusData.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src={asset(item.image)} alt="" />
                                                    </div>
                                                </td>
                                                <td className="min-width"><p>{item.name}</p></td>
                                                <td className="min-width"><p><a href="#0">{item.email}</a></p></td>
                                                <td className="min-width"><p>{item.project}</p></td>
                                                <td className="min-width">
                                                    <span className={`status-btn ${item.statusClass}`}>{item.status}</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
