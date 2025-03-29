import React from "react";
import {
  Home,
  Video,
  Music,
  Users,
  ShoppingBag,
  Tv2,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Video, label: "Video", href: "/video" },
  { icon: Music, label: "Music", href: "/music" },
  { icon: Users, label: "Groups", href: "/groups" },
  { icon: ShoppingBag, label: "Shop", href: "/shop" },
  { icon: Tv2, label: "Channels", href: "/channels" },
  { icon: Calendar, label: "Events", href: "/events" },
];

const LeftSidebar = () => {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] bg-[#1a1a1a] border-r border-gray-800 p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <h3 className="text-gray-400 text-sm font-medium px-4 mb-4">
          Who to follow
        </h3>
        {/* Add suggested users here */}
      </div>
    </aside>
  );
};

export default LeftSidebar;
