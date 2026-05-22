import { Head, Link, usePage } from "@inertiajs/react";

export default function Show() {
    const { props } = usePage();
    const { title, table, fields, fieldLabels, fieldTypes, selects, item, primaryKey } = props;

    const formatValue = (col) => {
        const value = item?.[col];
        if (value === null || value === undefined || value === "") return "-";

        const type = fieldTypes[col] || "text";

        if (type === "enum") {
            const options = selects?.[col] || [];
            const match = options.find((o) => o.value === value);
            return match ? match.label : value;
        }

        if (type === "file") {
            const src = value.startsWith("http") ? value : `/storage/${value}`;
            return <a href={src} target="_blank" rel="noopener noreferrer">{value.split("/").pop()}</a>;
        }

        if (type === "password") return "••••••••";

        return value;
    };

    const fieldGridWidth = (type) => (type === "textarea" ? 12 : 4);

    const fieldRows = fields.reduce((acc, field) => {
        const type = fieldTypes[field] || "text";
        const width = fieldGridWidth(type);
        const last = acc[acc.length - 1];
        if (last && last.width + width <= 12) {
            last.fields.push(field);
            last.width += width;
        } else {
            acc.push({ fields: [field], width });
        }
        return acc;
    }, []);

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

                            {fieldRows.map((row, i) => (
                                <div className="row" key={i}>
                                    {row.fields.map((field) => {
                                        const label = fieldLabels[field] || field;
                                        const type = fieldTypes[field] || "text";
                                        const colClass = type === "textarea" ? "col-12" : "col-12 col-md-6 col-lg-4";
                                        return (
                                            <div className={colClass} key={field}>
                                                <p style={{ fontSize: 12, color: "#5d657b", marginBottom: 2 }}>{label}</p>
                                                <p style={{ fontSize: 14, color: "#1A2142", marginBottom: 12 }}>{formatValue(field)}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}

                            <div className="d-flex justify-content-start pt-15" style={{ borderTop: "1px solid #eee", marginTop: 8, paddingTop: 12 }}>
                                <Link
                                    href={`/master/${table}/${item?.[primaryKey]}/edit`}
                                    className="main-btn primary-btn-outline rounded-full btn-hover btn-sm"
                                >
                                    <i className="lni lni-pencil-alt mr-5"></i>
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
