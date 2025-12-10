import React from "react";
import { useBusinessService } from "../hooks/useBusinessService";
import BusinessCard from "./BusinessCard";

export default function BusinessSection() {
  const { layanan, loading } = useBusinessService();

  if (loading) return <p className="text-center py-20 text-gray-500">Memuat layanan...</p>;

  return (
    <section className="py-16 md:py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 md:gap-24">
          {layanan.map((item, i) => (
            <BusinessCard key={item.id} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
