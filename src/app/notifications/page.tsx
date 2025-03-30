"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Bell, UserPlus, Heart, MessageSquare } from "lucide-react";

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
    type: "follow",
    username: "user2",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "started following you",
    time: "15m ago",
    isRead: false,
  },
  {
    id: "3",
    type: "like",
    username: "user3",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "liked your post",
    time: "1h ago",
    isRead: true,
  },
  {
    id: "4",
    type: "comment",
    username: "user4",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "commented on your post",
    time: "2h ago",
    isRead: false,
  },
];

type TabType = "all" | "follow" | "like" | "comment";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredNotifications = notifications.filter(
    (notification) => activeTab === "all" || notification.type === activeTab
  );

  const tabs = [
    { id: "all", label: "All", icon: Bell },
    { id: "follow", label: "Follows", icon: UserPlus },
    { id: "like", label: "Likes", icon: Heart },
    { id: "comment", label: "Comments", icon: MessageSquare },
  ] as const;

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
    <MainLayout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-light-text dark:text-dark-text">
          Notifications
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-light-primary text-white dark:bg-dark-primary"
                    : "bg-light-secondary text-light-text dark:bg-dark-secondary dark:text-dark-text hover:bg-light-secondary/80 dark:hover:bg-dark-secondary/80"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg ${
                !notification.isRead
                  ? "bg-blue-50 dark:bg-blue-950/20"
                  : "bg-light-surface dark:bg-dark-surface"
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
                  <p className="text-sm text-light-text dark:text-dark-text">
                    <span className="font-medium">{notification.username}</span>{" "}
                    {notification.content}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
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
      </div>
    </MainLayout>
  );
};

export default NotificationsPage;
