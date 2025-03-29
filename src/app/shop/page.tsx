import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search, ShoppingCart, Star, Filter, ChevronDown } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    rating: 4.5,
    reviews: 128,
    image: "/products/headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.8,
    reviews: 256,
    image: "/products/watch.jpg",
  },
  // Add more products...
];

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Books",
  "Music",
];

export default function ShopPage() {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Shop</h1>
          <button className="p-2 hover:bg-[#2a2a2a] rounded-full relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 rounded-full text-xs flex items-center justify-center">
              3
            </span>
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
              placeholder="Search products"
              className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a]">
            <Filter size={20} />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a]">
            Sort by
            <ChevronDown size={20} />
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-800 relative">
                <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart size={20} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
                    Add to Cart
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
