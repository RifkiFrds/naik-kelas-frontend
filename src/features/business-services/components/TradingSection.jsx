import React from "react";
import { useTradingService } from "../hooks/useTradingService";
import { Brain } from "lucide-react";
import TradingCard from "./TradingCard";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "../../../lib/motion";

export default function TradingSection() {
  const { trading, loading } = useTradingService();

  if (loading) return <p className="text-center py-10">Memuat data trading...</p>;

  return (
    <RevealOnScroll delay={0.3}>
      <section className="py-14">
        <div className="container mx-auto px-4">
          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-secondary text-center leading-tight mb-4">
            TRADING ADAKOM NAIK KELAS
          </h1>

          {/* SUBTITLE */}
          <p className="text-gray-600 text-sm md:text-lg text-center max-w-3xl mx-auto mb-12">
            Dapatkan akses trading aman & terlisensi, mulai dari broker lokal hingga
            internasional dengan dukungan edukasi profesional.
          </p>

          {/* GRID + ANIMASI STAGGER */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {trading.map((item) => (
              <StaggerItem key={item.id}>
                <TradingCard broker={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA BANNER */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-secondary font-semibold italic">
              <div className="bg-primary p-2 sm:p-2.5 rounded-full flex items-center justify-center">
                <Brain className="text-secondary" size={22} strokeWidth={2.5} />
              </div>
              <p className="text-base sm:text-lg md:text-xl px-4 max-w-lg">
                “Grow with Knowledge, Not Emotion”
              </p>
            </div>

            <a
              href="https://wa.me/6282345600777?text=Halo%20saya%20ingin%20bergabung%20komunitas%20trading%20ADAKOM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-primary text-secondary text-sm sm:text-base md:text-xl font-bold px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl hover:brightness-110 transition-all"
            >
              Gabung Komunitas Trading Sekarang
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
