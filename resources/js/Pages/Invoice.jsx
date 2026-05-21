import { Head } from "@inertiajs/react";

export default function Invoice() {
    return (
        <>
            <Head title="Invoice" />
            
            <div className="invoice-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="invoice-card card-style mb-30">
                            <div className="invoice-header">
                                <div className="invoice-for">
                                    <h2 className="mb-10">Invoice</h2>
                                    <p className="text-sm">Admin Dashboard Design & Development</p>
                                </div>
                                <div className="invoice-logo">
                                    <img src="/assets/images/invoice/uideck-logo.svg" alt="" />
                                </div>
                                <div className="invoice-date">
                                    <p>
                                        <span>Date Issued:</span> 20/02/2024
                                    </p>
                                    <p>
                                        <span>Date Due:</span> 20/02/2028
                                    </p>
                                    <p>
                                        <span>Order ID:</span> #5467
                                    </p>
                                </div>
                            </div>

                            <div className="invoice-address">
                                <div className="address-item">
                                    <h5 className="text-bold">From</h5>
                                    <h1>John Doe</h1>
                                    <p className="text-sm">3891 Ranchview Dr. Richardson, California 62639</p>
                                    <p className="text-sm">
                                        <span className="text-medium">Email:</span> admin@example.com
                                    </p>
                                </div>
                                <div className="address-item">
                                    <h5 className="text-bold">To</h5>
                                    <h1>Santa Gosh</h1>
                                    <p className="text-sm">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                                    <p className="text-sm">
                                        <span className="text-medium">Email:</span> admin@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="invoice-table table">
                                    <thead>
                                        <tr>
                                            <th className="service">
                                                <h6 className="text-sm text-medium">Service</h6>
                                            </th>
                                            <th className="desc">
                                                <h6 className="text-sm text-medium">Descriptions</h6>
                                            </th>
                                            <th className="qty">
                                                <h6 className="text-sm text-medium">Qty</h6>
                                            </th>
                                            <th className="amount">
                                                <h6 className="text-sm text-medium">Amounts</h6>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["Admin Dashboard", "Design and Development Service", "3", "$700"],
                                            ["Landing Page", "Landing Page Ui kit design and Development", "1", "$1000"],
                                            ["Web design", "Web Design and Development and Seo", "2", "$4000"],
                                        ].map(([service, description, qty, amount]) => (
                                            <tr key={service}>
                                                <td>
                                                    <p className="text-sm">{service}</p>
                                                </td>
                                                <td>
                                                    <p className="text-sm">{description}</p>
                                                </td>
                                                <td>
                                                    <p className="text-sm">{qty}</p>
                                                </td>
                                                <td>
                                                    <p className="text-sm">{amount}</p>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <h6 className="text-sm text-medium">Subtotal</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-sm text-bold">$5700</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <h6 className="text-sm text-medium">Discount</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-sm text-bold">45%</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <h6 className="text-sm text-medium">Shipping Charge</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-sm text-bold">Free</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <h4>Total</h4>
                                            </td>
                                            <td>
                                                <h4>$3135</h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="note-wrapper warning-alert py-4 px-sm-3 px-lg-5">
                                <div className="alert">
                                    <h5 className="text-bold mb-15">Notes:</h5>
                                    <p className="text-sm text-gray">
                                        All accounts are to be paid within 7 days from receipt of invoice. To be paid
                                        by cheque or credit card or direct payment online. If account is not paid within
                                        7 days the credits details supplied as confirmation of work undertaken will be
                                        charged the agreed quoted fee noted above.
                                    </p>
                                </div>
                            </div>

                            <div className="invoice-action">
                                <ul className="d-flex flex-wrap align-items-center justify-content-center">
                                    <li className="m-2">
                                        <a href="#" className="main-btn primary-btn-outline btn-hover">
                                            Download Invoice
                                        </a>
                                    </li>
                                    <li className="m-2">
                                        <a href="#" className="main-btn primary-btn btn-hover">
                                            Send Invoice
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
