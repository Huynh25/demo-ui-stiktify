"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Video,
  Music,
  Users,
  ShoppingBag,
  Radio,
  Calendar,
  UserPlus,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Video, label: "Video", href: "/video" },
  { icon: Music, label: "Music", href: "/music" },
  { icon: Users, label: "Groups", href: "/groups" },
  { icon: ShoppingBag, label: "Shop", href: "/shop" },
  { icon: Radio, label: "Channels", href: "/channels" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: UserPlus, label: "Who to follow", href: "/suggestions" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full bg-light-surface dark:bg-dark-surface">
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-light-primary text-white dark:bg-dark-primary"
                    : "text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Settings and Logout */}
        <div className="mt-8 space-y-2">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === "/settings"
                ? "bg-light-primary text-white dark:bg-dark-primary"
                : "text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary"
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>

          <button className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
