"use client";

import React, { useState } from 'react';

export default function EsgCalculator() {
  const [treeCount, setTreeCount] = useState(50000);

  // Agricultural zero-waste valorization ratios:
  // ~1 plant stem yields ~0.8 kg dried clean fiber (or 0.0008 MT)
  // ~1 plant stem yields bark for ~0.4 handcrafted bags/baskets
  // ~1 plant residue yields ~0.25 kg organic ball mushrooms
  // ~1 plant biomass yields ~1.2 kg organic bio-fertilizer compost (0.0012 MT)
  // Eliminates ~2.1 kg CO2 eq open burning emissions per plant (0.0021 MT)
  // Generates ~$1.45 USD direct decentralized rural income per plant

  const fiberTons = ((treeCount * 0.8) / 1000).toFixed(1);
  const bagsCount = Math.round(treeCount * 0.4);
  const mushroomKg = Math.round(treeCount * 0.25);
  const compostTons = ((treeCount * 1.2) / 1000).toFixed(1);
  const co2Tons = ((treeCount * 2.1) / 1000).toFixed(1);
  const incomeUSD = Math.round(treeCount * 1.45);

  const fillPercent = Math.min(100, Math.max(0, ((treeCount - 5000) / (500000 - 5000)) * 100));

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-[#FBFBF8] via-emerald-50/40 to-[#FBFBF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-pill-emerald mb-3">Live ESG Impact Simulator</div>
          <h2 id="calcTitle" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Interactive Zero-Waste Yield &amp; ESG Calculator
          </h2>
          <p id="calcSubtitle" className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Select the volume of banana plants processed to calculate live fiber output, rural livelihood creation, and carbon emissions saved.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl bg-white/90 backdrop-blur-md">
          
          {/* Slider Control */}
          <div className="mb-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="flex justify-between items-center text-sm font-bold">
              <span id="sliderLabel" className="text-gray-700 font-bold">Processed Banana Plants:</span>
              <span className="text-2xl sm:text-3xl font-black text-[#0F2F1D] bg-white px-4 py-1.5 rounded-2xl border border-emerald-200 shadow-sm transition-all duration-150">
                <span id="sliderDisplayVal" className="tabular-nums">{treeCount.toLocaleString()}</span> Trees
              </span>
            </div>
            
            <input 
              type="range" 
              id="treeSlider" 
              min="5000" 
              max="500000" 
              step="5000" 
              value={treeCount}
              onChange={(e) => setTreeCount(Number(e.target.value))}
              className="custom-range w-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00583C 0%, #10B981 ${fillPercent}%, #E5E7EB ${fillPercent}%, #E5E7EB 100%)`
              }}
              aria-label="Banana Plants Processed Slider" 
            />
            
            <div className="flex justify-between text-[11px] font-bold text-gray-500 px-1 select-none">
              <button 
                type="button" 
                onClick={() => setTreeCount(5000)}
                className={`transition-colors hover:text-emerald-700 cursor-pointer ${treeCount === 5000 ? 'text-[#00583C] font-extrabold underline' : ''}`}
              >
                5,000 Plants (Pilot Scale)
              </button>
              <button 
                type="button" 
                onClick={() => setTreeCount(100000)}
                className={`transition-colors hover:text-emerald-700 cursor-pointer ${treeCount === 100000 ? 'text-[#00583C] font-extrabold underline' : ''}`}
              >
                100,000 Plants
              </button>
              <button 
                type="button" 
                onClick={() => setTreeCount(500000)}
                className={`transition-colors hover:text-emerald-700 cursor-pointer ${treeCount === 500000 ? 'text-[#00583C] font-extrabold underline' : ''}`}
              >
                500,000 Plants (Full Industrial)
              </button>
            </div>
          </div>

          {/* Dynamic Output Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            
            {/* Card 1: Banana Fiber */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-emerald-600 text-xl mb-1"><i className="fa-solid fa-scroll"></i></div>
              <div id="calcFiberYield" className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">
                {fiberTons} MT
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Banana Fiber</div>
              <div className="text-[10px] text-gray-400">Textile &amp; Technical Grade</div>
            </div>

            {/* Card 2: Artisan Bags */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-[#164227] text-xl mb-1"><i className="fa-solid fa-bag-shopping"></i></div>
              <div id="calcBags" className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">
                {bagsCount.toLocaleString()}
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Artisan Bags</div>
              <div className="text-[10px] text-gray-400">Handcrafted pieces</div>
            </div>

            {/* Card 3: Ball Mushrooms */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-amber-500 text-xl mb-1"><i className="fa-solid fa-bowl-food"></i></div>
              <div id="calcMushrooms" className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">
                {mushroomKg.toLocaleString()} kg
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Ball Mushrooms</div>
              <div className="text-[10px] text-gray-400">Nutrient biomass harvest</div>
            </div>

            {/* Card 4: Bio-Compost */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-[#0F1D4A] text-xl mb-1"><i className="fa-solid fa-seedling"></i></div>
              <div id="calcCompost" className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">
                {compostTons} MT
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Bio-Compost</div>
              <div className="text-[10px] text-gray-400">Potassium-rich organic soil</div>
            </div>

            {/* Card 5: CO2 Prevented */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-emerald-500 text-xl mb-1"><i className="fa-solid fa-cloud-arrow-down"></i></div>
              <div id="calcCO2" className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">
                {co2Tons} Tons
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">CO₂ Prevented</div>
              <div className="text-[10px] text-gray-400">No open field burning</div>
            </div>

            {/* Card 6: Rural Wages */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm text-center transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-amber-600 text-xl mb-1"><i className="fa-solid fa-hand-holding-dollar"></i></div>
              <div id="calcIncome" className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">
                ${incomeUSD.toLocaleString()}
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase mt-1">Rural Wages</div>
              <div className="text-[10px] text-gray-400">Direct community income</div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <a href="#inquiry" className="btn-luxury text-xs py-2.5 px-6 inline-flex items-center gap-2">
              <i className="fa-solid fa-file-invoice-dollar text-[#D9AF6F]"></i> Inquire for Container Commercial Volumes
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
