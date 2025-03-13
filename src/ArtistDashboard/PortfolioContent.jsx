

export default function PortfolioContent() {
  return (
    <div className="p-6">
      {/* Artist Profile */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Artist Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold">Alex Johnson</h2>
          <p className="text-gray-600">Professional Digital Artist</p>
          <p className="mt-2"><strong>Email:</strong> alex.johnson@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Art Street, Los Angeles, CA</p>
        </div>
      </div>

      {/* Portfolio Artworks */}
      <h3 className="text-xl font-bold mt-6">Artwork Showcase</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {[
          { id: 1, title: "Sunset Bliss", image: "https://via.placeholder.com/150" },
          { id: 2, title: "Mystic Forest", image: "https://via.placeholder.com/150" },
          { id: 3, title: "Ocean Waves", image: "https://via.placeholder.com/150" },
          { id: 4, title: "Abstract Vision", image: "https://via.placeholder.com/150" },
        ].map((art) => (
          <div key={art.id} className="border rounded-lg p-2 shadow">
            <img src={art.image} alt={art.title} className="rounded w-full" />
            <h3 className="text-lg font-semibold mt-2">{art.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
