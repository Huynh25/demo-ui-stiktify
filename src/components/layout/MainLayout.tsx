"use client";

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import dynamic from "next/dynamic";

// Dynamically import Player with no SSR
const Player = dynamic(() => import("../player/Player"), {
  ssr: false,
});

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="pt-16 pl-64 pr-80">{children}</div>

      {/* Fixed Right Sidebar */}
      <div className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] z-40">
        <RightSidebar />
      </div>

      <Player />
    </div>
  );
};

export default MainLayout;
