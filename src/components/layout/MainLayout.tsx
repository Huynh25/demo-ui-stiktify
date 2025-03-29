"use client";

import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Player from "../player/Player";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
      <Header />
      <div className="flex">
        <LeftSidebar />
        <main className="flex-1 px-4 py-6">{children}</main>
        <RightSidebar />
      </div>
      <Player />
    </div>
  );
};

export default MainLayout;
