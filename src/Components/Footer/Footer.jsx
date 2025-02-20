// eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Instagram, Twitter, Facebook, Music2, Newspaper, Headphones, 
//          Calendar, Radio, User, Heart, Phone, Mail, MapPin } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info & About */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">About Artswarit</h3>
//             <p className="text-gray-300 mb-4">
//               Bringing the best music experience to our listeners since 2020. 
//               We believe in the power of music to connect and inspire.
//             </p>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a 
//                 href="https://instagram.com/artswarit" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-gray-300 hover:text-white transition-colors"
//               >
//                 <Instagram size={24} />
//               </a>
//               <a 
//                 href="https://twitter.com/artswarit" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-gray-300 hover:text-white transition-colors"
//               >
//                 <Twitter size={24} />
//               </a>
//               <a 
//                 href="https://facebook.com/artswarit" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-gray-300 hover:text-white transition-colors"
//               >
//                 <Facebook size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">Explore</h3>
//             <nav className="flex flex-col space-y-2">
//               <NavLink 
//                 to="/music" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Music2 size={16} />
//                 <span>Music Library</span>
//               </NavLink>
//               <NavLink 
//                 to="/blog" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Newspaper size={16} />
//                 <span>Blog & News</span>
//               </NavLink>
//               <NavLink 
//                 to="/events" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Calendar size={16} />
//                 <span>Events</span>
//               </NavLink>
//               <NavLink 
//                 to="/radio" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Radio size={16} />
//                 <span>Live Radio</span>
//               </NavLink>
//               <NavLink 
//                 to="/playlists" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Headphones size={16} />
//                 <span>Playlists</span>
//               </NavLink>
//             </nav>
//           </div>

//           {/* Community */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">Community</h3>
//             <nav className="flex flex-col space-y-2">
//               <NavLink 
//                 to="/account" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <User size={16} />
//                 <span>My Account</span>
//               </NavLink>
//               <NavLink 
//                 to="/favorites" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Heart size={16} />
//                 <span>My Favorites</span>
//               </NavLink>
//               <NavLink 
//                 to="/support" 
//                 className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-2"
//               >
//                 <Phone size={16} />
//                 <span>Support</span>
//               </NavLink>
//             </nav>
//           </div>

//           {/* Contact Info */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <div className="flex flex-col space-y-2">
//               <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
//                 <Mail size={16} />
//                 <span>contact@artswarit.com</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
//                 <Phone size={16} />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
//                 <MapPin size={16} />
//                 <span>123 Music Street, Suite 101<br />Nashville, TN 37203</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Subscription */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
//           <div className="max-w-md mx-auto flex gap-4">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="flex-1 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Copyright & Legal */}
//         <div className="border-t border-gray-700 mt-8 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-300">
//               © {currentYear} Artswarit. All rights reserved.
//             </p>
//             <div className="flex space-x-4 text-sm">
//               <NavLink to="/privacy" className="text-gray-300 hover:text-white">
//                 Privacy Policy
//               </NavLink>
//               <NavLink to="/terms" className="text-gray-300 hover:text-white">
//                 Terms of Service
//               </NavLink>
//               <NavLink to="/cookie-policy" className="text-gray-300 hover:text-white">
//                 Cookie Policy
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Instagram, Twitter, Facebook, Linkedin, Music2, Newspaper, 
  Headphones, Calendar, Radio, User, Heart, Phone, Mail, 
  MapPin, Play, Mic2, Music, ListMusic, MessageCircle, 
  HelpCircle, Settings, Book, Award, ChevronDown, ChevronUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState('');

  const socialLinks = [
    { icon: <Instagram size={24} />, url: 'https://instagram.com/artswarit', label: 'Instagram' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/artswarit', label: 'Twitter' },
    { icon: <Facebook size={24} />, url: 'https://facebook.com/artswarit', label: 'Facebook' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/company/artswarit', label: 'LinkedIn' }
  ];

  const FooterSection = ({ title, icon, children, id }) => {
    const isExpanded = expandedSection === id;
    
    return (
      <div className="border-b md:border-none border-white/20 last:border-b-0">
        <div 
          className="flex items-center justify-between cursor-pointer md:cursor-default py-4 md:py-0"
          onClick={() => setExpandedSection(isExpanded ? '' : id)}
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {icon}
            {title}
          </h3>
          <button className="md:hidden text-white">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <div className={`${isExpanded ? 'max-h-96' : 'max-h-0 md:max-h-none'} overflow-hidden transition-all duration-300 ease-in-out md:block md:mt-4`}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <footer className="relative py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8">
          {/* Company Info & About */}
          <FooterSection 
            title="About Artswarit" 
            icon={<Music size={20} />}
            id="about"
          >
            <p className="text-white/90 mb-4 text-sm md:text-base">
              Bringing the best music experience to our listeners since 2020. 
              We believe in the power of music to connect and inspire.
            </p>
            <div className="flex justify-start space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/90 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </FooterSection>

          {/* Music & Content */}
          <FooterSection 
            title="Music & Content" 
            icon={<Headphones size={20} />}
            id="music"
          >
            <nav className="flex flex-col space-y-3">
              {[
                { icon: <Music2 size={16} />, label: 'Music Library', path: '/music-library' },
                { icon: <ListMusic size={16} />, label: 'Playlists', path: '/playlists' },
                { icon: <Radio size={16} />, label: 'Live Radio', path: '/radio' },
                { icon: <Mic2 size={16} />, label: 'Podcasts', path: '/podcasts' },
                { icon: <Book size={16} />, label: 'Blog', path: '/blog' }
              ].map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className="text-white/90 hover:text-white flex items-center gap-2 text-sm md:text-base
                           hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </FooterSection>

          {/* Community & Support */}
          <FooterSection 
            title="Community" 
            icon={<MessageCircle size={20} />}
            id="community"
          >
            <nav className="flex flex-col space-y-3">
              {[
                { icon: <User size={16} />, label: 'My Account', path: '/account' },
                { icon: <Heart size={16} />, label: 'My Favorites', path: '/favorites' },
                { icon: <HelpCircle size={16} />, label: 'Help Center', path: '/help' },
                { icon: <Settings size={16} />, label: 'Settings', path: '/settings' },
                { icon: <Award size={16} />, label: 'For Artists', path: '/artists' }
              ].map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className="text-white/90 hover:text-white flex items-center gap-2 text-sm md:text-base
                           hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </FooterSection>

          {/* Contact & Newsletter */}
          <FooterSection 
            title="Stay Connected" 
            icon={<Mail size={20} />}
            id="contact"
          >
            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                {[
                  { icon: <Mail size={16} />, text: 'contact@artswarit.com' },
                  { icon: <Phone size={16} />, text: '+1 (555) 123-4567' },
                  { icon: <MapPin size={16} />, text: '123 Music Street, Nashville' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-white/90 gap-2 text-sm md:text-base">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 
                           focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base
                           hover:bg-white/20 transition-colors"
                />
                <button className="px-6 py-2 bg-white text-purple-600 rounded-lg hover:bg-white/90 
                                 transition-colors font-semibold flex items-center justify-center gap-2
                                 text-sm md:text-base">
                  <Play size={16} />
                  Subscribe
                </button>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/90 text-sm md:text-base text-center md:text-left">
              © {currentYear} Artswarit. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {[
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
                { label: 'Cookie Policy', path: '/cookie-policy' }
              ].map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className="text-white/90 hover:text-white hover:underline"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






