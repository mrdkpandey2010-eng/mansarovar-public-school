import React from 'react';

const ContactInfoCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Address</h3>
            <p className="text-gray-600 font-medium">
              K.D. Public School<br />
              रामलक्षण (Ramlakshan),<br />
              देवरिया (Deoria), उत्तर प्रदेश - 274201<br />
              <span className="text-xs text-red-600 font-semibold">U-DISE: 09604113374</span>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-1 font-semibold">हेल्पलाइन: +91 9935155645</p>
            <p className="text-gray-600 mb-1 font-semibold">संपर्क: +91 9450156081</p>
            <p className="text-xs text-gray-500 mt-2">प्रधानाचार्य: श्याम नारायण विश्वकर्मा</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-1 font-medium">kdpublicschool.deoria@gmail.com</p>
            <p className="text-gray-600 text-sm">info@kdpublicschool.edu.in</p>
            <p className="text-xs text-yellow-700 italic mt-3">विद्यायाऽमृतमश्नुते • Strive to Excel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;