"use client";

import React from "react";
import Link from "next/link";
import { Bell, UserPlus, Heart, MessageSquare, X } from "lucide-react";

interface Notification {
  id: string;
  type: "follow" | "like" | "comment";
  username: string;
  avatar: string;
  content: string;
  time: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "follow",
    username: "user1",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "started following you",
    time: "2m ago",
    isRead: false,
  },
  {
    id: "2",
    type: "like",
    username: "user2",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "liked your post",
    time: "15m ago",
    isRead: false,
  },
  {
    id: "3",
    type: "comment",
    username: "user3",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "commented on your post",
    time: "1h ago",
    isRead: true,
  },
];

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "follow":
        return <UserPlus className="w-5 h-5 text-blue-500" />;
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "comment":
        return <MessageSquare className="w-5 h-5 text-green-500" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-[#121212] rounded-lg shadow-xl">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Notifications</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-full"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-gray-800 ${
              !notification.isRead ? "bg-blue-950/50" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={notification.avatar}
                  alt={notification.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span className="font-medium">{notification.username}</span>{" "}
                  {notification.content}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
              <div className="mt-1">
                {getNotificationIcon(notification.type)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <Link
          href="/notifications"
          className="block text-center py-2 text-purple-500 hover:bg-gray-800 rounded-lg transition-colors"
        >
          See all notifications
        </Link>
      </div>
    </div>
  );
};

export default NotificationPopup;
