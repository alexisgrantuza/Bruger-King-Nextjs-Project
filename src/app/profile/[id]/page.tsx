"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ProfileOverview } from "@/components/layout/ProfileOverview";

const Profile = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(pathname);

  const avatarFallback = session?.user?.name;

  let userNames = session?.user?.name;
  if (userNames && avatarFallback?.includes(" ")) {
    userNames = avatarFallback?.split(" ")[0];
  }

  const user = {
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image || "/default-avatar.png",
    phone: "123-456-7890", // Placeholder, replace with real data
    location: "New York, USA", // Placeholder, replace with real data
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf5e6] to-[#fffaf0] px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 flex items-center gap-4 backdrop-blur-md bg-opacity-80">
        <Image
          src={user.image}
          alt="User Avatar"
          className="w-14 h-14 rounded-full border-2 border-gray-300"
          width={120}
          height={120}
        />
        <div className="flex flex-col space-y-1 font-display">
          <h1 className="text-xl font-bold text-gray-800">
            Hello, {userNames}
          </h1>
          <ProfileOverview />
        </div>
      </div>
      {/* Action Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { title: "ORDER NOW", link: "/order", img: "/image/ordernow.png" },
          {
            title: "ORDER HISTORY",
            link: "/history",
            img: "/image/historyorder.png",
          },
          { title: "NEWS", link: "/news", img: "/image/newsimage.png" },
          {
            title: "REWARD",
            link: "/reward",
            img: "/image/rewardsimage.png",
          },
        ].map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <div
              className="bg-black p-4 flex items-center gap-3 rounded-lg shadow-lg cursor-pointer transition-all backdrop-blur-lg bg-opacity-80 hovering-container"
              aria-label={`Go to ${item.title}`}
            >
              {/* Scalable Image */}
              <div className="hovering-image">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-md"
                />
              </div>

              {/* Icon & Text */}
              <div className="flex flex-col">
                <h2 className="font-semibold font-display text-white">
                  {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* What's New Section */}
      /* What's New Section */
      <div className="mt-10 max-w-4xl mx-auto font-display">
        <div className="flex justify-between items-center  mb-4">
          <h2 className="text-xl font-bold text-gray-800">What's New</h2>
          <div className="font-display font-medium text-black underline text-center cursor-pointer">
            View All
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {[
            {
              title: "King's Cheesy Bundle",
              image: "/image/newoffer.webp",
            },
            {
              title: "King's Cheesy Bundle",
              image: "/image/newoffer.webp",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 bg-opacity-80 flex flex-col items-center gap-2 hovering-container overflow-y-hidden"
            >
              <Image
                src={item.image}
                alt="Promo"
                className="rounded-lg hovering-image"
                width={250}
                height={250}
              />
              <div className="text-start z-10 bg-white w-full h-12">
                <p className="mt-4 font-semibold text-gray-700">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
