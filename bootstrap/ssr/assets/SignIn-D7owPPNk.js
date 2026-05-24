import { t as LayoutGuest } from "./LayoutGuest-BJS4wZ-z.js";
import { Head, useForm } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { route } from "ziggy-js";
//#region resources/js/Pages/SignIn.jsx
function SignIn() {
	const { data, setData, post, processing, errors } = useForm({
		email: "",
		password: "",
		remember: false
	});
	const submit = (e) => {
		e.preventDefault();
		post(route("login"));
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Sign In" }), /* @__PURE__ */ jsxs("div", {
		className: "row g-0 auth-row min-vh-100",
		children: [/* @__PURE__ */ jsx("div", {
			className: "col-lg-6 d-flex",
			children: /* @__PURE__ */ jsx("div", {
				className: "auth-cover-wrapper bg-primary-100 w-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "auth-cover",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "title text-center",
							children: [/* @__PURE__ */ jsx("h1", {
								className: "text-primary mb-10",
								children: "Welcome Back"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-medium",
								children: "Sign in to your Existing account to continue"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cover-image",
							children: /* @__PURE__ */ jsx("img", {
								src: "/assets/images/auth/signin-image.svg",
								alt: ""
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "shape-image",
							children: /* @__PURE__ */ jsx("img", {
								src: "/assets/images/auth/shape.svg",
								alt: ""
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "col-lg-6 d-flex",
			children: /* @__PURE__ */ jsx("div", {
				className: "signin-wrapper w-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "form-wrapper",
					children: /* @__PURE__ */ jsx("form", {
						onSubmit: submit,
						children: /* @__PURE__ */ jsxs("div", {
							className: "row",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsxs("div", {
										className: `input-style-1 ${errors.email ? "has-error" : ""}`,
										children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "signin-email",
												children: "Email"
											}),
											/* @__PURE__ */ jsx("input", {
												id: "signin-email",
												type: "email",
												placeholder: "Email",
												value: data.email,
												onChange: (e) => setData("email", e.target.value)
											}),
											errors.email && /* @__PURE__ */ jsx("span", {
												className: "text-danger",
												children: errors.email
											})
										]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsxs("div", {
										className: `input-style-1 ${errors.password ? "has-error" : ""}`,
										children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "signin-password",
												children: "Password"
											}),
											/* @__PURE__ */ jsx("input", {
												id: "signin-password",
												type: "password",
												placeholder: "Password",
												value: data.password,
												onChange: (e) => setData("password", e.target.value)
											}),
											errors.password && /* @__PURE__ */ jsx("span", {
												className: "text-danger",
												children: errors.password
											})
										]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-xxl-6 col-lg-12 col-md-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: "form-check checkbox-style mb-30",
										children: [/* @__PURE__ */ jsx("input", {
											className: "form-check-input",
											type: "checkbox",
											id: "checkbox-remember",
											checked: data.remember,
											onChange: (e) => setData("remember", e.target.checked)
										}), /* @__PURE__ */ jsx("label", {
											className: "form-check-label",
											htmlFor: "checkbox-remember",
											children: "Remember me next time"
										})]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-xxl-6 col-lg-12 col-md-6",
									children: /* @__PURE__ */ jsx("div", {
										className: "text-start text-md-end text-lg-start text-xxl-end mb-30",
										children: /* @__PURE__ */ jsx("a", {
											href: "#0",
											className: "hover-underline",
											children: "Forgot Password?"
										})
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-12",
									children: /* @__PURE__ */ jsx("div", {
										className: "button-group d-flex justify-content-center flex-wrap",
										children: /* @__PURE__ */ jsx("button", {
											type: "submit",
											disabled: processing,
											className: "main-btn primary-btn btn-hover w-100 text-center",
											children: processing ? "Signing in..." : "Sign In"
										})
									})
								})
							]
						})
					})
				})
			})
		})]
	})] });
}
SignIn.layout = (page) => /* @__PURE__ */ jsx(LayoutGuest, { children: page });
//#endregion
export { SignIn as default };
