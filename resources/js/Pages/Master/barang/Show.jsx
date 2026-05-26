import { Head, Link, usePage } from "@inertiajs/react";
import FormActions from "@/Components/Forms/FormActions";

export default function Show() {
    const { props } = usePage();
    const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;

    const formatValue = (col) => {
        const value = item?.[col];
        if (value === null || value === undefined || value === "") return "-";
        const options = selects?.[col] || [];
        const match = options.find((o) => o.value === value || String(o.value) === String(value));
        if (match) return match.label;
        return value;
    };

    const formatFile = (col) => {
        const value = item?.[col];
        if (!value) return "-";
        const src = value.startsWith("http") ? value : "/storage/" + value;
        const filename = value.split("/").pop();
        const isImage = /\.(jpe?g|png|gif|webp|svg)$/i.test(value);
        return (
            <div>
                {isImage && (
                    <div style={{ width: "100%", height: 150, border: "2px solid #d1d5db", borderRadius: 8, position: "relative", overflow: "hidden", background: "#f9fafb", marginBottom: 6 }}>
                        <img src={src} alt={filename} onError={(e) => { e.target.style.display = "none"; }} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 11, padding: "4px 8px", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{filename}</div>
                    </div>
                )}
                <div style={{ textAlign: "right" }}>
                    <a href={src} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#365cf5", textDecoration: "none" }}>
                        <i className="lni lni-eye" style={{ fontSize: 14 }}></i>
                        Lihat {isImage ? "Gambar" : "File"}
                    </a>
                </div>
            </div>
        );
    };
    return (
        <>
            <Head title={title} />

            <div className="form-elements-wrapper form-sm">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <p className="show-field-label">{fieldLabels["vNama"] || "vNama"}</p>
                                    <p className="show-field-value">{formatValue("vNama")}</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <p className="show-field-label">{fieldLabels["iIdBrand"] || "iIdBrand"}</p>
                                    <p className="show-field-value">{formatValue("iIdBrand")}</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <p className="show-field-label">{fieldLabels["iIdKategori"] || "iIdKategori"}</p>
                                    <p className="show-field-value">{formatValue("iIdKategori")}</p>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <p className="show-field-label">{fieldLabels["iIdSubkategori"] || "iIdSubkategori"}</p>
                                    <p className="show-field-value">{formatValue("iIdSubkategori")}</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <p className="show-field-label">{fieldLabels["vDeskripsisingkat"] || "vDeskripsisingkat"}</p>
                                    <p className="show-field-value">{formatValue("vDeskripsisingkat")}</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <p className="show-field-label">{fieldLabels["eBestselling"] || "eBestselling"}</p>
                                    <p className="show-field-value">{formatValue("eBestselling")}</p>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12">
                                    <p className="show-field-label">{fieldLabels["vDeskripsidetail"] || "vDeskripsidetail"}</p>
                                    <div className="show-field-value" dangerouslySetInnerHTML={{ __html: item?.["vDeskripsidetail"] ?? "" }} />
                                </div>
                                </div>

                                <FormActions backUrl={`/master/${table}`}>
                                    <Link
                                        href={`/master/${table}/${item?.[primaryKey]}/edit`}
                                        className="main-btn primary-btn-outline rounded-full btn-hover btn-sm"
                                    >
                                        <i className="lni lni-pencil-alt mr-5"></i>
                                        Edit
                                    </Link>
                                </FormActions>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}