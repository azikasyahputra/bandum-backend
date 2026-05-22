import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Pages/FormElements.jsx
function FormElements() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Form Elements" }), /* @__PURE__ */ jsx("div", {
		className: "form-elements-wrapper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "row",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "col-lg-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Input Fields"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-1",
								children: [/* @__PURE__ */ jsx("label", { children: "Full Name" }), /* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Full Name"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-2",
								children: [/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Full Name"
								}), /* @__PURE__ */ jsxs("span", {
									className: "icon",
									children: [
										" ",
										/* @__PURE__ */ jsx("i", { className: "lni lni-user" }),
										" "
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-3",
								children: [/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Full Name"
								}), /* @__PURE__ */ jsx("span", {
									className: "icon",
									children: /* @__PURE__ */ jsx("i", { className: "lni lni-user" })
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Selects"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "select-style-1",
								children: [/* @__PURE__ */ jsx("label", { children: "Category" }), /* @__PURE__ */ jsx("div", {
									className: "select-position",
									children: /* @__PURE__ */ jsxs("select", {
										defaultValue: "",
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Select category"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "1",
												children: "Category one"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "2",
												children: "Category two"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "3",
												children: "Category three"
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "select-style-2",
								children: /* @__PURE__ */ jsx("div", {
									className: "select-position",
									children: /* @__PURE__ */ jsxs("select", {
										defaultValue: "",
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Select category"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "1",
												children: "Category one"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "2",
												children: "Category two"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "3",
												children: "Category three"
											})
										]
									})
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Time and Date"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-1",
								children: [/* @__PURE__ */ jsx("label", { children: "Date" }), /* @__PURE__ */ jsx("input", { type: "date" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-2",
								children: [/* @__PURE__ */ jsx("input", { type: "date" }), /* @__PURE__ */ jsx("span", {
									className: "icon",
									children: /* @__PURE__ */ jsx("i", { className: "lni lni-chevron-down" })
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "input-style-2",
								children: /* @__PURE__ */ jsx("input", { type: "time" })
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Toggle switch input"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check form-switch toggle-switch mb-30",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									id: "toggleSwitch1"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "toggleSwitch1",
									children: "Default switch checkbox input"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check form-switch toggle-switch",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									id: "toggleSwitch2",
									defaultChecked: true
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "toggleSwitch2",
									children: "Default switch checkbox input"
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "col-lg-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Textarea"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-1",
								children: [/* @__PURE__ */ jsx("label", { children: "Message" }), /* @__PURE__ */ jsx("textarea", {
									placeholder: "Message",
									rows: "5"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "input-style-3",
								children: [/* @__PURE__ */ jsx("textarea", {
									placeholder: "Message",
									rows: "5"
								}), /* @__PURE__ */ jsx("span", {
									className: "icon",
									children: /* @__PURE__ */ jsx("i", { className: "lni lni-text-format" })
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Checkbox"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check checkbox-style mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									value: "",
									id: "checkbox-1"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "checkbox-1",
									children: "Default Checkbox"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check checkbox-style mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									value: "",
									id: "checkbox-2",
									disabled: true
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "checkbox-2",
									children: "Disabled Checkbox"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check checkbox-style checkbox-success mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									value: "",
									id: "checkbox-3"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "checkbox-3",
									children: "Success Checkbox"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check checkbox-style checkbox-warning mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									value: "",
									id: "checkbox-4"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "checkbox-4",
									children: "Warning Checkbox"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check checkbox-style checkbox-danger mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "checkbox",
									value: "",
									id: "checkbox-5"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "checkbox-5",
									children: "Danger Checkbox"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "card-style mb-30",
						children: [
							/* @__PURE__ */ jsx("h6", {
								className: "mb-25",
								children: "Radio"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check radio-style mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "radio",
									value: "",
									id: "radio-1",
									name: "radio-group-1"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "radio-1",
									children: "Default Radio"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check radio-style mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "radio",
									value: "",
									id: "radio-2",
									name: "radio-group-1",
									disabled: true
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "radio-2",
									children: "Disabled Radio"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check radio-style radio-success mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "radio",
									value: "",
									id: "radio-3",
									name: "radio-group-2"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "radio-3",
									children: "Success Radio"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check radio-style radio-warning mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "radio",
									value: "",
									id: "radio-4",
									name: "radio-group-2"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "radio-4",
									children: "Warning Radio"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "form-check radio-style radio-danger mb-20",
								children: [/* @__PURE__ */ jsx("input", {
									className: "form-check-input",
									type: "radio",
									value: "",
									id: "radio-5",
									name: "radio-group-2"
								}), /* @__PURE__ */ jsx("label", {
									className: "form-check-label",
									htmlFor: "radio-5",
									children: "Danger Radio"
								})]
							})
						]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { FormElements as default };
