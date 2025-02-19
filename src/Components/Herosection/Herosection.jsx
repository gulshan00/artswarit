const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-6 md:px-16 text-white">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center md:text-left">Explore Artists</h2>
        <div className="flex items-center bg-white rounded-lg px-2 py-1 mt-4 md:mt-0 w-full md:w-2/5 shadow-md">
          <input
            type="text"
            placeholder="Search for artists..."
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
          />
          <button className="bg-purple-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-700 transition">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl overflow-hidden shadow-lg col-span-1">
          <img
            src="/assets/girl.jpg"
            alt="Artist Left"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800 col-span-1 md:col-span-2 flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/girl1.jpg"
              alt="Artist Right Left"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Adtisue sgmclerts
              </h3>
              <p className="mb-4 text-sm text-gray-300">
                Discover talented artists showcasing unique styles.
              </p>
              <button className="bg-pink-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-pink-600 transition">
                View Profile
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src="/assets/girl2.jpg"
              alt="Artist Right Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
