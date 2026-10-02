"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroSequenceCanvas from './HeroSequenceCanvas';

// Cubic Hermite smoothstep for silky smooth easing without sudden tangent spikes
function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function HeroScrollSection() {
  const [activeProgress, setActiveProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = document.getElementById('hero-scroll-wrapper');
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const stickyHeight = window.innerHeight;
      const totalScroll = rect.height - stickyHeight;

      if (totalScroll > 0) {
        const scrolled = -rect.top;
        const progress = Math.min(1, Math.max(0, scrolled / totalScroll));
        targetProgressRef.current = progress;
      }
    };

    const updateLoop = () => {
      const target = targetProgressRef.current;
      const current = smoothProgressRef.current;
      const diff = target - current;

      // 0.13 gives crisp response + zero jitter, perfectly synced with canvas
      if (Math.abs(diff) > 0.0001) {
        smoothProgressRef.current += diff * 0.13;
        setActiveProgress(smoothProgressRef.current);
      } else if (current !== target) {
        smoothProgressRef.current = target;
        setActiveProgress(target);
      }

      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    smoothProgressRef.current = targetProgressRef.current;
    setActiveProgress(targetProgressRef.current);
    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Helper to compute smooth opacity, vertical translation, and scale for each stage
  const getStageStyle = (start, end, peakStart, peakEnd) => {
    const progress = activeProgress;
    if (progress < start || progress > end) {
      return {
        opacity: 0,
        transform: 'translate3d(0, 24px, 0) scale(0.97)',
        pointerEvents: 'none',
        visibility: 'hidden',
        willChange: 'transform, opacity',
      };
    }

    let opacity = 1;
    let translateY = 0;
    let scale = 1;

    if (progress < peakStart) {
      // Smooth entrance
      const t = smoothstep(start, peakStart, progress);
      opacity = t;
      translateY = (1 - t) * 22; // enters gently from 22px below
      scale = 0.97 + t * 0.03;   // scales smoothly from 0.97 to 1.00
    } else if (progress > peakEnd) {
      // Smooth exit
      const t = smoothstep(peakEnd, end, progress);
      opacity = 1 - t;
      translateY = -t * 20;      // ascends gently by 20px
      scale = 1 + t * 0.02;      // subtle luxury expansion on dissolve
    }

    return {
      opacity: Number(opacity.toFixed(3)),
      transform: `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`,
      pointerEvents: opacity > 0.35 ? 'auto' : 'none',
      visibility: opacity > 0.005 ? 'visible' : 'hidden',
      willChange: 'transform, opacity',
    };
  };

  // Stage ranges with smooth overlapping cross-dissolves:
  // Stage 0: Banana Tree & Vision (0.00 - 0.28)
  const stage0Style = getStageStyle(0.00, 0.28, 0.00, 0.18);
  // Stage 1: Cellular Microstructure (0.20 - 0.52)
  const stage1Style = getStageStyle(0.20, 0.52, 0.28, 0.44);
  // Stage 2: Pure Golden Banana Fiber (0.44 - 0.76)
  const stage2Style = getStageStyle(0.44, 0.76, 0.52, 0.68);
  // Stage 3: Handcrafted Luxury & Impact (0.68 - 1.00)
  const stage3Style = getStageStyle(0.68, 1.00, 0.76, 1.00);

  return (
    <div id="hero-scroll-wrapper" className="relative h-[280vh] sm:h-[320vh]">
      <section className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between pt-20 pb-2 sm:pt-24">
        {/* Full-width Background Canvas & Instant First-Paint Poster */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Instant SSR First-Paint Poster: Shows immediately on mobile & desktop before JS hydration */}
          <img
            src="/frames/frame-001.webp"
            alt="Banana Tree Agro Transformation"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none z-0"
          />
          <HeroSequenceCanvas
            containerId="hero-scroll-wrapper"
            className="w-full h-full relative z-[1]"
          />
          {/* Subtle soft gradient wash for optimal text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBFBF8]/50 via-transparent to-[#FBFBF8]/30 pointer-events-none z-[2]"></div>
        </div>

        {/* Ambient background glowing orbs */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none ambient-glow z-0"></div>
        <div
          className="absolute top-36 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none ambient-glow z-0"
          style={{ animationDelay: '-5s' }}
        ></div>

        {/* Dynamic Interactive Stage Content (Left and Right of the Central Banana Tree) */}
        <div className="w-full px-5 sm:px-10 lg:px-12 xl:px-16 relative z-10 my-auto pointer-events-none">
          <div className="relative min-h-[380px] sm:min-h-[420px] flex items-center">
            
            {/* ================= STAGE 0: BANANA TREE & VISION ================= */}
            <div
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              style={stage0Style}
            >
              {/* Left Side: Main Title */}
              <div className="lg:col-span-5 max-w-[490px] pointer-events-auto relative">
                {/* Soft luxury ambient aura behind typography */}
                <div className="absolute -left-8 -top-8 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-500/20 text-[#00583C] text-[11px] font-bold uppercase tracking-wider mb-3 backdrop-blur-md shadow-xs">
                  <i className="fa-solid fa-seedling text-emerald-600"></i>
                  <span>Circular Bio-Economy</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#07150C] leading-[1.08] mb-3 font-heading select-none">
                  <span className="block hero-heading-shadow">Turning Agricultural</span>
                  <span className="block hero-heading-shadow">Waste into</span>
                  <span className="block animate-text-shimmer-emerald pb-0.5">
                    Global Luxury
                  </span>
                  <span className="block animate-text-shimmer-gold">
                    Eco Products
                  </span>
                </h1>
              </div>

              {/* Center 2 cols reserved for unobstructed view of the banana tree */}
              <div className="hidden lg:block lg:col-span-2"></div>

              {/* Right Side: Key Pillars Cards */}
              <div className="hidden lg:flex lg:col-span-5 flex-col gap-2.5 max-w-[370px] ml-auto pointer-events-auto">
                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-[#00583C] flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-leaf"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">100% Bio-Organic</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        Zero chemical retting, completely biodegradable & circular.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">High-Tensile Strength</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        High cellulose density matching synthetic industrial standards.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-[#00583C] flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Target Global Corridors</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        Export pipelines targeting EU, Japan, US & Middle East.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STAGE 1: CELLULAR MICROSTRUCTURE ================= */}
            <div
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              style={stage1Style}
            >
              {/* Left Side: Microstructure Title */}
              <div className="lg:col-span-5 max-w-[480px] pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-500/20 text-[#00583C] text-[11px] font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
                  <i className="fa-solid fa-microscope text-emerald-600"></i>
                  <span>Microscopic Anatomy</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#07150C] leading-[1.1] mb-4 font-heading">
                  <span className="block hero-heading-shadow">Engineered by Nature,</span>
                  <span className="block animate-text-shimmer-emerald">
                    Perfected by Science
                  </span>
                </h2>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 border border-black/5 text-xs font-bold text-[#00583C]">
                  <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  <span>Zero Synthetics • 100% Plant Polymers</span>
                </div>
              </div>

              {/* Center 2 cols reserved for unobstructed view */}
              <div className="hidden lg:block lg:col-span-2"></div>

              {/* Right Side: Structural Metrics */}
              <div className="hidden lg:flex lg:col-span-5 flex-col gap-2.5 max-w-[370px] ml-auto pointer-events-auto">
                <div className="liquid-glass-pill rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-black text-[#00583C] mb-1">65% Cellulose</div>
                  <div className="text-xs font-bold text-gray-800">Dense Structural Matrix</div>
                  <div className="text-[11px] text-gray-600 mt-1">
                    Gives banana fiber remarkable elasticity and fracture-resistant tensile performance.
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-black text-amber-700 mb-1">40% Lighter</div>
                  <div className="text-xs font-bold text-gray-800">Ultra-Lightweight Density</div>
                  <div className="text-[11px] text-gray-600 mt-1">
                    Significantly lighter than conventional jute, ideal for aerospace & automotive composites.
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STAGE 2: PURE GOLDEN FIBER ================= */}
            <div
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              style={stage2Style}
            >
              {/* Left Side: Golden Fiber */}
              <div className="lg:col-span-5 max-w-[480px] pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-500/20 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
                  <i className="fa-solid fa-gem text-amber-600"></i>
                  <span>Grade-A Extraction</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#07150C] leading-[1.1] mb-4 font-heading">
                  <span className="block hero-heading-shadow">From Raw Biomass to</span>
                  <span className="block animate-text-shimmer-gold">
                    Pure Golden Fiber
                  </span>
                </h2>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 border border-black/5 text-xs font-bold text-amber-800">
                  <i className="fa-solid fa-certificate text-amber-500"></i>
                  <span>Export Grade • Ready for Spinning & Pulping</span>
                </div>
              </div>

              {/* Center 2 cols reserved for unobstructed view */}
              <div className="hidden lg:block lg:col-span-2"></div>

              {/* Right Side: Industrial Applications */}
              <div className="hidden lg:flex lg:col-span-5 flex-col gap-2.5 max-w-[370px] ml-auto pointer-events-auto">
                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-shirt"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Luxury Textile Blends</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        Spun into soft, silky yarns for eco-conscious luxury fashion.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-[#00583C] flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-box-open"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Industrial Kraft & Paper</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        High burst factor packaging paper replacing non-renewable plastics.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-spray-can-sparkles"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Sanitary & Medical Grade</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        Naturally hypoallergenic with high fluid absorption capacity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STAGE 3: HANDCRAFTED LUXURY & VALUE CHAIN ================= */}
            <div
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              style={stage3Style}
            >
              {/* Left Side: Finished Products */}
              <div className="lg:col-span-5 max-w-[480px] pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-500/20 text-[#00583C] text-[11px] font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
                  <i className="fa-solid fa-hands-holding-circle text-emerald-600"></i>
                  <span>Empowering Tribal Communities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#07150C] leading-[1.1] mb-4 font-heading">
                  <span className="block hero-heading-shadow">From Hill Tracts to</span>
                  <span className="block animate-text-shimmer-emerald">
                    Global Luxury Living
                  </span>
                </h2>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00583C] text-white text-xs font-bold shadow-md hover:bg-[#07150C] transition transform active:scale-95"
                >
                  <span>Explore Products Catalog</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>

              {/* Center 2 cols reserved for unobstructed view */}
              <div className="hidden lg:block lg:col-span-2"></div>

              {/* Right Side: Finished Commodities */}
              <div className="hidden lg:flex lg:col-span-5 flex-col gap-2.5 max-w-[370px] ml-auto pointer-events-auto">
                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-[#00583C] flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-basket-shopping"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Artisan Woven Decor</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        High-end baskets, table runners, bags, and contemporary interior crafts.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-mountain-sun"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Organic Vermicompost</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        Residual biomass transformed into microbial soil boosters.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass-pill rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-[#00583C] flex items-center justify-center text-base shrink-0">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#07150C]">Fair-Trade B2B Partnership</div>
                      <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
                        Direct ethical sourcing empowering over 500+ rural families.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Global Export Marquee Ticker */}
        <div className="mt-auto pt-2.5 pb-1 border-t border-sand-200/60 relative z-10">
          <div className="text-[11px] font-extrabold text-[#00583C] uppercase tracking-[0.16em] mb-1.5 text-center">
            Trusted Global Target Export Corridors & Standards
          </div>
          <div className="marquee-container">
            <div className="marquee-content flex items-center gap-8 text-xs font-bold text-gray-700">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> European Union (Germany, France, Italy)
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> Japan & South Korea
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> United States & Canada
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> Australia & New Zealand
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> Middle East (UAE, Saudi Arabia)
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-certificate text-amber-500"></i> 100% Biodegradable & Compostable
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-emerald-600"></i> Zero Chemical Retting
              </span>
              <span className="text-gray-300">•</span>
              {/* Duplicate for infinite seamless scroll */}
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> European Union (Germany, France, Italy)
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> Japan & South Korea
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> United States & Canada
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-emerald-600"></i> Australia & New Zealand
              </span>
              <span className="text-gray-300">•</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
