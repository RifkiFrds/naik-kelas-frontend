import React from "react";
import { usePartnershipService } from "../hooks/usePartnershipService";
import PartnershipCard from "./PartnershipCard";
import { StaggerContainer, StaggerItem } from "../../../lib/motion";

export default function PartnershipSection() {
  const { data, loading } = usePartnershipService();

  if (loading) return <p className="text-center py-10">Memuat paket kemitraan...</p>;

  return (
    <section id="kemitraan" className="py-10">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-secondary mb-2">
          PAKET KEMITRAAN
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Pilihan paket kerja sama yang dirancang sesuai kebutuhan bisnis dan tujuan pertumbuhan Anda.
        </p>

        {/* STAGGER GRID */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <StaggerItem key={item.id}>
              <PartnershipCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
