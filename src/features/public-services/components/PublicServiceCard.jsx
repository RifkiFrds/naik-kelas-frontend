import React from "react";
import { CircleCheckBig } from "lucide-react";

export default function PublicServiceCard({ item }) {
  const fitur = item.highlight
    ?.split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

  return (
    <div className="border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-4 md:gap-5">

      {/* IMAGE */}
      <div className="flex-shrink-0 w-full md:w-48 rounded-lg overflow-hidden">
        <img
          src={item.gambar_url}
          alt={item.judul_layanan}
          className="w-full h-36 md:h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-secondary font-extrabold text-lg md:text-xl leading-tight mb-1">
            {item.judul_layanan}
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-3">
            {item.deskripsi}
          </p>

          <ul className="space-y-1 mb-4 text-gray-700 text-sm md:text-base">
            {fitur?.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CircleCheckBig size={18} className="text-secondary mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA BUTTON */}
        <a
          href={item.url_cta}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-secondary font-bold text-sm md:text-base px-4 py-2 rounded-lg hover:brightness-110 transition inline-block text-center"
        >
          {item.judul_layanan.includes("Legalitas")
            ? "Urus Legalitas Sekarang"
            : "Sewa Ruang Kerja"}
        </a>
      </div>

    </div>
  );
}
