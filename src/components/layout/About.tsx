"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="text-4xl font-display font-bold uppercase lg:text-6xl flex max-w-7xl mx-auto text-whiteColor -mt-4 sm:text-center ">
        <h2 className="ml-8">ABOUT US</h2>
      </div>
      <div className="container flex flex-col gap-10 md:flex-row md:my-24 my-10">
        <div className="about__img flex-1">
          <Image
            src="/image/about.jpg"
            alt="about image"
            className="rounded-lg"
            width={500}
            height={300}
          />
        </div>

        <div className="about__content flex-1">
          <h2 className="section__title">
            FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.
          </h2>
          <div className="separator mx-auto md:mx-0 w-48 h-[2px] bg-secondaryColor my-5"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Best Price
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Fresh Ingredient
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Best Service
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Health Protocol
            </li>
          </ul>
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full mr-4 py-2 px-4 focus:shadow-outline">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
