import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import logo from '../../assets/images/Wlogo.png';

const ROLE_REDIRECT_MAP = {
  superadmin: '/portal/superadmin',
  admin: '/portal/admin',
  teacher: '/portal/teacher',
  student: '/portal/student',
};

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect automatically to corresponding portal
  useEffect(() => {
    if (currentUser && currentUser.role) {
      const redirectPath = location.state?.from?.pathname || ROLE_REDIRECT_MAP[currentUser.role] || '/portal';
      navigate(redirectPath, { replace: true });
    }
  }, [currentUser, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setError('कृपया ईमेल या मोबाइल नंबर और पासवर्ड दर्ज करें।');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await login(identifier.trim(), password.trim());
      if (res?.user?.role) {
        const dest = ROLE_REDIRECT_MAP[res.user.role] || '/portal';
        navigate(dest, { replace: true });
      }
    } catch (err) {
      setError(err.message || 'अमान्य क्रेडेंशियल्स। कृपया पुनः प्रयास करें।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="K.D. Public School" 
                className="mx-auto h-20 w-auto object-contain hover:scale-105 transition duration-200"
              />
            </Link>
            <h2 className="mt-3 text-2xl font-black text-slate-900 tracking-tight">K.D. PUBLIC SCHOOL</h2>
            <p className="text-xs text-red-700 font-bold uppercase tracking-wide">रामलक्षण, देवरिया (उ.प्र.)</p>
            <div className="mt-2 inline-block px-3 py-1 bg-amber-50 border border-amber-300 rounded-full text-[11px] font-semibold text-amber-900">
              U-DISE: 09604113374 • Govt. Recognized
            </div>
            <p className="mt-3 text-sm text-gray-600 font-medium">
              विद्यालय प्रबंधन पोर्टल (School Management Portal)
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="identifier" className="block text-xs font-semibold text-gray-700 mb-1">
                ईमेल या पंजीकृत मोबाइल नंबर (Email or Mobile)
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  autoComplete="username"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm transition"
                  placeholder="उदा. 9935155645 या principal@kdpublicschool.edu.in"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-700 mb-1">
                पासवर्ड (Password)
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm transition"
                  placeholder="अपना गोपनीय पासवर्ड दर्ज करें"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-600 cursor-pointer">
                  मुझे याद रखें (Remember me)
                </label>
              </div>

              <Link to="/auth/forgot-password" className="text-xs font-semibold text-red-600 hover:text-red-700">
                पासवर्ड भूल गए?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md transition disabled:bg-red-400"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    प्रमाणित किया जा रहा है...
                  </>
                ) : (
                  'पोर्टल में प्रवेश करें (Sign In)'
                )}
              </button>
            </div>
          </form>

          {/* Official Database Access Notice */}
          <div className="pt-4 border-t border-gray-200">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <span>🔐</span>
                <span>अधिकृत पोर्टल प्रवेश (Authorized Portal Access)</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                प्रधानाचार्य, विद्यालय प्रबंधन, शिक्षक एवं छात्र अपने विद्यालय द्वारा पंजीकृत ईमेल अथवा मोबाइल नंबर से सुरक्षित लॉगिन कर सकते हैं।
              </p>
              <div className="pt-1 text-[11px] text-gray-500 flex items-center gap-1">
                <span>📞 हेल्पलाइन:</span>
                <span className="font-semibold text-gray-700">+91 9935155645, 9450156061</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition">
              ← मुख्य पृष्ठ पर वापस जाएं (Back to Home)
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;