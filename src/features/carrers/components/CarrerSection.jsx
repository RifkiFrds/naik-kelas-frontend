import React from "react";
import { useLowonganKarir } from "../hooks/useLowonganKarir";
import CareerCard from "./CareerCard";
import { RevealOnScroll, StaggerContainer } from "../../../lib/motion";

export default function CareersSection() {
  const { jobs, loading } = useLowonganKarir();

  if (loading) return <p className="text-center py-20">Memuat data karir...</p>;

  return (
    <RevealOnScroll>
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-secondary mb-2">
          PELUANG KARIER YANG SEDANG DIBUKA
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Temukan posisi yang sesuai dengan minatmu dan bantu kami membangun solusi bisnis untuk UMKM & Startup.
        </p>

        {/* Grid Cards */}
        <StaggerContainer>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobs.map(job => (
            <CareerCard key={job.id} job={job} />
          ))}
        </div>
        </StaggerContainer>
      </div>
    </section>
    </RevealOnScroll>
  );
}
