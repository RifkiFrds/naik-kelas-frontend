import React from 'react';
import Button from '../../../components/ui/Button';
import { FadeInUp } from '../../../lib/motion';

function HeroSection() {
  return (
    <FadeInUp delay={0.2}>
    <section className="mb-20">
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Konten Teks */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-[2.65rem] font-bold text-secondary leading-[1.25] md:leading-[1.4] mb-5">
              ADAKOM NAIK KELAS <br/>  <span className="text-primary font-extrabold">SOLUSI</span> BISNIS TERPADU UNTUK{' '}
              <span className="text-primary font-extrabold">UMKM & STARTUP</span>
            </h1>

            <p className="text-lg md:text-[1rem] text-gray-600 mb-8 max-w-lg leading-relaxed">
             Kami hadir mendampingi bisnismu dari pembelajaran hingga pelaksanaan, melalui layanan bisnis yang terintegrasi dan siap digunakan.
            </p>
    
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tombol Primary dengan Ikon */}
              <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
                Konsultasi Gratis Sekarang
              </Button>

              {/* Tombol Secondary */}
              <Button variant="secondary" size="lg">
                Beli Modul Bisnis
              </Button>
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi 3D */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src="/images/hero-home.png"
              alt="Ilustrasi Pertumbuhan Bisnis"
              className="w-full max-w-md md:max-w-full object-contain animate-fade-in-up"
            />

            {/* White gradient fade bottom */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#F0F0F0] to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
    </FadeInUp>
  );
}

export default HeroSection;