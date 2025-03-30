"use client";

import React from "react";
import Video from "@/components/Video";
import MainLayout from "@/components/layout/MainLayout";

// Dummy data for testing
const videos = [
  {
    id: "1",
    url: "https://example.com/video1.mp4",
    username: "user1",
    description: "This is my first video #stiktify",
    likes: 1234,
    comments: 89,
    shares: 45,
    isLiked: false,
    isSaved: false,
    isFollowing: false,
  },
  {
    id: "2",
    url: "https://example.com/video2.mp4",
    username: "user2",
    description: "Check out this amazing video! #viral",
    likes: 5678,
    comments: 234,
    shares: 123,
    isLiked: true,
    isSaved: false,
    isFollowing: true,
  },
  // Add more videos as needed
];

export default function VideoPage() {
  return (
    <MainLayout>
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
        {videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
      </div>
    </MainLayout>
  );
}
