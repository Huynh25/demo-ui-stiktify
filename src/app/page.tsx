"use client";

import React from "react";
import Post from "@/components/Post";
import MainLayout from "@/components/layout/MainLayout";

// Dummy data for testing
const posts = [
  {
    id: "1",
    username: "user1",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "Just posted a new video! Check it out 🎥 #stiktify",
    mediaUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=800&fit=crop",
    likes: 1234,
    comments: 89,
    shares: 45,
    isLiked: false,
    isSaved: false,
    isFollowing: false,
  },
  {
    id: "2",
    username: "user2",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "Amazing day at the beach! 🌊 #summer #vibes",
    mediaUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop",
    likes: 5678,
    comments: 234,
    shares: 123,
    isLiked: true,
    isSaved: false,
    isFollowing: true,
  },
  {
    id: "3",
    username: "user3",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "Living my best life! 🌟 #lifestyle #motivation",
    mediaUrl:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=800&fit=crop",
    likes: 4321,
    comments: 567,
    shares: 234,
    isLiked: false,
    isSaved: true,
    isFollowing: false,
  },
  // Add more posts as needed
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-xl mx-auto px-4 py-8">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </MainLayout>
  );
}
