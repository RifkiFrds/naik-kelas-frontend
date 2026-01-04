import React from "react";
import Button from "../../../components/ui/Button";

export default function CareerCard({ job }) {

  if (job.status !== "dibuka") return null;

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-secondary font-bold text-xl mb-2 uppercase">
        {job.posisi}
      </h3>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {job.deskripsi}
      </p>

      <Button
        href={job.url_cta}
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        className="w-auto px-5 py-2 bg-primary text-secondary font-bold"
      >
        Lihat Peluang Karir
      </Button>
    </div>
  );
}
