import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import schoolBuildingBg from '../../assets/images/kd-school-building.jpg';

const HeroBanner = () => {
  return (
    <section className="relative text-white overflow-hidden py-16 md:py-24 bg-slate-950 min-h-[580px] flex items-center">
      {/* Real School Building Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
        style={{ backgroundImage: `url(${schoolBuildingBg})` }}
      />
      
      {/* Attractive Dark Gradient Overlay for optimal legibility & depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-red-950/80 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.25),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-7/12 text-center lg:text-left">
            {/* Top Verification & Governance Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-semibold tracking-wide uppercase shadow">
                Run by Sharada Seva Samiti
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-700/90 text-white text-xs font-semibold shadow">
                Govt. Recognized
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-semibold shadow">
                UDISE: 09604113374
              </span>
            </div>

            <div className="text-amber-400 font-bold tracking-widest text-xs uppercase mb-1">
              AN ENGLISH MEDIUM SCHOOL
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 drop-shadow-md">
              K.D. PUBLIC SCHOOL
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-red-200 text-sm sm:text-base font-semibold mb-4">
              <span>📍</span>
              <span>रामलक्षण, देवरिया (उ.प्र.) – Ramlakshan, Deoria (U.P.)</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl text-yellow-300 font-semibold text-xs sm:text-sm mb-6 inline-block shadow-lg">
              विद्यायाऽमृतमश्नुते • Strive to Excel • प्रयास • परिश्रम • परिणाम
            </div>

            <div className="text-gray-200 text-sm space-y-1 mb-8 backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/15 max-w-lg text-left shadow-md">
              <p>
                <span className="text-amber-400 font-semibold">प्रधानाचार्य:</span> श्याम नारायण विश्वकर्मा (Shyam Narayan Vishwakarma)
              </p>
              <p>
                <span className="text-amber-400 font-semibold">हेल्पलाइन:</span> +91 9935155645, 9450156061, 9450156081
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/auth/login" 
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/40 transition transform hover:-translate-y-0.5 flex items-center gap-2 border border-red-400/30 text-sm sm:text-base"
              >
                <span>📱</span>
                <span>पोर्टल में लॉगिन करें (School Portal)</span>
                <span>→</span>
              </Link>
              <Link 
                to="/admissions" 
                className="px-6 py-3.5 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/40 backdrop-blur-md transition shadow-md text-sm sm:text-base"
              >
                प्रवेश प्रक्रिया (Admissions)
              </Link>
            </div>
          </div>

          {/* Right School Crest Card */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-amber-400/40 flex flex-col items-center max-w-xs sm:max-w-sm text-center transform hover:scale-105 transition duration-300">
              <img 
                src={logo}
                alt="K.D. Public School Crest" 
                className="w-44 h-44 sm:w-52 sm:h-52 object-contain drop-shadow-xl mb-4"
              />
              <div className="text-slate-900 font-black text-lg tracking-tight">K.D. PUBLIC SCHOOL</div>
              <div className="text-xs text-red-700 font-bold tracking-wide">RAMLAKSHAN, DEORIA (U.P.)</div>
              <div className="mt-3 text-[11px] text-gray-700 font-medium bg-amber-100/80 border border-amber-300/60 py-1 px-3 rounded-full">
                U-DISE: 09604113374
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;