import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function DateRangePicker({ from, to, onChange, label }) {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef(null);
    const dropdownRef = useRef(null);
    const [pos, setPos] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const handler = (e) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(e.target) &&
                (!dropdownRef.current || !dropdownRef.current.contains(e.target))
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const openDropdown = () => {
        const rect = triggerRef.current.getBoundingClientRect();
        setPos({ top: rect.bottom + 4, left: rect.left });
        setOpen(true);
    };

    const displayText = from && to
        ? `${from} – ${to}`
        : from
          ? `${from} – ...`
          : to
            ? `... – ${to}`
            : "";

    return (
        <>
            <div className="drp-wrapper" ref={triggerRef}>
                <button
                    type="button"
                    className="drp-trigger"
                    onClick={openDropdown}
                >
                    <svg className="drp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className={displayText ? "drp-text" : "drp-placeholder"}>
                        {displayText || (label || "Pilih rentang tanggal")}
                    </span>
                    <svg className={`drp-chevron ${open ? "drp-chevron-open" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {open && createPortal(
                <div ref={dropdownRef} className="drp-dropdown" style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 99999 }}>
                    <div className="drp-field">
                        <label className="drp-label">Dari</label>
                        <input
                            type="date"
                            className="drp-input"
                            value={from || ""}
                            onChange={(e) => onChange("from", e.target.value)}
                        />
                    </div>
                    <div className="drp-separator">–</div>
                    <div className="drp-field">
                        <label className="drp-label">Sampai</label>
                        <input
                            type="date"
                            className="drp-input"
                            value={to || ""}
                            onChange={(e) => onChange("to", e.target.value)}
                        />
                    </div>
                    <div className="drp-actions">
                        <button
                            type="button"
                            className="drp-btn drp-btn-clear"
                            onClick={() => {
                                onChange("clear");
                                setOpen(false);
                            }}
                        >
                            Hapus
                        </button>
                        <button
                            type="button"
                            className="drp-btn drp-btn-apply"
                            onClick={() => setOpen(false)}
                        >
                            Tutup
                        </button>
                    </div>
                </div>,
                document.body
            )}

            <style>{`
                .drp-wrapper { font-size: 13px; }
                .drp-trigger {
                    display: flex; align-items: center; gap: 4px;
                    width: 100%; min-width: 120px;
                    padding: 5px 6px;
                    border: 1px solid #e2e8f0; border-radius: 5px;
                    background: #f8fafc; cursor: pointer;
                    color: #333; font-size: 13px;
                    transition: all 0.15s ease;
                }
                .drp-trigger:hover { border-color: #cbd5e1; background: #fff; }
                .drp-icon { width: 14px; height: 14px; flex-shrink: 0; color: #999; }
                .drp-text { flex: 1; text-align: left; color: #333; }
                .drp-placeholder { flex: 1; text-align: left; color: #a0aec0; }
                .drp-chevron { width: 12px; height: 12px; flex-shrink: 0; color: #999; transition: transform 0.2s; }
                .drp-chevron-open { transform: rotate(180deg); }
                .drp-dropdown {
                    display: flex; align-items: flex-start; gap: 0;
                    background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
                    padding: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1);
                    min-width: 280px;
                }
                .drp-field { flex: 1; }
                .drp-label { display: block; font-size: 11px; color: #6b7280; margin-bottom: 4px; font-weight: 500; }
                .drp-input {
                    width: 100%; padding: 6px 8px;
                    border: 1px solid #e2e8f0; border-radius: 5px;
                    font-size: 13px; outline: none; background: #f8fafc;
                    transition: all 0.15s ease;
                }
                .drp-input:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
                .drp-separator { padding: 0 8px; color: #999; font-size: 16px; align-self: center; margin-top: 14px; }
                .drp-actions { display: flex; flex-direction: column; gap: 4px; margin-top: 14px; margin-left: 8px; }
                .drp-btn {
                    padding: 4px 10px; border-radius: 4px; font-size: 12px;
                    cursor: pointer; border: 1px solid transparent; white-space: nowrap;
                }
                .drp-btn-apply { background: #3b82f6; color: #fff; }
                .drp-btn-apply:hover { background: #2563eb; }
                .drp-btn-clear { background: transparent; color: #6b7280; border-color: #e2e8f0; }
                .drp-btn-clear:hover { background: #f3f4f6; }
            `}</style>
        </>
    );
}
