import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = ({ isActive }) =>
    `font-medium text-[15px] transition-colors duration-200 ${
      isActive ? "text-secondary font-bold" : "text-gray-600 hover:text-secondary"
    }`;

  const dropdownLinkClass = ({ isActive }) =>
    `block px-5 py-3 text-[14px] text-secondary transition-all duration-200 border-l-2 ${
      isActive
        ? "border-primary bg-white/5 text-primary font-semibold"
        : "border-transparent text-gray-300 hover:text-primary hover:bg-white/5 hover:border-primary/50"
    }`;

  const isLayananActive = ["/layanan-bisnis", "/layanan-umum", "/kemitraan"].includes(
    location.pathname
  );

  return (
    <header className="bg-[#F0F0F0] shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">

          {/* Logo Kembali ke bentuk awal (gambar) */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Adakom Naik Kelas"
              className="w-14 sm:w-16 h-auto object-contain"
            />
          </Link>

          {/* NAV Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-[15px]">

            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/tentang" className={linkClass}>Tentang Kami</NavLink>

            {/* Layanan Dropdown Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 transition-all font-medium text-[15px] focus:outline-none ${
                  isLayananActive ? "text-secondary font-bold" : "text-gray-600 hover:text-secondary"
                }`}
              >
                Layanan
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-60 transform transition-all duration-300 origin-top z-50 ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible"
                }`}
              >
                <div className="bg-[#F0F0F0] rounded-xl shadow-2xl shadow-secondary/30 border border-white/10 overflow-hidden ring-1 ring-black/5">
                  <div className="h-1 w-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>

                  <div className="py-2">
                    <NavLink to="/layanan-bisnis" className={dropdownLinkClass}>Layanan Bisnis</NavLink>
                    <NavLink to="/layanan-umum" className={dropdownLinkClass}>Layanan Umum</NavLink>
                    <div className="my-1 border-t border-white/10 mx-4"></div>
                    <NavLink to="/kemitraan" className={dropdownLinkClass}>Kemitraan</NavLink>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/events" className={linkClass}>Events</NavLink>
            <NavLink to="/karir" className={linkClass}>Karir</NavLink>
            <NavLink to="/kontak" className={linkClass}>Kontak</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-secondary hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 pt-4 flex flex-col space-y-2">
            <NavLink to="/" className="px-4 py-2 font-medium text-secondary hover:bg-gray-50 rounded-lg" end>Home</NavLink>
            <NavLink to="/tentang" className="px-4 py-2 font-medium text-secondary hover:bg-gray-50 rounded-lg">Tentang Kami</NavLink>

            {/* Dropdown Mobile */}
            <div className="px-4 py-2">
              <button
                className={`flex justify-between items-center w-full font-medium ${isLayananActive ? "text-secondary font-bold" : "text-gray-600"}`}
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                Layanan
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180 text-primary" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileDropdownOpen ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 border-l-2 border-gray-100 space-y-1">
                  <NavLink to="/layanan-bisnis" className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Layanan Bisnis</NavLink>
                  <NavLink to="/layanan-umum" className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Layanan Umum</NavLink>
                  <NavLink to="/kemitraan" className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Kemitraan</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/events" className="px-4 py-2 font-medium text-secondary hover:bg-gray-50 rounded-lg">Events</NavLink>
            <NavLink to="/karir" className="px-4 py-2 font-medium text-secondary hover:bg-gray-50 rounded-lg">Karir</NavLink>
            <NavLink to="/kontak" className="px-4 py-2 font-medium text-secondary hover:bg-gray-50 rounded-lg">Kontak</NavLink>
            <NavLink to="/faq" cclassName="px-4 py-2 font-medium text-secondary hover:bg-gray-50 rounded-lg">FAQ</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
