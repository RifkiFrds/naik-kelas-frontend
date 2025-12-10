import React from "react";
import { FadeInUp } from "../../../lib/motion";

function HeroSection() {
  return (
    <FadeInUp delay={0.3}>
      <section className="relative flex items-center justify-center h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[320px] md:min-h-[400px] overflow-hidden w-full">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-about.png"
            alt="Gedung Pencakar Langit"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-3 sm:px-6 md:px-10 text-center">

          {/* Title */}
          <h1
            className="
              text-2xl sm:text-4xl md:text-5xl
              font-bold text-white
              leading-snug sm:leading-tight md:leading-[1.2]
              mb-3 sm:mb-4
              max-w-[700px] sm:max-w-[1000px] mx-auto
            "
          >
            BERSAMA <span className="text-primary">ADAKOM NAIK KELAS</span>,
            <br className="hidden sm:block"/>
            WUJUDKAN BISNIS YANG <span className="text-primary">LEBIH HEBAT</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              text-[11px] sm:text-sm md:text-base
              text-gray-200 font-light
              max-w-[600px] sm:max-w-[1000px] mx-auto
            "
          >
            “ADAKOM Naik Kelas bukan sekadar platform, tetapi gerakan untuk membantu pebisnis &
            profesional tumbuh lebih cepat.”
          </p>

        </div>
      </section>
    </FadeInUp>
  );
}

export default HeroSection;
