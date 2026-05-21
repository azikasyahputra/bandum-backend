import { Head, Link, useForm } from "@inertiajs/react";

export default function SignIn() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/login"); // Assume /login is the endpoint
    };

    return (
        <>
            <Head title="Sign In" />
            
            <div className="row g-0 auth-row">
                <div className="col-lg-6">
                    <div className="auth-cover-wrapper bg-primary-100">
                        <div className="auth-cover">
                            <div className="title text-center">
                                <h1 className="text-primary mb-10">Welcome Back</h1>
                                <p className="text-medium">Sign in to your Existing account to continue</p>
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
                    <div className="signin-wrapper">
                        <div className="form-wrapper">
                            <h6 className="mb-15">Sign In Form</h6>
                            <p className="text-sm mb-25">
                                Start creating the best possible user experience for your customers.
                            </p>
                            <form onSubmit={submit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className={`input-style-1 ${errors.email ? 'has-error' : ''}`}>
                                            <label htmlFor="signin-email">Email</label>
                                            <input 
                                                id="signin-email" 
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
                                            <label htmlFor="signin-password">Password</label>
                                            <input 
                                                id="signin-password" 
                                                type="password" 
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={(e) => setData("password", e.target.value)}
                                            />
                                            {errors.password && <span className="text-danger">{errors.password}</span>}
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-12 col-md-6">
                                        <div className="form-check checkbox-style mb-30">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-remember"
                                                checked={data.remember}
                                                onChange={(e) => setData("remember", e.target.checked)}
                                            />
                                            <label className="form-check-label" htmlFor="checkbox-remember">
                                                Remember me next time
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-12 col-md-6">
                                        <div className="text-start text-md-end text-lg-start text-xxl-end mb-30">
                                            <a href="#0" className="hover-underline">
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="button-group d-flex justify-content-center flex-wrap">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="main-btn primary-btn btn-hover w-100 text-center"
                                            >
                                                {processing ? 'Signing in...' : 'Sign In'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="singin-option pt-40">
                                <p className="text-sm text-medium text-center text-gray">Easy Sign In With</p>
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
                                    Don't have any account yet? <Link href="/signup">Create an account</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
