import { Heart, Eye, ChevronRight, Play, Award, Music, Sparkles, X, Calendar, Headphones, Users, Info, Filter, Search } from "lucide-react";
import { useState } from "react";

const ExploreArtists = () => {
  const [likedArtists, setLikedArtists] = useState({});
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [currentView, setCurrentView] = useState("featured"); // "featured", "approved", "discover", "topPerformers"
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  
  const artists = [
    { 
      name: "Hanna Tinne", 
      role: "Acoustic Visionary", 
      image: "/assets/girl1.jpg", 
      views: 3256,
      followers: 12800,
      lastPerformance: "April 15, 2025",
      topTrack: "Silent Echoes",
      bio: "Hanna blends folk traditions with modern acoustic techniques, creating immersive soundscapes that transport listeners to ethereal realms.",
      approved: true,
      genre: "Folk"
    },
    { 
      name: "Oli Page", 
      role: "Acoustic Sculptor", 
      image: "/assets/girl1.jpg", 
      views: 2894,
      followers: 8600,
      lastPerformance: "April 2, 2025",
      topTrack: "Wooden Memories",
      bio: "With masterful guitar work and innovative percussion, Oli crafts acoustic experiences that challenge conventional genre boundaries.",
      approved: true,
      genre: "Alternative"
    },
    { 
      name: "Doc Lamerik", 
      role: "Poet / Lyricist", 
      image: "/assets/girl1.jpg", 
      views: 4721,
      followers: 15900,
      lastPerformance: "March 28, 2025",
      topTrack: "Words Like Rain",
      bio: "Doc's lyrics weave intricate stories of human connection, drawing from personal experiences and observations of modern society.",
      approved: false,
      genre: "Hip-Hop"
    },
    { 
      name: "Bergines Prest", 
      role: "Sound Crafter", 
      image: "/assets/girl1.jpg", 
      views: 1853,
      followers: 6400,
      lastPerformance: "April 10, 2025",
      topTrack: "Digital Forest",
      bio: "Blending natural field recordings with electronic elements, Bergines creates unique auditory experiences that blur reality.",
      approved: true,
      genre: "Electronic"
    },
    { 
      name: "Loana Grokels", 
      role: "Creative Force", 
      image: "/assets/girl1.jpg", 
      views: 5632,
      followers: 19300,
      lastPerformance: "April 5, 2025",
      topTrack: "Northern Whispers",
      bio: "Loana's vocal range and experimental production techniques have established her as one of the most innovative artists in the contemporary scene.",
      approved: true,
      genre: "Indie"
    },
    { 
      name: "Wibrores Belap", 
      role: "Musical Enthusiast", 
      image: "/assets/girl1.jpg", 
      views: 2187,
      followers: 7200,
      lastPerformance: "March 20, 2025",
      topTrack: "Urban Symphony",
      bio: "Drawing inspiration from city sounds and cultural rhythms, Wibrores creates compositions that celebrate the diversity of urban life.",
      approved: false,
      genre: "World"
    },
    { 
      name: "Ella Vees", 
      role: "Melody Maker", 
      image: "/assets/girl1.jpg", 
      views: 3975,
      followers: 14500,
      lastPerformance: "April 12, 2025",
      topTrack: "Harmonic Journey",
      bio: "Ella's piano compositions bring classical techniques into modern contexts, creating timeless pieces that resonate with diverse audiences.",
      approved: true,
      genre: "Classical"
    },
    { 
      name: "Nora Blinks", 
      role: "Harmonic Innovator", 
      image: "/assets/girl1.jpg", 
      views: 2143,
      followers: 9800,
      lastPerformance: "March 25, 2025",
      topTrack: "Frequency Patterns",
      bio: "Using technology to expand musical boundaries, Nora explores the intersection of sound design and traditional composition.",
      approved: false,
      genre: "Experimental"
    },
  ];

  // Filter artists based on current view
  const getFilteredArtists = () => {
    let filteredArtists = [...artists];
    
    // Apply search filter if search term exists
    if (searchTerm) {
      filteredArtists = filteredArtists.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply view filter
    switch(currentView) {
      case "approved":
        return filteredArtists.filter(artist => artist.approved);
      case "discover":
        return filteredArtists.slice(2); // Different set for discovery
      case "topPerformers":
        return filteredArtists.sort((a, b) => b.views - a.views); // Sort by most views
      case "featured":
      default:
        return filteredArtists.slice(0, 4); // Featured artists are first 4
    }
  };

  const toggleLike = (index, e) => {
    e.stopPropagation();
    setLikedArtists(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openArtistProfile = (artist) => {
    setSelectedArtist(artist);
    document.body.style.overflow = 'hidden';
  };

  const closeArtistProfile = () => {
    setSelectedArtist(null);
    document.body.style.overflow = 'auto';
  };

  const renderArtistCard = (artist, index) => (
    <div
      key={index}
      className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-64 group cursor-pointer"
      onClick={() => openArtistProfile(artist)}
    >
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3 group-hover:opacity-90 transition-opacity">
        <img
          src={artist.image}
          alt={artist.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            className="bg-white rounded-full p-3 transform hover:scale-110 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              // Play functionality would go here
            }}
          >
            <Play size={20} className="text-purple-600 ml-1" />
          </button>
        </div>
        {artist.approved && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Approved
          </div>
        )}
      </div>
      <h4 className="text-lg font-bold text-gray-800">{artist.name}</h4>
      <p className="text-sm text-gray-600 mb-3">{artist.role}</p>
      
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-1">
          <button 
            onClick={(e) => toggleLike(index, e)} 
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart size={18} className={likedArtists[index] ? "text-red-500 fill-red-500" : "text-gray-400"} />
          </button>
          <span className="text-xs text-gray-500 font-medium">{likedArtists[index] ? "Liked" : "Like"}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Eye size={18} className="text-gray-400" />
          <span className="text-xs text-gray-500 font-medium">{artist.views.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );

  // Render section header with functionality
  const renderSectionHeader = (icon, title, buttonText, viewType, color) => (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        {icon === "award" && <Award className={`mr-2 text-${color}-600`} size={24} />}
        {icon === "sparkles" && <Sparkles className={`mr-2 text-${color}-600`} size={24} />}
        {icon === "music" && <Music className={`mr-2 text-${color}-600`} size={24} />}
        <h3 className="text-2xl font-semibold text-gray-800 tracking-wide">{title}</h3>
      </div>
      <button 
        onClick={() => setCurrentView(viewType)}
        className={`flex items-center text-sm font-medium text-${color}-600 hover:text-${color}-800 transition py-2 px-4 rounded-full hover:bg-${color}-50`}
      >
        {buttonText}
        <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  );

  // Determine what to display based on current view
  const renderCurrentView = () => {
    const filteredArtists = getFilteredArtists();
    
    return (
      <>
        {/* Search and filter bar that appears when not in featured view */}
        {currentView !== "featured" && (
          <div className="bg-white rounded-xl shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search artists, genres, or roles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div className="relative">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center space-x-2 py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter size={18} />
                  <span>Filters</span>
                </button>
                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 z-10">
                    <p className="font-medium mb-2">Genre</p>
                    <div className="space-y-1">
                      {["Folk", "Electronic", "Classical", "Hip-Hop", "Indie"].map(genre => (
                        <div key={genre} className="flex items-center">
                          <input type="checkbox" id={genre} className="mr-2" />
                          <label htmlFor={genre} className="text-sm">{genre}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Title based on current view */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {currentView === "approved" ? "Approved Artists" : 
             currentView === "discover" ? "Discover New Creatives" : 
             currentView === "topPerformers" ? "Top Performers" : "Featured Artists"}
          </h2>
          <p className="text-gray-600">
            {currentView === "approved" ? "Artists who have been verified by our team" : 
             currentView === "discover" ? "Explore emerging talent in our community" : 
             currentView === "topPerformers" ? "Most popular artists based on listener counts" : "Our selection of notable artists"}
          </p>
        </div>

        {/* Artist cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredArtists.map((artist, index) => renderArtistCard(artist, index))}
        </div>

        {/* Return to featured link when in other views */}
        {currentView !== "featured" && (
          <div className="mt-8 text-center">
            <button 
              onClick={() => setCurrentView("featured")}
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              ← Back to Featured Artists
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="py-12 px-8 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 min-h-screen">
      {/* Only show sections when in featured view */}
      {currentView === "featured" ? (
        <>
          {/* Section 1 - Featured Artists */}
          <div className="mb-16">
            {renderSectionHeader("award", "Featured Artists", "Approved Artists", "approved", "purple")}
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
              {artists.slice(0, 4).map((artist, index) => renderArtistCard(artist, index))}
            </div>
          </div>

          {/* Section 2 - Discover Creatives */}
          <div className="mb-16">
            {renderSectionHeader("sparkles", "Discover Creatives", "View All", "discover", "pink")}
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
              {artists.slice(2, 6).map((artist, index) => renderArtistCard(artist, index + 10))}
            </div>
          </div>

          {/* Section 3 - Top Performers */}
          <div>
            {renderSectionHeader("music", "Top Performers", "Explore More", "topPerformers", "blue")}
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
              {artists.slice(0, 4).map((artist, index) => renderArtistCard(artist, index + 20))}
            </div>
          </div>
        </>
      ) : (
        // Render current view when not in featured view
        renderCurrentView()
      )}

      {/* Artist Profile Popup Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              {/* Header with close button */}
              <div className="flex justify-end p-4">
                <button 
                  className="rounded-full p-2 hover:bg-gray-100 transition-colors" 
                  onClick={closeArtistProfile}
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              
              {/* Artist Info */}
              <div className="px-8 pb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0">
                    <div className="relative rounded-xl overflow-hidden w-full h-64 mb-4">
                      <img 
                        src={selectedArtist.image}
                        alt={selectedArtist.name}
                        className="w-full h-full object-cover"
                      />
                      {selectedArtist.approved && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Approved
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <button className="flex-1 flex justify-center items-center py-2 bg-purple-600 text-white rounded-lg mr-2 hover:bg-purple-700 transition-colors">
                        <Users size={18} className="mr-2" />
                        Follow
                      </button>
                      <button className="flex-1 flex justify-center items-center py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                        <Info size={18} className="mr-2" />
                        Contact
                      </button>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedArtist.name}</h2>
                    <div className="flex items-center mb-4">
                      <p className="text-lg text-purple-600 mr-3">{selectedArtist.role}</p>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{selectedArtist.genre}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{selectedArtist.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <Calendar size={20} className="text-purple-600 mr-3" />
                        <div>
                          <p className="text-xs text-gray-500">Last Performance</p>
                          <p className="text-sm font-medium">{selectedArtist.lastPerformance}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <Users size={20} className="text-purple-600 mr-3" />
                        <div>
                          <p className="text-xs text-gray-500">Followers</p>
                          <p className="text-sm font-medium">{selectedArtist.followers.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <Headphones size={20} className="text-purple-600 mr-3" />
                        <div>
                          <p className="text-xs text-gray-500">Top Track</p>
                          <p className="text-sm font-medium">{selectedArtist.topTrack}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <Eye size={20} className="text-purple-600 mr-3" />
                        <div>
                          <p className="text-xs text-gray-500">Profile Views</p>
                          <p className="text-sm font-medium">{selectedArtist.views.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">Recent Tracks</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                              <Music size={16} className="text-purple-600" />
                            </div>
                            <div>
                              <p className="font-medium">Track {item}</p>
                              <p className="text-xs text-gray-500">Released April {item * 3}, 2025</p>
                            </div>
                          </div>
                          <Play size={18} className="text-gray-600" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreArtists;