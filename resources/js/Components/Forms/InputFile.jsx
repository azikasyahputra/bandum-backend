import { useRef, useState } from "react";

export default function InputFile({ field, label, value, onChange, error }) {
    const hasError = !!error;
    const inputRef = useRef(null);
    const [selectedName, setSelectedName] = useState(null);
    const [broken, setBroken] = useState(false);

    const existingUrl = value && typeof value === "string" && !selectedName && !broken
        ? (value.startsWith("http") ? value : `/storage/${value}`)
        : null;
    const isImage = existingUrl && /\.(jpe?g|png)$/i.test(value);

    return (
        <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
            <label>{label}</label>
            <div
                onClick={() => inputRef.current?.click()}
                style={{ cursor: "pointer" }}
            >
                {existingUrl && isImage ? (
                    <div className="mb-10">
                        <img
                            src={existingUrl}
                            alt={label}
                            style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6, border: "1px solid #e2e8f0" }}
                            onError={() => setBroken(true)}
                        />
                    </div>
                ) : existingUrl ? (
                    <div className="mb-10">
                        <span style={{ fontSize: 13, color: "#3b82f6" }}>
                            {value.split("/").pop()}
                        </span>
                    </div>
                ) : selectedName ? (
                    <div className="mb-10">
                        <span style={{ fontSize: 13, color: "#3b82f6" }}>{selectedName}</span>
                    </div>
                ) : (
                    <div className="mb-10">
                        <span style={{ fontSize: 13, color: "#9ca3af" }}>Klik untuk pilih file</span>
                    </div>
                )}
            </div>
            <input
                ref={inputRef}
                type="file"
                accept=".jpeg,.jpg,.png,.pdf"
                style={{ display: "none" }}
                onChange={(e) => {
                    if (e.target.files[0]) {
                        onChange(e.target.files[0]);
                        setSelectedName(e.target.files[0].name);
                    }
                }}
            />
            {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
        </div>
    );
}
