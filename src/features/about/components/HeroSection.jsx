import React from 'react';
import { FadeInUp } from '../../../lib/motion';

function HeroSection() {
  return (
    <FadeInUp delay={0.3}>
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-about.png" 
          alt="Gedung Pencakar Langit" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800/60"></div>
      </div>

      {/* Konten Teks */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Bersama Naik Kelas, Wujudkan Bisnis <br className="hidden md:block" />
          yang <span className="text-primary">Lebih Hebat.</span>
        </h1>

        {/* Subtext / Deskripsi */}
        <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg text-gray-100 font-light leading-relaxed">
          <p>
           “Naik Kelas bukan sekadar platform, tapi gerakan untuk membantu pebisnis dan profesional tumbuh lebih cepat.”
          </p>
        </div>

      </div>
    </section>
    </FadeInUp>
  );
}

export default HeroSection;