import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Search,
  Plus,
  Filter,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Music Festival 2024",
    date: "Mar 15, 2024",
    time: "18:00",
    location: "Central Park, NY",
    attendees: 1250,
    category: "Music",
    image: "/events/music-festival.jpg",
  },
  {
    id: 2,
    title: "Tech Conference",
    date: "Mar 20, 2024",
    time: "09:00",
    location: "Convention Center",
    attendees: 850,
    category: "Technology",
    image: "/events/tech-conf.jpg",
  },
];

const categories = [
  "All Events",
  "Music",
  "Technology",
  "Sports",
  "Arts",
  "Food & Drink",
  "Business",
];

export default function EventsPage() {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Events</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
            <Plus size={20} />
            Create Event
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search events"
              className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a]">
            <Filter size={20} />
            Filters
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-[#2a2a2a] rounded-full hover:bg-purple-600 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
            >
              {/* Event Image */}
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-purple-600 rounded text-xs">
                  {event.category}
                </div>
              </div>

              {/* Event Info */}
              <div className="p-4">
                <h3 className="font-medium text-lg mb-4">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={16} />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-purple-600 rounded hover:bg-purple-700">
                    Join Event
                  </button>
                  <button className="px-4 py-2 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a]">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
