import React from "react";
import { Search, Bell, MessageSquare, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold">S</span>
          </div>
          <span className="text-xl font-bold">Stiktify</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Search
              className="absolute right-4 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
            <MessageSquare size={20} />
          </button>
          <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
