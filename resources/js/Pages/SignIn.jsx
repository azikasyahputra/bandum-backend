import { Head, Link, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import LayoutGuest from "@/Layouts/LayoutGuest";

export default function SignIn() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Sign In" />

            <div className="row g-0 auth-row min-vh-100">
                <div className="col-lg-6 d-flex">
                    <div className="auth-cover-wrapper bg-primary-100 w-100">
                        <div className="auth-cover">
                            <div className="title text-center">
                                <h1 className="text-primary mb-10">
                                    Welcome Back
                                </h1>
                                <p className="text-medium">
                                    Sign in to your Existing account to continue
                                </p>
                            </div>
                            <div className="cover-image">
                                <img
                                    src="/assets/images/auth/signin-image.svg"
                                    alt=""
                                />
                            </div>
                            <div className="shape-image">
                                <img
                                    src="/assets/images/auth/shape.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 d-flex">
                    <div className="signin-wrapper w-100">
                        <div className="form-wrapper">
                            <form onSubmit={submit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div
                                            className={`input-style-1 ${errors.email ? "has-error" : ""}`}
                                        >
                                            <label htmlFor="signin-email">
                                                Email
                                            </label>
                                            <input
                                                id="signin-email"
                                                type="email"
                                                placeholder="Email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {errors.email && (
                                                <span className="text-danger">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div
                                            className={`input-style-1 ${errors.password ? "has-error" : ""}`}
                                        >
                                            <label htmlFor="signin-password">
                                                Password
                                            </label>
                                            <input
                                                id="signin-password"
                                                type="password"
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {errors.password && (
                                                <span className="text-danger">
                                                    {errors.password}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-12 col-md-6">
                                        <div className="form-check checkbox-style mb-30">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData(
                                                        "remember",
                                                        e.target.checked,
                                                    )
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkbox-remember"
                                            >
                                                Remember me next time
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-12 col-md-6">
                                        <div className="text-start text-md-end text-lg-start text-xxl-end mb-30">
                                            <a
                                                href="#0"
                                                className="hover-underline"
                                            >
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
                                                {processing
                                                    ? "Signing in..."
                                                    : "Sign In"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

SignIn.layout = (page) => <LayoutGuest>{page}</LayoutGuest>;
