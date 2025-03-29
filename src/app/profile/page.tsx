import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Settings,
  MapPin,
  Link as LinkIcon,
  Grid,
  Bookmark,
  Heart,
} from "lucide-react";

const userProfile = {
  name: "John Doe",
  username: "@johndoe",
  bio: "Digital content creator | Music lover | Travel enthusiast",
  location: "New York, USA",
  website: "www.johndoe.com",
  followers: "15.2K",
  following: "1.2K",
  posts: "450",
};

const tabs = [
  { name: "Posts", icon: Grid },
  { name: "Liked", icon: Heart },
  { name: "Saved", icon: Bookmark },
];

export default function ProfilePage() {
  return (
    <MainLayout>
      <div>
        {/* Cover Image */}
        <div className="h-48 md:h-64 bg-gray-800"></div>

        {/* Profile Info */}
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="relative -mt-16 mb-8">
            {/* Avatar and Actions */}
            <div className="flex justify-between items-end mb-4">
              <div className="flex items-end">
                <div className="w-32 h-32 bg-gray-800 rounded-full border-4 border-[#121212]"></div>
                <div className="ml-4 mb-2">
                  <h1 className="text-2xl font-bold">{userProfile.name}</h1>
                  <p className="text-gray-400">{userProfile.username}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                  Follow
                </button>
                <button className="p-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a]">
                  <Settings size={20} />
                </button>
              </div>
            </div>

            {/* Bio and Stats */}
            <div className="max-w-2xl">
              <p className="text-gray-200 mb-4">{userProfile.bio}</p>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {userProfile.location}
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon size={16} />
                  {userProfile.website}
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <span className="font-bold text-white">
                    {userProfile.posts}
                  </span>
                  <span className="text-gray-400 ml-1">Posts</span>
                </div>
                <div>
                  <span className="font-bold text-white">
                    {userProfile.followers}
                  </span>
                  <span className="text-gray-400 ml-1">Followers</span>
                </div>
                <div>
                  <span className="font-bold text-white">
                    {userProfile.following}
                  </span>
                  <span className="text-gray-400 ml-1">Following</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="border-b border-gray-800">
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className="flex items-center gap-2 px-4 py-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-purple-600"
                >
                  <tab.icon size={20} />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-[#1a1a1a] rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
