import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/Settings.jsx
function Settings() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Settings" }), /* @__PURE__ */ jsxs("div", {
		className: "row",
		children: [/* @__PURE__ */ jsx("div", {
			className: "col-lg-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "card-style settings-card-1 mb-30",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "title mb-30 d-flex justify-content-between align-items-center",
					children: [/* @__PURE__ */ jsx("h6", { children: "My Profile" }), /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "border-0 bg-transparent",
						children: /* @__PURE__ */ jsx("i", { className: "lni lni-pencil-alt" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "profile-info",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "d-flex align-items-center mb-30",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "profile-image",
								children: [/* @__PURE__ */ jsx("img", {
									src: "/assets/images/profile/profile-1.png",
									alt: ""
								}), /* @__PURE__ */ jsxs("div", {
									className: "update-image",
									children: [/* @__PURE__ */ jsx("input", {
										id: "profile-photo",
										type: "file"
									}), /* @__PURE__ */ jsx("label", {
										htmlFor: "profile-photo",
										children: /* @__PURE__ */ jsx("i", { className: "lni lni-cloud-upload" })
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "profile-meta",
								children: [/* @__PURE__ */ jsx("h5", {
									className: "text-bold text-dark mb-10",
									children: "John Doe"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray",
									children: "Web & UI/UX Design"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "input-style-1",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "profile-email",
								children: "Email"
							}), /* @__PURE__ */ jsx("input", {
								id: "profile-email",
								type: "email",
								placeholder: "admin@example.com",
								defaultValue: "admin@example.com"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "input-style-1",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "profile-password",
								children: "Password"
							}), /* @__PURE__ */ jsx("input", {
								id: "profile-password",
								type: "password",
								defaultValue: "admin@example.com"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "input-style-1",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "profile-website",
								children: "Website"
							}), /* @__PURE__ */ jsx("input", {
								id: "profile-website",
								type: "text",
								placeholder: "www.uideck.com",
								defaultValue: "www.uideck.com"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "input-style-1",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "profile-bio",
								children: "Bio"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "profile-bio",
								placeholder: "Write your bio here",
								rows: "4",
								defaultValue: "Crafted for - Business, Startup, SaaS, Apps, Event, Software, Agency, Resume and Portfolio. All Landing Pages comes with clean design and responsive layout. Also packed with all essential sections, elements, and features you need to launch"
							})]
						})
					]
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "col-lg-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "card-style settings-card-2 mb-30",
				children: [/* @__PURE__ */ jsx("div", {
					className: "title mb-30",
					children: /* @__PURE__ */ jsx("h6", { children: "My Profile" })
				}), /* @__PURE__ */ jsx("form", {
					action: "#",
					children: /* @__PURE__ */ jsxs("div", {
						className: "row",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "col-12",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-name",
										children: "Full Name"
									}), /* @__PURE__ */ jsx("input", {
										id: "settings-name",
										type: "text",
										placeholder: "Full Name"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-12",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-email",
										children: "Email"
									}), /* @__PURE__ */ jsx("input", {
										id: "settings-email",
										type: "email",
										placeholder: "Email"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-12",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-company",
										children: "Company"
									}), /* @__PURE__ */ jsx("input", {
										id: "settings-company",
										type: "text",
										placeholder: "Company"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-12",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-address",
										children: "Address"
									}), /* @__PURE__ */ jsx("input", {
										id: "settings-address",
										type: "text",
										placeholder: "Address"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-xxl-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-city",
										children: "City"
									}), /* @__PURE__ */ jsx("input", {
										id: "settings-city",
										type: "text",
										placeholder: "City"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-xxl-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-zip",
										children: "Zip Code"
									}), /* @__PURE__ */ jsx("input", {
										id: "settings-zip",
										type: "text",
										placeholder: "Zip Code"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-xxl-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "select-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-country",
										children: "Country"
									}), /* @__PURE__ */ jsx("div", {
										className: "select-position",
										children: /* @__PURE__ */ jsxs("select", {
											id: "settings-country",
											className: "light-bg",
											defaultValue: "",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "",
													children: "Select category"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "usa",
													children: "USA"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "uk",
													children: "UK"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "canada",
													children: "Canada"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "india",
													children: "India"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "bangladesh",
													children: "Bangladesh"
												})
											]
										})
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-12",
								children: /* @__PURE__ */ jsxs("div", {
									className: "input-style-1",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "settings-about",
										children: "About Me"
									}), /* @__PURE__ */ jsx("textarea", {
										id: "settings-about",
										placeholder: "Type here",
										rows: "6"
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-12",
								children: /* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "main-btn primary-btn btn-hover",
									children: "Update Profile"
								})
							})
						]
					})
				})]
			})
		})]
	})] });
}
//#endregion
export { Settings as default };
