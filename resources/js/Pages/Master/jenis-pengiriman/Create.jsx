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
                                <div className="col-12 col-md-6 col-lg-6">
                                    <InputSelect field="iIdExpedisi" label={fieldLabels["iIdExpedisi"] || "iIdExpedisi"} value={data["iIdExpedisi"] ?? ""} onChange={(v) => setData("iIdExpedisi", v)} error={errors["iIdExpedisi"]} options={selects?.["iIdExpedisi"] || []} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <InputText field="vNama" label={fieldLabels["vNama"] || "vNama"} value={data["vNama"] ?? ""} onChange={(v) => setData("vNama", v)} error={errors["vNama"]} />
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