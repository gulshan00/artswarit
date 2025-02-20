// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Music, Mail, Lock, User, Linkedin, ArrowRight, Home, Play, Disc } from 'lucide-react';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
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

          {/* Quick Auth Options */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-3 border-2 rounded-xl hover:bg-gray-50 transition-all group">
              <img 
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-[#0A66C2] rounded-xl hover:bg-[#004182] transition-all text-white">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
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
            {!isLogin && (
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
            )}

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
                {isLogin && (
                  <Link to="/reset-password" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                    Forgot password?
                  </Link>
                )}
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

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <Play className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Form Footer */}
          <div className="space-y-4">
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

            <div className="flex justify-center">
              <Link 
                to="/landing"
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
// import { Music, Mail, Lock, User, Linkedin, ArrowRight, Home, Headphones, Mic2, Radio } from 'lucide-react';

// const AuthPages = () => {
//   const [isLogin, setIsLogin] = useState(true);
  
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 p-4 relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-xl"></div>
//         <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
//           <Radio className="w-16 h-16 text-white/10" />
//         </div>
//         <div className="absolute bottom-1/4 right-1/4">
//           <Headphones className="w-20 h-20 text-white/10" />
//         </div>
//         <div className="absolute top-1/4 right-1/3">
//           <Mic2 className="w-14 h-14 text-white/10" />
//         </div>
//       </div>

//       {/* Logo and Title Section */}
//       <div className="w-full max-w-md text-center mb-8 relative">
//         <div className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
//           <Music size={28} className="text-white" />
//           <span className="text-white text-2xl font-bold">Artswarit</span>
//         </div>
//       </div>

//       {/* Main Card */}
//       <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-2xl overflow-hidden relative">
//         {/* Top Design Element */}
//         <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        
//         {/* Background Music Notes - Decorative */}
//         <div className="absolute top-0 right-0 p-4 opacity-5">
//           <Music size={120} />
//         </div>

//         <div className="p-8 relative">
//           <div className="space-y-6">
//             {/* Header */}
//             <div className="text-center space-y-3">
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 {isLogin ? 'Welcome Back!' : 'Join the Music'}
//               </h2>
//               <p className="text-gray-600">
//                 {isLogin 
//                   ? 'Login to start your musical journey' 
//                   : 'Create your account and start exploring'}
//               </p>
//             </div>

//             {/* Featured Image */}
//             <div className="flex justify-center py-4">
//               <div className="w-32 h-32 relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
//                 <Headphones className="w-full h-full text-purple-600" />
//               </div>
//             </div>

//             {/* Social Login Buttons */}
//             <div className="grid gap-3">
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-3 py-3 px-4 bg-white border-2 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group"
//               >
//                 <img 
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="Google logo"
//                   className="w-5 h-5"
//                 />
//                 <span className="font-medium group-hover:text-purple-600 transition-colors">
//                   {isLogin ? 'Continue with Google' : 'Sign up with Google'}
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-3 py-3 px-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#004182] transition-all duration-200 hover:shadow-md"
//               >
//                 <Linkedin className="w-5 h-5" />
//                 <span className="font-medium">
//                   {isLogin ? 'Continue with LinkedIn' : 'Sign up with LinkedIn'}
//                 </span>
//               </button>
//             </div>

//             {/* Divider with Music Note */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500 flex items-center gap-2">
//                   <Music size={14} className="text-purple-500" />
//                   continue with email
//                 </span>
//               </div>
//             </div>

//             {/* Form */}
//             <form className="space-y-4">
//               {!isLogin && (
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700">Username</label>
//                   <div className="relative group">
//                     <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
//                     <input
//                       type="text"
//                       placeholder="Enter your username"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                 </div>
//               )}
              
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Email</label>
//                 <div className="relative group">
//                   <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <label className="text-sm font-medium text-gray-700">Password</label>
//                   {isLogin && (
//                     <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline">
//                       Forgot password?
//                     </a>
//                   )}
//                 </div>
//                 <div className="relative group">
//                   <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:opacity-90 transition-all duration-200 font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 flex items-center justify-center gap-2"
//               >
//                 <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
//                 <Music size={18} />
//               </button>
//             </form>

//             {/* Toggle Login/Signup */}
//             <p className="text-center text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-1 text-purple-600 hover:text-purple-700 font-medium hover:underline focus:outline-none"
//               >
//                 {isLogin ? 'Sign up' : 'Sign in'}
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Continue Without Login Button */}
//       <div className="mt-6 flex flex-col items-center space-y-4">
//         <button 
//           onClick={() => window.location.href = '/'}
//           className="flex items-center gap-2 px-6 py-2.5 text-white hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur group"
//         >
//           <Home size={20} className="group-hover:scale-110 transition-transform" />
//           <span>Continue to Homepage</span>
//           <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;



// import React, { useState } from 'react';
// import { Music, Mail, Lock, User, Linkedin, ArrowRight, Home } from 'lucide-react';

// const AuthPages = () => {
//   const [isLogin, setIsLogin] = useState(true);
  
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 p-4">
//       {/* Logo and Title Section */}
//       <div className="w-full max-w-md text-center mb-6">
//         <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
//           <Music size={24} className="text-white" />
//           <span className="text-white text-xl font-semibold">Artswarit</span>
//         </div>
//       </div>

//       {/* Main Card */}
//       <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-2xl overflow-hidden">
//         {/* Top Design Element */}
//         <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        
//         <div className="p-8">
//           <div className="space-y-6">
//             {/* Header */}
//             <div className="text-center space-y-2">
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 {isLogin ? 'Welcome Back!' : 'Create Account'}
//               </h2>
//               <p className="text-gray-600">
//                 {isLogin ? 'Login to access your account' : 'Sign up to start creating'}
//               </p>
//             </div>

