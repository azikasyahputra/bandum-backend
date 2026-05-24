import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
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
//#region resources/js/Components/Forms/InputFile.jsx
function InputFile({ field, label, value, onChange, error }) {
	const hasError = !!error;
	const inputRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [broken, setBroken] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const existingUrl = value && typeof value === "string" && !selectedFile && !broken ? value.startsWith("http") ? value : `/storage/${value}` : null;
	const isImage = existingUrl && /\.(jpe?g|png)$/i.test(value);
	const objectUrl = useMemo(() => {
		if (selectedFile) return URL.createObjectURL(selectedFile);
		return null;
	}, [selectedFile]);
	useEffect(() => {
		return () => {
			if (objectUrl) URL.revokeObjectURL(objectUrl);
		};
	}, [objectUrl]);
	const handleFile = (file) => {
		if (!file) return;
		onChange(file);
		setSelectedFile(file);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		handleFile(e.dataTransfer.files?.[0]);
	};
	const hasFile = selectedFile || existingUrl;
	const showPreview = (selectedFile?.type?.startsWith("image/") ? objectUrl : null) || (existingUrl && isImage ? existingUrl : null);
	const previewHref = objectUrl || existingUrl || null;
	return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", { children: label }),
			/* @__PURE__ */ jsxs("div", {
				onDragOver: handleDragOver,
				onDragLeave: handleDragLeave,
				onDrop: handleDrop,
				onClick: () => inputRef.current?.click(),
				style: {
					width: "100%",
					height: 150,
					border: `2px dashed ${isDragging ? "#365cf5" : hasFile ? "#365cf5" : "#d1d5db"}`,
					borderRadius: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					background: isDragging ? "#f0f4ff" : showPreview ? "#f9fafb" : "#fff",
					transition: "all 0.15s",
					position: "relative",
					overflow: "hidden"
				},
				children: [showPreview ? /* @__PURE__ */ jsx("img", {
					src: showPreview,
					alt: label,
					style: {
						width: "100%",
						height: "100%",
						objectFit: "cover",
						position: "absolute",
						top: 0,
						left: 0
					},
					onError: () => setBroken(true)
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("i", {
					className: "lni lni-upload",
					style: {
						fontSize: 24,
						color: "#9ca3af"
					}
				}), /* @__PURE__ */ jsx("span", {
					style: {
						fontSize: 12,
						color: "#9ca3af",
						marginTop: 6,
						textAlign: "center",
						padding: "0 8px",
						lineHeight: 1.3
					},
					children: selectedFile?.name || "Klik atau seret file"
				})] }), showPreview && /* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						background: "rgba(0,0,0,0.5)",
						color: "#fff",
						fontSize: 11,
						padding: "4px 8px",
						textAlign: "center",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis"
					},
					children: selectedFile?.name || value?.split("/")?.pop() || "Klik untuk ganti"
				})]
			}),
			previewHref && /* @__PURE__ */ jsx("div", {
				style: {
					textAlign: "right",
					marginTop: 6
				},
				children: /* @__PURE__ */ jsxs("a", {
					href: previewHref,
					target: "_blank",
					rel: "noopener noreferrer",
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: 4,
						fontSize: 12,
						color: "#365cf5",
						textDecoration: "none"
					},
					children: [
						/* @__PURE__ */ jsx("i", {
							className: "lni lni-eye",
							style: { fontSize: 14 }
						}),
						"Lihat ",
						selectedFile ? selectedFile.type.startsWith("image/") ? "Gambar" : "File" : isImage ? "Gambar" : "File"
					]
				})
			}),
			/* @__PURE__ */ jsx("input", {
				ref: inputRef,
				type: "file",
				accept: ".jpeg,.jpg,.png,.pdf",
				style: { display: "none" },
				onChange: (e) => handleFile(e.target.files?.[0])
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
export { InputText as a, InputFile as i, InputSelect as n, InputEnum as r, InputPassword as t };
