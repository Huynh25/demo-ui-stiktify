"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Minimize2,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMinimize = () => {
    console.log('Toggling minimize, current state:', isMinimized);
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    console.log('Player minimized state:', isMinimized);
  }, [isMinimized]);

  if (isMinimized) {
    return (
      <div className="fixed right-4 bottom-4 bg-[#121212] rounded-lg shadow-lg cursor-pointer group transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] w-[300px] z-50">
        <div
          className="flex items-center p-3"
          onClick={toggleMinimize}
          role="button"
          tabIndex={0}
          aria-label="Expand player"
        >
          {/* Thumbnail */}
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
              alt="Song thumbnail"
              fill
              className="object-cover"
            />
          </div>

          {/* Song Info */}
          <div className="mx-3 flex-grow min-w-0">
            <h4 className="text-sm font-medium text-white truncate">
              Song Title
            </h4>
            <p className="text-xs text-gray-400 truncate">Artist Name</p>
          </div>

          {/* Play/Pause Button */}
          <button
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full mr-2 flex-shrink-0 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
          >
            {isPlaying ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white" />
            )}
          </button>

          {/* Maximize Button */}
          <button
            className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              toggleMinimize();
            }}
            aria-label="Maximize player"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-gray-800 p-4 transition-all duration-300 ease-in-out z-40">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
              alt="Song thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-white">Song Title</h4>
            <p className="text-gray-400 text-sm">Artist Name</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-6">
          <button className="p-2 text-gray-400 hover:text-white rounded-full transition-colors">
            <SkipBack size={20} />
          </button>
          <button
            className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white" />
            )}
          </button>
          <button className="p-2 text-gray-400 hover:text-white rounded-full transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-4">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-24 h-1 bg-gray-800 rounded-full">
            <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
          </div>
          <button
            className="p-2 text-gray-400 hover:text-white rounded-full transition-colors"
            onClick={toggleMinimize}
            aria-label="Minimize player"
          >
            <Minimize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
