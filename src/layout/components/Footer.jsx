import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Star
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-secondary text-white pt-10 pb-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Logo Besar */}
        <div className="flex justify-center md:justify-center">
          <img
            src="/logo.png"
            alt="Naik Kelas"
            className="w-70 md:w-80 object-contain"
          />
        </div>

        {/* Informasi */}
        <div className="space-y-6 text-center md:text-left">

          {/* Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Siap naik kelas bersama kami?
            </h2>
            <p className="text-primary text-xl md:text-2xl font-bold mt-1">
              Konsultasi GRATIS untuk semua layanan
            </p>
          </div>

          {/* Contact List */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <Mail size={20} className="text-primary" />
              <p>hello@naikkelas.id</p>
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin size={20} className="text-primary" />
              <p className="max-w-xs">
                Saicowork Gedung Soho Capital Lt 37, Tanjung Duren, Jakarta Barat,
                Indonesia
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-start">
              <Phone size={20} className="text-primary" />
              <p>+62 823-4560-0777</p>
            </div>
          </div>

          {/* Sosial Media */}
          <div className="flex gap-5 justify-center md:justify-start pt-4 pb-8">
            <a href="#" className="text-gray-300 hover:text-primary transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              <Star size={22} /> {/* Glints icon sementara */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
    <div className="border-t border-white/10">
    <div className="container mx-auto px-4 py-3 text-center text-gray-400 text-sm">
      © 2025 Naik Kelas — All Rights Reserved
    </div>
  </div>
    </footer>
  );
}

export default Footer;
