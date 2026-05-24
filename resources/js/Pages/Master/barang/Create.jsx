import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputText from "@/Components/Forms/InputText";
import InputTextarea from "@/Components/Forms/InputTextarea";
import InputFile from "@/Components/Forms/InputFile";
import InputEnum from "@/Components/Forms/InputEnum";
import InputSelect from "@/Components/Forms/InputSelect";
import InputPassword from "@/Components/Forms/InputPassword";
import FormActions from "@/Components/Forms/FormActions";

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
                            <form onSubmit={submit}>
                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNama" label={fieldLabels["vNama"] || "vNama"} value={data["vNama"] ?? ""} onChange={(v) => setData("vNama", v)} error={errors["vNama"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdBrand" label={fieldLabels["iIdBrand"] || "iIdBrand"} value={data["iIdBrand"] ?? ""} onChange={(v) => setData("iIdBrand", v)} error={errors["iIdBrand"]} options={selects?.["iIdBrand"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKategori" label={fieldLabels["iIdKategori"] || "iIdKategori"} value={data["iIdKategori"] ?? ""} onChange={(v) => setData("iIdKategori", v)} error={errors["iIdKategori"]} options={selects?.["iIdKategori"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdSubkategori" label={fieldLabels["iIdSubkategori"] || "iIdSubkategori"} value={data["iIdSubkategori"] ?? ""} onChange={(v) => setData("iIdSubkategori", v)} error={errors["iIdSubkategori"]} options={selects?.["iIdSubkategori"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vDeskripsisingkat" label={fieldLabels["vDeskripsisingkat"] || "vDeskripsisingkat"} value={data["vDeskripsisingkat"] ?? ""} onChange={(v) => setData("vDeskripsisingkat", v)} error={errors["vDeskripsisingkat"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputEnum field="eBestselling" label={fieldLabels["eBestselling"] || "eBestselling"} value={data["eBestselling"] ?? ""} onChange={(v) => setData("eBestselling", v)} error={errors["eBestselling"]} options={selects?.["eBestselling"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12">
                                    <InputTextarea field="vDeskripsidetail" label={fieldLabels["vDeskripsidetail"] || "vDeskripsidetail"} value={data["vDeskripsidetail"] ?? ""} onChange={(v) => setData("vDeskripsidetail", v)} error={errors["vDeskripsidetail"]} />
                                </div>
                                </div>

                                <FormActions backUrl={`/master/${table}`} processing={processing} isEdit={isEdit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}