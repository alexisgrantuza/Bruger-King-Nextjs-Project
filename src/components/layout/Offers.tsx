"use client";

import React from "react";
import { offers } from "../../data/offer"; // Import the offers data
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import SwiperCore from "swiper"; // Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import Link from "next/link";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Offers: React.FC = () => {
  return (
    <section
      id="Offers"
      className="bg-primaryColorLight dark:bg-darkColorLight py-20 overflow-x-hidden md:overflow-visible"
    >
      <div className="container max-w-7xl place-self-center ">
        <div className="max-w-md  mx-auto text-center mb-24">
          <h2 className="text-xl font-display font-bold uppercase lg:text-6xl">
            OFFERS
          </h2>
          <div className="separator mx-auto md:mx-0 w-48 h-[2px] bg-secondaryColor my-5"></div>
          <p className="paragraph ">
            Cravings meet savings! Save on your favorite BK meals and treats
            with King Coupons available on the BK App. Tap on the coupons to
            claim.
          </p>
        </div>

        <Swiper
          className="firstSwiper py-10"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          speed={400}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <ul className="swiper-wrapper" id="offer-product">
            {offers.map((offer) => (
              <SwiperSlide key={offer.name}>
                <li className="swiper-slide ">
                  <div className="flex flex-col gap-5 h-96  bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                    <div className="w-40 h-40 object-cover mx-auto relative">
                      <img
                        src={offer.image}
                        alt="promo image"
                        className="absolute inset-0 mx-auto my-auto animate-movingY"
                      />
                    </div>
                    <div className="space-y-4 mt-8 md:pt-0">
                      <p className="text-xs text-secondaryColor">
                        Payday promo
                      </p>
                      <h3 className="card__title">{offer.name}</h3>
                      <p className="paragraph">
                        GET A {offer.discount} DISCOUNT ON PAYDAY WEEK
                      </p>
                      <Link href="#" className="text-xs text-secondaryColor">
                        Buy online
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};

export default Offers;
