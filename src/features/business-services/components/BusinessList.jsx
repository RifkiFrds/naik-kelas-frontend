import React, { useEffect, useState } from "react";
import { getBusinessServices } from "../services/businessService";

export default function BusinessList() {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        let mounted = true;
        getBusinessServices()
            .then((res) => {
                if (!mounted) return;
                // support both: API returning array OR { message, data: [...] }
                const payload = res && res.data !== undefined ? res.data : res;
                if (res && res.message) setMessage(res.message);
                const list = Array.isArray(payload) ? payload : payload ? [payload] : [];
                setItems(list);
            })
            .catch((err) => {
                if (mounted) setError(err?.message || "Fetch error");
            });
        return () => {
            mounted = false;
        };
    }, []);

    if (error) return <div className="bs-error">Error: {error}</div>;
    if (!items) return <div className="bs-loading">Loading...</div>;

    return (
        <div className="bs-root">
            {message && <div className="bs-alert">{message}</div>}

            <div className="bs-grid">
                {items.map((it) => (
                    <article
                        key={it.id ?? it.uuid ?? it.url_cta ?? JSON.stringify(it)}
                        className="bs-card"
                    >
                        <div
                            className="bs-thumb"
                            style={{
                                backgroundImage: `url(${it.gambar || "https://web-himtiumt.vercel.app/assets/web-D9rWr2Gf.jpg"})`,
                            }}
                            role="img"
                            aria-label={it.judul_bisnis || it.name || it.title || "Layanan"}
                        />

                        <div className="bs-body">
                            <div className="bs-header">
                                <h3 className="bs-title">{it.judul_bisnis || it.name || it.title}</h3>
                                <span className="bs-type">{it.type || it.tipe_broker || "Layanan"}</span>
                            </div>

                            <p className="bs-desc">{it.deskripsi || "Deskripsi tidak tersedia."}</p>

                            {it.fitur_unggulan ? (
                                <div className="bs-features">
                                    {it.fitur_unggulan
                                        .split(",")
                                        .map((f, idx) => (
                                            <span key={idx} className="bs-chip">
                                                {f.trim()}
                                            </span>
                                        ))}
                                </div>
                            ) : null}

                            <div className="bs-meta">
                                <div className="bs-price">
                                    {it.harga != null && it.harga !== "" ? it.harga : "Harga: -"}
                                </div>
                                {it.nama_mentor ? <div className="bs-mentor">Mentor: {it.nama_mentor}</div> : null}
                            </div>

                            <div className="bs-cta">
                                {it.url_cta ? (
                                    <a
                                        className="bs-btn"
                                        href={it.url_cta}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Daftar
                                    </a>
                                ) : (
                                    <button className="bs-btn bs-btn-disabled" disabled>
                                        Info
                                    </button>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <style>{`
                .bs-root { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; padding:18px; color:#0f1724; }
                .bs-alert { background:#e6ffed; color:#036a32; padding:10px 14px; border-radius:8px; margin-bottom:14px; box-shadow:0 1px 3px rgba(3,106,50,0.06); }
                .bs-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap:16px; }
                .bs-card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(15,23,36,0.06); display:flex; flex-direction:column; }
                .bs-thumb { height:150px; background-size:cover; background-position:center; }
                .bs-body { padding:12px 14px 16px; display:flex; flex-direction:column; gap:8px; }
                .bs-header { display:flex; justify-content:space-between; gap:8px; align-items:flex-start; }
                .bs-title { font-size:16px; margin:0; line-height:1.2; color:#071128; }
                .bs-type { background:#eef2ff; color:#3730a3; padding:6px 8px; border-radius:999px; font-size:12px; white-space:nowrap; }
                .bs-desc { font-size:14px; color:#374151; margin:0; min-height:42px; overflow:hidden; text-overflow:ellipsis; }
                .bs-features { display:flex; gap:6px; flex-wrap:wrap; margin-top:6px; }
                .bs-chip { background:#f8fafc; border:1px solid #e6eef6; padding:6px 8px; border-radius:999px; font-size:12px; color:#0f1724; }
                .bs-meta { display:flex; justify-content:space-between; align-items:center; font-size:13px; color:#6b7280; margin-top:6px; }
                .bs-cta { margin-top:12px; display:flex; justify-content:flex-end; }
                .bs-btn { background:#0ea5a4; color:white; padding:8px 12px; border-radius:8px; text-decoration:none; border:none; font-weight:600; cursor:pointer; }
                .bs-btn:hover { filter:brightness(.95); }
                .bs-btn-disabled { background:#e5e7eb; color:#9ca3af; cursor:not-allowed; }
                .bs-loading, .bs-error { padding:20px; text-align:center; }
                @media (max-width:520px){ .bs-thumb{height:130px;} .bs-title{font-size:15px} }
            `}</style>
        </div>
    );
}