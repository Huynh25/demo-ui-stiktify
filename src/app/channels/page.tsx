import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Play, Users, Bell, Star, Search } from "lucide-react";

const channels = [
  {
    id: 1,
    name: "Gaming Central",
    subscribers: "1.2M",
    videos: 450,
    category: "Gaming",
    isLive: true,
    avatar: "/channels/gaming.jpg",
  },
  {
    id: 2,
    name: "Cooking Master",
    subscribers: "850K",
    videos: 325,
    category: "Food",
    isLive: false,
    avatar: "/channels/cooking.jpg",
  },
];

const liveStreams = [
  {
    id: 1,
    title: "Playing New Release Games",
    viewers: "12.5K",
    channel: "Gaming Central",
    thumbnail: "/streams/gaming.jpg",
  },
  {
    id: 2,
    title: "Cooking Italian Pasta",
    viewers: "8.2K",
    channel: "Cooking Master",
    thumbnail: "/streams/cooking.jpg",
  },
];

export default function ChannelsPage() {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Channels</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search channels"
                className="pl-10 pr-4 py-2 bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
              Browse All
            </button>
          </div>
        </div>

        {/* Live Now */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Live Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map((stream) => (
              <div
                key={stream.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
              >
                <div className="relative aspect-video bg-gray-800">
                  <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 rounded text-xs">
                    LIVE
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded text-xs">
                    {stream.viewers} watching
                  </div>
                  <Play className="absolute inset-0 m-auto w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{stream.title}</h3>
                  <p className="text-gray-400 text-sm">{stream.channel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Channels */}
        <div>
          <h2 className="text-xl font-bold mb-6">Featured Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <div key={channel.id} className="bg-[#1a1a1a] rounded-lg p-4">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{channel.name}</h3>
                      {channel.isLive && (
                        <span className="px-2 py-0.5 bg-red-600 rounded text-xs">
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {channel.subscribers} subscribers
                    </p>
                    <p className="text-gray-400 text-sm">
                      {channel.videos} videos
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-purple-600 rounded hover:bg-purple-700">
                    <Bell size={16} />
                    Subscribe
                  </button>
                  <button className="p-2 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a]">
                    <Star size={16} />
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
