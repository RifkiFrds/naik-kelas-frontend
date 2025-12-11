import React from 'react';
import { FadeInUp } from '../../../lib/motion';

function HeroSection() {
  return (
    <FadeInUp>
    <section className="relative
          w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          flex items-center -mt-4 sm:-mt-6 md:-mt-4 justify-center
          h-[40vh] sm:h-[50vh] md:h-[60vh]
          min-h-[320px] md:min-h-[400px]
          overflow-hidden">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-carrer.png" 
          alt="Gedung Pencakar Langit" 
          className="w-full h-full object-cover"
        />
        {/* Overlay Hitam Transparan agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60"></div>
      </div>

      {/* 2. Konten Teks */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          BERSAMA <span className='text-primary'>ADAKOM NAIK KELAS</span>
        </h1>

        {/* Subtext / Deskripsi */}
        <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg md:text-xl text-gray-100 font-light leading-relaxed">
          <p>
          Bangun karier bermakna di lingkungan startup edukasi bisnis, berkontribusi membantu UMKM, dan berkembang bersama tim profesional.
          </p>
        </div>

      </div>
    </section>
    </FadeInUp>
  );
}

export default HeroSection;