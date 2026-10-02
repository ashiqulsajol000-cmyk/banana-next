import React from 'react';
import Link from 'next/link';
import HeroScrollSection from '../../components/HeroScrollSection';

export default function Home() {
  return (
    <main>
      {/* Dynamic Hero Sticky Scroll Section with Animated Content on Left & Right */}
      <HeroScrollSection />

  {/* Executive About & Vision */}
  <section id="about" className="py-20 bg-white border-y border-sand-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Banana Tree Valorization Infographic */}
        <div className="lg:col-span-5 space-y-4">
          <div className="image-zoom-box rounded-2xl shadow-lg border border-sand-200 overflow-hidden bg-[#FAF7F0] p-1">
            <img 
              src="/assets/images/banana_tree_infographic.jpg" 
              alt="Complete Banana Tree Valorization & Circular Bio-Economy Infographic" 
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain rounded-xl transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
          <div className="p-5 rounded-2xl bg-sand-100 border border-sand-200">
            <div className="flex items-start gap-3">
              <div className="text-emerald-700 text-2xl mt-1"><i className="fa-solid fa-quote-left"></i></div>
              <div>
                <p className="text-xs italic text-gray-800 font-semibold leading-relaxed">
                  "From Waste to Wealth, From Nature to Future. What most people see as leftover waste, we see as a goldmine of pure nutrition, high-tensile fiber, and rural economic empowerment."
                </p>
                <div className="mt-2 text-xs font-black text-[#0F2F1D]">— SOMPRITY A2Z Executive Management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Text & Vision/Mission Cards */}
        <div className="lg:col-span-7 space-y-6 min-w-0">
          <div className="badge-pill-emerald">Executive Overview</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            From Agricultural Biomass to <span className="text-gradient-forest">Global Wealth</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The Bandarban hill tracts, alongside Bogura and Rangpur regions of Bangladesh, produce millions of cultivated and wild banana trees each season. Following harvest, the pseudo-stem stalks are routinely discarded or burned, causing air pollution and wasted potential.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Under the <strong>"Banana A to Z"</strong> project, <strong>SOMPRITY A2Z</strong> deploys mechanical decortication and artisanal processing to eliminate open burning entirely. We achieve <strong>100% biological valorization</strong>—generating zero landfill waste while creating high-value commodities for international trade.
          </p>

          {/* Vision & Mission Bento Cards */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-emerald-500 transition">
              <div className="flex items-center gap-2 text-[#0F1D4A] font-black text-sm mb-2">
                <i className="fa-solid fa-eye text-emerald-600"></i> OUR VISION
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                To establish Bangladesh's premier circular agro-fiber and handicraft industry by transforming natural agricultural waste into world-class export commodities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-emerald-500 transition">
              <div className="flex items-center gap-2 text-[#0F1D4A] font-black text-sm mb-2">
                <i className="fa-solid fa-bullseye text-amber-banana"></i> OUR MISSION
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-600 text-[10px]"></i> Empower rural women artisans</li>
                <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-600 text-[10px]"></i> Stop open-field agricultural burning</li>
                <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-600 text-[10px]"></i> Export-grade quality control for EU & US</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* NEW: Interactive Zero-Waste Yield & ESG Calculator */}
  <section id="calculator" className="py-20 bg-gradient-to-b from-[#FBFBF8] via-emerald-50/40 to-[#FBFBF8]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="badge-pill-emerald mb-3">Live ESG Impact Simulator</div>
        <h2 id="calcTitle" className="text-3xl sm:text-4xl font-black text-gray-900">
          Interactive Zero-Waste Yield & ESG Calculator
        </h2>
        <p id="calcSubtitle" className="text-gray-600 mt-3 text-sm sm:text-base">
          Select the volume of banana plants processed to calculate live fiber output, rural livelihood creation, and carbon emissions saved.
        </p>
      </div>

      {/* Calculator Box */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl">
        
        {/* Slider Control */}
        <div className="mb-10 max-w-2xl mx-auto text-center space-y-4">
          <div className="flex justify-between items-center text-sm font-bold">
            <span id="sliderLabel" className="text-gray-700 font-bold">Processed Banana Plants:</span>
            <span className="text-2xl sm:text-3xl font-black text-[#0F2F1D] bg-white px-4 py-1 rounded-2xl border border-emerald-200 shadow-sm">
              <span id="sliderDisplayVal">50,000</span> Trees
            </span>
          </div>
          
          <input type="range" id="treeSlider" min="5000" max="500000" step="5000" defaultValue="50000" className="custom-range" aria-label="Banana Plants Processed Slider" />
          
          <div className="flex justify-between text-[11px] font-bold text-gray-400 px-1">
            <span>5,000 Plants (Pilot Scale)</span>
            <span>100,000 Plants</span>
            <span>500,000 Plants (Full Industrial)</span>
          </div>
        </div>

        {/* Dynamic Output Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center">
            <div className="text-emerald-600 text-xl mb-1"><i className="fa-solid fa-scroll"></i></div>
            <div id="calcFiberYield" className="text-xl sm:text-2xl font-black text-gray-900">40.0 MT</div>
            <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Banana Fiber</div>
            <div className="text-[10px] text-gray-400">Textile & Technical Grade</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center">
            <div className="text-[#164227] text-xl mb-1"><i className="fa-solid fa-bag-shopping"></i></div>
            <div id="calcBags" className="text-xl sm:text-2xl font-black text-gray-900">20,000</div>
            <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Artisan Bags</div>
            <div className="text-[10px] text-gray-400">Handcrafted pieces</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center">
            <div className="text-amber-banana text-xl mb-1"><i className="fa-solid fa-bowl-food"></i></div>
            <div id="calcMushrooms" className="text-xl sm:text-2xl font-black text-gray-900">12,500 kg</div>
            <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Ball Mushrooms</div>
            <div className="text-[10px] text-gray-400">Nutrient biomass harvest</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center">
            <div className="text-[#0F1D4A] text-xl mb-1"><i className="fa-solid fa-seedling"></i></div>
            <div id="calcCompost" className="text-xl sm:text-2xl font-black text-gray-900">60.0 MT</div>
            <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Bio-Compost</div>
            <div className="text-[10px] text-gray-400">Potassium-rich organic soil</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center">
            <div className="text-emerald-500 text-xl mb-1"><i className="fa-solid fa-cloud-arrow-down"></i></div>
            <div id="calcCO2" className="text-xl sm:text-2xl font-black text-gray-900">105.0 Tons</div>
            <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">CO₂ Prevented</div>
            <div className="text-[10px] text-gray-400">No open field burning</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center">
            <div className="text-amber-warm text-xl mb-1"><i className="fa-solid fa-hand-holding-dollar"></i></div>
            <div id="calcIncome" className="text-xl sm:text-2xl font-black text-gray-900">$72,500</div>
            <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Rural Wages</div>
            <div className="text-[10px] text-gray-400">Direct community income</div>
          </div>

        </div>

        <div className="mt-8 text-center">
          <a href="#inquiry" className="btn-luxury text-xs py-2.5 px-6">
            <i className="fa-solid fa-file-invoice-dollar text-amber-banana"></i> Inquire for Container Commercial Volumes
          </a>
        </div>

      </div>
    </div>
  </section>

  {/* Bento Grid 1: The Circular Value Chain */}
  <section id="value-chain" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="badge-pill-emerald mb-3">Complete Valorization</div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
          One Banana Plant <span className="text-gradient-forest">→ 5 Distinct Revenue Streams</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Our integrated zero-waste protocol extracts value from concentric stalk layers, fruit, and pulp residues.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Bento 1: Coarse Fiber & Rope */}
        <div className="bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-sm">01</span>
              <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">Outer Green Layer</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Coarse Industrial Fiber & Rope Yarn</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Extracted from outermost sun-exposed layers. Excellent tensile endurance and salt-water weather resistance for geotextiles, marine cordage, and industrial burlap.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-semibold">
            <i className="fa-solid fa-check text-emerald-600"></i> Ropes • Geotextiles • Agricultural Twine
          </div>
        </div>

        {/* Bento 2: Banana Bark Sheets */}
        <div className="bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-sm">02</span>
              <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-full">Middle Stalk Layer</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Supple Sun-Dried Banana Bark</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Naturally textured, lightweight, and durable sheets peeled and dried. A premier sustainable alternative to faux leather and synthetic plastic craft sheeting.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-semibold">
            <i className="fa-solid fa-check text-amber-banana"></i> Premium Bags • Baskets • Luxury Packaging
          </div>
        </div>

        {/* Bento 3: Silky Fine Fiber Yarn */}
        <div className="bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-900 font-black flex items-center justify-center text-sm">03</span>
              <span className="text-[10px] font-black text-indigo-900 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">Inner Core</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Fine Decorticated Textile Yarn</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Silky, breathable, and lustrous micro-fibers with high tensile modulus. The cornerstone for sustainable denim blends, luxury eco-apparel, and bio-composites.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-semibold">
            <i className="fa-solid fa-check text-indigo-600"></i> Sustainable Fashion • Denim Wefts • Yarns
          </div>
        </div>

        {/* Bento 4: Organic Mushrooms */}
        <div className="bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-sm">04</span>
              <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">Biomass Residue</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Organic Ball Mushroom Cultivation</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              The fibrous pulp byproduct forms a pristine microbial mycelium bed beneath forest tree canopies, yielding gourmet edible ball mushrooms without artificial inputs.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-semibold">
            <i className="fa-solid fa-check text-emerald-600"></i> Fresh Gourmet Mushrooms • Food Security
          </div>
        </div>

        {/* Bento 5: Potassium Bio-Compost */}
        <div className="bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-green-100 text-green-800 font-black flex items-center justify-center text-sm">05</span>
              <span className="text-[10px] font-black text-green-800 uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded-full">Soil Regeneration</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Microbial Bio-Fertilizer Compost</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Decomposed pulp residue returned to betel nut and tea gardens, replenishing vital potassium and microbial carbon to heal depleted agricultural soils.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-semibold">
            <i className="fa-solid fa-check text-emerald-600"></i> 100% Organic Soil Conditioner • High Potassium
          </div>
        </div>

        {/* Bento 6: Fruit Stream Agro-Snacks */}
        <div className="bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-yellow-100 text-yellow-800 font-black flex items-center justify-center text-sm">06</span>
              <span className="text-[10px] font-black text-yellow-800 uppercase tracking-wider bg-yellow-50 px-2 py-0.5 rounded-full">Fruit Stream</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Vacuum-Fried Chips & Protein Bars</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Fresh Cavendish crop transformed via low-temperature vacuum-frying (50% less oil) and nutrient-dense 12g plant protein bars for global healthy retail.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-semibold">
            <i className="fa-solid fa-check text-amber-banana"></i> Low-Oil Crisps • 12g Vegan Protein Snack
          </div>
        </div>

      </div>

      {/* Industrial Decortication Banner */}
      <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-sand-200 bg-sand-50 grid lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 image-zoom-box">
          <img src="/assets/images/fiber_extraction_process.webp" alt="Mechanical Decortication & Banana Fiber Textile Facility" loading="lazy" decoding="async" className="w-full h-64 lg:h-full object-cover" />
        </div>
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
          <div className="badge-pill-emerald">Decortication Standard</div>
          <h4 className="text-2xl font-bold text-gray-900">100% Mechanical Extraction — Zero Chemical Effluent</h4>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Unlike synthetic viscose or hazardous chemical acid retting methods, SOMPRITY A2Z relies on mechanical decortication machines developed for uniform fiber extraction. The natural cellulose integrity, elasticity, and sheen remain intact.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#0F2F1D] pt-2">
            <span><i className="fa-solid fa-circle-check text-emerald-600"></i> Pure Mechanical Stripping</span>
            <span><i className="fa-solid fa-circle-check text-emerald-600"></i> Sun-Dried & Moisture Controlled</span>
            <span><i className="fa-solid fa-circle-check text-emerald-600"></i> Zero Hazardous Waste</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Product Showcase 2.0 (Export E-Catalog) */}
  <section id="products" className="py-20 products-leaves-bg border-t border-emerald-900/40">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#07150C]/80 text-emerald-400 border border-emerald-500/40 backdrop-blur-md mb-3 shadow-lg">
            <i className="fa-solid fa-layer-group text-emerald-400 text-[10px]"></i> Export Catalog 2.0
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">
            Core Export <span className="text-[#34D399] drop-shadow-md">Product Lines</span>
          </h2>
          <p className="text-emerald-100/90 mt-2 text-sm sm:text-base max-w-xl font-medium drop-shadow">
            Commercial-grade sustainable raw materials, textiles, and finished retail goods for international B2B buyers.
          </p>
        </div>

        {/* Filter Pill Tabs (Liquid Glass) */}
        <div className="liquid-glass-tab-bar flex flex-wrap gap-2 p-1.5 rounded-2xl">
          <button className="product-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-[#0F2F1D] text-white shadow-lg" data-category="all">
            All (5)
          </button>
          <button className="product-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-white/80 hover:text-white" data-category="bark">
            Banana Bark
          </button>
          <button className="product-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-white/80 hover:text-white" data-category="fiber">
            Banana Fiber
          </button>
          <button className="product-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-white/80 hover:text-white" data-category="crafts">
            Handicrafts
          </button>
          <button className="product-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-white/80 hover:text-white" data-category="food">
            Agro-Snacks
          </button>
          <button className="product-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-white/80 hover:text-white" data-category="organic">
            Bio-Fertilizer
          </button>
        </div>
      </div>

      {/* Products Grid (Authentic Liquid Glass Aesthetic) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Banana Bark */}
        <div className="product-card liquid-glass-card flex flex-col justify-between" data-category="bark">
          <div>
            <div className="liquid-glass-image relative h-44 mb-3">
              <img src="/assets/images/banana_bark_texture.jpg" alt="Banana Bark Sheets" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#07150C]/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                Raw Biomaterial
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 drop-shadow">1. Sun-Dried Banana Bark</h3>
              <p className="text-xs text-amber-300 font-semibold mb-2">Supple, Textured & Eco-Leather Substitute</p>
              <p className="text-xs text-emerald-50/90 mb-3 leading-relaxed line-clamp-2">
                Carefully peeled from middle concentric stalk layers. Flexible, durable, and fungus-treated for luxury packaging and handicraft manufacturing.
              </p>

              {/* Specs Mini Box */}
              <div className="liquid-glass-inner rounded-xl p-2.5 text-[11px] space-y-1 mb-3">
                <div className="flex justify-between"><span className="text-emerald-200/80">Origin:</span> <span className="font-bold text-white">Bandarban, Bangladesh</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Moisture:</span> <span className="font-bold text-emerald-400">&lt; 11.5% (Sun-Dried)</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Packaging:</span> <span className="font-bold text-white">25kg / 50kg Cartons</span></div>
              </div>
            </div>
          </div>
          <div className="px-2 pt-0">
            <button className="open-quote-modal w-full liquid-glass-btn justify-center text-xs py-2.5 rounded-xl font-bold flex items-center gap-2" data-product-key="Banana Bark">
              <i className="fa-solid fa-file-lines"></i> View Lab Specs & Request Sample
            </button>
          </div>
        </div>

        {/* Card 2: Banana Fiber */}
        <div className="product-card liquid-glass-card flex flex-col justify-between" data-category="fiber">
          <div>
            <div className="liquid-glass-image relative h-44 mb-3">
              <img src="/assets/images/banana_fiber_drying.jpg" alt="Banana Fiber Drying" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#0F1D4A]/90 text-blue-300 border border-blue-500/40 backdrop-blur-md text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                Textile Grade
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 drop-shadow">2. Decorticated Banana Fiber</h3>
              <p className="text-xs text-emerald-300 font-semibold mb-2">High-Tensile Modulus & Silky Luster</p>
              <p className="text-xs text-emerald-50/90 mb-3 leading-relaxed line-clamp-2">
                Extracted from the stalk inner core. 100% natural, biodegradable substitute for synthetic polyester in eco-denim, technical textiles, and automotive composites.
              </p>

              <div className="liquid-glass-inner rounded-xl p-2.5 text-[11px] space-y-1 mb-3">
                <div className="flex justify-between"><span className="text-emerald-200/80">Fineness:</span> <span className="font-bold text-white">18–24 Denier (Fine)</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Tensile:</span> <span className="font-bold text-emerald-400">550–750 MPa</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Export Packing:</span> <span className="font-bold text-white">100kg Hydraulic Bales</span></div>
              </div>
            </div>
          </div>
          <div className="px-2 pt-0">
            <button className="open-quote-modal w-full liquid-glass-btn justify-center text-xs py-2.5 rounded-xl font-bold flex items-center gap-2" data-product-key="Banana Fiber">
              <i className="fa-solid fa-file-lines"></i> View Lab Specs & Request Sample
            </button>
          </div>
        </div>

        {/* Card 3: Handicrafts */}
        <div className="product-card liquid-glass-card flex flex-col justify-between" data-category="crafts">
          <div>
            <div className="liquid-glass-image relative h-44 mb-3">
              <img src="/assets/images/handicraft_bags.jpg" alt="Eco Organic Handicrafts" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#78350F]/90 text-amber-300 border border-amber-500/40 backdrop-blur-md text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                Fair Trade Crafts
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 drop-shadow">3. Eco-Organic Handicrafts</h3>
              <p className="text-xs text-amber-300 font-semibold mb-2">Handwoven by Rural Women Artisans</p>
              <p className="text-xs text-emerald-50/90 mb-3 leading-relaxed line-clamp-2">
                Designer tote bags, storage baskets, floor mats, and wall decor meticulously crafted from natural banana bark and fiber. Plastic-free conscious lifestyle products.
              </p>

              <div className="liquid-glass-inner rounded-xl p-2.5 text-[11px] space-y-1 mb-3">
                <div className="flex justify-between"><span className="text-emerald-200/80">Crafting:</span> <span className="font-bold text-white">Traditional Handweaving</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Private Label:</span> <span className="font-bold text-emerald-400">OEM / ODM Available</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Compliance:</span> <span className="font-bold text-white">Fair Trade Certified</span></div>
              </div>
            </div>
          </div>
          <div className="px-2 pt-0">
            <button className="open-quote-modal w-full liquid-glass-btn justify-center text-xs py-2.5 rounded-xl font-bold flex items-center gap-2" data-product-key="Handicrafts">
              <i className="fa-solid fa-file-lines"></i> View Lab Specs & Request Sample
            </button>
          </div>
        </div>

        {/* Card 4: Agro-Snacks */}
        <div className="product-card liquid-glass-card flex flex-col justify-between" data-category="food">
          <div>
            <div className="liquid-glass-image relative h-44 mb-3">
              <img src="/assets/images/banana_chips_snacks.jpg" alt="Banana Chips & Protein Bars" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#07150C]/90 text-amber-300 border border-amber-500/40 backdrop-blur-md text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                Agro-Processed Food
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 drop-shadow">4. Vacuum-Fried Chips & Bars</h3>
              <p className="text-xs text-amber-300 font-semibold mb-2">Fresh Harvest to Gourmet Nutrition</p>
              <p className="text-xs text-emerald-50/90 mb-3 leading-relaxed line-clamp-2">
                Gourmet crispy banana chips processed via low-temp vacuum frying (50% lower oil, 55%+ Vitamin C retained) and 12g vegan plant protein snack bars.
              </p>

              <div className="liquid-glass-inner rounded-xl p-2.5 text-[11px] space-y-1 mb-3">
                <div className="flex justify-between"><span className="text-emerald-200/80">Shelf Life:</span> <span className="font-bold text-white">12 Months Ambient</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Protein:</span> <span className="font-bold text-emerald-400">12g Vegan Plant Isolate</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Flavors:</span> <span className="font-bold text-white">Pink Salt, Lime, Honey</span></div>
              </div>
            </div>
          </div>
          <div className="px-2 pt-0">
            <button className="open-quote-modal w-full liquid-glass-btn justify-center text-xs py-2.5 rounded-xl font-bold flex items-center gap-2" data-product-key="Agro-Food">
              <i className="fa-solid fa-file-lines"></i> View Lab Specs & Request Sample
            </button>
          </div>
        </div>

        {/* Card 5: Bio-Fertilizer & Mushrooms */}
        <div className="product-card liquid-glass-card flex flex-col justify-between" data-category="organic">
          <div>
            <div className="liquid-glass-image relative h-44 mb-3">
              <img src="/assets/images/organic_mushrooms.webp" alt="Bio-Fertilizer & Mushrooms" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#064E3B]/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                Soil & Organic Food
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 drop-shadow">5. Bio-Fertilizer & Mushrooms</h3>
              <p className="text-xs text-emerald-300 font-semibold mb-2">Closed-Loop Soil & Edible Fungi</p>
              <p className="text-xs text-emerald-50/90 mb-3 leading-relaxed line-clamp-2">
                Utilizing decorticated stalk residue as an organic mycelium bed for Ball Mushrooms, then composting it into rich, microbial potassium bio-fertilizer.
              </p>

              <div className="liquid-glass-inner rounded-xl p-2.5 text-[11px] space-y-1 mb-3">
                <div className="flex justify-between"><span className="text-emerald-200/80">Mushroom:</span> <span className="font-bold text-white">Ball Mushroom (Volvariella)</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Compost:</span> <span className="font-bold text-emerald-400">100% Thermally Sanitized</span></div>
                <div className="flex justify-between"><span className="text-emerald-200/80">Potassium (K):</span> <span className="font-bold text-white">High Organic Concentration</span></div>
              </div>
            </div>
          </div>
          <div className="px-2 pt-0">
            <button className="open-quote-modal w-full liquid-glass-btn justify-center text-xs py-2.5 rounded-xl font-bold flex items-center gap-2" data-product-key="Bio-Fertilizer">
              <i className="fa-solid fa-file-lines"></i> View Lab Specs & Request Sample
            </button>
          </div>
        </div>

        {/* Custom B2B Export Inquiries Card */}
        <div className="liquid-glass-card p-5 sm:p-6 border-2 border-dashed border-emerald-500/60 flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-lg mb-3 shadow-lg">
              <i className="fa-solid fa-handshake-angle text-amber-300"></i>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 drop-shadow">Custom B2B Export Inquiries</h3>
            <p className="text-xs text-emerald-50/90 leading-relaxed mb-3 line-clamp-2">
              Do you require tailored yarn counts, customized handicraft dimensions, private labeling, or bulk container shipments?
            </p>
            <ul className="text-xs text-white/90 space-y-1.5 mb-4">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400 text-[11px]"></i> Private Label OEM / ODM Manufacturing</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400 text-[11px]"></i> Third-Party Lab Quality Testing (SGS / Intertek)</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400 text-[11px]"></i> Direct Sea Freight via Chittagong Port</li>
            </ul>
          </div>
          <a href="#inquiry" className="liquid-glass-btn w-full justify-center text-xs py-2.5 rounded-xl font-bold flex items-center gap-2">
            <i className="fa-solid fa-comments"></i> Inquire with Management
          </a>
        </div>

      </div>
    </div>
  </section>

  {/* Applications & Usage Section (Matching User Reference) */}
  <section id="applications" className="py-24 bg-white border-t border-sand-200 scroll-mt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-black tracking-widest text-[#16A34A] uppercase block mb-2">USE CASES</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight font-heading">
          Applications & Usage
        </h2>
      </div>
    </div>

    {/* Single Line Infinite Moving Carousel */}
    <div className="relative w-full overflow-hidden group py-4">
      {/* Edge gradient masks for seamless infinite glide */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

      {/* Moving Track */}
      <div className="flex animate-continuous-carousel gap-6 sm:gap-7 w-max">
        {/* Repeating use case cards for seamless infinite marquee loop */}
        {[...Array(4)].map((_, setIdx) => (
          <React.Fragment key={setIdx}>
            {/* Card 1: Textile & Fashion */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group/card">
              <div className="h-52 overflow-hidden bg-sand-100 relative">
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#00583C] shadow-sm z-10">Textiles</span>
                <img src="/assets/images/usecase_textile.webp" alt="Textile & Fashion" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover/card:scale-108 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading group-hover/card:text-[#00583C] transition-colors">Textile &amp; Fashion</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Banana Silk fabrics, sarees, blended garments</p>
              </div>
            </div>

            {/* Card 2: Home Furnishings */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group/card">
              <div className="h-52 overflow-hidden bg-sand-100 relative">
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#00583C] shadow-sm z-10">Interior</span>
                <img src="/assets/images/usecase_home.webp" alt="Home Furnishings" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover/card:scale-108 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading group-hover/card:text-[#00583C] transition-colors">Home Furnishings</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Curtains, table mats, cushion covers</p>
              </div>
            </div>

            {/* Card 3: Handicrafts */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group/card">
              <div className="h-52 overflow-hidden bg-sand-100 relative">
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#00583C] shadow-sm z-10">Artisanal</span>
                <img src="/assets/images/usecase_handicrafts.webp" alt="Handicrafts" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover/card:scale-108 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading group-hover/card:text-[#00583C] transition-colors">Handicrafts</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Baskets, bags, hats, carpets</p>
              </div>
            </div>

            {/* Card 4: Industrial Use */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group/card">
              <div className="h-52 overflow-hidden bg-sand-100 relative">
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#00583C] shadow-sm z-10">Heavy Industry</span>
                <img src="/assets/images/usecase_industrial.webp" alt="Industrial Use" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover/card:scale-108 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading group-hover/card:text-[#00583C] transition-colors">Industrial Use</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Marine ropes, cables, biocomposites</p>
              </div>
            </div>

            {/* Card 5: Eco Paper & Packaging */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group/card">
              <div className="h-52 overflow-hidden bg-sand-100 relative">
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#00583C] shadow-sm z-10">Eco Pack</span>
                <img src="/assets/images/usecase_paper.webp" alt="Eco Paper & Packaging" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover/card:scale-108 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading group-hover/card:text-[#00583C] transition-colors">Eco Paper &amp; Packaging</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Handmade paper, tags, shopping bags</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>

  {/* Facility & Cultivations Tour Section (Musapacta Inspired) */}
  <section id="facility-tour" className="relative bg-[#07150C] overflow-hidden">
    {/* Organic Torn Paper Wave Top Divider */}
    <div className="w-full overflow-hidden leading-none absolute top-0 left-0 right-0 z-20 pointer-events-none">
      <img src="/assets/images/torn_paper_top.svg" alt="" loading="lazy" decoding="async" className="w-full h-8 sm:h-12 md:h-16 object-cover object-bottom block" />
    </div>

    {/* Background Plantation Panoramic Banner */}
    <div 
      className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.38) 50%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(to bottom, transparent 80%, #07150C 100%), url('/assets/images/banana_plantation_tour.webp')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 relative z-10 w-full">
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight sm:leading-tight tracking-tight drop-shadow-md mb-8 font-heading">
            Take a Tour of Our Regional Facilities<br className="hidden sm:inline" /> &amp; Cultivations in Sustainability
          </h2>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a href="#inquiry" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white text-[#00583c] hover:bg-[#D9AF6F] hover:text-[#00583c] font-semibold text-base transition-all duration-300 shadow-lg border-2 border-white hover:border-[#D9AF6F] text-center">
              Book Your Facility Tour
            </a>
            <button id="openVirtualTourBtn" type="button" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-transparent text-white border-2 border-white hover:bg-[#D9AF6F] hover:border-[#D9AF6F] hover:text-[#00583c] font-semibold text-base transition-all duration-300 shadow-lg text-center gap-2 group cursor-pointer">
              <i className="fa-solid fa-play text-xs opacity-90 group-hover:scale-110 transition-transform"></i>
              <span>Virtual Tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Bento Grid 2: Bandarban Regional Advantage */}
  <section id="bandarban" className="py-20 bg-[#07150C] text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="badge-pill-amber">Geographic Advantage</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Strategic Advantages of <span className="text-gradient-amber">Bandarban Region</span>
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Bandarban, in the Chittagong Hill Tracts of Bangladesh, boasts a pristine subtropical microclimate, high annual rainfall, and uncontaminated soils that foster lush banana growth.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-lg shrink-0 mt-1">
                <i className="fa-solid fa-mountain-sun"></i>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Unpolluted Hilly Ecosystem</h4>
                <p className="text-xs text-gray-300 mt-1">Zero industrial runoff or heavy chemical pesticides, ensuring clean biomaterial extraction.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-warm flex items-center justify-center text-lg shrink-0 mt-1">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Continuous 12-Month Biomass Pipeline</h4>
                <p className="text-xs text-gray-300 mt-1">Staggered hill cultivation and indigenous wild banana varieties guarantee year-round feedstock for industrial decortication.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0F1D4A] flex items-center justify-center text-lg shrink-0 mt-1">
                <i className="fa-solid fa-hands-holding-circle text-emerald-400"></i>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Indigenous Weaving Heritage</h4>
                <p className="text-xs text-gray-300 mt-1">Bandarban’s indigenous communities carry generations of natural plaiting techniques, transformed into export craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15">
            <img src="/assets/images/bandarban_greenery.jpg" alt="Bandarban Forest Landscape" loading="lazy" decoding="async" className="w-full h-auto object-cover transform hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-banana">Chittagong Hill Tracts</span>
                <div className="text-lg font-bold text-white">Naturally Rich, Uncontaminated Biosphere</div>
                <div className="text-xs text-emerald-300">Connected with Northern Bangladesh (Bogura & Rangpur) Farm Aggregation Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Export Standards, Quality Assurance & Lab Testing Specs */}
  <section id="standards" className="py-20 bg-white border-y border-sand-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="badge-pill-emerald mb-3">International Verification</div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
          Export Standards & <span className="text-gradient-forest">Quality Assurance</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Engineered to satisfy stringent import regulations across the European Union, United States, Japan, and Australia.
        </p>
      </div>

      {/* Standards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-3xl bg-sand-50 border border-sand-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl mx-auto">
            <i className="fa-solid fa-droplet-slash"></i>
          </div>
          <h4 className="text-base font-bold text-gray-900">Moisture Control</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Standard export moisture &lt; 11.5% with moisture-barrier wrapping to prevent mold during ocean shipping.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-sand-50 border border-sand-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl mx-auto">
            <i className="fa-solid fa-vial-circle-check"></i>
          </div>
          <h4 className="text-base font-bold text-gray-900">Zero Chemical Residue</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Mechanical extraction requires no caustic sodas, sulfur bleaching, or synthetic bonding chemicals.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-sand-50 border border-sand-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center text-xl mx-auto">
            <i className="fa-solid fa-boxes-packing"></i>
          </div>
          <h4 className="text-base font-bold text-gray-900">FCL Container Capacity</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Hydraulic compression accommodates up to 10 MT per 20ft FCL container and 22 MT per 40ft HQ FCL.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-sand-50 border border-sand-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-800 flex items-center justify-center text-xl mx-auto">
            <i className="fa-solid fa-stamp"></i>
          </div>
          <h4 className="text-base font-bold text-gray-900">Chittagong Port Logistics</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Direct export documentation, Fumigation, Phytosanitary, and Certificate of Origin from Bangladesh authorities.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* Interactive B2B Export FAQ Accordion */}
  <section id="faq" className="py-20 bg-[#FBFBF8]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="badge-pill-emerald mb-3">Buyer Assistance</div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Everything international buyers, manufacturers, and distributors need to know about purchasing and logistics.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        
        <div className="faq-item bg-white rounded-2xl border border-sand-200 p-5 shadow-sm">
          <button className="faq-trigger w-full flex justify-between items-center text-left font-bold text-gray-900 text-sm sm:text-base focus:outline-none" aria-expanded="false">
            <span>What is your Minimum Order Quantity (MOQ) for Banana Fiber and Bark?</span>
            <i className="faq-icon fa-solid fa-chevron-down text-emerald-600 transition-transform duration-300"></i>
          </button>
          <div className="faq-content text-xs sm:text-sm text-gray-600 pt-3 leading-relaxed">
            For initial commercial testing or trial shipments, our MOQ is 500 kg for raw Banana Bark or Fiber. For full commercial export pricing, we recommend full container loads (1 x 20ft FCL ~ 10 Metric Tons). Small sample trial boxes (2–5 kg) are available by courier.
          </div>
        </div>

        <div className="faq-item bg-white rounded-2xl border border-sand-200 p-5 shadow-sm">
          <button className="faq-trigger w-full flex justify-between items-center text-left font-bold text-gray-900 text-sm sm:text-base focus:outline-none" aria-expanded="false">
            <span>How do you guarantee moisture and fungal protection during sea freight?</span>
            <i className="faq-icon fa-solid fa-chevron-down text-emerald-600 transition-transform duration-300"></i>
          </button>
          <div className="faq-content text-xs sm:text-sm text-gray-600 pt-3 leading-relaxed">
            All extracted fiber and bark undergo controlled solar desiccation below 11.5% moisture content. They are then hydraulically compressed and sealed inside high-density moisture-barrier polyethylene wraps, complete with container-grade desiccant packs to prevent condensation during tropical and oceanic transit.
          </div>
        </div>

        <div className="faq-item bg-white rounded-2xl border border-sand-200 p-5 shadow-sm">
          <button className="faq-trigger w-full flex justify-between items-center text-left font-bold text-gray-900 text-sm sm:text-base focus:outline-none" aria-expanded="false">
            <span>Can you produce customized OEM designs for handicrafts and private label snack packaging?</span>
            <i className="faq-icon fa-solid fa-chevron-down text-emerald-600 transition-transform duration-300"></i>
          </button>
          <div className="faq-content text-xs sm:text-sm text-gray-600 pt-3 leading-relaxed">
            Yes! Our design workshop accommodates OEM/ODM requests for custom dimensions, weaving patterns, leather/fabric trim attachments, and brand hangtags. For banana chips and protein bars, we offer custom-printed retail barrier pouches with your brand logo and nutritional regulatory panels.
          </div>
        </div>

        <div className="faq-item bg-white rounded-2xl border border-sand-200 p-5 shadow-sm">
          <button className="faq-trigger w-full flex justify-between items-center text-left font-bold text-gray-900 text-sm sm:text-base focus:outline-none" aria-expanded="false">
            <span>What are your standard Incoterms and export dispatch ports?</span>
            <i className="faq-icon fa-solid fa-chevron-down text-emerald-600 transition-transform duration-300"></i>
          </button>
          <div className="faq-content text-xs sm:text-sm text-gray-600 pt-3 leading-relaxed">
            We primarily quote FOB Chittagong Port (Chattogram), Bangladesh or CIF destination ports globally (e.g. Hamburg, Rotterdam, Yokohama, Los Angeles). Air freight is available via Dhaka International Airport (DAC) for rapid sample delivery.
          </div>
        </div>

        <div className="faq-item bg-white rounded-2xl border border-sand-200 p-5 shadow-sm">
          <button className="faq-trigger w-full flex justify-between items-center text-left font-bold text-gray-900 text-sm sm:text-base focus:outline-none" aria-expanded="false">
            <span>How do we request a physical sample swatch box?</span>
            <i className="faq-icon fa-solid fa-chevron-down text-emerald-600 transition-transform duration-300"></i>
          </button>
          <div className="faq-content text-xs sm:text-sm text-gray-600 pt-3 leading-relaxed">
            You can use the B2B inquiry form below or message our WhatsApp directly. We dispatch sample swatch packs containing raw bark sheets, decorticated fiber spools, and snack samples via DHL/FedEx within 3 business days.
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* Comprehensive B2B Export Quotation Hub */}
  <section id="inquiry" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bento-card-dark p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
        
        {/* Ambient orb inside card */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge-pill-amber mb-2">Direct B2B Channel</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Request Export Quotation & Samples</h2>
            <p className="text-emerald-200/90 text-sm mt-2">
              Submit your required specifications. Management will reply within 24 hours with FOB/CIF pricing, technical datasheets, and sample dispatch details.
            </p>
          </div>

          <form id="b2bInquiryForm" className="space-y-4">
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Your Full Name *</label>
                <input type="text" id="inquiryName" required placeholder="e.g. John Smith" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Company / Organization *</label>
                <input type="text" id="inquiryCompany" required placeholder="e.g. EcoTextiles Global BV" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Destination Country & Port *</label>
                <input type="text" id="inquiryCountry" required placeholder="e.g. Germany (Hamburg Port)" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Phone / WhatsApp Number *</label>
                <input type="tel" id="inquiryPhone" required placeholder="e.g. +49 170 1234567" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Product Line *</label>
                <select id="inquiryProduct" className="w-full px-4 py-3 rounded-2xl bg-[#0F2F1D] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm">
                  <option value="Banana Bark (Sun-Dried Sheets)">1. Banana Bark (Sun-Dried Sheets)</option>
                  <option value="Banana Fiber (Decorticated Textile Grade)">2. Banana Fiber (Decorticated Textile Grade)</option>
                  <option value="Eco-Organic Handicrafts (Bags, Baskets, Mats)">3. Eco-Organic Handicrafts (Bags, Baskets, Mats)</option>
                  <option value="Vacuum-Fried Banana Chips & Snacks">4. Vacuum-Fried Banana Chips & Snacks</option>
                  <option value="Microbial Bio-Fertilizer & Mushrooms">5. Microbial Bio-Fertilizer & Mushrooms</option>
                  <option value="All Products / General Commercial Inquiry">All Products / General Commercial Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Preferred Incoterms</label>
                <select id="inquiryIncoterm" className="w-full px-4 py-3 rounded-2xl bg-[#0F2F1D] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm">
                  <option value="FOB Chittagong Port">FOB Chittagong Port</option>
                  <option value="CIF Destination Port">CIF Destination Port</option>
                  <option value="CFR Destination Port">CFR Destination Port</option>
                  <option value="Sample Express Courier">Sample Express Courier (DHL/FedEx)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-300 mb-1">Estimated Volume / Quantity</label>
                <input type="text" id="inquiryQty" placeholder="e.g. 1 x 20ft FCL (10 MT)" className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="inquirySampleCheck" className="w-4 h-4 rounded text-emerald-500 bg-white/20 border-white/30 focus:ring-emerald-400" />
              <label htmlFor="inquirySampleCheck" className="text-xs text-emerald-200 font-semibold cursor-pointer">
                I request an official sample testing pack sent to my address.
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-300 mb-1">Specific Custom Requirements / Message</label>
              <textarea id="inquiryMessage" rows="3" placeholder="Mention yarn count, sheet width, OEM branding, target dispatch month, or lab certification criteria..." className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"></textarea>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button type="submit" className="btn-luxury-gold w-full sm:w-auto text-sm py-3.5 px-8">
                <i className="fa-solid fa-paper-plane"></i> Submit Quotation & Connect on WhatsApp
              </button>

              <div className="text-xs text-emerald-300 flex items-center gap-1.5">
                <i className="fa-solid fa-lock text-emerald-400"></i> Direct encrypted response from management
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  </section>

  {/* Corporate Management & Contacts */}
  <section id="contact" className="py-16 bg-[#FDFDFD]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-12 gap-8">
        
        <div className="md:col-span-7 space-y-6">
          <div className="badge-pill-emerald">Executive Team</div>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
            SOMPRITY A2Z <span className="text-gradient-forest">Management</span>
          </h3>

          <div className="p-6 bg-white rounded-3xl border border-sand-200 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0F2F1D] text-white flex items-center justify-center text-2xl font-bold">
                <i className="fa-solid fa-user-tie text-amber-banana"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">JABIR AHMED METHUN</h4>
                <div className="text-xs font-bold text-emerald-700">Key Management & Managing Executive • Banana A to Z</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs">
              <a href="tel:+8801861073333" className="p-3.5 rounded-2xl bg-sand-50 hover:bg-emerald-50 transition border border-sand-200 flex items-center gap-3">
                <i className="fa-solid fa-phone text-emerald-700 text-sm"></i>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Executive Hotline</div>
                  <strong className="text-gray-900">+880 1861 073333</strong>
                </div>
              </a>

              <a href="tel:+8801925408117" className="p-3.5 rounded-2xl bg-sand-50 hover:bg-emerald-50 transition border border-sand-200 flex items-center gap-3">
                <i className="fa-solid fa-headset text-indigo-700 text-sm"></i>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Customer Support</div>
                  <strong className="text-gray-900">+880 1925 408117</strong>
                </div>
              </a>

              <div className="p-3.5 rounded-2xl bg-sand-50 border border-sand-200 flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-amber-banana text-sm"></i>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Corporate Headquarters</div>
                  <strong className="text-gray-900">Mirpur, Dhaka, Bangladesh</strong>
                </div>
              </div>

              <a href="https://facebook.com" target="_blank" className="p-3.5 rounded-2xl bg-sand-50 hover:bg-blue-50 transition border border-sand-200 flex items-center gap-3">
                <i className="fa-brands fa-facebook text-blue-600 text-sm"></i>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Official Facebook</div>
                  <strong className="text-gray-900">Banana A to Z</strong>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 space-y-4">
          <div className="p-6 bg-white rounded-3xl border border-sand-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#0F2F1D] font-bold text-base">
              <i className="fa-solid fa-building-circle-check text-emerald-600"></i> Corporate Credentials
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Export, Import, and Distribution corporation pioneering green industrial processing across Bangladesh in partnership with regional agricultural cooperatives.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-500">Official Portal:</span>
                <span className="font-bold text-emerald-800">www.BananaA2Z.com</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-500">Corporate Domain:</span>
                <span className="font-bold text-[#0F1D4A]">www.somprityA2Z.com</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-gray-500">Decortication Hubs:</span>
                <span className="font-bold text-gray-900">Bandarban & Northern Zones</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  
    </main>
  );
}
