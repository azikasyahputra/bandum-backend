import { Link } from "@inertiajs/react";

export default function FormActions({ backUrl, processing, isEdit, children }) {
    return (
        <div className="d-flex justify-content-between align-items-center pt-15" style={{ borderTop: "1px solid #eee", marginTop: 8, paddingTop: 12 }}>
            {backUrl ? (
                <Link href={backUrl} className="main-btn danger-btn-outline rounded-full btn-hover btn-sm">
                    <i className="lni lni-arrow-left me-1"></i> Kembali
                </Link>
            ) : <div />}
            {children || (
                <button type="submit" disabled={processing} className="main-btn primary-btn-outline rounded-full btn-hover btn-sm">
                    {processing ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"}
                </button>
            )}
        </div>
    );
}
