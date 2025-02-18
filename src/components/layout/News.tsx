"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { news } from "../../data/new"; // Assuming you have a news data file
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";

const News: React.FC = () => {
  useEffect(() => {
    new Swiper(".mySwiper", {
      modules: [Autoplay, Navigation], // Add Navigation module
      slidesPerView: 2,
      spaceBetween: 28,
      centeredSlides: false,
      loop: true, // Enable infinite looping
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
        },
        568: {
          slidesPerView: 2,
          spaceBetween: 28,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  }, []);

  return (
    <section className="py-24 " id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-36 ">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-display font-bold text-whiteColor leading-[3.25rem] mb-5">
                Our latest{" "}
                <span className="text-xl font-display font-bold uppercase lg:text-6xl text-secondaryColor">
                  News
                </span>
              </h2>
              <div className="separator mx-auto md:mx-0"></div>
              <p className="paragraph mb-10 max-lg:max-w-xl max-lg:mx-auto">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends
                in our field.
              </p>
              <a
                href="#"
                className="cursor-pointer shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 text-whiteColor font-semibold transition-all duration-300"
              >
                View All
              </a>
            </div>
            {/* Slider controls */}
            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-solid border-[#f2421f] w-11 h-11 transition-all duration-500 rounded-full hover:bg-secondaryColor"
                data-carousel-prev
              >
                <svg
                  className="h-6 w-6 text-secondaryColor group-hover:text-whiteColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-solid border-[#f2421f] w-11 h-11 transition-all duration-500 rounded-full hover:bg-secondaryColor"
                data-carousel-next
              >
                <svg
                  className="h-6 w-6 text-secondaryColor group-hover:text-whiteColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/5 ">
            {/* Slider wrapper */}
            <div className="swiper1 mySwiper overflow-clip overflow-y-visible">
              <div className="swiper-wrapper" id="latest-news">
                {news.map((newsItem) => (
                  <div className="swiper-slide mb-6 lg:mb-0" key={newsItem.id}>
                    <div className="relative h-[500px] md:h-[450px] block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                      <div className="flex">
                        <div
                          className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <Image
                            src={newsItem.image}
                            alt={"news-item"}
                            height={500}
                            width={500}
                          />
                          <a href="#!">
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                          </a>
                        </div>
                      </div>
                      <div className="p-6">
                        <h5 className="mb-3 text-lg font-bold">
                          ${newsItem.name}
                        </h5>
                        <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                          <small>
                            until <u>${newsItem.publish}</u> by
                            <a href="#!">Burger King</a>
                          </small>
                        </p>
                        <p className="mb-4 pb-2 paragraph text-ellipsis">
                          ${newsItem.intro}
                        </p>
                        <a
                          href="javascript:;"
                          className="cursor-pointer flex items-center gap-2 text-lg text-secondaryColor font-display font-bold"
                        >
                          Read more<span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
