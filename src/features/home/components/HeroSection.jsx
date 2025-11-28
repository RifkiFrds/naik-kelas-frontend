import React from 'react';
import Button from '../../../components/ui/Button';
import { ArrowRight } from 'lucide-react'; 

function HeroSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Konten Teks */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
              Naik Kelas – Solusi Bisnis Terpadu untuk{' '}
              <span className="text-primary">UMKM & Startup</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Dari legalitas hingga ekspansi pasar internasional, kami bantu bisnismu tumbuh lebih cepat & terstruktur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tombol Primary dengan Ikon */}
              <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
                Konsultasi Gratis Sekarang
                <ArrowRight size={20} />
              </Button>

              {/* Tombol Secondary */}
              <Button variant="secondary" size="lg">
                Beli Modul Bisnis
              </Button>
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi 3D */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img 
              src="/images/hero-home.png" 
              alt="Ilustrasi Pertumbuhan Bisnis" 
              className="w-full max-w-md md:max-w-full object-contain drop-shadow-xl animate-fade-in-up"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;