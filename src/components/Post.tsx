"use client";

import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

interface PostProps {
  id: string;
  username: string;
  avatar: string;
  content: string;
  mediaUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  isSaved?: boolean;
  isFollowing?: boolean;
}

const Post: React.FC<PostProps> = ({
  id,
  username,
  avatar,
  content,
  mediaUrl,
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
  const [showShareMenu, setShowShareMenu] = useState(false);

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
    setShowShareMenu(!showShareMenu);
  };

  const shareOptions = [
    { name: "Facebook", icon: "facebook" },
    { name: "Instagram", icon: "instagram" },
    { name: "WhatsApp", icon: "whatsapp" },
    { name: "Copy Link", icon: "link" },
  ];

  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-sm border border-light-border dark:border-dark-border mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={username}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium text-light-text dark:text-dark-text">
              {username}
            </h3>
            <button
              onClick={handleFollow}
              className={`text-sm ${
                following
                  ? "text-light-primary dark:text-dark-primary"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
        <button className="p-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-full">
          <MoreHorizontal className="w-5 h-5 text-light-text dark:text-dark-text" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 mb-4">
        <p className="text-light-text dark:text-dark-text">{content}</p>
      </div>

      {/* Post Media */}
      {mediaUrl && (
        <div className="relative aspect-square w-full">
          <Image
            src={mediaUrl}
            alt="Post media"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-light-text dark:text-dark-text"
          >
            <Heart
              className={`w-6 h-6 ${liked ? "fill-current text-red-500" : ""}`}
            />
            <span>{likes}</span>
          </button>

          <button className="flex items-center gap-1 text-light-text dark:text-dark-text">
            <MessageCircle className="w-6 h-6" />
            <span>{comments}</span>
          </button>

          <div className="relative">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-light-text dark:text-dark-text"
            >
              <Share2 className="w-6 h-6" />
              <span>{shares}</span>
            </button>

            {/* Share Menu */}
            {showShareMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg border border-light-border dark:border-dark-border p-2">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    className="flex items-center gap-2 w-full px-3 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-lg text-light-text dark:text-dark-text"
                  >
                    <span className="text-sm">{option.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSave}
            className="ml-auto text-light-text dark:text-dark-text"
          >
            <Bookmark
              className={`w-6 h-6 ${
                saved ? "fill-current text-yellow-500" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
