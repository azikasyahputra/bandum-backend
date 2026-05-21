export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 order-last order-md-first">
                        <div className="copyright text-center text-md-start">
                            <p className="text-sm">
                                &copy; {new Date().getFullYear()} BandumOffice
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="terms d-flex justify-content-center justify-content-md-end">
                            <a href="#0">Term & Conditions</a>
                            <a href="#0" className="ml-15">
                                Privacy & Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
