import { Head, Link, useForm } from "@inertiajs/react";

export default function SignUp() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        not_robot: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/register"); // Assume /register is the endpoint
    };

    return (
        <>
            <Head title="Sign Up" />
            
            <div className="row g-0 auth-row">
                <div className="col-lg-6">
                    <div className="auth-cover-wrapper bg-primary-100">
                        <div className="auth-cover">
                            <div className="title text-center">
                                <h1 className="text-primary mb-10">Get Started</h1>
                                <p className="text-medium">
                                    Start creating the best possible user experience
                                    <br className="d-sm-block" />
                                    for your customers.
                                </p>
                            </div>
                            <div className="cover-image">
                                <img src="/assets/images/auth/signin-image.svg" alt="" />
                            </div>
                            <div className="shape-image">
                                <img src="/assets/images/auth/shape.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="signup-wrapper">
                        <div className="form-wrapper">
                            <h6 className="mb-15">Sign Up Form</h6>
                            <p className="text-sm mb-25">
                                Start creating the best possible user experience for your customers.
                            </p>
                            <form onSubmit={submit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className={`input-style-1 ${errors.name ? 'has-error' : ''}`}>
                                            <label htmlFor="signup-name">Name</label>
                                            <input 
                                                id="signup-name" 
                                                type="text" 
                                                placeholder="Name"
                                                value={data.name}
                                                onChange={(e) => setData("name", e.target.value)}
                                            />
                                            {errors.name && <span className="text-danger">{errors.name}</span>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className={`input-style-1 ${errors.email ? 'has-error' : ''}`}>
                                            <label htmlFor="signup-email">Email</label>
                                            <input 
                                                id="signup-email" 
                                                type="email" 
                                                placeholder="Email"
                                                value={data.email}
                                                onChange={(e) => setData("email", e.target.value)}
                                            />
                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className={`input-style-1 ${errors.password ? 'has-error' : ''}`}>
                                            <label htmlFor="signup-password">Password</label>
                                            <input 
                                                id="signup-password" 
                                                type="password" 
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={(e) => setData("password", e.target.value)}
                                            />
                                            {errors.password && <span className="text-danger">{errors.password}</span>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className={`form-check checkbox-style mb-30 ${errors.not_robot ? 'has-error' : ''}`}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-not-robot"
                                                checked={data.not_robot}
                                                onChange={(e) => setData("not_robot", e.target.checked)}
                                            />
                                            <label className="form-check-label" htmlFor="checkbox-not-robot">
                                                I'm not robot
                                            </label>
                                            {errors.not_robot && <span className="text-danger d-block mt-1">{errors.not_robot}</span>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="button-group d-flex justify-content-center flex-wrap">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="main-btn primary-btn btn-hover w-100 text-center"
                                            >
                                                {processing ? 'Signing Up...' : 'Sign Up'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="singup-option pt-40">
                                <p className="text-sm text-medium text-center text-gray">Easy Sign Up With</p>
                                <div className="button-group pt-40 pb-40 d-flex justify-content-center flex-wrap">
                                    <button type="button" className="main-btn primary-btn-outline m-2">
                                        <i className="lni lni-facebook-fill mr-10"></i>
                                        Facebook
                                    </button>
                                    <button type="button" className="main-btn danger-btn-outline m-2">
                                        <i className="lni lni-google mr-10"></i>
                                        Google
                                    </button>
                                </div>
                                <p className="text-sm text-medium text-dark text-center">
                                    Already have an account? <Link href="/signin">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
