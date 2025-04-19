/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import {  MapPin, Mail, Link2, X, Play, Pause, Heart, Share2 } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl mx-auto relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10">
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition-all shadow-md">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-purple-600 p-2 rounded-full hover:bg-purple-500 transition-all"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
      <div className="flex-grow">
        <div className="text-white font-medium">{song.title}</div>
        <div className="text-gray-400 text-sm">{song.duration}</div>
      </div>
      <div className="flex gap-3">
        <button className="text-gray-400 hover:text-pink-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const artistProfiles = [
    {
      id: 1,
      name: "Luna Eclipse",
      image: "/assets/girl.jpg",
      location: "Los Angeles, USA",
      email: "luna@music.com",
      website: "www.lunaeclipse.com",
      bio: "Electronic music producer and vocalist known for atmospheric soundscapes and haunting melodies.",
      genres: ["Electronic", "Ambient", "Pop"],
      stats: {
        monthlyListeners: "2.5M",
        followers: "850K",
        topCharts: "#3 Electronic"
      },
      topSongs: [
        { title: "Midnight Dreams", duration: "3:45" },
        { title: "Stellar Journey", duration: "4:12" },
        { title: "Urban Echo", duration: "3:58" }
      ]
    },
    {
      id: 2,
      name: "Marcus Wave",
      image: "/assets/girl1.jpg",
      location: "Berlin, Germany",
      email: "marcus@music.com",
      website: "www.marcuswave.com",
      bio: "Techno producer and DJ pushing the boundaries of electronic music with innovative sound design.",
      genres: ["Techno", "House", "Experimental"],
      stats: {
        monthlyListeners: "1.8M",
        followers: "620K",
        topCharts: "#5 Techno"
      },
      topSongs: [
        { title: "Deep Pulse", duration: "6:15" },
        { title: "Neural Dance", duration: "5:45" },
        { title: "Quantum Beat", duration: "7:20" }
      ]
    },
    {
      id: 3,
      name: "Aria Blue",
      image: "/assets/girl2.jpg",
      location: "London, UK",
      email: "aria@music.com",
      website: "www.ariablue.com",
      bio: "Soul and R&B vocalist blending traditional elements with modern production.",
      genres: ["R&B", "Soul", "Jazz"],
      stats: {
        monthlyListeners: "3.2M",
        followers: "980K",
        topCharts: "#2 R&B"
      },
      topSongs: [
        { title: "Velvet Night", duration: "4:32" },
        { title: "Soul Symphony", duration: "3:58" },
        { title: "Midnight Love", duration: "4:15" }
      ]
    }
  ];

  // Automatic carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === artistProfiles.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const openArtistModal = (artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        {/* Dynamic Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10"></div>
        
        {/* Carousel */}
        <div className="relative h-screen">
          {artistProfiles.map((artist, index) => (
            <div 
              key={artist.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          
          {/* Content overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-32">
            <div className="max-w-3xl">
              <h4 className="text-sm md:text-base font-semibold mb-2 text-purple-400 uppercase tracking-wider">Featured Artist</h4>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                {artistProfiles[activeIndex].name}
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl">
                {artistProfiles[activeIndex].bio}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {artistProfiles[activeIndex].genres.map((genre, idx) => (
                  <span key={idx} className="px-4 py-1 bg-gray-800/70 backdrop-blur-sm rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={() => openArtistModal(artistProfiles[activeIndex])}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
                >
                  <Play className="w-5 h-5" /> Listen Now
                </button>
                <button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-16 left-6 md:left-16 lg:left-32 flex gap-3">
              {artistProfiles.map((_, index) => (
                <button
                  key={index}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-purple-500 w-16' : 'bg-gray-500'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Artist Profile Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedArtist && (
          <div>
            {/* Modal Header with Artist Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-full object-cover filter blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <h2 className="text-3xl font-bold text-white">{selectedArtist.name}</h2>
                <button className="bg-purple-600 text-white px-4 py-1 rounded-full hover:bg-purple-700 transition-colors text-sm">
                  Follow
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column - Artist Info */}
                <div className="md:col-span-1">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-3">{selectedArtist.genres.join(" • ")}</p>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{selectedArtist.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{selectedArtist.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Link2 className="w-4 h-4 mr-2" />
                        <span>{selectedArtist.website}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-900">{selectedArtist.stats.monthlyListeners}</div>
                      <div className="text-xs text-gray-600">Monthly Listeners</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-900">{selectedArtist.stats.followers}</div>
                      <div className="text-xs text-gray-600">Followers</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-900">{selectedArtist.stats.topCharts}</div>
                      <div className="text-xs text-gray-600">Charts</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
                    <p className="text-gray-600 text-sm">{selectedArtist.bio}</p>
                  </div>
                </div>
                
                {/* Right Column - Music Player */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Top Tracks</h3>
                  <div className="space-y-3">
                    {selectedArtist.topSongs.map((song, index) => (
                      <MusicPlayer key={index} song={song} />
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Upcoming Shows</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <div>
                          <div className="font-medium">The Echo Lounge</div>
                          <div className="text-sm text-gray-600">Los Angeles, CA</div>
                        </div>
                        <div className="text-sm">May 12, 2025</div>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <div>
                          <div className="font-medium">Sonic Festival</div>
                          <div className="text-sm text-gray-600">Miami, FL</div>
                        </div>
                        <div className="text-sm">June 24, 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HeroSection;