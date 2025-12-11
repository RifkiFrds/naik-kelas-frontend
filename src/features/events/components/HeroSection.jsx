import React from "react";
import { FadeInUp } from "../../../lib/motion";
import { PointerHighlight } from "../../../components/PointerHiglight";

export default function EventHeroSection() {
  return (
    <FadeInUp delay={0.2}>
      <section className="py-14 md:py-10">
        <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-[1.2] md:leading-[1.3] mb-6 text-center">

        {/* Baris 1 */}
        TEMUKAN 
        <span className="text-primary"> EVENT SERU </span> & 
        <span className="text-primary"> WORKSHOP INTERAKTIF</span>

        <br />
        <span>BERSAMA </span>
        {/* Baris 2 dengan highlight */}
        <PointerHighlight
            highlightColor="rgba(255, 193, 7, 0.35)"
            pointerClassName="text-primary"
            rectangleClassName="rounded-lg bg-white/40 border-primary/40"
            containerClassName="inline-block py-1 mt-2"
        >
            <span className="text-secondary font-bold">
            ADAKOM NAIK KELAS
            </span>
        </PointerHighlight>

        </h1>


          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ikuti kelas, webinar, workshop, dan program pengembangan profesional 
            yang dirancang untuk membantu Anda naik level lebih cepat.
          </p>

        </div>
      </section>
    </FadeInUp>
  );
}
