import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
//#region resources/js/Components/Forms/InputText.jsx
function InputText({ field, label, value, onChange, error }) {
	const hasError = !!error;
	return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: `field-${field}`,
				children: label
			}),
			/* @__PURE__ */ jsx("input", {
				id: `field-${field}`,
				type: "text",
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
//#region resources/js/Components/Forms/InputFile.jsx
function InputFile({ field, label, value, onChange, error }) {
	const hasError = !!error;
	const inputRef = useRef(null);
	const [selectedName, setSelectedName] = useState(null);
	const [broken, setBroken] = useState(false);
	const existingUrl = value && typeof value === "string" && !selectedName && !broken ? value.startsWith("http") ? value : `/storage/${value}` : null;
	const isImage = existingUrl && /\.(jpe?g|png)$/i.test(value);
	return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", { children: label }),
			/* @__PURE__ */ jsx("div", {
				onClick: () => inputRef.current?.click(),
				style: { cursor: "pointer" },
				children: existingUrl && isImage ? /* @__PURE__ */ jsx("div", {
					className: "mb-10",
					children: /* @__PURE__ */ jsx("img", {
						src: existingUrl,
						alt: label,
						style: {
							width: 80,
							height: 80,
							objectFit: "cover",
							borderRadius: 6,
							border: "1px solid #e2e8f0"
						},
						onError: () => setBroken(true)
					})
				}) : existingUrl ? /* @__PURE__ */ jsx("div", {
					className: "mb-10",
					children: /* @__PURE__ */ jsx("span", {
						style: {
							fontSize: 13,
							color: "#3b82f6"
						},
						children: value.split("/").pop()
					})
				}) : selectedName ? /* @__PURE__ */ jsx("div", {
					className: "mb-10",
					children: /* @__PURE__ */ jsx("span", {
						style: {
							fontSize: 13,
							color: "#3b82f6"
						},
						children: selectedName
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "mb-10",
					children: /* @__PURE__ */ jsx("span", {
						style: {
							fontSize: 13,
							color: "#9ca3af"
						},
						children: "Klik untuk pilih file"
					})
				})
			}),
			/* @__PURE__ */ jsx("input", {
				ref: inputRef,
				type: "file",
				accept: ".jpeg,.jpg,.png,.pdf",
				style: { display: "none" },
				onChange: (e) => {
					if (e.target.files[0]) {
						onChange(e.target.files[0]);
						setSelectedName(e.target.files[0].name);
					}
				}
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
//#region resources/js/Components/Forms/InputEnum.jsx
function InputEnum({ field, label, value, onChange, error, options }) {
	const hasError = !!error;
	return /* @__PURE__ */ jsxs("div", {
		className: `select-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: `field-${field}`,
				children: label
			}),
			/* @__PURE__ */ jsx("div", {
				className: "select-position",
				children: /* @__PURE__ */ jsxs("select", {
					id: `field-${field}`,
					value,
					onChange: (e) => onChange(e.target.value),
					children: [/* @__PURE__ */ jsxs("option", {
						value: "",
						children: ["Pilih ", label]
					}), options.map((opt) => /* @__PURE__ */ jsx("option", {
						value: opt.value,
						children: opt.label
					}, opt.value))]
				})
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
//#region resources/js/Components/Forms/InputSelect.jsx
function InputSelect({ field, label, value, onChange, error, options }) {
	const hasError = !!error;
	return /* @__PURE__ */ jsxs("div", {
		className: `select-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: `field-${field}`,
				children: label
			}),
			/* @__PURE__ */ jsx("div", {
				className: "select-position",
				children: /* @__PURE__ */ jsxs("select", {
					id: `field-${field}`,
					value,
					onChange: (e) => onChange(e.target.value),
					children: [/* @__PURE__ */ jsxs("option", {
						value: "",
						children: ["Pilih ", label]
					}), options.map((opt) => /* @__PURE__ */ jsx("option", {
						value: opt.value,
						children: opt.label
					}, opt.value))]
				})
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
//#region resources/js/Components/Forms/InputPassword.jsx
function InputPassword({ field, label, value, onChange, error, isEdit }) {
	const hasError = !!error;
	return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: `field-${field}`,
				children: label
			}),
			/* @__PURE__ */ jsx("input", {
				id: `field-${field}`,
				type: "password",
				placeholder: isEdit ? "Kosongkan jika tidak diubah" : label,
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
export { InputTextarea as a, InputFile as i, InputSelect as n, InputText as o, InputEnum as r, InputPassword as t };
