// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function FindArtist() {
      const [search, setSearch] = useState('');
    return (
        <div className="space-y-6">
            <div>
                <input
                    type="text"
                    placeholder="Search artists by skill, price, rating..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-2 w-full px-3 py-2 border rounded"
                />
                <div className="flex flex-col md:flex-row gap-4">
                    <input placeholder="Skill" className="w-full px-3 py-2 border rounded" />
                    <input placeholder="Price Range" className="w-full px-3 py-2 border rounded" />
                    <input placeholder="Rating" className="w-full px-3 py-2 border rounded" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Shortlisted Artists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((id) => (
                        <div key={id} className="border rounded-lg p-4 shadow-sm bg-white">
                            <h3 className="font-semibold">Artist {id}</h3>
                            <p>Skill: Illustration</p>
                            <p>Price: ${id * 50}/hr</p>
                            <p>Rating: {4 + id * 0.2}⭐</p>
                            <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Shortlist</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}