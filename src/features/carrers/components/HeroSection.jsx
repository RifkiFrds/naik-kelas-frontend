import React from 'react';

function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-carrer.png" 
          alt="Gedung Pencakar Langit" 
          className="w-full h-full object-cover"
        />
        {/* Overlay Hitam Transparan agar teks terbaca */}
        <div className="absolute inset-0 bg-gray-800/50"></div>
      </div>

      {/* 2. Konten Teks */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Berkembang Bersama, Naik Kelas <br className="hidden md:block" />
          Bersama.
        </h1>

        {/* Subtext / Deskripsi */}
        <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg md:text-xl text-gray-100 font-light leading-relaxed">
          <p>
           Naik Kelas membuka peluang bagi talenta muda yang ingin tumbuh di dunia bisnis, edukasi, dan teknologi.
          </p>
          <p>
             Kami mencari orang-orang yang haus belajar, suka kolaborasi, dan siap memberikan dampak.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;