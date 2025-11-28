import React from 'react';

function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Ganti URL ini dengan gambar gedung lokal Anda nanti */}
        <img 
          src="/images/hero-about.png" 
          alt="Gedung Pencakar Langit" 
          className="w-full h-full object-cover"
        />
        {/* Overlay Hitam Transparan agar teks terbaca */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* 2. Konten Teks */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bersama Naik Kelas, Wujudkan Bisnis <br className="hidden md:block" />
          yang <span className="text-primary">Lebih Hebat.</span>
        </h1>

        {/* Subtext / Deskripsi */}
        <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg md:text-xl text-gray-100 font-light leading-relaxed">
          <p>
            Naik Kelas adalah platform pengembangan bisnis dan karier yang menghadirkan solusi lengkap — dari edukasi, kemitraan, hingga layanan profesional.
          </p>
          <p>
            Kami hadir sebagai jembatan antara pengetahuan dan praktik nyata, membantu siapa pun berkembang: dari pemula menjadi profesional, dari usaha kecil menjadi brand besar.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;