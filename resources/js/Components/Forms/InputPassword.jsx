export default function InputPassword({ field, label, value, onChange, error, isEdit }) {
    const hasError = !!error;
    return (
        <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
            <label htmlFor={`field-${field}`}>{label}</label>
            <input
                id={`field-${field}`}
                type="password"
                placeholder={isEdit ? "Kosongkan jika tidak diubah" : label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
        </div>
    );
}
