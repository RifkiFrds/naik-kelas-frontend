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
    <footer className="bg-secondary text-white py-6 pt-3 pb-3">
  <div className="container mx-auto px-0 md:px-6 grid grid-cols-1 md:grid-cols-2">

    {/* LEFT FULL WHITE AREA (Responsive Padding) */}
    <div className="bg-white/20 border border-secondary/30 rounded-sm flex items-center justify-center px-6 py-6 md:px-10 md:py-10">
      <img
        src="/logo.png"
        alt="Adakom Naik Kelas"
        className="w-36 sm:w-48 md:w-64 object-contain"
      />
    </div>

    {/* RIGHT AREA INFO */}
    <div className="px-5 py-8 md:py-10 space-y-6 text-center md:text-left">

      {/* HEADING */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
          Siap naik kelas bersama ADAKOM?
        </h2>
        <p className="text-primary text-lg sm:text-xl md:text-2xl font-bold mt-1">
          Konsultasi GRATIS untuk semua layanan
        </p>
      </div>

      {/* CONTACT LIST */}
      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
        <div className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start">
          <Mail size={18} className="text-primary" />
          <p>adakomkelashebat@gmail.com </p>
        </div>

        <div className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start max-w-sm mx-auto md:mx-0">
          <MapPin size={18} className="text-primary" />
          <p>Saicowork Soho Capital Lt 37, Tanjung Duren, Jakarta Barat</p>
        </div>

        <div className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start">
          <Phone size={18} className="text-primary" />
          <p>+62 823-4560-0777</p>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex gap-5 justify-center md:justify-start pt-3 pb-6">
        <a href="#" className="text-gray-300 hover:text-primary transition"><Instagram size={20} /></a>
        <a href="#" className="text-gray-300 hover:text-primary transition"><Facebook size={20} /></a>
        <a href="#" className="text-gray-300 hover:text-primary transition"><Linkedin size={20} /></a>
        <a href="#" className="text-gray-300 hover:text-primary transition"><Star size={20} /></a>
      </div>

    </div>
  </div>
</footer>
  );
}

export default Footer;
