import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function PartnershipCard({ item }) {
  const fitur = item.fitur_unggulan
    ?.split("\n")
    .map((x) => x.replace(/\r/g, "").trim())
    .filter(Boolean);

  // FORMAT HARGA
  const formattedPrice = item.harga
    ? item.harga.toLocaleString("id-ID")
    : null;

  // CTA KHUSUS PAKET MINI CAFFE
  const customCta =
    item.nama_paket?.toLowerCase().includes("mini caffe")
      ? "Konsultasi Paket Mini Cafe"
      : `Ajukan Paket ${item.nama_paket.split(" ")[1] || "Paket"}`;

  return (
    <div className="border rounded-xl shadow-md p-6">
      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={item.gambar_url}
          alt={item.nama_paket}
          className="w-full aspect-[4/3] object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-secondary font-extrabold text-xl md:text-2xl mb-2">
        {item.nama_paket}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{item.deskripsi}</p>

      {/* Fitur */}
      <div className="space-y-1 mb-4">
        {fitur.map((f, i) => (
          <p key={i} className="flex items-center gap-2 text-gray-700 text-sm">
            <CheckCircle2 size={18} className="text-secondary" />
            {f}
          </p>
        ))}
      </div>

      {/* Harga */}
      {formattedPrice && (
        <p className="font-bold text-secondary mb-4">
          Harga Mulai dari Rp {formattedPrice}
        </p>
      )}

      {/* CTA BUTTON */}
      <a
        href={item.url_cta}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-secondary font-bold px-6 py-2 rounded-lg hover:brightness-110 transition inline-block"
      >
        {customCta}
      </a>
    </div>
  );
}
