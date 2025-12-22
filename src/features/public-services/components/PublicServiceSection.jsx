import React from "react";
import { usePublicService } from "../hooks/usePublicService";
import { RevealOnScroll } from "../../../lib/motion";
import PublicServiceCard from "./PublicServiceCard";
import ServiceBanner from "../../../components/ServiceBanner";

export default function PublicServiceSection() {
  const { services, loading } = usePublicService();

  if (loading) return <p className="text-center py-10">Memuat layanan...</p>;

  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <RevealOnScroll direction="up">
          <h2 className="text-center text-2xl md:text-5xl font-bold text-secondary leading-tight mb-2">
            SOLUSI <span className="text-primary">LENGKAP</span> UNTUK MENDUKUNG
          </h2>
          <h2 className="text-center text-2xl md:text-5xl font-extrabold text-secondary leading-tight">
            SEMUA ASPEK <span className="text-primary">PERTUMBUHAN BISNIS</span> ANDA
          </h2>
        </RevealOnScroll>

        {/* LIST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {services.map((item, i) => (
            <RevealOnScroll
              key={item.id}
              direction={i % 2 === 0 ? "right" : "left"}
              delay={0.15}
            >
              <PublicServiceCard item={item} />
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA BANNER */}
        <RevealOnScroll direction="up" delay={0.3}>
          <ServiceBanner />
        </RevealOnScroll>
      </div>
    </section>
  );
}
