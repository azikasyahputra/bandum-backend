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
                                    <InputSelect field="iIdTransaksi" label={fieldLabels["iIdTransaksi"] || "iIdTransaksi"} value={data["iIdTransaksi"] ?? ""} onChange={(v) => setData("iIdTransaksi", v)} error={errors["iIdTransaksi"]} options={selects?.["iIdTransaksi"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdUser" label={fieldLabels["iIdUser"] || "iIdUser"} value={data["iIdUser"] ?? ""} onChange={(v) => setData("iIdUser", v)} error={errors["iIdUser"]} options={selects?.["iIdUser"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vJudul" label={fieldLabels["vJudul"] || "vJudul"} value={data["vJudul"] ?? ""} onChange={(v) => setData("vJudul", v)} error={errors["vJudul"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eTampil" label={fieldLabels["eTampil"] || "eTampil"} value={data["eTampil"] ?? ""} onChange={(v) => setData("eTampil", v)} error={errors["eTampil"]} options={selects?.["eTampil"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12">
                                    <InputTextarea field="vReview" label={fieldLabels["vReview"] || "vReview"} value={data["vReview"] ?? ""} onChange={(v) => setData("vReview", v)} error={errors["vReview"]} />
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