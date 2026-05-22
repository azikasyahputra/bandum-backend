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
                                    <InputFile field="vProfilepic" label={fieldLabels["vProfilepic"] || "vProfilepic"} value={data["vProfilepic"] ?? ""} onChange={(v) => setData("vProfilepic", v)} error={errors["vProfilepic"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eTipe" label={fieldLabels["eTipe"] || "eTipe"} value={data["eTipe"] ?? ""} onChange={(v) => setData("eTipe", v)} error={errors["eTipe"]} options={selects?.["eTipe"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNamadirektur" label={fieldLabels["vNamadirektur"] || "vNamadirektur"} value={data["vNamadirektur"] ?? ""} onChange={(v) => setData("vNamadirektur", v)} error={errors["vNamadirektur"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="dTanggalberdiri" label={fieldLabels["dTanggalberdiri"] || "dTanggalberdiri"} value={data["dTanggalberdiri"] ?? ""} onChange={(v) => setData("dTanggalberdiri", v)} error={errors["dTanggalberdiri"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eJumlahkaryawan" label={fieldLabels["eJumlahkaryawan"] || "eJumlahkaryawan"} value={data["eJumlahkaryawan"] ?? ""} onChange={(v) => setData("eJumlahkaryawan", v)} error={errors["eJumlahkaryawan"]} options={selects?.["eJumlahkaryawan"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vOfficephone" label={fieldLabels["vOfficephone"] || "vOfficephone"} value={data["vOfficephone"] ?? ""} onChange={(v) => setData("vOfficephone", v)} error={errors["vOfficephone"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNamapic" label={fieldLabels["vNamapic"] || "vNamapic"} value={data["vNamapic"] ?? ""} onChange={(v) => setData("vNamapic", v)} error={errors["vNamapic"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vKontakpic" label={fieldLabels["vKontakpic"] || "vKontakpic"} value={data["vKontakpic"] ?? ""} onChange={(v) => setData("vKontakpic", v)} error={errors["vKontakpic"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdAlamatutama" label={fieldLabels["iIdAlamatutama"] || "iIdAlamatutama"} value={data["iIdAlamatutama"] ?? ""} onChange={(v) => setData("iIdAlamatutama", v)} error={errors["iIdAlamatutama"]} options={selects?.["iIdAlamatutama"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vSiup" label={fieldLabels["vSiup"] || "vSiup"} value={data["vSiup"] ?? ""} onChange={(v) => setData("vSiup", v)} error={errors["vSiup"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFilesiup" label={fieldLabels["vFilesiup"] || "vFilesiup"} value={data["vFilesiup"] ?? ""} onChange={(v) => setData("vFilesiup", v)} error={errors["vFilesiup"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFileaktapendirian" label={fieldLabels["vFileaktapendirian"] || "vFileaktapendirian"} value={data["vFileaktapendirian"] ?? ""} onChange={(v) => setData("vFileaktapendirian", v)} error={errors["vFileaktapendirian"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFiledomisiliperusahaan" label={fieldLabels["vFiledomisiliperusahaan"] || "vFiledomisiliperusahaan"} value={data["vFiledomisiliperusahaan"] ?? ""} onChange={(v) => setData("vFiledomisiliperusahaan", v)} error={errors["vFiledomisiliperusahaan"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eVerifikasi" label={fieldLabels["eVerifikasi"] || "eVerifikasi"} value={data["eVerifikasi"] ?? ""} onChange={(v) => setData("eVerifikasi", v)} error={errors["eVerifikasi"]} options={selects?.["eVerifikasi"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12">
                                    <InputTextarea field="vDeskripsi" label={fieldLabels["vDeskripsi"] || "vDeskripsi"} value={data["vDeskripsi"] ?? ""} onChange={(v) => setData("vDeskripsi", v)} error={errors["vDeskripsi"]} />
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