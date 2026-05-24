import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/Components/Forms/InputTextarea.jsx
function InputTextarea({ field, label, value, onChange, error }) {
	const hasError = !!error;
	return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: `field-${field}`,
				children: label
			}),
			/* @__PURE__ */ jsx("textarea", {
				id: `field-${field}`,
				rows: "3",
				placeholder: label,
				value,
				onChange: (e) => onChange(e.target.value)
			}),
			hasError && /* @__PURE__ */ jsx("span", {
				className: "text-danger",
				style: { fontSize: 11 },
				children: error
			})
		]
	});
}
//#endregion
export { InputTextarea as t };
