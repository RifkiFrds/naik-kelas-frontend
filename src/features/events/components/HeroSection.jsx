import React from "react";
import { FadeInUp } from "../../../lib/motion";
import { PointerHighlight } from "../../../components/PointerHiglight";

export default function EventHeroSection() {
  return (
    <FadeInUp delay={0.2}>
      <section className="py-14 md:py-10">
        <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-[1.2] md:leading-[1.5] mb-6 text-center">

        {/* Baris 1 */}
            <PointerHighlight
            highlightColor="rgba(255, 193, 7, 0.35)"
            pointerClassName="text-primary"
            rectangleClassName="rounded-lg bg-white/30 border-primary/40"
            containerClassName="inline-block  py-1 mt-2"
        >
            <span className="text-secondary font-bold">
            EVENT WAJIB IKUT!
            </span>
        </PointerHighlight>
        
        <span className="text-primary"> HADIAH BESAR MENANTI </span> JANGAN SAMPAI MENYESAL MELEWATKANNYA!

        <br />
        </h1>


          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
            Ikuti event, kumpulkan point dan dapatkan hadiahnya. Tumbuh lebih hebat bersama ADAKOM Naik Kelas.
          </p>

        </div>
      </section>
    </FadeInUp>
  );
}
