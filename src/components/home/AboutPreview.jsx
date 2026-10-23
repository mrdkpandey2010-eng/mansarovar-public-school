import React from 'react';
import { Link } from 'react-router-dom';
import schoolBuildingImg from '../../assets/images/kd-school-building.jpg';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative group">
              <img 
                src={schoolBuildingImg}
                alt="K.D. Public School Campus & Building" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl"
                style={{ maxHeight: '420px' }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-2 rounded-xl border border-white/20">
                <span className="font-bold text-amber-300">के.डी. पब्लिक स्कूल:</span> रामलक्षण, देवरिया (उ.प्र.) मुख्य परिसर एवं प्रवेश द्वार
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider rounded-full mb-3">
              Run by Sharada Seva Samiti • Govt. Recognized
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">About K.D. Public School</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              K.D. Public School (Ramlakshan, Deoria, U.P. – U-DISE: 09604113374) is a recognized English medium institution committed to academic excellence and moral character development. 
              Guided by our motto <span className="font-bold text-red-700">"विद्यायाऽमृतमश्नुते" (Strive to Excel)</span>, we believe in <span className="font-bold text-gray-800">प्रयास • परिश्रम • परिणाम</span> (Effort, Dedication, and Success).
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our school provides a safe, disciplined learning environment equipped with qualified teachers, modern curriculum, moral values, and regular athletic and cultural activities for all-round personality development.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-red-600 font-bold hover:text-red-800 text-sm transition"
            >
              <span>संस्थान के बारे में और जानें (Learn more about us)</span>
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;