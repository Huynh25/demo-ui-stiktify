import React from "react";
import { Play } from "lucide-react";

const suggestedVideos = [
  {
    title: "Cooking Recipe",
    author: "Food Channel",
    thumbnail: "/thumbnails/cooking.jpg",
  },
  {
    title: "Travel Vlog",
    author: "Travel Channel",
    thumbnail: "/thumbnails/travel.jpg",
  },
  {
    title: "Tech Review",
    author: "Tech Channel",
    thumbnail: "/thumbnails/tech.jpg",
  },
];

const suggestedMusic = [
  {
    title: "Chill Vibes",
    artist: "Artist Name",
    cover: "/covers/chill.jpg",
  },
  {
    title: "Summer",
    artist: "Artist Name",
    cover: "/covers/summer.jpg",
  },
];

const RightSidebar = () => {
  return (
    <aside className="w-80 h-[calc(100vh-64px)] bg-[#1a1a1a] border-l border-gray-800 p-4 overflow-y-auto">
      {/* Suggested Videos */}
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-4">
          Suggested Videos
        </h3>
        <div className="space-y-4">
          {suggestedVideos.map((video, index) => (
            <div key={index} className="flex gap-3">
              <div className="relative w-24 h-16 bg-gray-800 rounded-lg overflow-hidden">
                <Play className="absolute inset-0 m-auto" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-sm">{video.title}</h4>
                <p className="text-gray-400 text-xs">{video.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Music */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-4">
          Trending Music
        </h3>
        <div className="space-y-4">
          {suggestedMusic.map((track, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
              <div>
                <h4 className="font-medium text-sm">{track.title}</h4>
                <p className="text-gray-400 text-xs">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
