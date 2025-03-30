"use client";

import React, { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, UserPlus } from "lucide-react";

interface VideoProps {
  id: string;
  url: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  isSaved?: boolean;
  isFollowing?: boolean;
}

const Video: React.FC<VideoProps> = ({
  id,
  url,
  username,
  description,
  likes,
  comments,
  shares,
  isLiked = false,
  isSaved = false,
  isFollowing = false,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);
  const [following, setFollowing] = useState(isFollowing);

  const handleLike = () => {
    setLiked(!liked);
    // TODO: Implement like functionality
  };

  const handleSave = () => {
    setSaved(!saved);
    // TODO: Implement save functionality
  };

  const handleFollow = () => {
    setFollowing(!following);
    // TODO: Implement follow functionality
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: "Check out this video on Stiktify",
        text: description,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full snap-start">
      {/* Video Player */}
      <video
        src={url}
        className="h-full w-full object-cover"
        loop
        playsInline
        muted
      />

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={handleFollow}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              following
                ? "bg-light-primary text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {following ? "Following" : "Follow"}
          </button>
          <span className="text-white font-medium">@{username}</span>
        </div>
        <p className="text-white text-sm mb-4">{description}</p>
      </div>

      {/* Interaction Buttons */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4">
        <button
          onClick={handleLike}
          className="flex flex-col items-center gap-1 text-white"
        >
          <Heart
            className={`w-6 h-6 ${
              liked ? "fill-current text-red-500" : "text-white"
            }`}
          />
          <span className="text-sm">{likes}</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-white">
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm">{comments}</span>
        </button>

        <button
          onClick={handleSave}
          className="flex flex-col items-center gap-1 text-white"
        >
          <Bookmark
            className={`w-6 h-6 ${
              saved ? "fill-current text-yellow-500" : "text-white"
            }`}
          />
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 text-white"
        >
          <Share2 className="w-6 h-6" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>
    </div>
  );
};

export default Video;
