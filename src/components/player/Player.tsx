import React from "react";
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-800 rounded-lg"></div>
          <div>
            <h4 className="font-medium">Song Title</h4>
            <p className="text-gray-400 text-sm">Artist Name</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
            <SkipBack size={20} />
          </button>
          <button className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full">
            <Play size={24} />
          </button>
          <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <Volume2 size={20} />
          <div className="w-24 h-1 bg-gray-800 rounded-full">
            <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
