import { Head } from "@inertiajs/react";

export default function Typography() {
    return (
        <>
            <Head title="Typography" />
            
            <div className="row pt-30">
                <div className="col-lg-6">
                    <div className="card-style mb-30">
                        <h5 className="text-medium mb-10">Heading</h5>
                        <p className="text-sm mb-30">
                            All HTML headings, &lt;h1&gt;&lt;/h1&gt; through &lt;h6&gt;&lt;/h6&gt;,
                            are available.
                        </p>
                        <div className="heading-one mb-30">
                            <h1 className="mb-10">Heading 1- Bold</h1>
                            <p className="text-sm">
                                Font- size 24 line-height 29 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div className="heading-two mb-30">
                            <h2 className="mb-10">Heading 2- Semi-bold</h2>
                            <p className="text-sm">
                                Font- size 24 line-height 29 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div className="heading-three mb-30">
                            <h3 className="mb-10">Heading 3- Medium</h3>
                            <p className="text-sm">
                                Font- size 24 line-height 29 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div className="heading-four mb-30">
                            <h4 className="mb-10">Heading 4- Semi-bold</h4>
                            <p className="text-sm">
                                Font- size 20 line-height 24 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div className="heading-five mb-30">
                            <h5 className="mb-10">Heading 5-Bold</h5>
                            <p className="text-sm">
                                Font- size 16 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div className="heading-six">
                            <h6 className="mb-10">Heading 6- Semi-bold</h6>
                            <p className="text-sm">
                                Font- size 16 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                    </div>
                    {/* end card */}
                    <div className="card-style mb-30">
                        <h1 className="mb-30">Title Text</h1>
                        <p>
                            <span className="text-success text-medium"> Paragraph text</span>
                            sit amet, consectetur adipiscing elit. Orci pellentesque amet
                            quam massa in aliquet pulvinar tincidunt. Enim sit elit
                            scelerisque vel aliquam vel quam a tincidunt. Nunc diam at sed
                            fames integer turpis libero. Id nunc quisque sed ut nec
                            phasellus turpis enim elit. Turpis lobortis pellentesque ac
                            massa risus faucibus tempus ut neque. Faucibus orci faucibus
                            malesuada imperdiet vitae.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Orci pellentesque amet quam massa
                            in aliquet pulvinar tincidunt. Enim sit elit scelerisque vel
                            aliquam vel quam a tincidunt. Nunc diam at sed fames integer
                            turpis libero. Id nunc quisque sed ut nec phasellus turpis
                            enim elit. Turpis lobortis pellentesque ac massa risus
                            faucibus tempus ut neque. Faucibus orci faucibus malesuada
                            imperdiet vitae.
                        </p>
                    </div>
                    {/* end card */}
                </div>
                {/* end col */}
                <div className="col-lg-6">
                    <div className="card-style mb-30">
                        <h5 className="mb-30 text-medium">Content Text</h5>
                        <div className="mb-30">
                            <h5 className="text-medium mb-10">Content 1- Medium</h5>
                            <p className="text-sm">
                                Font- size 16 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div className="mb-30">
                            <h5 className="text-sm text-medium mb-10">Content 1- Medium</h5>
                            <p className="text-sm">
                                Font- size 14 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div>
                            <h5 className="text-sm text-regular mb-10">Content 1- Medium</h5>
                            <p className="text-sm">
                                Font- size 14 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                    </div>
                    {/* end card */}
                    <div className="card-style mb-30">
                        <h5 className="mb-30 text-medium">Button Text</h5>
                        <div className="mb-30">
                            <h5 className="text-sm text-medium mb-10">Content 1- Medium</h5>
                            <p className="text-sm">
                                Font- size 14 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                        <div>
                            <h5 className="text-sm text-regular mb-10">Content 1- Medium</h5>
                            <p className="text-sm">
                                Font- size 14 line-height 19 letter-spacing _0.0 px
                            </p>
                        </div>
                    </div>
                    {/* end card */}
                    <div className="card-style mb-30">
                        <h5 className="mb-30 text-medium">Text Color</h5>
                        <p className="text-medium text-dark mb-30">
                            This is Dark text You can archive this adding
                            <mark className="text-dark bg-dark-100"> .text-dark </mark> class
                        </p>
                        <p className="text-medium text-gray mb-30">
                            This is Gray text You can archive this adding
                            <mark className="text-gray bg-dark-100"> .text-gray </mark> class
                        </p>
                        <p className="text-medium text-success mb-30">
                            This is Success text You can archive this adding
                            <mark className="text-success bg-success-100">
                                .text-success
                            </mark>
                            class
                        </p>
                        <p className="text-medium text-warning mb-30">
                            This is Warning text You can archive this adding
                            <mark className="text-warning bg-warning-100">
                                .text-warning
                            </mark>
                            class
                        </p>
                        <p className="text-medium text-danger mb-30">
                            This is Danger text You can archive this adding
                            <mark className="text-danger bg-danger-100"> .text-danger </mark>
                            class
                        </p>
                    </div>
                    {/* end card */}
                </div>
                {/* end col */}
            </div>
        </>
    );
}
