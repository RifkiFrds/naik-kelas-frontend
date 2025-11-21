import React from 'react'

function HeroSection() {
  return (
    <section className="bg-[#F3F5F7] py-20 md:py-20">
      <div className="container mx-auto px-4 text-center">

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
          Solusi <span className="text-tertiary">Bisnis Terintegrasi</span> untuk UMKM, <br className="hidden md:block" />
          Frenlancer, dan Starup
        </h1>
        
        {/* Subtitile Text */}
        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Pilih layanan bisnis terbaik mulai dari trading, reseller, modul bisnis, hingga kelas digital
        </p>
    </div>
    </section>
  )
}

export default HeroSection
