"use client";

import React, { useState, useEffect } from 'react';

export default function PageUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-5 sm:right-6 bottom-[88px] sm:bottom-[92px] z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#00583C] text-white border-2 border-white/20 shadow-2xl shadow-[#00583C]/35 flex items-center justify-center text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#07150C] hover:shadow-[#00583C]/50 active:scale-95 group cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-75'
      }`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up group-hover:-translate-y-0.5 transition-transform duration-200"></i>

      {/* Floating tooltip */}
      <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#07150C]/90 text-white text-[11px] font-bold tracking-wide opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-lg">
        Back to Top
      </span>
    </button>
  );
}

