"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const pathname = usePathname();

  const isAboutDarkHero = pathname === '/about' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      // Find the hero wrapper on homepage (hero-scroll-wrapper) or heroSection on about page
      const heroWrapper = 
        document.getElementById('hero-scroll-wrapper') || 
        document.getElementById('heroSection');

      if (heroWrapper) {
        const rect = heroWrapper.getBoundingClientRect();
        // Liquid glass activates ONLY once the hero section has scrolled away and the next section begins
        setIsScrolled(rect.bottom <= 80);
      } else {
        setIsScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Navigation Header - Liquid Glass ONLY on scroll */}
      <header
        id="mainNav"
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3 liquid-glass-header-scrolled'
            : 'py-3.5 sm:py-4 bg-transparent border-none shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Identity - Clean Emblem & Bold Title (no pill or border in normal state) */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-3.5 group shrink-0"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-md border border-white/80 p-1' 
                : 'p-0.5'
            }`}>
              <img
                src="/assets/images/logo_banana_a_to_z.png"
                alt="Banana A to Z Official Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span
                id="navLogoText"
                className={`text-xl sm:text-2xl lg:text-[25px] font-black tracking-[0.02em] font-heading block leading-tight transition-colors drop-shadow-sm ${
                  isAboutDarkHero && !isScrolled
                    ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                    : 'text-[#00583C] group-hover:text-emerald-700'
                }`}
              >
                BANANA A TO Z
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5 xl:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap ${
                isAboutDarkHero && !isScrolled
                  ? pathname === '/'
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
                  : isScrolled
                  ? pathname === '/'
                    ? 'text-white bg-gradient-to-r from-emerald-600 to-[#00583C] shadow-sm font-bold'
                    : 'text-gray-800 hover:text-[#00583C] hover:bg-black/[0.05]'
                  : pathname === '/'
                  ? 'text-[#00583C] font-bold'
                  : 'text-gray-800 hover:text-[#00583C]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3.5 py-1.5 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap ${
                isAboutDarkHero && !isScrolled
                  ? pathname === '/about'
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
                  : isScrolled
                  ? pathname === '/about'
                    ? 'text-white bg-gradient-to-r from-emerald-600 to-[#00583C] shadow-sm font-bold'
                    : 'text-gray-800 hover:text-[#00583C] hover:bg-black/[0.05]'
                  : pathname === '/about'
                  ? 'text-[#00583C] font-bold'
                  : 'text-gray-800 hover:text-[#00583C]'
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/#products"
                className={`px-3.5 py-1.5 rounded-full text-[14px] font-semibold transition-all inline-flex items-center gap-1.5 group whitespace-nowrap ${
                  isAboutDarkHero && !isScrolled
                    ? 'text-white/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
                    : isScrolled
                    ? 'text-gray-800 hover:text-[#00583C] hover:bg-black/[0.05]'
                    : 'text-gray-800 hover:text-[#00583C]'
                }`}
              >
                <span>Products</span>
                <i
                  className={`fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${
                    isAboutDarkHero && !isScrolled ? 'text-white/70 group-hover:text-white' : 'text-gray-400 group-hover:text-[#00583C]'
                  } ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                ></i>
              </Link>

              {/* Floating Glass Dropdown Card */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="w-64 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)] p-2 flex flex-col gap-1">
                    <Link
                      href="/#products"
                      className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100/60 text-[#00583C] flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fa-solid fa-seedling text-sm"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#00583C] transition">
                          Banana Raw Fiber
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Grade-A export quality fibers
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#products"
                      className="p-2.5 rounded-xl hover:bg-amber-50/60 transition group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100/60 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fa-solid fa-layer-group text-sm"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-amber-700 transition">
                          Fiber Pulp & Paper
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Eco-friendly packaging grade
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#products"
                      className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100/60 text-[#00583C] flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fa-solid fa-mountain-sun text-sm"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#00583C] transition">
                          Organic Vermicompost
                        </div>
                        <div className="text-[10px] text-gray-500">
                          100% pure organic agro booster
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#products"
                      className="p-2.5 rounded-xl hover:bg-amber-50/60 transition group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100/60 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fa-solid fa-basket-shopping text-sm"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-amber-700 transition">
                          Handicrafts & Decor
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Artisan woven homeware
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#value-chain"
              className={`px-3.5 py-1.5 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap ${
                isAboutDarkHero && !isScrolled
                  ? 'text-white/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
                  : isScrolled
                  ? 'text-gray-800 hover:text-[#00583C] hover:bg-black/[0.05]'
                  : 'text-gray-800 hover:text-[#00583C]'
              }`}
            >
              Value Chain
            </Link>
            <Link
              href="/#contact"
              className={`px-3.5 py-1.5 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap ${
                isAboutDarkHero && !isScrolled
                  ? 'text-white/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
                  : isScrolled
                  ? 'text-gray-800 hover:text-[#00583C] hover:bg-black/[0.05]'
                  : 'text-gray-800 hover:text-[#00583C]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden pointer-events-auto">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                isAboutDarkHero && !isScrolled
                  ? 'text-white hover:bg-white/15'
                  : isScrolled
                  ? 'text-gray-800 hover:text-[#00583C] hover:bg-black/[0.05]'
                  : 'text-gray-800 hover:text-[#00583C]'
              }`}
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glassmorphic Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white/95 backdrop-blur-2xl text-gray-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out border-l border-white/60 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-amber-500/30 p-1 flex items-center justify-center shrink-0">
                  <img
                    src="/assets/images/logo_banana_a_to_z.png"
                    alt="Banana A to Z Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-black text-[#00583C] text-sm tracking-tight block">
                    BANANA A TO Z
                  </span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">
                    Circular Bio-Economy
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-1 py-5 text-sm font-semibold text-gray-700">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between hover:text-[#00583C] hover:bg-emerald-50/50 py-2.5 px-3 rounded-xl transition"
              >
                <span>Home</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between hover:text-[#00583C] hover:bg-emerald-50/50 py-2.5 px-3 rounded-xl transition"
              >
                <span>About Us</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
              </Link>
              <Link
                href="/#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between hover:text-[#00583C] hover:bg-emerald-50/50 py-2.5 px-3 rounded-xl transition"
              >
                <span>Products & Solutions</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
              </Link>
              <Link
                href="/#value-chain"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between hover:text-[#00583C] hover:bg-emerald-50/50 py-2.5 px-3 rounded-xl transition"
              >
                <span>Value Chain & News</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
              </Link>
              <Link
                href="/#facility-tour"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between hover:text-[#00583C] hover:bg-emerald-50/50 py-2.5 px-3 rounded-xl transition"
              >
                <span>Facility Virtual Tour</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between hover:text-[#00583C] hover:bg-emerald-50/50 py-2.5 px-3 rounded-xl transition"
              >
                <span>Contact Us</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
              </Link>
            </nav>
          </div>

          {/* Mobile Drawer Bottom CTAs */}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="https://wa.me/8801861073333"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1EBE5D] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition transform active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Chat</span>
            </a>
            <button
              className="open-slide-viewer border border-gray-200 text-gray-700 hover:border-[#00583C] hover:text-[#00583C] font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition"
              data-slide="1"
            >
              <i className="fa-solid fa-file-powerpoint text-[#D9AF6F]"></i>
              <span>View Slide Deck</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
