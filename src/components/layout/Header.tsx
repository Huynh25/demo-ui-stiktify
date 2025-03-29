"use client";

import React from "react";
import { Search, Bell, MessageSquare, User } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-light-surface/80 dark:bg-dark-surface/80 border-b border-light-border dark:border-dark-border">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-light-primary dark:bg-dark-primary rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold text-light-text dark:text-dark-text">
            Stiktify
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 bg-light-secondary dark:bg-dark-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary text-light-text dark:text-dark-text"
            />
            <Search
              className="absolute left-3 top-2.5 text-light-text/50 dark:text-dark-text/50"
              size={20}
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="p-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-full relative text-light-text dark:text-dark-text">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-light-primary dark:bg-dark-primary rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </button>
          <Link
            href="/messages"
            className="p-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-full relative text-light-text dark:text-dark-text"
          >
            <MessageSquare size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-light-primary dark:bg-dark-primary rounded-full text-xs flex items-center justify-center text-white">
              2
            </span>
          </Link>
          <Link
            href="/profile"
            className="p-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-full text-light-text dark:text-dark-text"
          >
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
