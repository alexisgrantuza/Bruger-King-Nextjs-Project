"use client";

import React from "react";
import { productsSection } from "@/data/data";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import SwiperCore from "swiper"; // Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import product1 from "../../../public/image/ProductSwiper/product-scroll1.webp";
import product2 from "../../../public/image/ProductSwiper/product-scroll12.webp";
import "swiper/css"; // Import Swiper styles
import Link from "next/link";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Products = [
  { name: "Burger", image: product1 },
  { name: "Burger1", image: product2 },
];

const Recommendations = [
  {
    section: "RECOMMENDED",
    items: [
      {
        name: "2 for ₱129 King's Double Deal",
        price: "₱129",
        img: "/images/product1.webp",
      },
      {
        name: "2 Regular Thick-Cut Fries",
        price: "₱89",
        img: "/images/product2.webp",
      },
      {
        name: "4-Cheese Whopper Jr.",
        price: "₱99",
        img: "/images/product3.webp",
      },
      {
        name: "6-pc. Chicken Nuggets",
        price: "₱99",
        img: "/images/product4.webp",
      },
      {
        name: "2 X-tra Long Chicken",
        price: "₱219",
        img: "/images/product5.webp",
      },
    ],
  },
  {
    section: "ROYAL PERKS PROMOS",
    items: [
      {
        name: "2 for ₱129 King's Double Deal",
        price: "₱129",
        img: "/images/promo1.webp",
      },
      {
        name: "2 Regular Thick-Cut Fries",
        price: "₱89",
        img: "/images/promo2.webp",
      },
      {
        name: "6-pc. Chicken Nuggets",
        price: "₱99",
        img: "/images/promo3.webp",
      },
      {
        name: "2 BK Sundae with Nutella",
        price: "₱109",
        img: "/images/promo4.webp",
        soldOut: true,
      },
    ],
  },
];

const Product: React.FC = () => {
  return (
    <section className="min-h-screen bg-black px-6 py-10">
      {/* Horizontal Scrolling Product List with Light Blur Effect */}
      <div className="relative w-full p-4">
        {/* Blur Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-[#1f1e1c] via-transparent to-[#1f1e1c] opacity-50"></div>
        </div>

        <div
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
      <div className="mx-auto my-6 bg-black h-screen max-w-[90rem] flex flex-col overflow-auto">
        <div className="flex-1 w-full">
          <Swiper
            className="firstSwiper"
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            speed={400}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              2048: {
                slidesPerView: 2,
              },
            }}
          >
            <ul className="swiper-wrapper" id="offer-product">
              {Products.map((product) => (
                <SwiperSlide key={product.name}>
                  <li className="swiper-slide ">
                    <div className="w-full h-full object-cover relative">
                      <img
                        src={product.image.src}
                        alt="promo image"
                        className="animate-movingY w-full h-80 object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
        <div className="p-6 max-w-6xl">
          {Recommendations.map((category, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl text-left font-bold mb-4 text-white">
                {category.section}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.items.map((product, i) => (
                  <div
                    key={i}
                    className="relative bg-white p-4 shadow-lg rounded-lg"
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-sm font-semibold mt-2">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold text-red-500">
                        {product.price}
                      </span>
                      <button className="text-orange-500 text-2xl font-bold">
                        +
                      </button>
                    </div>
                    {product.soldOut && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SOLD OUT
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
