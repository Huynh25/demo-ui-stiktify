"use client";

import React from "react";
import Image from "next/image";

const RightSidebar = () => {
  // Dummy data for suggested users
  const suggestedUsers = [
    {
      id: 1,
      username: "user1",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      followers: "1.2K",
    },
    {
      id: 2,
      username: "user2",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      followers: "856",
    },
    {
      id: 3,
      username: "user3",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      followers: "2.1K",
    },
  ];

  return (
    <div className="w-80 p-4 bg-light-surface dark:bg-dark-surface">
      {/* Suggested Users */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">
          Suggested Users
        </h3>
        <div className="space-y-4">
          {suggestedUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-light-text dark:text-dark-text">
                    {user.username}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.followers} followers
                  </p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm font-medium rounded-full bg-light-primary text-white hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Hashtags */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">
          Trending Hashtags
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "#stiktify",
            "#viral",
            "#trending",
            "#music",
            "#dance",
            "#fashion",
          ].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text hover:bg-light-secondary/80 dark:hover:bg-dark-secondary/80"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
