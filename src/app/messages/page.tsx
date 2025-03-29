import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Search,
  Phone,
  Video,
  MoreVertical,
  Send,
  Image as ImageIcon,
  Smile,
  Paperclip,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Lee",
    lastMessage: "Hey, how are you?",
    time: "2m ago",
    unread: 2,
    online: true,
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    lastMessage: "The meeting is at 3 PM",
    time: "1h ago",
    unread: 0,
    online: false,
    avatar: "/avatars/john.jpg",
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah Lee",
    content: "Hey, how are you?",
    time: "2:30 PM",
    isSender: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Im good! How about you?",
    time: "2:31 PM",
    isSender: true,
  },
  {
    id: 3,
    sender: "Sarah Lee",
    content: "Great! Are you free for a call later?",
    time: "2:32 PM",
    isSender: false,
  },
];

export default function MessagesPage() {
  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-64px)]">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-800 bg-[#1a1a1a]">
          <div className="p-4">
            <div className="relative mb-4">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2a2a2a] cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">{conversation.unread}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-[#121212]">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
              <div>
                <h2 className="font-medium">Sarah Lee</h2>
                <p className="text-sm text-gray-400">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
                <Phone size={20} />
              </button>
              <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
                <Video size={20} />
              </button>
              <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isSender ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.isSender ? "bg-purple-600" : "bg-[#2a2a2a]"
                  }`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs text-gray-400 mt-1 block">
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
                <ImageIcon size={20} />
              </button>
              <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-[#2a2a2a] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
                <Smile size={20} />
              </button>
              <button className="p-2 bg-purple-600 rounded-full hover:bg-purple-700">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
