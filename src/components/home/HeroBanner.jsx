import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-red-950 text-white overflow-hidden py-14 md:py-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.25),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-7/12 text-center lg:text-left">
            {/* U-DISE Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              <span>✨ U-DISE: 09604113374</span>
              <span>•</span>
              <span>विद्यालय प्रबंधन प्रणाली</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              K.D. PUBLIC SCHOOL
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-red-200 text-base sm:text-lg font-medium mb-4">
              <span>📍</span>
              <span>रामलक्षण, देवरिया (उ.प्र.) – Ramlakshan, Deoria (U.P.)</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2.5 rounded-xl text-yellow-300 font-semibold text-xs sm:text-sm mb-6 inline-block">
              विद्यायाऽमृतमश्नुते • Strive to Excel • प्रयास • परिश्रम • परिणाम
            </div>

            <div className="text-gray-300 text-sm space-y-1 mb-8">
              <p>
                <span className="text-amber-400 font-semibold">प्रधानाचार्य:</span> श्याम नारायण विश्वकर्मा (Shyam Narayan Vishwakarma)
              </p>
              <p>
                <span className="text-amber-400 font-semibold">संपर्क सूत्र:</span> +91 9935155645, 9450156081
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/auth/login" 
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>📱</span>
                <span>पोर्टल में लॉगिन करें (Login with Mobile)</span>
                <span>→</span>
              </Link>
              <Link 
                to="/admissions" 
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-sm transition"
              >
                प्रवेश प्रक्रिया (Admissions)
              </Link>
            </div>
          </div>

          {/* Right Logo Display matching Image 3 */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-amber-400/30 flex flex-col items-center max-w-xs sm:max-w-sm text-center">
              <img 
                src={logo}
                alt="K.D. Public School Crest" 
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-xl mb-4 hover:scale-105 transition duration-300"
              />
              <div className="text-slate-900 font-extrabold text-lg">K.D. PUBLIC SCHOOL</div>
              <div className="text-xs text-red-700 font-semibold">RAMLAKSHAN, DEORIA, UP</div>
              <div className="mt-3 text-[11px] text-gray-500 bg-gray-100 py-1 px-3 rounded-full">
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