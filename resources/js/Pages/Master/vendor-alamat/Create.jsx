import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputText from "@/Components/Forms/InputText";
import InputTextarea from "@/Components/Forms/InputTextarea";
import InputFile from "@/Components/Forms/InputFile";
import InputEnum from "@/Components/Forms/InputEnum";
import InputSelect from "@/Components/Forms/InputSelect";
import InputPassword from "@/Components/Forms/InputPassword";

export default function Form() {
    const { props } = usePage();
    const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;

    const isEdit = !!item;

    const defaultData = {};
    fields.forEach((field) => {
        defaultData[field] = isEdit ? item[field] ?? "" : "";
    });

    const { data, setData, post, put, processing, errors } = useForm(defaultData);

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/master/${table}/${item[primaryKey]}`);
        } else {
            post(`/master/${table}`);
        }
    };

    return (
        <>
            <Head title={title} />

            <div className="form-elements-wrapper form-sm">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <div className="d-flex justify-content-between align-items-center mb-25">
                                <h6 className="mb-0">{title}</h6>
                                <Link href={`/master/${table}`} className="main-btn primary-btn-outline rounded-full btn-hover btn-sm">
                                    <i className="lni lni-arrow-left mr-5" style={{ fontSize: 13 }}></i>
                                    Kembali
                                </Link>
                            </div>

                            <form onSubmit={submit}>
                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNama" label={fieldLabels["vNama"] || "vNama"} value={data["vNama"] ?? ""} onChange={(v) => setData("vNama", v)} error={errors["vNama"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdVendor" label={fieldLabels["iIdVendor"] || "iIdVendor"} value={data["iIdVendor"] ?? ""} onChange={(v) => setData("iIdVendor", v)} error={errors["iIdVendor"]} options={selects?.["iIdVendor"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdProvinsi" label={fieldLabels["iIdProvinsi"] || "iIdProvinsi"} value={data["iIdProvinsi"] ?? ""} onChange={(v) => setData("iIdProvinsi", v)} error={errors["iIdProvinsi"]} options={selects?.["iIdProvinsi"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKota" label={fieldLabels["iIdKota"] || "iIdKota"} value={data["iIdKota"] ?? ""} onChange={(v) => setData("iIdKota", v)} error={errors["iIdKota"]} options={selects?.["iIdKota"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKecamatan" label={fieldLabels["iIdKecamatan"] || "iIdKecamatan"} value={data["iIdKecamatan"] ?? ""} onChange={(v) => setData("iIdKecamatan", v)} error={errors["iIdKecamatan"]} options={selects?.["iIdKecamatan"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKelurahan" label={fieldLabels["iIdKelurahan"] || "iIdKelurahan"} value={data["iIdKelurahan"] ?? ""} onChange={(v) => setData("iIdKelurahan", v)} error={errors["iIdKelurahan"]} options={selects?.["iIdKelurahan"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vGPS" label={fieldLabels["vGPS"] || "vGPS"} value={data["vGPS"] ?? ""} onChange={(v) => setData("vGPS", v)} error={errors["vGPS"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNotelp" label={fieldLabels["vNotelp"] || "vNotelp"} value={data["vNotelp"] ?? ""} onChange={(v) => setData("vNotelp", v)} error={errors["vNotelp"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNohp" label={fieldLabels["vNohp"] || "vNohp"} value={data["vNohp"] ?? ""} onChange={(v) => setData("vNohp", v)} error={errors["vNohp"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12">
                                    <InputTextarea field="vAlamat" label={fieldLabels["vAlamat"] || "vAlamat"} value={data["vAlamat"] ?? ""} onChange={(v) => setData("vAlamat", v)} error={errors["vAlamat"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eUtama" label={fieldLabels["eUtama"] || "eUtama"} value={data["eUtama"] ?? ""} onChange={(v) => setData("eUtama", v)} error={errors["eUtama"]} options={selects?.["eUtama"] || []} />
                                </div>
                                </div>

                                <div className="d-flex justify-content-end pt-15" style={{ borderTop: "1px solid #eee", marginTop: 8, paddingTop: 12 }}>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="main-btn primary-btn-outline rounded-full btn-hover btn-sm"
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