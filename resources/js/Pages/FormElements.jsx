import { Head } from "@inertiajs/react";

export default function FormElements() {
    return (
        <>
            <Head title="Form Elements" />
            
            <div className="form-elements-wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        {/* input style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Input Fields</h6>
                            <div className="input-style-1">
                                <label>Full Name</label>
                                <input type="text" placeholder="Full Name" />
                            </div>
                            {/* end input */}
                            <div className="input-style-2">
                                <input type="text" placeholder="Full Name" />
                                <span className="icon"> <i className="lni lni-user"></i> </span>
                            </div>
                            {/* end input */}
                            <div className="input-style-3">
                                <input type="text" placeholder="Full Name" />
                                <span className="icon"><i className="lni lni-user"></i></span>
                            </div>
                            {/* end input */}
                        </div>
                        {/* end card */}

                        {/* select style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Selects</h6>
                            <div className="select-style-1">
                                <label>Category</label>
                                <div className="select-position">
                                    <select defaultValue="">
                                        <option value="">Select category</option>
                                        <option value="1">Category one</option>
                                        <option value="2">Category two</option>
                                        <option value="3">Category three</option>
                                    </select>
                                </div>
                            </div>
                            {/* end select */}
                            <div className="select-style-2">
                                <div className="select-position">
                                    <select defaultValue="">
                                        <option value="">Select category</option>
                                        <option value="1">Category one</option>
                                        <option value="2">Category two</option>
                                        <option value="3">Category three</option>
                                    </select>
                                </div>
                            </div>
                            {/* end select */}
                        </div>
                        {/* end card */}

                        {/* time and date style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Time and Date</h6>
                            <div className="input-style-1">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            {/* end input */}
                            <div className="input-style-2">
                                <input type="date" />
                                <span className="icon"><i className="lni lni-chevron-down"></i></span>
                            </div>
                            {/* end input */}
                            <div className="input-style-2">
                                <input type="time" />
                            </div>
                            {/* end input */}
                        </div>
                        {/* end card */}

                        {/* toggle switch style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Toggle switch input</h6>
                            <div className="form-check form-switch toggle-switch mb-30">
                                <input className="form-check-input" type="checkbox" id="toggleSwitch1" />
                                <label className="form-check-label" htmlFor="toggleSwitch1">Default switch checkbox input</label>
                            </div>
                            <div className="form-check form-switch toggle-switch">
                                <input className="form-check-input" type="checkbox" id="toggleSwitch2" defaultChecked />
                                <label className="form-check-label" htmlFor="toggleSwitch2">Default switch checkbox input</label>
                            </div>
                        </div>
                        {/* end card */}
                    </div>

                    <div className="col-lg-6">
                        {/* textarea style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Textarea</h6>
                            <div className="input-style-1">
                                <label>Message</label>
                                <textarea placeholder="Message" rows="5"></textarea>
                            </div>
                            {/* end textarea */}
                            <div className="input-style-3">
                                <textarea placeholder="Message" rows="5"></textarea>
                                <span className="icon"><i className="lni lni-text-format"></i></span>
                            </div>
                            {/* end textarea */}
                        </div>
                        {/* end card */}

                        {/* checkbox style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Checkbox</h6>
                            <div className="form-check checkbox-style mb-20">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-1" />
                                <label className="form-check-label" htmlFor="checkbox-1">Default Checkbox</label>
                            </div>
                            {/* end checkbox */}
                            <div className="form-check checkbox-style mb-20">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-2" disabled />
                                <label className="form-check-label" htmlFor="checkbox-2">Disabled Checkbox</label>
                            </div>
                            {/* end checkbox */}
                            <div className="form-check checkbox-style checkbox-success mb-20">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-3" />
                                <label className="form-check-label" htmlFor="checkbox-3">Success Checkbox</label>
                            </div>
                            {/* end checkbox */}
                            <div className="form-check checkbox-style checkbox-warning mb-20">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-4" />
                                <label className="form-check-label" htmlFor="checkbox-4">Warning Checkbox</label>
                            </div>
                            {/* end checkbox */}
                            <div className="form-check checkbox-style checkbox-danger mb-20">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-5" />
                                <label className="form-check-label" htmlFor="checkbox-5">Danger Checkbox</label>
                            </div>
                            {/* end checkbox */}
                        </div>
                        {/* end card */}

                        {/* radio style start */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Radio</h6>
                            <div className="form-check radio-style mb-20">
                                <input className="form-check-input" type="radio" value="" id="radio-1" name="radio-group-1" />
                                <label className="form-check-label" htmlFor="radio-1">Default Radio</label>
                            </div>
                            {/* end radio */}
                            <div className="form-check radio-style mb-20">
                                <input className="form-check-input" type="radio" value="" id="radio-2" name="radio-group-1" disabled />
                                <label className="form-check-label" htmlFor="radio-2">Disabled Radio</label>
                            </div>
                            {/* end radio */}
                            <div className="form-check radio-style radio-success mb-20">
                                <input className="form-check-input" type="radio" value="" id="radio-3" name="radio-group-2" />
                                <label className="form-check-label" htmlFor="radio-3">Success Radio</label>
                            </div>
                            {/* end radio */}
                            <div className="form-check radio-style radio-warning mb-20">
                                <input className="form-check-input" type="radio" value="" id="radio-4" name="radio-group-2" />
                                <label className="form-check-label" htmlFor="radio-4">Warning Radio</label>
                            </div>
                            {/* end radio */}
                            <div className="form-check radio-style radio-danger mb-20">
                                <input className="form-check-input" type="radio" value="" id="radio-5" name="radio-group-2" />
                                <label className="form-check-label" htmlFor="radio-5">Danger Radio</label>
                            </div>
                            {/* end radio */}
                        </div>
                        {/* end card */}
                    </div>
                </div>
            </div>
        </>
    );
}
