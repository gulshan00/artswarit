// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Music, Mail, Lock, User, ArrowRight, Home, Play, Disc, Phone } from 'lucide-react';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginType, setLoginType] = useState('user'); 
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/artist');
  };
  
  const renderLoginFields = () => {
    if (loginType === 'user') {
      if (isLogin) {
        return (
          <>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="/reset-password" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </>
        );
      } else {
        // Sign up fields
        return (
          <>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Username</label>
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Choose a username"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                I agree to the <a href="/terms" className="text-purple-600 hover:text-purple-500">Terms of Service</a> and <a href="/privacy" className="text-purple-600 hover:text-purple-500">Privacy Policy</a>
              </label>
            </div>
          </>
        );
      }
    } else if (loginType === 'client') {
      return (
        <>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Client ID</label>
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your client ID"
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">API Key</label>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your API key"
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </>
      );
    } else if (loginType === 'artswarit') {
      return (
        <>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Email Id</label>
            </div>
            <div className="relative">
              <Music className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your Artswarit ID"
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your access code"
                className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </>
      );
    }
  };
  
  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* Left Section - Illustration/Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-12 -left-12 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 bottom-0 right-0 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
        </div>
        {/* Content */}
        <div className="relative w-full flex flex-col items-center justify-center p-12 text-white">
          <Link to="/" className="flex items-center gap-3 mb-8 hover:opacity-90 transition-opacity">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur">
              <Music className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold">Artswarit</h1>
          </Link>
          
          {/* Animated Disc */}
          <div className="relative w-64 h-64 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-purple-900 rounded-full flex items-center justify-center">
              <Disc className="w-32 h-32 text-white/50" />
            </div>
          </div>
          <div className="text-center space-y-4 max-w-md">
            <h2 className="text-2xl font-bold">Discover Music Together</h2>
            <p className="text-white/70">Join our community of music lovers and explore new sounds, share your favorites, and connect with artists worldwide.</p>
          </div>
        </div>
      </div>

      {/* Right Section - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-md w-full mx-auto space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Music className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold">Artswarit</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back!' : 'Join the Community'}
            </h2>
            <p className="text-gray-600">
              {isLogin ? 'Sign in to continue your journey' : 'Create your account today'}
            </p>
          </div>

          {/* Login Type Selection */}
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => setLoginType('user')}
              className={`flex items-center justify-center p-3 rounded-xl transition-all ${
                loginType === 'user' 
                  ? 'bg-purple-600 text-white' 
                  : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-medium">User</span>
            </button>
            <button 
              onClick={() => setLoginType('client')}
              className={`flex items-center justify-center p-3 rounded-xl transition-all ${
                loginType === 'client' 
                  ? 'bg-purple-600 text-white' 
                  : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-medium">Client</span>
            </button>
            <button 
              onClick={() => setLoginType('artswarit')}
              className={`flex items-center justify-center p-3 rounded-xl transition-all ${
                loginType === 'artswarit' 
                  ? 'bg-purple-600 text-white' 
                  : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-medium">Artswarit</span>
            </button>
          </div>
          {/* Google Auth Option */}
          <div className="flex justify-center">
            <button className="flex items-center justify-center gap-2 p-3 border-2 rounded-xl hover:bg-gray-50 transition-all w-full">
              <img 
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderLoginFields()}

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                {loginType === 'user' 
                  ? (isLogin ? 'Sign In' : 'Create Account')
                  : loginType === 'client'
                    ? 'Login as Client'
                    : 'Login with Artswarit'
                }
                <Play className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Form Footer */}
          <div className="space-y-4">
            {loginType === 'user' && (
              <p className="text-center text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 font-medium text-purple-600 hover:text-purple-500"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            )}

            <div className="flex justify-center">
              <Link 
                to="/"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Continue to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthPages;








// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Music, Mail, Lock, User, ArrowRight, Home, Play, Disc } from 'lucide-react';

// const AuthPages = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loginType, setLoginType] = useState('user'); // 'user' or 'client' or 'artswarit'
//   const navigate = useNavigate();
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');
//   };
  
//   const renderLoginFields = () => {
//     if (loginType === 'user') {
//       return (
//         <>
//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//             </div>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               {isLogin && (
//                 <Link to="/reset-password" className="text-sm font-medium text-purple-600 hover:text-purple-500">
//                   Forgot password?
//                 </Link>
//               )}
//             </div>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </>
//       );
//     } else if (loginType === 'client') {
//       return (
//         <>
//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm font-medium text-gray-700">Client ID</label>
//             </div>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Enter your client ID"
//                 className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm font-medium text-gray-700">API Key</label>
//             </div>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Enter your API key"
//                 className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </>
//       );
//     } else if (loginType === 'artswarit') {
//       return (
//         <>
//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm font-medium text-gray-700">Artswarit ID</label>
//             </div>
//             <div className="relative">
//               <Music className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Enter your Artswarit ID"
//                 className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm font-medium text-gray-700">Access Code</label>
//             </div>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Enter your access code"
//                 className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </>
//       );
//     }
//   };
  
//   return (
//     <div className="min-h-screen w-full flex bg-white">
//       {/* Left Section - Illustration/Branding */}
//       <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900">
//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute w-96 h-96 -top-12 -left-12 bg-purple-600/20 rounded-full blur-3xl"></div>
//           <div className="absolute w-96 h-96 bottom-0 right-0 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
//         </div>
//         {/* Content */}
//         <div className="relative w-full flex flex-col items-center justify-center p-12 text-white">
//           <Link to="/" className="flex items-center gap-3 mb-8 hover:opacity-90 transition-opacity">
//             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur">
//               <Music className="w-8 h-8" />
//             </div>
//             <h1 className="text-3xl font-bold">Artswarit</h1>
//           </Link>
          
//           {/* Animated Disc */}
//           <div className="relative w-64 h-64 mb-8">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-spin-slow"></div>
//             <div className="absolute inset-2 bg-purple-900 rounded-full flex items-center justify-center">
//               <Disc className="w-32 h-32 text-white/50" />
//             </div>
//           </div>
//           <div className="text-center space-y-4 max-w-md">
//             <h2 className="text-2xl font-bold">Discover Music Together</h2>
//             <p className="text-white/70">Join our community of music lovers and explore new sounds, share your favorites, and connect with artists worldwide.</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Auth Form */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12">
//         <div className="max-w-md w-full mx-auto space-y-8">
//           {/* Mobile Logo */}
//           <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
//             <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
//               <Music className="w-8 h-8 text-purple-600" />
//               <span className="text-2xl font-bold">Artswarit</span>
//             </Link>
//           </div>

//           {/* Header */}
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold text-gray-900">
//               {isLogin ? 'Welcome Back!' : 'Join the Community'}
//             </h2>
//             <p className="text-gray-600">
//               {isLogin ? 'Sign in to continue your journey' : 'Create your account today'}
//             </p>
//           </div>

//           {/* Login Type Selection */}
//           <div className="grid grid-cols-3 gap-2">
//             <button 
//               onClick={() => setLoginType('user')}
//               className={`flex items-center justify-center p-3 rounded-xl transition-all ${
//                 loginType === 'user' 
//                   ? 'bg-purple-600 text-white' 
//                   : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               <span className="text-sm font-medium">User</span>
//             </button>
//             <button 
//               onClick={() => setLoginType('client')}
//               className={`flex items-center justify-center p-3 rounded-xl transition-all ${
//                 loginType === 'client' 
//                   ? 'bg-purple-600 text-white' 
//                   : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               <span className="text-sm font-medium">Client</span>
//             </button>
//             <button 
//               onClick={() => setLoginType('artswarit')}
//               className={`flex items-center justify-center p-3 rounded-xl transition-all ${
//                 loginType === 'artswarit' 
//                   ? 'bg-purple-600 text-white' 
//                   : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               <span className="text-sm font-medium">Artswarit</span>
//             </button>
//           </div>

//           {/* Google Auth Option */}
//           <div className="flex justify-center">
//             <button className="flex items-center justify-center gap-2 p-3 border-2 rounded-xl hover:bg-gray-50 transition-all w-full">
//               <img 
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google logo"
//                 className="w-5 h-5"
//               />
//               <span className="text-sm font-medium text-gray-700">Continue with Google</span>
//             </button>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500">or</span>
//             </div>
//           </div>

//           {/* Auth Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLogin && loginType === 'user' && (
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <label className="block text-sm font-medium text-gray-700">Username</label>
//                 </div>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Choose a username"
//                     className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             )}

//             {renderLoginFields()}

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
//               >
//                 {loginType === 'user' 
//                   ? (isLogin ? 'Sign In' : 'Create Account')
//                   : loginType === 'client'
//                     ? 'Login as Client'
//                     : 'Login with Artswarit'
//                 }
//                 <Play className="w-4 h-4" />
//               </button>
//             </div>
//           </form>

//           {/* Form Footer */}
//           <div className="space-y-4">
//             {loginType === 'user' && (
//               <p className="text-center text-sm text-gray-600">
//                 {isLogin ? "Don't have an account?" : "Already have an account?"}
//                 <button
//                   type="button"
//                   onClick={() => setIsLogin(!isLogin)}
//                   className="ml-1 font-medium text-purple-600 hover:text-purple-500"
//                 >
//                   {isLogin ? 'Sign up' : 'Sign in'}
//                 </button>
//               </p>
//             )}

//             <div className="flex justify-center">
//               <Link 
//                 to="/landing"
//                 className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 <Home className="w-4 h-4" />
//                 <span>Continue to Homepage</span>
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Music, Mail, Lock, User, Linkedin, ArrowRight, Home, Play, Disc } from 'lucide-react';

// const AuthPages = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');
//   };
  
//   return (
//     <div className="min-h-screen w-full flex bg-white">
//       {/* Left Section - Illustration/Branding */}
//       <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900">
//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute w-96 h-96 -top-12 -left-12 bg-purple-600/20 rounded-full blur-3xl"></div>
//           <div className="absolute w-96 h-96 bottom-0 right-0 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
//         </div>
//         {/* Content */}
//         <div className="relative w-full flex flex-col items-center justify-center p-12 text-white">
//           <Link to="/" className="flex items-center gap-3 mb-8 hover:opacity-90 transition-opacity">
//             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur">
//               <Music className="w-8 h-8" />
//             </div>
//             <h1 className="text-3xl font-bold">Artswarit</h1>
//           </Link>
          
//           {/* Animated Disc */}
//           <div className="relative w-64 h-64 mb-8">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-spin-slow"></div>
//             <div className="absolute inset-2 bg-purple-900 rounded-full flex items-center justify-center">
//               <Disc className="w-32 h-32 text-white/50" />
//             </div>
//           </div>
//           <div className="text-center space-y-4 max-w-md">
//             <h2 className="text-2xl font-bold">Discover Music Together</h2>
//             <p className="text-white/70">Join our community of music lovers and explore new sounds, share your favorites, and connect with artists worldwide.</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Auth Form */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12">
//         <div className="max-w-md w-full mx-auto space-y-8">
//           {/* Mobile Logo */}
//           <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
//             <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
//               <Music className="w-8 h-8 text-purple-600" />
//               <span className="text-2xl font-bold">Artswarit</span>
//             </Link>
//           </div>

//           {/* Header */}
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold text-gray-900">
//               {isLogin ? 'Welcome Back!' : 'Join the Community'}
//             </h2>
//             <p className="text-gray-600">
//               {isLogin ? 'Sign in to continue your journey' : 'Create your account today'}
//             </p>
//           </div>

//           {/* Quick Auth Options */}
//           <div className="grid grid-cols-2 gap-4">
//             <button className="flex items-center justify-center gap-2 p-3 border-2 rounded-xl hover:bg-gray-50 transition-all group">
//               <img 
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google logo"
//                 className="w-5 h-5"
//               />
//               <span className="text-sm font-medium text-gray-700">Google</span>
//             </button>
//             <button className="flex items-center justify-center gap-2 p-3 bg-[#0A66C2] rounded-xl hover:bg-[#004182] transition-all text-white">
//               <Linkedin className="w-5 h-5" />
//               <span className="text-sm font-medium">LinkedIn</span>
//             </button>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500">or</span>
//             </div>
//           </div>

//           {/* Auth Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLogin && (
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <label className="block text-sm font-medium text-gray-700">Username</label>
//                 </div>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Choose a username"
//                     className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             )}

//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//               </div>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 {isLogin && (
//                   <Link to="/reset-password" className="text-sm font-medium text-purple-600 hover:text-purple-500">
//                     Forgot password?
//                   </Link>
//                 )}
//               </div>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
//               >
//                 {isLogin ? 'Sign In' : 'Create Account'}
//                 <Play className="w-4 h-4" />
//               </button>
//             </div>
//           </form>

//           {/* Form Footer */}
//           <div className="space-y-4">
//             <p className="text-center text-sm text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-1 font-medium text-purple-600 hover:text-purple-500"
//               >
//                 {isLogin ? 'Sign up' : 'Sign in'}
//               </button>
//             </p>

//             <div className="flex justify-center">
//               <Link 
//                 to="/landing"
//                 className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 <Home className="w-4 h-4" />
//                 <span>Continue to Homepage</span>
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;