//             {/* Social Login Buttons */}
//             <div className="grid gap-3">
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-3 py-3 px-4 bg-white border-2 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
//               >
//                 <img 
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="Google logo"
//                   className="w-5 h-5"
//                 />
//                 <span className="font-medium">
//                   {isLogin ? 'Continue with Google' : 'Sign up with Google'}
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-3 py-3 px-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#004182] transition-all duration-200 hover:shadow-md"
//               >
//                 <Linkedin className="w-5 h-5" />
//                 <span className="font-medium">
//                   {isLogin ? 'Continue with LinkedIn' : 'Sign up with LinkedIn'}
//                 </span>
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">or continue with email</span>
//               </div>
//             </div>

//             {/* Form */}
//             <form className="space-y-4">
//               {!isLogin && (
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700">Username</label>
//                   <div className="relative group">
//                     <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
//                     <input
//                       type="text"
//                       placeholder="Enter your username"
//                       className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                 </div>
//               )}
              
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Email</label>
//                 <div className="relative group">
//                   <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <label className="text-sm font-medium text-gray-700">Password</label>
//                   {isLogin && (
//                     <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline">
//                       Forgot password?
//                     </a>
//                   )}
//                 </div>
//                 <div className="relative group">
//                   <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:opacity-90 transition-all duration-200 font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40"
//               >
//                 {isLogin ? 'Sign In' : 'Create Account'}
//               </button>
//             </form>

//             {/* Toggle Login/Signup */}
//             <p className="text-center text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-1 text-purple-600 hover:text-purple-700 font-medium hover:underline focus:outline-none"
//               >
//                 {isLogin ? 'Sign up' : 'Sign in'}
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Continue Without Login Button */}
//       <div className="mt-6 flex flex-col items-center space-y-4">
//         <button 
//           onClick={() => window.location.href = '/'}
//           className="flex items-center gap-2 px-6 py-2.5 text-white hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur"
//         >
//           <Home size={20} />
//           <span>Continue to Homepage</span>
//           <ArrowRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;

// import React, { useState } from 'react';
// import { Music, Mail, Lock, User, Twitter, Linkedin } from 'lucide-react';

// const AuthPages = () => {
//   const [isLogin, setIsLogin] = useState(true);
  
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 p-4">
//       <div className="w-full max-w-md shadow-xl bg-white/95 backdrop-blur rounded-lg p-6 sm:p-8">
//         <div className="space-y-6">
//           <div className="flex items-center justify-center mb-4">
//             <Music size={32} className="text-purple-600" />
//           </div>
          
//           <div className="text-center space-y-2">
//             <h2 className="text-2xl font-bold sm:text-3xl">
//               {isLogin ? 'Welcome Back!' : 'Create Account'}
//             </h2>
//             <p className="text-gray-600">
//               {isLogin ? 'Login to access your account' : 'Sign up to start creating'}
//             </p>
//           </div>

//           {/* Social Login Buttons */}
//           <div className="space-y-3">
//             <button
//               type="button"
//               className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-white border-2 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               <img 
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google logo"
//                 className="w-5 h-5"
//               />
//               <span className="text-sm sm:text-base">
//                 {isLogin ? 'Login with Google' : 'Sign up with Google'}
//               </span>
//             </button>

//             <button
//               type="button"
//               className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
//             >
//               <Linkedin className="w-5 h-5" />
//               <span className="text-sm sm:text-base">
//                 {isLogin ? 'Login with LinkedIn' : 'Sign up with LinkedIn'}
//               </span>
//             </button>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <form className="space-y-4">
//             {!isLogin && (
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Username</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Enter your username"
//                     className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//               </div>
//             )}
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Email</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>
            
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <label className="text-sm font-medium">Password</label>
//                 {isLogin && (
//                   <a href="#" className="text-sm text-purple-600 hover:underline">
//                     Forgot password?
//                   </a>
//                 )}
//               </div>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base font-medium"
//             >
//               {isLogin ? 'Login' : 'Sign Up'}
//             </button>
            
//             <p className="text-center text-sm text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-1 text-purple-600 hover:underline focus:outline-none"
//               >
//                 {isLogin ? 'Sign up' : 'Login'}
//               </button>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;


// import React, { useState } from 'react';
// import { Music, Mail, Lock, User } from 'lucide-react';

// const AuthPages = () => {
//   const [isLogin, setIsLogin] = useState(true);
  
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
//       <div className="w-full max-w-md m-4 shadow-xl bg-white/95 backdrop-blur rounded-lg p-6">
//         <div className="space-y-6">
//           <div className="flex items-center justify-center mb-4">
//             <Music size={32} className="text-purple-600" />
//           </div>
          
//           <div className="text-center space-y-2">
//             <h2 className="text-2xl font-bold">
//               {isLogin ? 'Welcome Back!' : 'Create Account'}
//             </h2>
//             <p className="text-gray-600">
//               {isLogin ? 'Login to access your account' : 'Sign up to start creating'}
//             </p>
//           </div>

//           <form className="space-y-4">
//             {!isLogin && (
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Username</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Enter your username"
//                     className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//               </div>
//             )}
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Email</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
//             >
//               {isLogin ? 'Login' : 'Sign Up'}
//             </button>
            
//             <p className="text-center text-sm text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-1 text-purple-600 hover:underline focus:outline-none"
//               >
//                 {isLogin ? 'Sign up' : 'Login'}
//               </button>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPages;