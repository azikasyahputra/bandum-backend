import { Head, Link, useForm } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/SignUp.jsx
function SignUp() {
	const { data, setData, post, processing, errors } = useForm({
		name: "",
		email: "",
		password: "",
		not_robot: false
	});
	const submit = (e) => {
		e.preventDefault();
		post("/register");
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Sign Up" }), /* @__PURE__ */ jsxs("div", {
		className: "row g-0 auth-row",
		children: [/* @__PURE__ */ jsx("div", {
			className: "col-lg-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "auth-cover-wrapper bg-primary-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "auth-cover",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "title text-center",
							children: [/* @__PURE__ */ jsx("h1", {
								className: "text-primary mb-10",
								children: "Get Started"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-medium",
								children: [
									"Start creating the best possible user experience",
									/* @__PURE__ */ jsx("br", { className: "d-sm-block" }),
									"for your customers."
								]
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
			className: "col-lg-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "signup-wrapper",
				children: /* @__PURE__ */ jsxs("div", {
					className: "form-wrapper form-sm",
					children: [
						/* @__PURE__ */ jsx("h6", {
							className: "mb-15",
							children: "Sign Up Form"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm mb-25",
							children: "Start creating the best possible user experience for your customers."
						}),
						/* @__PURE__ */ jsx("form", {
							onSubmit: submit,
							children: /* @__PURE__ */ jsxs("div", {
								className: "row",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "col-12",
										children: /* @__PURE__ */ jsxs("div", {
											className: `input-style-1 ${errors.name ? "has-error" : ""}`,
											children: [
												/* @__PURE__ */ jsx("label", {
													htmlFor: "signup-name",
													children: "Name"
												}),
												/* @__PURE__ */ jsx("input", {
													id: "signup-name",
													type: "text",
													placeholder: "Name",
													value: data.name,
													onChange: (e) => setData("name", e.target.value)
												}),
												errors.name && /* @__PURE__ */ jsx("span", {
													className: "text-danger",
													children: errors.name
												})
											]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12",
										children: /* @__PURE__ */ jsxs("div", {
											className: `input-style-1 ${errors.email ? "has-error" : ""}`,
											children: [
												/* @__PURE__ */ jsx("label", {
													htmlFor: "signup-email",
													children: "Email"
												}),
												/* @__PURE__ */ jsx("input", {
													id: "signup-email",
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
													htmlFor: "signup-password",
													children: "Password"
												}),
												/* @__PURE__ */ jsx("input", {
													id: "signup-password",
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
										className: "col-12",
										children: /* @__PURE__ */ jsxs("div", {
											className: `form-check checkbox-style mb-30 ${errors.not_robot ? "has-error" : ""}`,
											children: [
												/* @__PURE__ */ jsx("input", {
													className: "form-check-input",
													type: "checkbox",
													id: "checkbox-not-robot",
													checked: data.not_robot,
													onChange: (e) => setData("not_robot", e.target.checked)
												}),
												/* @__PURE__ */ jsx("label", {
													className: "form-check-label",
													htmlFor: "checkbox-not-robot",
													children: "I'm not robot"
												}),
												errors.not_robot && /* @__PURE__ */ jsx("span", {
													className: "text-danger d-block mt-1",
													children: errors.not_robot
												})
											]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "col-12",
										children: /* @__PURE__ */ jsx("div", {
											className: "button-group d-flex justify-content-center flex-wrap",
											children: /* @__PURE__ */ jsx("button", {
												type: "submit",
												disabled: processing,
												className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm w-100 text-center",
												children: processing ? "Signing Up..." : "Sign Up"
											})
										})
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "singup-option pt-40",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-medium text-center text-gray",
									children: "Easy Sign Up With"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "button-group pt-40 pb-40 d-flex justify-content-center flex-wrap",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "main-btn primary-btn-outline rounded-full btn-hover btn-sm m-2",
										children: [/* @__PURE__ */ jsx("i", { className: "lni lni-facebook-fill mr-10" }), "Facebook"]
									}), /* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "main-btn danger-btn-outline rounded-full btn-hover btn-sm m-2",
										children: [/* @__PURE__ */ jsx("i", { className: "lni lni-google mr-10" }), "Google"]
									})]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-sm text-medium text-dark text-center",
									children: ["Already have an account? ", /* @__PURE__ */ jsx(Link, {
										href: "/signin",
										children: "Sign In"
									})]
								})
							]
						})
					]
				})
			})
		})]
	})] });
}
//#endregion
export { SignUp as default };
