"use client";

import React, { useRef, useState } from "react";
import { productsSection } from "@/data/data";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Product: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fdf5e6] to-[#fffaf0] px-6 py-10">
      {/* Horizontal Scrolling Product List with Light Blur Effect */}
      <div className="relative w-full p-4">
        {/* Blur Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-[#fdf5e6] via-transparent to-[#fdf5e6] opacity-50"></div>
        </div>

        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent cursor-grab active:cursor-grabbing select-none"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.2), black 5%, black 95%, rgba(0, 0, 0, 0.2))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.2), black 5%, black 95%, rgba(0, 0, 0, 0.2))",
          }}
        >
          <div className="flex justify-center space-x-4">
            <InfiniteMovingCards
              items={productsSection}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto my-6 bg-white h-screen max-w-[90rem] flex flex-col">
        <div className="flex-1 p-6 text-black">
          <h2 className="text-2xl font-bold mb-6">Product List</h2>
          <p>Other content goes here...</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
