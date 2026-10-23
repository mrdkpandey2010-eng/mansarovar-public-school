import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://i.ibb.co/27P5MZNn/school-compress.png"
              alt="Students at Mansarovar Public School" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover border-purple-500 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 cursor-pointer"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About K.D. Public School</h2>
            <p className="text-gray-600 mb-4">
              K.D. Public School (Ramlakshan, Deoria, U.P. – U-DISE: 09604113374) is a premier educational institution committed to academic excellence and moral character development. 
              Guided by our motto <span className="font-semibold text-red-700">"विद्यायाऽमृतमश्नुते" (Strive to Excel)</span>, we believe in <span className="font-semibold text-gray-800">प्रयास • परिश्रम • परिणाम</span> (Effort, Dedication, and Success).
            </p>
            <p className="text-gray-600 mb-6">
              Our school follows a comprehensive and holistic curriculum emphasizing academic rigor, sports, moral discipline, and personality evaluation to prepare each student for a bright future.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Learn more about us
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