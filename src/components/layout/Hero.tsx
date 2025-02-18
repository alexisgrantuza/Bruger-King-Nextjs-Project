"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex items-center justify-center md:pt-10">
      <div className="flex flex-col items-center gap-10 md:flex-row max-w-7xl">
        <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="text-xl font-display font-bold uppercase lg:text-6xl">
            WELCOME TO BURGER KING. HOME OF THE WHOPPER®!
          </h1>
          <div className="separator mx-auto md:mx-0 w-48 h-[2px] bg-secondaryColor my-5"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            libero magni? Fugiat perspiciatis eius, sequi aliquid ullam dolorem
            temporibus voluptate corrupti fugit saepe sunt unde culpa? Tenetur
            quos quod laudantium.
          </p>
          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="text-center">
              <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
              <br />
              Delicious
            </div>

            <div className="text-center">
              <i className="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
              <br />
              Fresh
            </div>

            <div className="text-center">
              <i className="fa-brands fa-envira text-secondaryColor text-4xl"></i>
              <br />
              Organic
            </div>
          </div>

          <div className="text-base flex items-center justify-center gap-2 py-10 md:justify-start md:flex-nowrap">
            <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full mr-4 py-2 px-4 focus:shadow-outline">
              Explore Menu
            </button>
            <div className="paragraph">
              <span>40+ </span>Awesome Offers.
            </div>
          </div>
        </div>
        <motion.div
          className="mx-auto md:basis-1/2 lg:basis-2/6"
          animate={{ y: [0, -70, 0] }} // Bounce effect
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/image/home-image.png" // Ensure the image path is correct
            alt="home image"
            className="home__image w-60 md:w-full"
            width={600} // Set appropriate width
            height={400} // Set appropriate height
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
