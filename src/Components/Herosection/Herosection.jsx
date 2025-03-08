// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Mail, Link2, X, Play, Pause, Music, Heart, Share2 } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-auto relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>
      <div className="flex-grow">
        <div className="text-white font-medium">{song.title}</div>
        <div className="text-gray-400 text-sm">{song.duration}</div>
      </div>
      <div className="flex gap-3">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      setCurrentSlide((prevSlide) => 
        prevSlide === artistProfiles.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const openArtistModal = (artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-6 md:px-16 text-white min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center md:text-left mb-6 md:mb-0">
          Discover Artists
        </h2>
        <div className="flex items-center bg-white rounded-lg px-2 py-1 w-full md:w-2/5 shadow-md">
          <input
            type="text"
            placeholder="Search artists, songs, or genres..."
            className="flex-grow px-4 py-2 rounded-lg focus:outline-none text-gray-800 bg-transparent"
          />
          <button className="bg-purple-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center">
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </div>

      {/* Featured Artists Carousel */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Featured Artists</h3>
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {artistProfiles.map((artist) => (
              <div key={artist.id} className="w-full flex-shrink-0">
                <div className="relative h-96 w-full">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 p-8">
                      <h4 className="text-4xl font-bold mb-2">{artist.name}</h4>
                      <p className="text-gray-300 mb-4">{artist.genres.join(" • ")}</p>
                      <button 
                        onClick={() => openArtistModal(artist)}
                        className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {artistProfiles.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artistProfiles.map((artist, index) => (
          <div
            key={artist.id}
            className="rounded-xl overflow-hidden shadow-lg relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => openArtistModal(artist)}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-64 object-cover"
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              hoveredCard === index ? 'bg-opacity-70' : 'bg-opacity-40'
            }`}>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-gray-300 mb-2">{artist.genres.join(" • ")}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-2" />
                    <span>{artist.stats.monthlyListeners}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    <span>{artist.stats.followers}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Artist Profile Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedArtist && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedArtist.name}</h2>
                    <p className="text-gray-600">{selectedArtist.genres.join(" • ")}</p>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Follow
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{selectedArtist.stats.monthlyListeners}</div>
                    <div className="text-sm text-gray-600">Monthly Listeners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{selectedArtist.stats.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{selectedArtist.stats.topCharts}</div>
                    <div className="text-sm text-gray-600">Charts</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top Tracks</h3>
                <div className="space-y-3">
                  {selectedArtist.topSongs.map((song, index) => (
                    <MusicPlayer key={index} song={song} />
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
                  <p className="text-gray-600 mb-4">{selectedArtist.bio}</p>
                  <div className="space-y-2">
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
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HeroSection;



