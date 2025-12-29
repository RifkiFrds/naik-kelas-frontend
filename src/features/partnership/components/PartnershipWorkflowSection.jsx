import React from "react";
import Button from "../../../components/ui/Button";
import { NavLink } from "react-router-dom";

const steps = [
  "Pilih paket usaha yang sesuai",
  "Konsultasi & analisa kebutuhan",
  "Setup booth/mini cafe",
  "Training operasional",
  "Launching & pendampingan awal"
];

export default function PartnershipWorkflowSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-secondary mb-10">
          CARA KERJA KEMITRAAN
        </h2>

        {/* Workflow Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 flex-wrap">

          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              
              {/* BOX */}
              <div className="bg-secondary text-white px-6 py-5 rounded-xl shadow-md w-[220px] md:w-[230px] text-center text-sm md:text-[15px] font-medium">
                {step}
              </div>

              {/* ARROW (hide last one) */}
              {i < steps.length - 1 && (
                <span className="text-secondary text-3xl md:text-4xl">
                  →
                </span>
              )}
            </div>
          ))}

        </div>

        {/* Divider Space */}
        <div className="mt-16"></div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-secondary mb-3">
            SIAP MULAI BISNIS F&B <span className="text-primary">TANPA RIBET?</span>
          </h3>

          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-6">
            Konsultasikan rencana bisnismu bersama tim kami.  
            Kami bantu dari perencanaan hingga operasional berjalan.
          </p>

          <NavLink to="/kontak">
          <Button
            as="a"
            variant="primary"
            size="lg"
            rounded="lg"
            className="px-8 text-base md:text-lg font-bold"
          >
            Ajukan Kerjasama Sekarang
          </Button>
          </NavLink>
        </div>

      </div>
    </section>
  );
}



