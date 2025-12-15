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
        className="w-36 sm:w-48 md:w-64 object-contain drop-shadow-[0_1px_8px_rgba(255,255,255,0.25)]
"
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

        <div className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start mx-auto md:mx-0">
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
        <a href="https://www.instagram.com/adakomnaikkelas" target="blank_" className="text-gray-300 hover:text-primary transition"><Instagram size={20} /></a>
        <a href="https://www.linkedin.com/company/adakomkelashebat/" target="blank_" className="text-gray-300 hover:text-primary transition"><Facebook size={20} /></a>
        <a href="https://www.tiktok.com/@adakomnaikkelas" target="blank_" className="text-gray-300 hover:text-primary transition"><TikTokIcon size={20} /></a>
        <a href="https://www.threads.com/@adakomnaikkelas" target="blank_" className="text-gray-300 hover:text-primary transition"><ThreadsIcon size={20} /></a>
        <a href="https://www.linkedin.com/company/adakomkelashebat/" target="_blank" className="text-gray-300 hover:text-primary transition"><Linkedin size={20} /></a>
        <a href="https://glints.com/id/en/companies/pt-pdki/f2f9c213-968d-44a3-81be-278001e4091d" target="blank_" className="text-gray-300 hover:text-primary transition"><Star size={20} /></a>
      </div>

    </div>
  </div>
</footer>
  );
}

export default Footer;


function TikTokIcon({ size = 24, className = "" }) {
  return (
    <svg 
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.5 2c1.2 1.8 2.8 3 5 3v3.2c-2 .1-3.5-.6-5-1.7v6.9c0 3.3-2.3 5.7-5.4 5.7A5.6 5.6 0 0 1 2 13.7c0-3.1 2.5-5.5 5.6-5.5.4 0 .9.1 1.3.2V12c-.4-.2-.9-.3-1.3-.3a2.3 2.3 0 1 0 2.3 2.3V2h3.6z" />
    </svg>
  );
}

function ThreadsIcon({
  size = 24,
  className = "",
  title = "Threads",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
    </svg>
  );
}



