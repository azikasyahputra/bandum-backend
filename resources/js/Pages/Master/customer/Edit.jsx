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
                                    <InputText field="vEmail" label={fieldLabels["vEmail"] || "vEmail"} value={data["vEmail"] ?? ""} onChange={(v) => setData("vEmail", v)} error={errors["vEmail"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdUser" label={fieldLabels["iIdUser"] || "iIdUser"} value={data["iIdUser"] ?? ""} onChange={(v) => setData("iIdUser", v)} error={errors["iIdUser"]} options={selects?.["iIdUser"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdJenisperusahaan" label={fieldLabels["iIdJenisperusahaan"] || "iIdJenisperusahaan"} value={data["iIdJenisperusahaan"] ?? ""} onChange={(v) => setData("iIdJenisperusahaan", v)} error={errors["iIdJenisperusahaan"]} options={selects?.["iIdJenisperusahaan"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKlasifikasiperusahaan" label={fieldLabels["iIdKlasifikasiperusahaan"] || "iIdKlasifikasiperusahaan"} value={data["iIdKlasifikasiperusahaan"] ?? ""} onChange={(v) => setData("iIdKlasifikasiperusahaan", v)} error={errors["iIdKlasifikasiperusahaan"]} options={selects?.["iIdKlasifikasiperusahaan"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eTipe" label={fieldLabels["eTipe"] || "eTipe"} value={data["eTipe"] ?? ""} onChange={(v) => setData("eTipe", v)} error={errors["eTipe"]} options={selects?.["eTipe"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vProfilepic" label={fieldLabels["vProfilepic"] || "vProfilepic"} value={data["vProfilepic"] ?? ""} onChange={(v) => setData("vProfilepic", v)} error={errors["vProfilepic"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vKtp" label={fieldLabels["vKtp"] || "vKtp"} value={data["vKtp"] ?? ""} onChange={(v) => setData("vKtp", v)} error={errors["vKtp"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFilektp" label={fieldLabels["vFilektp"] || "vFilektp"} value={data["vFilektp"] ?? ""} onChange={(v) => setData("vFilektp", v)} error={errors["vFilektp"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vNpwp" label={fieldLabels["vNpwp"] || "vNpwp"} value={data["vNpwp"] ?? ""} onChange={(v) => setData("vNpwp", v)} error={errors["vNpwp"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFilenpwp" label={fieldLabels["vFilenpwp"] || "vFilenpwp"} value={data["vFilenpwp"] ?? ""} onChange={(v) => setData("vFilenpwp", v)} error={errors["vFilenpwp"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vSiup" label={fieldLabels["vSiup"] || "vSiup"} value={data["vSiup"] ?? ""} onChange={(v) => setData("vSiup", v)} error={errors["vSiup"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFilesiup" label={fieldLabels["vFilesiup"] || "vFilesiup"} value={data["vFilesiup"] ?? ""} onChange={(v) => setData("vFilesiup", v)} error={errors["vFilesiup"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFileaktapendirian" label={fieldLabels["vFileaktapendirian"] || "vFileaktapendirian"} value={data["vFileaktapendirian"] ?? ""} onChange={(v) => setData("vFileaktapendirian", v)} error={errors["vFileaktapendirian"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputFile field="vFiledomisiliperusahaan" label={fieldLabels["vFiledomisiliperusahaan"] || "vFiledomisiliperusahaan"} value={data["vFiledomisiliperusahaan"] ?? ""} onChange={(v) => setData("vFiledomisiliperusahaan", v)} error={errors["vFiledomisiliperusahaan"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eVerifikasi" label={fieldLabels["eVerifikasi"] || "eVerifikasi"} value={data["eVerifikasi"] ?? ""} onChange={(v) => setData("eVerifikasi", v)} error={errors["eVerifikasi"]} options={selects?.["eVerifikasi"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="isTrustedBuyer" label={fieldLabels["isTrustedBuyer"] || "isTrustedBuyer"} value={data["isTrustedBuyer"] ?? ""} onChange={(v) => setData("isTrustedBuyer", v)} error={errors["isTrustedBuyer"]} options={selects?.["isTrustedBuyer"] || []} />
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