"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { featured } from "../../data/featured"; // Import the featured data
import Glide from "@glidejs/glide";

const Category: React.FC = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 3,
      focusAt: "center",
      gap: 20,
      breakpoints: {
        1024: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    });

    glide.mount();

    return () => glide.destroy(); // Cleanup on unmount
  }, []);

  return (
    <section id="category">
      <div className="font-display  uppercase lg:text-6xl flex max-w-7xl mx-auto text-4xl font-bold text-whiteColor  sm:text-center sm:mb-10 ">
        <h2 className="ml-8">Featured</h2>
      </div>
      <div
        className="category__card  flex justify-center items-center  mt-2 md:-mt-10"
        id="featured-items"
      >
        <div className="glide max-w-[90rem] flex flex-nowrap px-16 py-8 rounded-3xl">
          <div
            className="glide__track md:flex-row mx-auto md:mx-auto md:w-[78rem] w-[18rem]"
            data-glide-el="track"
          >
            <ul className="glide__slides" id="list-feature">
              {featured.map((feature) => (
                <li className="glide__slide" key={feature.name}>
                  <div className="relative flex bg-gray-800 text-white rounded-3xl duration-300 py-3 ease-in-out hover:cursor-pointer md:flex-1">
                    <div className="basis-1/3 relative">
                      <Image
                        src={feature.image}
                        alt="category image"
                        width={110}
                        height={80}
                        className="absolute  -bottom-4 -left-4"
                      />
                    </div>
                    <div>
                      <div className="mb-2">
                        <h4 className="font-display uppercase font-bold text-lg">
                          {feature.name}
                        </h4>
                        <p className="text-xs">Lorem ipsum dolor sit.</p>
                      </div>
                      <a
                        href="#"
                        className="text-secondaryColor cursor-pointer"
                      >
                        Buy online &rarr;
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left left-4"
              data-glide-dir="<"
              style={{
                border: "none",
                background: "transparent",
              }}
            >
              <div className="h-9 w-9 bg-gray-800 rounded-xl flex justify-center items-center my-auto hover:bg-secondaryColor duration-300 ease-in-out">
                <i className="fas fa-angle-left text-secondaryColor text-2xl"></i>
              </div>
            </button>
            <button
              className="glide__arrow glide__arrow--right right-4"
              data-glide-dir=">"
              style={{
                border: "none",
                background: "transparent",
              }}
            >
              <div className="h-9 w-9 bg-gray-800 rounded-xl flex justify-center items-center my-auto hover:bg-secondaryColor duration-300 ease-in-out">
                <i className="fas fa-angle-right text-secondaryColor text-2xl"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
