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
                                    <InputSelect field="iIdProvinsi" label={fieldLabels["iIdProvinsi"] || "iIdProvinsi"} value={data["iIdProvinsi"] ?? ""} onChange={(v) => setData("iIdProvinsi", v)} error={errors["iIdProvinsi"]} options={selects?.["iIdProvinsi"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKota" label={fieldLabels["iIdKota"] || "iIdKota"} value={data["iIdKota"] ?? ""} onChange={(v) => setData("iIdKota", v)} error={errors["iIdKota"]} options={selects?.["iIdKota"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputSelect field="iIdKecamatan" label={fieldLabels["iIdKecamatan"] || "iIdKecamatan"} value={data["iIdKecamatan"] ?? ""} onChange={(v) => setData("iIdKecamatan", v)} error={errors["iIdKecamatan"]} options={selects?.["iIdKecamatan"] || []} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vNama" label={fieldLabels["vNama"] || "vNama"} value={data["vNama"] ?? ""} onChange={(v) => setData("vNama", v)} error={errors["vNama"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="vKodepos" label={fieldLabels["vKodepos"] || "vKodepos"} value={data["vKodepos"] ?? ""} onChange={(v) => setData("vKodepos", v)} error={errors["vKodepos"]} />
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