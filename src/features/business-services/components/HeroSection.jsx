import React from "react";
import { FadeInUp } from "../../../lib/motion";

function HeroSection() {
  return (
    <FadeInUp delay={0.5}>
    <section className="py-14 md:py-10">
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight mb-4">
          LANGKAH NYATA UNTUK <span className="text-primary">BISNISMU</span> NAIK LEVEL
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-lg max-w-6xl mx-auto leading-relaxed">
          Pilih layanan terbaik mulai dari Trading, Jasa Recruitment, Modul Bisnis,
          hingga Kelas Digital mingguan.
        </p>

      </div>
    </section>
    </FadeInUp>
  );
}

export default HeroSection;
