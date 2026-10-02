"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const heroSectionRef = useRef(null);
  const heroParallaxBgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const hero = heroSectionRef.current;
          const bg = heroParallaxBgRef.current;
          const content = heroContentRef.current;

          if (hero && bg) {
            const heroHeight = hero.offsetHeight;
            if (scrollY <= heroHeight + 200) {
              const parallaxOffset = scrollY * 0.35;
              bg.style.transform = `translate3d(0px, ${parallaxOffset.toFixed(2)}px, 0px) scale(1.06)`;

              if (content) {
                const contentOffset = scrollY * 0.18;
                const opacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.85)));
                content.style.transform = `translate3d(0px, ${contentOffset.toFixed(2)}px, 0px)`;
                content.style.opacity = opacity.toFixed(3);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Hero Section: From Nature's Heart to the World's Future (Full-Height Parallax Hero) */}
      <section
        ref={heroSectionRef}
        id="heroSection"
        className="relative h-screen min-h-[640px] flex items-center justify-center text-center overflow-hidden bg-[#0A2619]"
      >
        {/* Parallax Background Image with Overlay */}
        <div className="absolute -top-[20%] left-0 w-full h-[140%] z-0 pointer-events-none overflow-hidden">
          <img
            ref={heroParallaxBgRef}
            id="heroParallaxBg"
            src="/assets/images/about/hero_man_carrying_bananas.webp"
            alt="Farmer in Banana Plantation"
            className="w-full h-full object-cover object-center filter brightness-[0.78] will-change-transform transition-none"
            style={{ transform: 'translate3d(0px, 0px, 0px) scale(1.06)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45"></div>
        </div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center justify-center will-change-transform"
        >
      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] bg-white/20 backdrop-blur-md text-white border border-white/30 uppercase mb-6 shadow-sm">
        About Us
      </span>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight font-heading text-center">
        From Nature’s Heart<br />
        <span className="text-[#D9AF6F]">to the World’s Future</span>
      </h1>
    </div>

    {/* Bottom Organic Torn Paper Wave Transition */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
      <img src="/assets/images/about/torn_paper_wave.svg" className="w-full h-10 sm:h-14 md:h-18 lg:h-24 object-cover object-bottom block" alt="Paper wave" />
    </div>
  </section>

  {/* Section 1: 6-Stage Journey & Story (Exact Musapacta Tree Drawing Layout) */}
  <section id="story" className="relative bg-white pt-16 sm:pt-20 pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:block relative">
        
        {/* Top Half: Item 1 on Left, Tree Drawing in Center, Item 2 on Right */}
        <div className="relative min-h-[460px] flex items-start justify-between">
          
          {/* Background Banana Tree Line Drawing (Colorful Botanical Watercolor Version) */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none select-none z-0">
            <img src="/assets/images/about/banana_tree_draw_background_colorful.webp" alt="Colorful Banana Tree Illustration" className="w-full h-full object-contain object-bottom block" />
          </div>

          {/* Item 1 (Left Column) */}
          <div className="relative z-10 w-[33%] pt-8 pr-6">
            <div className="w-14 h-14 mb-4">
              <img src="/assets/images/about/count_01.svg" alt="01" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[17px] text-[#1C2127] mb-3 leading-snug font-heading">
              Potential in the Banana Stem
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
              But SOMPRITY A2Z’s story is not just about innovation; it’s about purpose. In a world facing environmental crises, we have dedicated ourselves to making a difference. By reducing waste and promoting sustainable agriculture, SOMPRITY A2Z is not only preserving the planet for future generations but also supporting local communities that rely on the banana plant for their livelihood.
            </p>
          </div>

          {/* Center Spacer for Tree */}
          <div className="w-[30%] pointer-events-none"></div>

          {/* Item 2 (Right Column) */}
          <div className="relative z-10 w-[33%] pt-8 pl-6">
            <div className="w-14 h-14 mb-4">
              <img src="/assets/images/about/count_02.svg" alt="02" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[17px] text-[#1C2127] mb-3 leading-snug font-heading">
              From Banana Plant to Sustainable Solutions
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
              SOMPRITY A2Z’s journey began with a deep respect for nature and a desire to create products that honor the environment. The banana plant, a symbol of resilience and life in our culture, became the foundation of our innovative approach. Through advanced technology and a commitment to sustainability, SOMPRITY A2Z turned the overlooked banana fiber into a versatile, eco-friendly material that could meet the needs of industries worldwide.
            </p>
          </div>

        </div>

        {/* Bottom Half: Items 3, 4, 5, 6 in 4 Columns directly under the Baseline */}
        <div className="grid grid-cols-4 gap-8 pt-10">
          
          {/* Item 3 */}
          <div className="space-y-3">
            <div className="w-14 h-14">
              <img src="/assets/images/about/count_03.svg" alt="03" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[15px] text-[#1C2127] leading-snug font-heading">
              More Than Innovation
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Rooted in the rich, fertile soils of Bandarban, SOMPRITY A2Z was born from a vision to transform the ordinary into the extraordinary. Where others saw waste in the banana stem, SOMPRITY A2Z saw potential—an untapped resource that could revolutionize the way the world thinks about sustainable materials.
            </p>
          </div>

          {/* Item 4 */}
          <div className="space-y-3">
            <div className="w-14 h-14">
              <img src="/assets/images/about/count_04.svg" alt="04" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[15px] text-[#1C2127] leading-snug font-heading">
              The Heart of SOMPRITY A2Z
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              The people behind SOMPRITY A2Z are as integral to the story as the products we create. From the farmers who cultivate the banana plants to the skilled workers who transform the fibers, every step of the process is infused with care, expertise, and a shared commitment to sustainability. This human element adds depth to the brand, making SOMPRITY A2Z more than just a manufacturer—it’s a community dedicated to positive change.
            </p>
          </div>

          {/* Item 5 */}
          <div className="space-y-3">
            <div className="w-14 h-14">
              <img src="/assets/images/about/count_05.svg" alt="05" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[15px] text-[#1C2127] leading-snug font-heading">
              SOMPRITY A2Z’s Vision
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              As SOMPRITY A2Z looks to the future, its vision is clear: to lead the world in sustainable innovation by expanding the use of banana fibers and other natural materials across industries. Our goal is to inspire a global movement where sustainability and progress go hand in hand.
            </p>
          </div>

          {/* Item 6 */}
          <div className="space-y-3">
            <div className="w-14 h-14">
              <img src="/assets/images/about/count_06.svg" alt="06" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[15px] text-[#1C2127] leading-snug font-heading">
              Weaving a Sustainable Future
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              In every fiber, SOMPRITY A2Z weaves a story of hope, resilience, and innovation. It’s a story that starts in Bandarban but touches every corner of the globe, inviting everyone to join in crafting a future that respects the past, enriches the present, and secures the future.
            </p>
          </div>

        </div>

      </div>

      {/* Mobile & Tablet Layout (< 1024px) */}
      <div className="block lg:hidden space-y-10">
        {/* Tree Illustration at Top (Colorful Botanical Watercolor Version) */}
        <div className="w-full flex justify-center pb-6 border-b border-gray-100">
          <img src="/assets/images/about/banana_tree_colorful_mobile.webp" alt="Colorful Banana Tree Drawing" className="w-full max-w-[260px] h-auto object-contain" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Mobile Item 1 */}
          <div className="space-y-3">
            <div className="w-12 h-12">
              <img src="/assets/images/about/count_01.svg" alt="01" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-base text-[#1C2127]">Potential in the Banana Stem</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              But SOMPRITY A2Z’s story is not just about innovation; it’s about purpose. In a world facing environmental crises, we have dedicated ourselves to making a difference. By reducing waste and promoting sustainable agriculture, SOMPRITY A2Z is not only preserving the planet for future generations but also supporting local communities that rely on the banana plant for their livelihood.
            </p>
          </div>

          {/* Mobile Item 2 */}
          <div className="space-y-3">
            <div className="w-12 h-12">
              <img src="/assets/images/about/count_02.svg" alt="02" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-base text-[#1C2127]">From Banana Plant to Sustainable Solutions</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              SOMPRITY A2Z’s journey began with a deep respect for nature and a desire to create products that honor the environment. The banana plant, a symbol of resilience and life in our culture, became the foundation of our innovative approach.
            </p>
          </div>

          {/* Mobile Item 3 */}
          <div className="space-y-3">
            <div className="w-12 h-12">
              <img src="/assets/images/about/count_03.svg" alt="03" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-base text-[#1C2127]">More Than Innovation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Rooted in the rich, fertile soils of Bandarban, SOMPRITY A2Z was born from a vision to transform the ordinary into the extraordinary. Where others saw waste in the banana stem, SOMPRITY A2Z saw potential.
            </p>
          </div>

          {/* Mobile Item 4 */}
          <div className="space-y-3">
            <div className="w-12 h-12">
              <img src="/assets/images/about/count_04.svg" alt="04" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-base text-[#1C2127]">The Heart of SOMPRITY A2Z</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              The people behind SOMPRITY A2Z are as integral to the story as the products we create. From the farmers to skilled artisans, every step reflects craftsmanship, ethical wages, and shared socio-economic prosperity.
            </p>
          </div>

          {/* Mobile Item 5 */}
          <div className="space-y-3">
            <div className="w-12 h-12">
              <img src="/assets/images/about/count_05.svg" alt="05" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-base text-[#1C2127]">SOMPRITY A2Z’s Vision</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our vision is clear: to lead the world in sustainable innovation by expanding the use of banana fibers and other natural materials across industries.
            </p>
          </div>

          {/* Mobile Item 6 */}
          <div className="space-y-3">
            <div className="w-12 h-12">
              <img src="/assets/images/about/count_06.svg" alt="06" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-base text-[#1C2127]">Weaving a Sustainable Future</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              In every fiber, SOMPRITY A2Z weaves a story of hope, resilience, and innovation. It’s a story that starts in Bandarban but touches every corner of the globe.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Section 2: Our Mission & Our Vision (Alternating Organic Framed Cards) */}
  <section className="py-20 lg:py-28 bg-[#FBFBF8] relative overflow-hidden border-t border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* Row 1: Our Mission */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Visual Column */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md group">
            <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white">
              <img src="/assets/images/about/our_mission_thumbnail.webp" alt="Banana Fiber Extraction Mission" loading="lazy" decoding="async" className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#00583C] block">Core Commitment</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#00583C] tracking-tight">Our Mission</h2>
          
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div className="flex items-start gap-3.5">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#00583C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <p><strong>Pioneering Bio-Valorization:</strong> SOMPRITY A2Z is dedicated to pioneering high-grade, sustainable materials from banana plant fibers, pseudostem bark, and natural agricultural byproducts.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#00583C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <p><strong>Industrial Transformation:</strong> We strive to revolutionize modern industries by providing carbon-negative alternatives that exceed commercial performance and ESG compliance metrics.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#00583C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <p><strong>Inclusive Prosperity:</strong> Our mission delivers tangible value at every stage—supporting indigenous hill farming families, advancing women artisans, and delivering exceptional goods worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Our Vision */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#00583C] block">Future Horizon</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#00583C] tracking-tight">Our Vision</h2>
          
          <blockquote className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug pl-6 border-l-4 border-[#D9AF6F] italic">
            “To lead the global transition towards a sustainable future by transforming agricultural resources into innovative bio-materials that empower industries, uplift communities, and protect our planet.”
          </blockquote>

          <p className="text-gray-600 text-sm leading-relaxed">
            We envision an industrial standard where zero agricultural biomass is burned or dumped. By bridging agrarian Bangladesh with global eco-markets, SOMPRITY A2Z establishes an enduring benchmark for ethical bio-manufacturing.
          </p>
        </div>

        {/* Visual Column */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md group">
            <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white">
              <img src="/assets/images/about/our_vision_thumbnail.webp" alt="Banana Fiber Drying Vision" loading="lazy" decoding="async" className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Section 3: We Create Banana Ecosystem (Circular Infographic Section) */}
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <img src="/assets/images/about/ecosystem_icon.webp" alt="Ecosystem Recycle Icon" className="w-14 h-14 object-contain" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1C2127] tracking-tight mb-3">
          We Create Banana Ecosystem
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          SOMPRITY A2Z has developed a comprehensive ecosystem centered around closed-loop sustainability, technological innovation, and measurable community empowerment.
        </p>
      </div>

      {/* Content Grid: Diagram on Left + 7 Pillars on Right */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Ecosystem Wheel Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50 group">
            <img src="/assets/images/about/our_ecosystem_thumbnail.webp" alt="Banana A to Z Circular Bio-Ecosystem Infographic" loading="lazy" decoding="async" className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" />
          </div>
        </div>

        {/* Right: 7 Core Impact Pillars with Circular Icons */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Pillar 1 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Closed-Loop Economy</h4>
              <p className="text-xs text-gray-600 mt-0.5">Reusing resources and minimizing industrial waste at every stage of extraction and processing.</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-leaf"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Zero-Waste Agriculture</h4>
              <p className="text-xs text-gray-600 mt-0.5">Every part of the banana plant is valorized into textiles, sun-dried crafts, sap fertilizer, and compost.</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Economic Upliftment</h4>
              <p className="text-xs text-gray-600 mt-0.5">Boosts agricultural earnings for Bandarban hill farmers and reduces regional poverty.</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-hands-holding-child"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Job Creation &amp; Gender Equity</h4>
              <p className="text-xs text-gray-600 mt-0.5">Generates sustainable artisan employment, empowering women through fair trade craftsmanship.</p>
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Global Export Growth</h4>
              <p className="text-xs text-gray-600 mt-0.5">Supplying certified eco-fiber to European, North American, and Japanese textile and packaging markets.</p>
            </div>
          </div>

          {/* Pillar 6 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-recycle"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Agro-Waste Solution</h4>
              <p className="text-xs text-gray-600 mt-0.5">Diverts tons of discarded pseudostems from decomposing and emitting damaging methane gases.</p>
            </div>
          </div>

          {/* Pillar 7 */}
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition">
            <div className="w-10 h-10 rounded-full bg-[#00583C] text-[#D9AF6F] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Eco-Friendly Consumer Trends</h4>
              <p className="text-xs text-gray-600 mt-0.5">Sets forward-looking design trends for modern conscious consumers and corporate sustainability mandates.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>


  {/* Section 5: Contact Us & Wholesale Inquiry Section */}
  <section id="contact" className="py-20 lg:py-28 bg-[#FDFDFD] border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#00583C] block">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C2127] tracking-tight">Contact Us</h2>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            We are always available to answer your questions regarding wholesale raw fiber orders, private label handicraft contracts, or facility tours in Bandarban. Reach out today and our export specialists will reply promptly.
          </p>

          <div className="space-y-4 pt-4 border-t border-gray-100 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00583C] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <a href="mailto:info@sompritya2z.com" className="hover:text-[#00583C] font-semibold transition">info@sompritya2z.com</a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00583C] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-phone"></i>
              </div>
              <a href="tel:+8801861073333" className="hover:text-[#00583C] font-semibold transition">+880 1861 073333</a>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00583C] flex items-center justify-center shrink-0 mt-1">
                <i className="fa-solid fa-industry"></i>
              </div>
              <div>
                <span className="font-bold text-gray-900 block">Bandarban Production Hub:</span>
                <span className="text-xs text-gray-600">Bandarban Eco-Fiber Facility, Chittagong Hill Tracts, Bangladesh</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00583C] flex items-center justify-center shrink-0 mt-1">
                <i className="fa-solid fa-building"></i>
              </div>
              <div>
                <span className="font-bold text-gray-900 block">Corporate Head Office &amp; Showroom:</span>
                <span className="text-xs text-gray-600">House #14, Road #03, Block #B, Mirpur, Dhaka-1216, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Inquiry Form matching Musapacta */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
          <form action="#" className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
              <input type="text" required placeholder="Your name ..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00583C] focus:ring-1 focus:ring-[#00583C]" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Email *</label>
                <input type="email" required placeholder="Your email ..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00583C] focus:ring-1 focus:ring-[#00583C]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your WhatsApp / Phone</label>
                <input type="tel" placeholder="Your WhatsApp number ..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00583C] focus:ring-1 focus:ring-[#00583C]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Country</label>
              <input type="text" placeholder="Your country ..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00583C] focus:ring-1 focus:ring-[#00583C]" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Request / Message *</label>
              <textarea required rows="4" placeholder="Your message ..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00583C] focus:ring-1 focus:ring-[#00583C]"></textarea>
            </div>

            <button type="submit" className="w-full py-3.5 px-6 rounded-xl bg-[#00583C] hover:bg-[#D9AF6F] text-white hover:text-[#00583C] font-bold text-sm tracking-wider uppercase transition duration-300 shadow-md">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>

    </div>
  </section>

  
    </main>
  );
}
