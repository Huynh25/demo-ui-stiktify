import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Users, Settings, Bell, Search, Plus } from "lucide-react";

const groups = [
  {
    id: 1,
    name: "Photography Enthusiasts",
    members: "15.2K",
    posts: "1.2K",
    privacy: "Public",
    coverImage: "/groups/photography.jpg",
  },
  {
    id: 2,
    name: "Music Producers",
    members: "8.5K",
    posts: "856",
    privacy: "Private",
    coverImage: "/groups/music.jpg",
  },
];

const suggestedGroups = [
  {
    id: 3,
    name: "Travel Adventures",
    members: "25K",
    category: "Travel",
    coverImage: "/groups/travel.jpg",
  },
  {
    id: 4,
    name: "Tech Innovators",
    members: "12K",
    category: "Technology",
    coverImage: "/groups/tech.jpg",
  },
];

export default function GroupsPage() {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Your Groups</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
            <Plus size={20} />
            Create Group
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search groups"
              className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button className="px-4 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a]">
            Filter
          </button>
        </div>

        {/* Your Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden"
            >
              <div className="h-32 bg-gray-800"></div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium mb-1">{group.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {group.members} members • {group.posts} posts
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-[#2a2a2a] rounded text-xs">
                    {group.privacy}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-purple-600 rounded hover:bg-purple-700">
                    <Bell size={16} />
                    Notifications
                  </button>
                  <button className="p-2 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a]">
                    <Settings size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Groups */}
        <div>
          <h2 className="text-xl font-bold mb-6">Suggested Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedGroups.map((group) => (
              <div
                key={group.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden"
              >
                <div className="h-32 bg-gray-800"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{group.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {group.members} members • {group.category}
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 py-2 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a]">
                    <Users size={16} />
                    Join Group
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
