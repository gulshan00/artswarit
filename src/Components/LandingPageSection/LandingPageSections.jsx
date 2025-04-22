/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ChevronRight, Star, DollarSign, Users, ChevronLeft, Music, Mic, PlayCircle, Trophy } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

const LandingPageSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const featuredArtists = [
  //   {
  //     name: "Sarah Johnson",
  //     category: "Pop Vocalist",
  //     rating: 4.9,
  //     followers: "12.5K",
  //     genre: "Pop/R&B",
  //     price: "$500/performance",
  //     videoUrl: "https://www.youtube.com/watch?v=sRmRLJcLAEw"
  //   },
  //   {
  //     name: "Michael Chen",
  //     category: "Jazz Pianist",
  //     rating: 4.8,
  //     followers: "8.2K",
  //     genre: "Jazz/Classical",
  //     price: "$450/performance",
  //     videoUrl: "https://www.youtube.com/watch?v=sRmRLJcLAEw"
  //   },
  //   {
  //     name: "Emma Davis",
  //     category: "Singer-Songwriter",
  //     rating: 4.7,
  //     followers: "15.1K",
  //     genre: "Indie/Folk",
  //     price: "$400/performance",
  //     videoUrl: "https://www.youtube.com/watch?v=sRmRLJcLAEw"
  //   }
  // ];

  // const videoTestimonials = [
  //   {
  //     id: 1,
  //     title: "From Local Gigs to Festival Stages",
  //     author: "David Wilson",
  //     role: "Rock Musician",
  //     videoUrl: "https://www.youtube.com/watch?v=sRmRLJcLAE",
  //     views: "50K",
  //     duration: "5:24"
  //   },
  //   {
  //     id: 2,
  //     title: "How I Book 20+ Shows Monthly",
  //     author: "Jessica Lee",
  //     role: "Pop Artist",
  //     videoUrl: "https://www.youtube.com/watch?v=sRmRLJcLAEw",
  //     views: "32K",
  //     duration: "4:15"
  //   },
  //   {
  //     id: 3,
  //     title: "Building a Music Career Online",
  //     author: "Mark Thompson",
  //     role: "EDM Producer",
  //     videoUrl: "https://www.youtube.com/watch?v=sRmRLJcLAEw",
  //     views: "45K",
  //     duration: "6:30"
  //   }
  // ];
  const featuredArtists = [
    {
      name: "Sarah Johnson",
      category: "Pop Vocalist",
      rating: 4.9,
      followers: "12.5K",
      genre: "Pop/R&B",
      price: "$500/performance",
      videoUrl: "https://www.youtube.com/embed/sRmRLJcLAEw"
    },
    {
      name: "Michael Chen",
      category: "Jazz Pianist",
      rating: 4.8,
      followers: "8.2K",
      genre: "Jazz/Classical",
      price: "$450/performance",
      videoUrl: "https://www.youtube.com/embed/sRmRLJcLAEw"
    },
    {
      name: "Emma Davis",
      category: "Singer-Songwriter",
      rating: 4.7,
      followers: "15.1K",
      genre: "Indie/Folk",
      price: "$400/performance",
      videoUrl: "https://www.youtube.com/embed/sRmRLJcLAEw"
    }
  ];
  
  const videoTestimonials = [
    {
      id: 1,
      title: "From Local Gigs to Festival Stages",
      author: "David Wilson",
      role: "Rock Musician",
      videoUrl: "https://www.youtube.com/embed/sRmRLJcLAEw",
      views: "50K",
      duration: "5:24"
    },
    {
      id: 2,
      title: "How I Book 20+ Shows Monthly",
      author: "Jessica Lee",
      role: "Pop Artist",
      videoUrl: "https://www.youtube.com/embed/sRmRLJcLAEw",
      views: "32K",
      duration: "4:15"
    },
    {
      id: 3,
      title: "Building a Music Career Online",
      author: "Mark Thompson",
      role: "EDM Producer",
      videoUrl: "https://www.youtube.com/embed/sRmRLJcLAEw",
      views: "45K",
      duration: "6:30"
    }
  ];
  
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Global Reach",
      description: "Connect with event organizers and venues worldwide"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: "Transparent Pricing",
      description: "Set your rates and receive secure payments"
    },
    {
      icon: <Music className="w-8 h-8 text-purple-500" />,
      title: "Performance Tools",
      description: "Access to rider templates and tech requirements"
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      title: "Verified Reviews",
      description: "Build credibility with authentic feedback"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === videoTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? videoTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div id="trending" className="min-h-screen scroll-mt-24 bg-gradient-to-r from-purple-900 via-purple-600 to-pink-600">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Book Amazing Musicians</h1>
          <p className="text-xl text-white/90 mb-8">Find and hire professional musicians for your events</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Browse Artists
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              List Your Services
            </button>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Top Musicians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtists.map((artist, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg p-6 text-white hover:transform hover:scale-105 transition-all">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src={artist.videoUrl}
                    className="w-full h-full"
                    title={`${artist.name}'s performance`}
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{artist.name}</h3>
                    <p className="text-sm opacity-80">{artist.category}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-80">Genre</span>
                    <span>{artist.genre}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{artist.rating}</span>
                    </div>
                    <span>{artist.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{artist.followers} followers</span>
                    <button className="text-sm text-purple-300 hover:text-white transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Success Stories</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {videoTestimonials.map((video, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-black">
                      <iframe
                        src={video.videoUrl}
                        className="w-full h-full"
                        title={video.title}
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <PlayCircle className="w-5 h-5 text-purple-300" />
                        <span className="text-sm text-purple-300">{video.duration}</span>
                        <span className="text-sm text-purple-300">• {video.views} views</span>
                      </div>
                      <h3 className="text-xl font-semibold">{video.title}</h3>
                      <p className="text-white/80">{video.author} - {video.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 group hover:transform hover:translate-x-2 transition-all">
                <div className="bg-white/10 p-4 rounded-lg group-hover:bg-white/20 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 text-center bg-gradient-to-r from-purple-800 to-pink-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Showcase Your Talent?</h2>
          <p className="text-white/80 text-lg mb-8">Join thousands of musicians who are booking gigs and growing their careers</p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto">
            Start Performing Today
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPageSections;




// import React, { useState } from 'react';
// import { ChevronRight, Star, DollarSign, Users, ChevronLeft } from 'lucide-react';

// const Card = ({ children, className = "" }) => (
//   <div className={`rounded-lg ${className}`}>
//     {children}
//   </div>
// );

// const LandingPageSections = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Rest of the data remains the same
//   const featuredArtists = [
//     {
//       name: "Sarah Johnson",
//       category: "Music Producer",
//       rating: 4.9,
//       followers: "12.5K"
//     },
//     {
//       name: "Michael Chen",
//       category: "Visual Artist",
//       rating: 4.8,
//       followers: "8.2K"
//     },
//     {
//       name: "Emma Davis",
//       category: "Photographer",
//       rating: 4.7,
//       followers: "15.1K"
//     }
//   ];

//   const videoTestimonials = [
//     {
//       id: 1,
//       title: "How I Made $10k in My First Month",
//       author: "David Wilson",
//       role: "Music Artist",
//       placeholder: "/api/placeholder/560/315"
//     },
//     {
//       id: 2,
//       title: "My Journey as a Digital Creator",
//       author: "Jessica Lee",
//       role: "Digital Creator",
//       placeholder: "/api/placeholder/560/315"
//     },
//     {
//       id: 3,
//       title: "Success Story: From Hobby to Career",
//       author: "Mark Thompson",
//       role: "Content Creator",
//       placeholder: "/api/placeholder/560/315"
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Users className="w-8 h-8 text-purple-500" />,
//       title: "Audience Growth",
//       description: "Connect with millions of potential fans worldwide"
//     },
//     {
//       icon: <DollarSign className="w-8 h-8 text-purple-500" />,
//       title: "Multiple Revenue Streams",
//       description: "Earn through subscriptions, tips, and merchandise sales"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => 
//       prev === videoTestimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => 
//       prev === 0 ? videoTestimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//       {/* Featured Artists Section */}
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Featured Artists</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredArtists.map((artist, index) => (
//               <Card key={index} className="bg-white/10 backdrop-blur-lg p-6 text-white">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
//                   <div>
//                     <h3 className="font-semibold">{artist.name}</h3>
//                     <p className="text-sm opacity-80">{artist.category}</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="flex items-center">
//                     <Star className="w-4 h-4 text-yellow-400 mr-1" />
//                     <span>{artist.rating}</span>
//                   </div>
//                   <div>{artist.followers} followers</div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Video Testimonials Section */}
//       <section className="py-16 px-4 md:px-8 bg-white/5">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Success Stories</h2>
//           <div className="relative">
//             <div className="overflow-hidden rounded-xl">
//               <div className="flex transition-transform duration-500 ease-in-out" 
//                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                 {videoTestimonials.map((video, index) => (
//                   <div key={index} className="w-full flex-shrink-0">
//                     <div className="aspect-video relative rounded-lg overflow-hidden">
//                       <img 
//                         src={video.placeholder} 
//                         alt={video.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                         <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
//                           <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-purple-100 transition-colors">
//                             <ChevronRight className="w-8 h-8 text-purple-600 ml-1" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-4 text-white">
//                       <h3 className="text-xl font-semibold">{video.title}</h3>
//                       <p className="text-white/80">{video.author} - {video.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Navigation Buttons */}
//             <button 
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronLeft className="w-6 h-6 text-white" />
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronRight className="w-6 h-6 text-white" />
//             </button>

//             {/* Dots Navigation */}
//             <div className="flex justify-center gap-2 mt-4">
//               {videoTestimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-colors ${
//                     currentSlide === index ? 'bg-white' : 'bg-white/40'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Monetization Benefits Section */}
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Monetization Benefits</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex gap-6">
//                 <div>{benefit.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
//                   <p className="text-white/80">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 md:px-8 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
//           <p className="text-white/80 text-lg mb-8">Join thousands of creators who are turning their passion into profit</p>
//           <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto">
//             Get Started for Free
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPageSections;