import React from 'react';
import Link from 'next/link';

export default function FooterBar() {
  return (
    <footer id="footer-bar" className="w-full bg-[#07150C] text-white border-t border-emerald-950/80 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left: Brand Identity with Amber Sprout Icon & Official Subtitle */}
        <div className="flex items-center gap-3.5">
          {/* Amber Sprout Squircle Icon */}
          <Link href="/" className="group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#07150C] flex items-center justify-center shadow-md transition transform group-hover:scale-105">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22C12 22 12 15 12 11C12 7 9 4 5 4C4.5 4 4 4.1 3.6 4.3C3.2 6 3 8 3 10C3 15 7 19 12 22Z" />
                <path d="M12 11C12 6.5 15.5 3 20 3C20.5 3 21 3.1 21.4 3.3C21.8 5 22 7 22 9C22 14.5 17.5 19 12 19V11Z" />
              </svg>
            </div>
          </Link>

          {/* Title and Subtitle */}
          <div className="flex flex-col">
            <Link href="/" className="hover:opacity-90 transition">
              <span className="text-base sm:text-lg font-black text-white tracking-wider uppercase font-heading block leading-tight">
                BANANA A TO Z
              </span>
            </Link>
            <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-400 tracking-tight block mt-0.5">
              A Flagship Project of SOMPRITY A2Z • Export, Import &amp; Distribution
            </span>
          </div>
        </div>

        {/* Right: Horizontal Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-[13px] font-medium text-gray-200">
          <Link 
            href="/about" 
            className="hover:text-emerald-400 transition-colors duration-150"
          >
            About
          </Link>
          <Link 
            href="/#products" 
            className="hover:text-emerald-400 transition-colors duration-150"
          >
            Export Products
          </Link>
          <Link 
            href="/#calculator" 
            className="hover:text-emerald-400 transition-colors duration-150"
          >
            ESG Calculator
          </Link>
          <Link 
            href="/#faq" 
            className="hover:text-emerald-400 transition-colors duration-150"
          >
            FAQ
          </Link>
          <Link 
            href="/#inquiry" 
            className="hover:text-emerald-400 transition-colors duration-150"
          >
            Quotation
          </Link>
        </nav>

      </div>
    </footer>
  );
}
