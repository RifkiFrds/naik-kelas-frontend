import React from "react";
import { MapPin } from "lucide-react";
import { RevealOnScroll } from "../../../lib/motion";

export default function LocationSection() {
  return (
    <RevealOnScroll>
    <section className="py-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-secondary">Lokasi Kami</h2>
        </div>

        <p className="text-slate-600 mb-6">
          Kamu dapat mengunjungi kantor kami untuk konsultasi langsung atau meeting bisnis.
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 shadow">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.706971618361!2d106.7872047!3d-6.174468499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f73add25d7ab%3A0x5c0265cf5e639bb5!2sSoho%20Capital!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="380"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}
