import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Form() {
    const { props } = usePage();
    const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;

    const isEdit = !!item;

    const defaultData = {};
    fields.forEach((field) => {
        defaultData[field] = isEdit ? item[field] ?? "" : "";
    });

    const { data, setData, post, put, processing, errors } = useForm(defaultData);
    const [fileNames, setFileNames] = useState({});
    const [brokenFiles, setBrokenFiles] = useState({});

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/master/${table}/${item[primaryKey]}`);
        } else {
            post(`/master/${table}`);
        }
    };

    const renderField = (field) => {
        const type = fieldTypes[field] || "text";
        const label = fieldLabels[field] || field;
        const value = data[field] ?? "";
        const error = errors[field];
        const hasError = !!error;

        if (type === "boolean") {
            return (
                <div className="col-12 col-md-6 col-lg-4" key={field}>
                    <div className="form-check checkbox-style mb-10">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`field-${field}`}
                            checked={value === "ya" || value === true || value === 1}
                            onChange={(e) => setData(field, e.target.checked ? "ya" : "tidak")}
                        />
                        <label className="form-check-label" htmlFor={`field-${field}`}>
                            {label}
                        </label>
                    </div>
                </div>
            );
        }

        if (type === "select") {
            const options = selects?.[field] || [];
            return (
                <div className="col-12 col-md-6 col-lg-4" key={field}>
                    <div className={`select-style-1 ${hasError ? "has-error" : ""}`}>
                        <label htmlFor={`field-${field}`}>{label}</label>
                        <div className="select-position">
                            <select
                                id={`field-${field}`}
                                value={value}
                                onChange={(e) => setData(field, e.target.value)}
                            >
                                <option value="">Pilih {label}</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
                    </div>
                </div>
            );
        }

        if (type === "textarea") {
            return (
                <div className="col-12" key={field}>
                    <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
                        <label htmlFor={`field-${field}`}>{label}</label>
                        <textarea
                            id={`field-${field}`}
                            rows="3"
                            placeholder={label}
                            value={value}
                            onChange={(e) => setData(field, e.target.value)}
                        />
                        {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
                    </div>
                </div>
            );
        }

        if (type === "file") {
            const isImage = value && typeof value === "string" && /\.(jpe?g|png)$/i.test(value);
            const selectedName = fileNames[field];
            const isBroken = brokenFiles[field];
            const showExisting = value && typeof value === "string" && !selectedName && !isBroken;
            return (
                <div className="col-12 col-md-6 col-lg-4" key={field}>
                    <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
                        <label>{label}</label>
                        <div
                            onClick={() => document.getElementById(`file-${field}`).click()}
                            style={{ cursor: "pointer" }}
                        >
                            {showExisting && isImage ? (
                                <div className="mb-10">
                                    <img
                                        src={value.startsWith("http") ? value : `/storage/${value}`}
                                        alt={label}
                                        style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6, border: "1px solid #e2e8f0" }}
                                        onError={() => setBrokenFiles((prev) => ({ ...prev, [field]: true }))}
                                    />
                                </div>
                            ) : showExisting ? (
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
                            id={`file-${field}`}
                            type="file"
                            accept=".jpeg,.jpg,.png,.pdf"
                            style={{ display: "none" }}
                            onChange={(e) => {
                                if (e.target.files[0]) {
                                    setData(field, e.target.files[0]);
                                    setFileNames((prev) => ({ ...prev, [field]: e.target.files[0].name }));
                                }
                            }}
                        />
                        {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
                    </div>
                </div>
            );
        }

        if (type === "password") {
            return (
                <div className="col-12 col-md-6 col-lg-4" key={field}>
                    <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
                        <label htmlFor={`field-${field}`}>{label}</label>
                        <input
                            id={`field-${field}`}
                            type="password"
                            placeholder={isEdit ? "Kosongkan jika tidak diubah" : label}
                            value={value}
                            onChange={(e) => setData(field, e.target.value)}
                        />
                        {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
                    </div>
                </div>
            );
        }

        return (
            <div className="col-12 col-md-6 col-lg-4" key={field}>
                <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
                    <label htmlFor={`field-${field}`}>{label}</label>
                    <input
                        id={`field-${field}`}
                        type={type}
                        placeholder={label}
                        value={value}
                        onChange={(e) => setData(field, e.target.value)}
                    />
                    {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
                </div>
            </div>
        );
    };

    return (
        <>
            <Head title={title} />

            <div className="form-elements-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="d-flex justify-content-between align-items-center mb-25">
                                <h6 className="mb-0">{title}</h6>
                                <Link href={`/master/${table}`} className="main-btn primary-btn-outline btn-hover">
                                    <i className="lni lni-arrow-left mr-5" style={{ fontSize: 13 }}></i>
                                    Kembali
                                </Link>
                            </div>

                            <form onSubmit={submit}>
                                <div className="row">
                                    {fields.map(renderField)}
                                </div>

                                <div className="d-flex justify-content-end pt-15" style={{ borderTop: "1px solid #eee", marginTop: 8, paddingTop: 12 }}>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="main-btn primary-btn btn-hover"
                                    >
                                        {processing ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
