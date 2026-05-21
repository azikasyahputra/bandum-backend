import { Head } from "@inertiajs/react";

const alertsData = [
    { type: "primary", label: "Primary", heading: "#4A6CF7", desc: "Excitement, Energy, Passion, Courage, Attention" },
    { type: "danger", label: "Danger", heading: "#D50100", desc: "Excitement, Energy, Passion, Courage, Attention" },
    { type: "orange", label: "Orange", heading: "#D50100", desc: "Excitement, Energy, Passion, Courage, Attention" },
    { type: "warning", label: "Warning", heading: "#D50100", desc: "Enthusiasm, Opportunity, Spontaneity, Happiness, Positivity" },
    { type: "info", label: "Info", heading: "#D50100", desc: "Growth, Harmony, Kindness, Dependability" },
    { type: "success", label: "Success", heading: "#D50100", desc: "Safety, Harmony, Stability, Reliability, Balance" },
    { type: "secondary", label: "Secondary", heading: "#D50100", desc: "Safety, Harmony, Stability, Reliability, Balance" },
    { type: "gray", label: "Gray", heading: "#D50100", desc: "Safety, Harmony, Stability, Reliability, Balance" },
    { type: "black", label: "Black", heading: "#D50100", desc: "Safety, Harmony, Stability, Reliability, Balance" },
];

export default function Alerts() {
    return (
        <>
            <Head title="Alerts" />
            
            <div className="alerts-wrapper">
                <div className="card-style mb-30">
                    <h5 className="text-medium mb-25">Default Alert</h5>
                    <p className="text-sm mb-30">
                        Alerts are available for any length of text, as well as an
                        optional dismiss button. For proper styling, use one of the four
                        required contextual classes (e.g., .alert-success). For inline
                        dismissal, use the alerts jQuery plugin
                    </p>
                    <div className="alert-list-wrapper">
                        {alertsData.map((alert, idx) => (
                            <div key={idx} className={`alert-box ${alert.type}-alert pl-100`}>
                                <div className="left">
                                    <h5 className="text-bold">{alert.label}</h5>
                                </div>
                                <div className="alert">
                                    <h4 className="alert-heading">{alert.heading}</h4>
                                    <p className="text-medium">{alert.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
