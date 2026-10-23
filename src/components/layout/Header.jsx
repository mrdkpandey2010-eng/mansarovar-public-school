import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import logo  from '../../assets/images/logo.jpeg'
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notice Board', path: '/noticeboard' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with contact info */}
      <div className="bg-red-800 text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-xs">
          <div className="flex flex-wrap items-center space-x-4">
            <span className="bg-red-900 px-2 py-0.5 rounded font-medium">U-DISE: 09604113374</span>
            <span className="hidden sm:inline">📍 रामलक्षण, देवरिया (उ.प्र.)</span>
            <div className="flex items-center">
              <svg className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9935155645, 9450156081</span>
            </div>
          </div>
          <div className="flex items-center mt-1 sm:mt-0">
            {currentUser ? (
              <div className="flex items-center">
                <span className="text-xs mr-2">Welcome, {currentUser.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-xs bg-red-950 hover:bg-black py-1 px-2 rounded"
                >
                  Logout
                </button>
                <Link 
                  to={`/portal/${currentUser.role.toLowerCase()}`} 
                  className="ml-2 text-xs bg-red-700 hover:bg-red-800 py-1 px-2 rounded"
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/auth/login" className="text-xs bg-white text-red-900 font-semibold px-2.5 py-1 rounded hover:bg-gray-100 transition">
                  लॉगिन करें (Login)
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="K.D. Public School Logo" 
                className="h-14 w-auto object-contain drop-shadow"
              />
              <div className="ml-3">
                <div className="text-xl font-extrabold text-red-800 tracking-tight leading-tight">K.D. PUBLIC SCHOOL</div>
                <div className="text-xs text-gray-600 font-medium">रामलक्षण, देवरिया (उ.प्र.) | Ramlakshan, Deoria</div>
                <div className="text-[10px] text-red-600 italic">विद्यायाऽमृतमश्नुते • Strive to Excel</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 px-1 transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-700 font-medium'
                      : 'text-gray-700 hover:text-blue-700'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? 'after:w-full' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1 bg-white">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block pl-3 pr-4 py-2 text-base ${
                    isActive
                      ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-blue-300 hover:text-blue-700'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;