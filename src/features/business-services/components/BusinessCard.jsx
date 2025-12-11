import React from "react";
import { CircleCheckBig } from "lucide-react";
import { RevealOnScroll } from "../../../lib/motion"; 
import { splitBusinessTitle } from "../../../utils/textFormatter";

export default function BusinessCard({ item, i }) {

  // Hanya split untuk Jasa Recruitment & Modul Bisnis
  const shouldSplit =
    item.type === "jasa_recruitment" || item.type === "modal_bisnis" || item.type === "webinar";

  const title = shouldSplit ? splitBusinessTitle(item.judul_bisnis) : item.judul_bisnis;

  const fitur = item.fitur_unggulan
  ?.split("\n")
  .map((x) => x.replace(/\r/g, "").trim())
  .filter(Boolean)
  .filter((x) => !/fitur|keunggulan|solusi|kelas/i.test(x)); 

  const header = item.fitur_unggulan.split("\n")[0];

  const isOdd = i % 2 !== 0;
  const direction = isOdd ? "right" : "left"; // Animasi selang-seling otomatis

  return (
    <RevealOnScroll direction={direction} distance={50} delay={0.1}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 items-center">

        {/* IMAGE */}
        <div
          className={`order-1 ${isOdd ? "md:order-1" : "md:order-2"} rounded-xl overflow-hidden shadow-md`}
        >
          <img
            src={item.gambar_url}
            alt={item.judul_bisnis}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className={`order-2 ${isOdd ? "md:order-2" : "md:order-1"}`}>
          <h3 className="text-secondary font-extrabold mb-3 text-xl md:text-3xl uppercase leading-[1.1] tracking-[0.5px] whitespace-pre-line">
            {title}
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-4">
            {item.deskripsi}
          </p>

            <h4 className="text-secondary font-semibold text-sm md:text-base mb-2">
            {header}
            </h4>

          <div className="space-y-2 mb-5">
            {fitur?.map((f, idx) => (
              <p
                key={idx}
                className="flex items-center gap-2 text-gray-700 text-sm md:text-base"
              >
                <CircleCheckBig className="text-secondary" size={18} /> {f}
              </p>
            ))}
          </div>

          <a
            href={item.url_cta}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-secondary font-bold px-6 py-2 rounded-lg hover:brightness-110 transition inline-block"
          >
            {item.type === "jasa_recruitment"
              ? "Ajukan Jasa Recruitment"
              : item.type === "modal_bisnis"
              ? "Beli Modul Sekarang"
              : "Daftar Sekarang"}
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
}
