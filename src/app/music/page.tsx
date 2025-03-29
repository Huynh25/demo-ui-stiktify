import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Play, Heart, Plus, MoreHorizontal } from "lucide-react";

const playlists = [
  {
    id: 1,
    title: "Top Hits 2024",
    description: "The hottest tracks right now",
    coverImage: "/covers/top-hits.jpg",
    songs: 50,
    followers: "2.5M",
  },
  {
    id: 2,
    title: "Chill Vibes",
    description: "Relaxing music for your day",
    coverImage: "/covers/chill.jpg",
    songs: 35,
    followers: "1.2M",
  },
];

const topArtists = [
  {
    id: 1,
    name: "Artist Name",
    genre: "Pop",
    followers: "5.2M",
    image: "/artists/artist1.jpg",
  },
  {
    id: 2,
    name: "Artist Name",
    genre: "Rock",
    followers: "3.8M",
    image: "/artists/artist2.jpg",
  },
];

export default function MusicPage() {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Featured Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-[#1a1a1a] rounded-lg p-4 hover:bg-[#2a2a2a] transition-colors group"
              >
                <div className="relative aspect-square bg-gray-800 rounded-lg mb-4">
                  <button className="absolute bottom-2 right-2 p-3 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Play className="w-6 h-6" fill="white" />
                  </button>
                </div>
                <h3 className="font-medium mb-1">{playlist.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {playlist.description}
                </p>
                <p className="text-gray-400 text-sm">
                  {playlist.songs} songs • {playlist.followers} followers
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Artists */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-[#1a1a1a] rounded-lg p-4 hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full mb-4"></div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">{artist.name}</h3>
                  <p className="text-gray-400 text-sm">{artist.genre}</p>
                  <p className="text-gray-400 text-sm">
                    {artist.followers} followers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Plays */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="bg-[#1a1a1a] rounded-lg">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 hover:bg-[#2a2a2a] transition-colors border-b border-gray-800 last:border-0"
              >
                <div className="w-12 h-12 bg-gray-800 rounded"></div>
                <div className="flex-1">
                  <h4 className="font-medium">Song Title</h4>
                  <p className="text-gray-400 text-sm">Artist Name</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-gray-400 hover:text-white">
                    <Heart size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <Plus size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
