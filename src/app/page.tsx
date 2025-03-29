import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { MessageCircle, Heart, Share2 } from "lucide-react";

const posts = [
  {
    id: 1,
    author: {
      name: "John Doe",
      avatar: "/avatars/john.jpg",
    },
    content: "Check out this beautiful sunset!",
    image: "/posts/sunset.jpg",
    timestamp: "2 hours ago",
    likes: 120,
    comments: 45,
  },
  // Add more posts here
];

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        {/* Create Post */}
        <div className="bg-[#1a1a1a] rounded-lg p-4 mb-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            <input
              type="text"
              placeholder="What's on your mind?"
              className="flex-1 bg-[#2a2a2a] rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex gap-4 mt-4 border-t border-gray-800 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#2a2a2a] rounded-lg">
              Photo
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#2a2a2a] rounded-lg">
              Video
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#2a2a2a] rounded-lg">
              Music
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div>
                  <h4 className="font-medium">{post.author.name}</h4>
                  <p className="text-gray-400 text-sm">{post.timestamp}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="px-4 mb-4">{post.content}</p>
              <div className="aspect-video bg-gray-800"></div>

              {/* Post Actions */}
              <div className="p-4 flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <Heart size={20} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <MessageCircle size={20} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
