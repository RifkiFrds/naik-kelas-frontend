import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button'; 
import { Phone, Instagram, Facebook, Twitter } from 'lucide-react'; 

// Helper untuk link footer
const FooterLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-300 hover:text-primary text-sm transition-colors"
  >
    {children}
  </Link>
);

// Helper untuk ikon sosial
const SocialIcon = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

function Footer() {
  return (
    // 1. Background menggunakan warna 'secondary' (Navy)
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        
        {/* Grid 4 Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo Background 'primary' (Lime), Teks 'secondary' (Navy) */}
              <div className="bg-primary rounded-lg w-10 h-10 flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">NK</span>
              </div>
              <span className="font-bold text-xl">Naik Kelas</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Membantu pelaku usaha dan profesional naik level melalui edukasi, kemitraan, dan solusi digital terintegrasi.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/tentang">Tentang</FooterLink>
              <FooterLink to="/bussinesservice">Layanan</FooterLink>
              <FooterLink to="/karir">Karir</FooterLink>
              <FooterLink to="/kontak">Kontak</FooterLink>
            </nav>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <nav className="flex flex-col gap-2.5">
              <FooterLink to="/layanan/trading">Trading</FooterLink>
              <FooterLink to="/layanan/reseller">Reseller</FooterLink>
              <FooterLink to="/layanan/legalitas">Legalitas</FooterLink>
              <FooterLink to="/layanan/coworking">Coworking Space</FooterLink>
            </nav>
          </div>

          {/* Kolom 4: Perusahaan */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Perusahaan</h3>
            <nav className="flex flex-col gap-2.5">
              <FooterLink to="/karir">Karir</FooterLink>
              <FooterLink to="/kontak">Kontak</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            </nav>
          </div>

        </div>
      </div>

      {/* Bagian Bawah: Copyright, Sosial & CTA */}
      <div className="border-t border-gray-300/300">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm order-2 md:order-1 text-center md:text-left">
            © 2025 Naik Kelas – All Rights Reserved
          </p>

          {/* Sosial & CTA */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            
            {/* Ikon Sosial */}
            <div className="flex items-center gap-4">
              <SocialIcon href="https://whatsapp.com">
                <Phone size={20} />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <Instagram size={20} />
              </SocialIcon>
              <SocialIcon href="https://facebook.com">
                <Facebook size={20} />
              </SocialIcon>
              <SocialIcon href="https://twitter.com">
                <Twitter size={20} /> {/* Ikon X / Twitter */}
              </SocialIcon>
            </div>
            
            {/* Tombol CTA menggunakan varian 'tertiary' (Orange) */}
            <Button variant="tertiary" size="md" rounded="lg">
              Mulai Konsultasi
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;