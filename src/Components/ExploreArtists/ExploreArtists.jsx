const ExploreArtists = () => {
    const artists = [
      { name: "Hanna Tinne", role: "Acoustic Visionary", image: "/assets/girl1.jpg" },
      { name: "Oli Page", role: "Acoustic Sculptor", image: "/assets/girl1.jpg" },
      { name: "Doc Lamerik", role: "Poet / Lyricist", image: "/assets/girl1.jpg" },
      { name: "Bergines Prest", role: "Sound Crafter", image: "/assets/girl1.jpg" },
      { name: "Loana Grokels", role: "Creative Force", image: "/assets/girl1.jpg" },
      { name: "Wibrores Belap", role: "Musical Enthusiast", image: "/assets/girl1.jpg" },
      { name: "Ella Vees", role: "Melody Maker", image: "/assets/girl1.jpg" },
      { name: "Nora Blinks", role: "Harmonic Innovator", image: "/assets/girl1.jpg" },
    ];
  
    return (
      <div className="py-10 px-6 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 min-h-screen">
        {/* Section 1 */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-light text-gray-800 tracking-wide">Exlight come</h3>

            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition">
              Approved Artists →
            </button>
          </div>
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-52"
              >
                <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-800">{artist.name}</h4>
                <p className="text-sm text-gray-600">{artist.role}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-light text-gray-800 tracking-wide">Discover Creatives</h3>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition">
              View All →
            </button>
          </div>
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-52"
              >
                <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-800">{artist.name}</h4>
                <p className="text-sm text-gray-600">{artist.role}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Section 3 */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-light text-gray-800 tracking-wide">Top Performers</h3>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 transition">
              Explore More →
            </button>
          </div>
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-52"
              >
                <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-800">{artist.name}</h4>
                <p className="text-sm text-gray-600">{artist.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ExploreArtists;
  