export default function InputEnum({ field, label, value, onChange, error, options }) {
    const hasError = !!error;
    const matched = options.find(o => o.value === value) || options.find(o => o.value.toLowerCase() === String(value).toLowerCase());
    const controlledValue = matched ? matched.value : value;
    return (
        <div className={`select-style-1 ${hasError ? "has-error" : ""}`}>
            <label htmlFor={`field-${field}`}>{label}</label>
            <div className="select-position">
                <select
                    id={`field-${field}`}
                    value={controlledValue}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="">Pilih {label}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
            {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
        </div>
    );
}
