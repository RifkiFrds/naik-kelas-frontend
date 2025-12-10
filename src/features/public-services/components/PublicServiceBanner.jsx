import React from "react";

export default function PublicServiceBanner() {
  return (
    <div className="mt-10 md:mt-14 bg-secondary text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <div>
        <h3 className="text-xl md:text-2xl font-extrabold">
          Butuh Bantuan Lain? Konsultasi GRATIS!
        </h3>
        <p className="text-gray-200 text-sm md:text-base mt-1 max-w-lg">
          Kamu bisa tanya apa saja terkait perizinan, desain, marketing, hingga pengembangan bisnis. 
          Tim Naik Kelas siap membantu.
        </p>
      </div>

      <a
        href="https://wa.me/6282345600777?text=Halo%20saya%20ingin%20konsultas%C2%A0layanan%20umum"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-secondary font-bold px-6 md:px-10 py-3 rounded-lg text-sm md:text-base hover:brightness-110 transition"
      >
        Konsultasi Gratis Sekarang
      </a>
    </div>
  );
}
