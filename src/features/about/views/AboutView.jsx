import React from 'react';
import HeroSection from '../components/HeroSection';

function AboutView() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Konten About lainnya nanti di sini (Visi Misi, Tim, dll) */}
      <div className="container mx-auto px-4 py-16 text-center text-gray-500">
        <p>Konten Visi & Misi akan ditambahkan di sini...</p>
      </div>
    </div>
  );
}

export default AboutView;