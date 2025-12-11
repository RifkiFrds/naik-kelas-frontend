import React from "react";
import Button from "../../../components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { FadeInUp } from "../../../lib/motion";

export default function HeroSection() {
  return (
    <FadeInUp delay={0.5}>
    <section className="py-14 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT – TEXT */}
          <div className="text-center md:text-left">

            <h1 className="text-3xl md:text-4xl max-w-xl font-bold text-secondary leading-[1.15] md:leading-[1.4]">
              BUKA BISNIS KULINER DENGAN
              <br />
              <span className="text-primary">SISTEM SIAP PAKAI!</span>
            </h1>

            <div className="mt-6 space-y-3 text-gray-700 text-base sm:text-lg">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="text-secondary" size={20} />
                Paket usaha lengkap
              </p>

              <p className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="text-secondary" size={20} />
                Sistem operasional siap pakai
              </p>

              <p className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="text-secondary" size={20} />
                Dukungan branding & promosi
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="#kemitraan"
                className="flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg font-bold px-8"
              >
                Ajukan Kerjasama F&B Sekarang
              </Button>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-center md:justify-center">
            <img
              src="/images/hero-partner.png"
              alt="Ilustrasi Kemitraan Bisnis"
              className="w-3/4 sm:w-2/3 md:w-full max-w-md object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
    </FadeInUp>
  );
}
