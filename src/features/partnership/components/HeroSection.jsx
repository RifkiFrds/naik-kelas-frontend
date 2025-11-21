import React from 'react';
import Button from '../../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

function HeroSection() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Kolom Kiri: Teks */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
              Bangun Bisnis Kuliner Lebih Mudah, <span className="text-tertiary">Cepat</span>, dan <span className="text-tertiary">Terarah</span>.
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Bergabunglah dengan jaringan mitra kami dan nikmati berbagai keuntungan eksklusif yang dirancang untuk mendukung kesuksesan bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Tombol Primary dengan Ikon */}
              <Button variant="primary" size="lg" className="flex items-center justify-center gap-2 w-full sm:w-auto">
                Jadilah Mitra Kami
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi 3D */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="/images/hero-partner.png" 
              alt="Ilustrasi Kemitraan Bisnis" 
              className="w-3/4 sm:w-2/3 md:w-full max-w-md md:max-w-full object-contain drop-shadow-xl animate-fade-in-up" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;