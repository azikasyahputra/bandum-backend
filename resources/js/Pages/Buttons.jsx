import { Head } from "@inertiajs/react";

const buttonTypes = [
    { label: "Primary", baseClass: "primary-btn" },
    { label: "Secondary", baseClass: "secondary-btn" },
    { label: "Success", baseClass: "success-btn" },
    { label: "Danger", baseClass: "danger-btn" },
    { label: "Warning", baseClass: "warning-btn" },
    { label: "Info", baseClass: "info-btn" },
    { label: "Dark", baseClass: "dark-btn" },
    { label: "Light", baseClass: "light-btn" },
    { label: "Active", baseClass: "active-btn" },
    { label: "Deactive", baseClass: "deactive-btn" },
];

const buttonSections = [
    {
        title: "Square Buttons",
        subtitle: "",
        modifierClass: "square-btn",
        btnTypeSuffix: "",
    },
    {
        title: "Default Buttons",
        subtitle: "(3px Corner Round)",
        modifierClass: "",
        btnTypeSuffix: "",
    },
    {
        title: "Rounded Buttons",
        subtitle: "(Full Rounded)",
        modifierClass: "rounded-full",
        btnTypeSuffix: "",
    },
    {
        title: "Square Outline Buttons",
        subtitle: "",
        modifierClass: "square-btn",
        btnTypeSuffix: "-outline",
    },
    {
        title: "Default Outline Buttons",
        subtitle: "(3 Px Round)",
        modifierClass: "",
        btnTypeSuffix: "-outline",
    },
    {
        title: "Default Outline Buttons",
        subtitle: "(Full Rounded)",
        modifierClass: "rounded-full",
        btnTypeSuffix: "-outline",
    },
    {
        title: "Square Light Buttons",
        subtitle: "",
        modifierClass: "square-btn",
        btnTypeSuffix: "-light",
    },
    {
        title: "Default Light Buttons",
        subtitle: "(3 Px Round)",
        modifierClass: "",
        btnTypeSuffix: "-light",
    },
    {
        title: "Default Light Buttons",
        subtitle: "(Full Rounded)",
        modifierClass: "rounded-full",
        btnTypeSuffix: "-light",
    },
];

export default function Buttons() {
    return (
        <>
                        <div className="buttons-cards-wrapper">
                <div className="row">
                    {buttonSections.map((section, idx) => (
                        <div className="col-lg-6" key={idx}>
                            <div className="card-style mb-30">
                                <h5 className="text-medium mb-25">
                                    {section.title}
                                    {section.subtitle && (
                                        <>
                                            {" "}
                                            <span className="text-sm text-regular">{section.subtitle}</span>
                                        </>
                                    )}
                                </h5>
                                <ul className="buttons-group">
                                    {buttonTypes.map((btn, btnIdx) => {
                                        const finalTypeClass = section.btnTypeSuffix 
                                            ? `${btn.baseClass}${section.btnTypeSuffix}`
                                            : btn.baseClass;

                                        return (
                                            <li key={btnIdx}>
                                                <button 
                                                    type="button"
                                                    className={`main-btn ${finalTypeClass} ${section.modifierClass} btn-hover`}
                                                >
                                                    {btn.label}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
