import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";

const videos = [
  {
    id: 1,
    author: {
      name: "Food Channel",
      avatar: "/avatars/food.jpg",
    },
    title: "How to Make Perfect Pasta",
    description: "Learn the secrets of making authentic Italian pasta!",
    views: "120K",
    likes: "15K",
    comments: 234,
    thumbnail: "/thumbnails/cooking.jpg",
  },
  {
    id: 2,
    author: {
      name: "Travel Vlog",
      avatar: "/avatars/travel.jpg",
    },
    title: "Beautiful Sunset in Bali",
    description: "Exploring the amazing beaches of Bali",
    views: "85K",
    likes: "12K",
    comments: 156,
    thumbnail: "/thumbnails/travel.jpg",
  },
];

export default function VideoPage() {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Video Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {[
            "Trending",
            "Music",
            "Gaming",
            "Sports",
            "Cooking",
            "Travel",
            "Tech",
          ].map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-[#2a2a2a] rounded-full hover:bg-purple-600 transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-800 group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                  {video.views} views
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">{video.title}</h4>
                    <p className="text-gray-400 text-sm">{video.author.name}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {video.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <Heart size={20} />
                    <span>{video.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <MessageCircle size={20} />
                    <span>{video.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
