// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, Music, Headphones } from 'lucide-react';

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Music Production Tips for Beginners",
      excerpt: "Learn the essential tips and tricks to start your music production journey...",
      author: "John Doe",
      date: "2024-02-15",
      image: "/assets/girl.jpg",
      category: "Production"
    },
    {
      id: 2,
      title: "The Evolution of Electronic Music",
      excerpt: "Explore the fascinating journey of electronic music through the decades...",
      author: "Jane Smith",
      date: "2024-02-14",
      image: "/assets/girl1.jpg",
      category: "History"
    },
    {
      id: 3,
      title: "Best Music Festivals of 2024",
      excerpt: "Discover the most anticipated music festivals happening this year...",
      author: "Mike Johnson",
      date: "2024-02-13",
      image: "/assets/girl2.jpg",
      category: "Events"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-purple-900/80 to-indigo-900/80 rounded-xl p-6 backdrop-blur-md shadow-xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Headphones className="text-purple-400" size={22} />
          <h3 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Latest from the Beat</h3>
        </div>
        <div className="flex gap-1">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 w-12' 
                  : 'bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="w-full flex-shrink-0 p-2"
              >
                <div className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-purple-600/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Music size={12} />
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-bold text-xl mb-3 group-hover:text-purple-300 transition-colors">{post.title}</h4>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-white/70 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-800/50 p-1.5 rounded-full">
                          <User size={14} className="text-purple-300" />
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-800/50 p-1.5 rounded-full">
                          <Clock size={14} className="text-purple-300" />
                        </div>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-800/80 p-3 rounded-full text-white/90 transition-colors duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-800/80 p-3 rounded-full text-white/90 transition-colors duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="mt-6 w-full flex justify-center">
        <button className="text-sm font-medium text-white bg-purple-800/40 hover:bg-purple-700/60 px-6 py-2 rounded-full transition-colors duration-300 backdrop-blur-sm border border-purple-500/30 flex items-center gap-2">
          View All Articles
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
// import React, { useState, useEffect } from 'react';

// import { 
//   ChevronLeft, 
//   ChevronRight,
//   Clock,
//   User
// } from 'lucide-react';

// const BlogCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const blogPosts = [
//     {
//       id: 1,
//       title: "Top 10 Music Production Tips for Beginners",
//       excerpt: "Learn the essential tips and tricks to start your music production journey...",
//       author: "John Doe",
//       date: "2024-02-15",
//       image: "/assets/girl.jpg"
//     },
//     {
//       id: 2,
//       title: "The Evolution of Electronic Music",
//       excerpt: "Explore the fascinating journey of electronic music through the decades...",
//       author: "Jane Smith",
//       date: "2024-02-14",
//       image: "/assets/girl1.jpg"
//     },
//     {
//       id: 3,
//       title: "Best Music Festivals of 2024",
//       excerpt: "Discover the most anticipated music festivals happening this year...",
//       author: "Mike Johnson",
//       date: "2024-02-13",
//       image: "/assets/girl2.jpg"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//       <h3 className="text-xl font-bold text-white mb-4">Latest from Blog</h3>
      
//       <div className="relative">
//         <div className="overflow-hidden">
//           <div 
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {blogPosts.map((post) => (
//               <div 
//                 key={post.id}
//                 className="w-full flex-shrink-0 p-2"
//               >
//                 <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-white font-semibold text-lg mb-2">{post.title}</h4>
//                     <p className="text-white/70 text-sm mb-3">{post.excerpt}</p>
//                     <div className="flex items-center justify-between text-white/60 text-sm">
//                       <div className="flex items-center gap-2">
//                         <User size={14} />
//                         <span>{post.author}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Clock size={14} />
//                         <span>{new Date(post.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button 
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white/90 hover:bg-black/70 transition-colors"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button 
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white/90 hover:bg-black/70 transition-colors"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="flex justify-center gap-2 mt-4">
//           {blogPosts.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 rounded-full transition-colors ${
//                 currentSlide === index ? 'bg-white' : 'bg-white/30'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BlogCarousel;