import React from 'react';

function HeroSection() {
  return (
    <section className="bg-[#F3F5F7] py-20 md:py-20">
      <div className="container mx-auto px-4 text-center">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
          Layanan <span className="text-tertiary">Profesional</span> untuk Semua <br className="hidden md:block" />
          Kebutuhan <span className="text-tertiary">Bisnismu</span>
        </h1>

        {/* Subtext / Deskripsi */}
        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Mulai dari legalitas, ruang kerja, hingga pengembangan website semua <br className="hidden md:block" />
          bisa kamu urus dengan cepat dan mudah bersama tim ahli Naik Kelas.
        </p>

      </div>
    </section>
  );
}

export default HeroSection;