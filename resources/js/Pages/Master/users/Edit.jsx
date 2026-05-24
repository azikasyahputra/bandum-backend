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
    const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey, audit } = props;

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
                                    <InputText field="name" label={fieldLabels["name"] || "name"} value={data["name"] ?? ""} onChange={(v) => setData("name", v)} error={errors["name"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="email" label={fieldLabels["email"] || "email"} value={data["email"] ?? ""} onChange={(v) => setData("email", v)} error={errors["email"]} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputText field="role" label={fieldLabels["role"] || "role"} value={data["role"] ?? ""} onChange={(v) => setData("role", v)} error={errors["role"]} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <InputPassword field="password" label={fieldLabels["password"] || "password"} value={data["password"] ?? ""} onChange={(v) => setData("password", v)} error={errors["password"]} isEdit={isEdit} />
                                </div>
                                </div>

                                {audit && (
                                    <div className="row" style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #eee" }}>
                                        <div className="col-12">
                                            <p style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Audit Trail</p>
                                            <div className="row">
                                                <div className="col-6 col-md-3">
                                                    <p className="show-field-label">Dibuat Oleh</p>
                                                    <p className="show-field-value">{audit.creator || "-"}</p>
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <p className="show-field-label">Tanggal Dibuat</p>
                                                    <p className="show-field-value">{audit.createdAt || "-"}</p>
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <p className="show-field-label">Diubah Oleh</p>
                                                    <p className="show-field-value">{audit.updater || "-"}</p>
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <p className="show-field-label">Tanggal Diubah</p>
                                                    <p className="show-field-value">{audit.updatedAt || "-"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <FormActions backUrl={`/master/${table}`} processing={processing} isEdit={isEdit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}