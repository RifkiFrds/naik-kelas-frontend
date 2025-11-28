import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper untuk styling NavLink
  const getNavLinkClass = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive ? 'text-secondary' : 'text-gray-500 hover:text-secondary'
    }`;

  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-lg w-10 h-10 flex items-center justify-center">
              <img src="/logo.png" alt="" />
            </div>
            <span className="text-secondary font-bold text-xl">Naik Kelas</span>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex gap-6">
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
            <NavLink to="/tentang" className={getNavLinkClass}>Tentang</NavLink>
            <NavLink to="/bussinesservice" className={getNavLinkClass}>Layanan Bisnis</NavLink>
            <NavLink to="/kemitraan" className={getNavLinkClass}>Kemitraan</NavLink>
            <NavLink to="/layanan-umum" className={getNavLinkClass}>Layanan Umum</NavLink>
            <NavLink to="/karir" className={getNavLinkClass}>Karir</NavLink>
            <NavLink to="/kontak" className={getNavLinkClass}>Kontak</NavLink>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button variant="tertiary">Konsultasi Gratis</Button>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <X 
                className="w-6 h-6 text-secondary cursor-pointer" 
                onClick={() => setIsMobileMenuOpen(false)} 
              />
            ) : (
              <Menu 
                className="w-6 h-6 text-secondary cursor-pointer" 
                onClick={() => setIsMobileMenuOpen(true)} 
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100 shadow-md border-t rounded-xl animate-fadeIn">
            <nav className="flex flex-col p-4 space-y-3">
              <NavLink to="/" className={getNavLinkClass} end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/tentang" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Tentang</NavLink>
              <NavLink to="/bussinesservice" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Layanan Bisnis</NavLink>
              <NavLink to="/kemitraan" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Kemitraan</NavLink>
              <NavLink to="/layanan-umum" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Layanan Umum</NavLink>
              <NavLink to="/karir" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Karir</NavLink>
              <NavLink to="/kontak" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Kontak</NavLink>

              <Button 
                variant="primary" 
                className="mt-4 w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Konsultasi Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
