// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   UserCircle, 
//   Music, 
//   Search,
//   // Disc,
//   Sparkles,
//   Users,
//   TrendingUp
// } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     { path: "/explore", icon: <Music className="w-4 h-4" />, label: "Explore" },
//     { path: "/artists", icon: <Users className="w-4 h-4" />, label: "Artists" },
//     { path: "/campaigns", icon: <Sparkles className="w-4 h-4" />, label: "Campaigns" },
//     { path: "/trending", icon: <TrendingUp className="w-4 h-4" />, label: "Trending" }
//   ];

//   return (
//     <>
//       {/* Spacer div to prevent content jump when navbar becomes fixed */}
//       <div className={`h-16 ${isScrolled ? 'block' : 'hidden'}`}></div>
//       <div className={`w-full ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-lg' : ''} transition-all duration-300 ease-in-out z-50`}>
//         <nav className={`flex justify-between items-center px-4  bg-gradient-to-r from-blue-200 via-pink-100 to-purple-200 
//           ${isScrolled ? 'shadow-lg backdrop-blur-sm bg-opacity-90' : ''} 
//           transition-all duration-300`}>
//           <Link to="https://artswarit.vercel.app/" className="flex items-center space-x-2">
//             <img src="/assets/logo.svg" alt="Artswarit" className="w-32 h-32 mix-blend-multiply" />
//           </Link>
//           <div className="hidden md:flex items-center max-w-md w-full mx-4">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search artists, music, genres..."
//                 className="w-full px-4 py-2 rounded-full bg-white border focus:outline-none focus:ring-2 focus:ring-purple-300"
//               />
//               <Search className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className="flex items-center space-x-1 hover:text-purple-600 transition-colors"
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </Link>
//             ))}
           
//           </div>
//           <div className="hidden md:flex items-center space-x-3">
//             <Link
//               to="/login"
//               className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               Login
//             </Link>
//             <Link
//               to="/create"
//               className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               Start Creating
//             </Link>
//           </div>
//           <button
//             className="block md:hidden text-gray-700 text-2xl"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </nav>
//         <div
//           className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } z-40`}
//         >
//           {/* Mobile menu content remains the same */}
//           <div className="flex flex-col h-full">
//             {/* Mobile Menu Header */}
//             <div className="p-4 border-b">
//               <div className="flex items-center space-x-3 mb-4">
//                 <UserCircle className="w-8 h-8 text-gray-600" />
//                 <div className="space-y-1">
//                   <Link
//                     to="/login"
//                     className="inline-block px-4 py-1.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-sm"
//                   >
//                     Login
//                   </Link>
//                   <p className="text-sm text-gray-500">to access all features</p>
//                 </div>
//               </div>
//               {/* Mobile Search */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
//                 />
//                 <Search className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
//               </div>
//             </div>

//             {/* Mobile Menu Items */}
//             <div className="flex flex-col p-4 space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className="flex items-center space-x-3 py-2 hover:text-purple-600 transition-colors"
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               ))}
//               <Link to="/about" className="py-2 hover:text-purple-600">About Us</Link>
//             </div>

//             {/* Mobile Menu Footer */}
//             <div className="mt-auto p-4 border-t">
//               <Link
//                 to="/create"
//                 className="block w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-center shadow-md hover:shadow-lg"
//               >
//                 Start Creating
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Overlay */}
//         {isMenuOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-30"
//             onClick={toggleMenu}
//           ></div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  UserCircle, 
  Music, 
  Search,
  Sparkles,
  Users,
  TrendingUp,
  Headphones,
  Heart,
  Home
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", icon: <Home className="w-4 h-4" />, label: "Home" },
    { path: "/explore", icon: <Music className="w-4 h-4" />, label: "Explore" },
    { path: "/artists", icon: <Users className="w-4 h-4" />, label: "Artists" },
    { path: "/trending", icon: <TrendingUp className="w-4 h-4" />, label: "Trending" }
  ];

  return (
    <>
      {/* Spacer div to prevent content jump when navbar becomes fixed */}
      <div className={`h-16 ${isScrolled ? 'block' : 'hidden'}`}></div>
      
      <div className={`w-full ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'absolute top-0 left-0 right-0 z-50'}`}>
        <nav className={`
          flex justify-between items-center px-4 lg:px-10 py-3
          ${isScrolled 
            ? 'bg-black/80 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-black/80 to-transparent backdrop-blur-sm'}
          transition-all duration-300`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 ">
          <img src="/assets/logo2.jpg" alt="Artswarit" className="w-24 h-18 " />
          </Link>
          
          {/* Desktop Search */}
          <div className="hidden md:flex items-center max-w-md w-full mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search artists, songs, albums..."
                className="w-full px-4 py-2 rounded-full bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-6 py-2 text-gray-300 border border-gray-600 rounded-full font-medium hover:bg-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              Login
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        
        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 left-0 w-72 h-full bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-60 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="p-5 border-b border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                <img src="/assets/logo2.jpg" alt="Artswarit" className="w-24 h-18 " />
                </div>
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Mobile User Section */}
              <div className="flex items-center space-x-3 mb-4">
                <UserCircle className="w-10 h-10 text-gray-400" />
                <div className="space-y-1">
                  <p className="text-white font-medium">Welcome</p>
                  <p className="text-xs text-gray-400">Sign in to access all features</p>
                </div>
              </div>
              
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col p-5 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-3 py-3 px-2 text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <div className="border-t border-gray-800 my-4 pt-4">
                <p className="text-xs text-gray-500 uppercase font-medium mb-2 px-2">Discover</p>
                <Link
                  to="/playlists"
                  className="flex items-center space-x-3 py-3 px-2 text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  <Headphones className="w-4 h-4" />
                  <span>Playlists</span>
                </Link>
                <Link
                  to="/favorites"
                  className="flex items-center space-x-3 py-3 px-2 text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  <Heart className="w-4 h-4" />
                  <span>Favorites</span>
                </Link>
                <Link
                  to="/new-releases"
                  className="flex items-center space-x-3 py-3 px-2 text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>New Releases</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-auto p-5 border-t border-gray-800">
              <div className="flex space-x-3">
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2 text-center text-gray-300 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;