import React from "react";
import { Check } from "lucide-react";
import { RevealOnScroll } from "../../../lib/motion";

export default function WhyPartnerSection() {
  const items = [
    "Paket usaha lengkap & siap operasional",
    "Brand yang sudah berjalan dan mudah dipasarkan (proven)",
    "SOP & sistem operasional yang teruji",
    "Training lengkap untuk owner & karyawan",
    "Dukungan pemasaran & konten digital",
    "Produk dengan margin sehat & tingkat repeat order tinggi",
  ];

  return (
    <RevealOnScroll>
    <section className="py-10">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-2">
          KENAPA MEMILIH KEMITRAAN{" "}
          <span className="text-primary">ADAKOM NAIK KELAS?</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Kemitraan yang memberikan nilai nyata melalui kolaborasi strategis,
          peningkatan kapasitas, dan peluang pertumbuhan bersama.
        </p>

        {/* GRID BENEFIT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#FFBC4114] rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              {/* Icon bulat kuning */}
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <Check className="text-secondary" size={28} strokeWidth={3} />
              </div>

              {/* Text */}
              <p className="text-secondary text-base sm:text-lg font-semibold leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </RevealOnScroll>
  );
}
