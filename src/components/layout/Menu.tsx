"use client";

import React, { useState } from "react";
import { menus } from "../../data/menu"; // Import the menu data
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter menus based on selected category
  const filteredMenus = menus.filter((menu) => {
    if (selectedCategory === "all") return true; // Show all items
    return menu.category === selectedCategory; // Show items that match the selected category
  });

  return (
    <section id="menu">
      <div className="max-w-[90rem] place-self-center">
        <div className="max-w-md mx-auto text-center menu__items">
          <h2 className="text-xl font-display font-bold uppercase lg:text-6xl">
            OUR BEST MENU
          </h2>
          <div className="mx-0 md:mx-auto w-64 h-[2px] bg-secondaryColor my-5"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <div className="tabs_wrap">
            <ul className="flex flex-wrap justify-center gap-2 py-10">
              <li
                onClick={() => setSelectedCategory("all")}
                className={`btn bg-primaryColorLight dark:bg-darkColorLight ${
                  selectedCategory === "all" ? "active" : ""
                }`}
              >
                All
              </li>
              <li
                onClick={() => setSelectedCategory("food")}
                className={`btn bg-primaryColorLight dark:bg-darkColorLight ${
                  selectedCategory === "food" ? "active" : ""
                }`}
              >
                Food
              </li>
              <li
                onClick={() => setSelectedCategory("snack")}
                className={`btn bg-primaryColorLight dark:bg-darkColorLight ${
                  selectedCategory === "snack" ? "active" : ""
                }`}
              >
                Snack
              </li>
              <li
                onClick={() => setSelectedCategory("beverage")}
                className={`btn bg-primaryColorLight dark:bg-darkColorLight ${
                  selectedCategory === "beverage" ? "active" : ""
                }`}
              >
                Beverage
              </li>
            </ul>
          </div>
        </div>

        <div className="menu__items">
          <ul
            className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 place-items-center"
            id="menu-items"
          >
            {filteredMenus.map((menu) => (
              <li
                key={menu.id}
                className="lg:w-11/12 md:w-8/12 sm:w-8/12 w-10/12"
              >
                <div className="dz-img-box3 box-hover group style-4 dark:bg-darkColorLight p-[18px] flex flex-col h-[190px] relative z-[1] overflow-hidden rounded-[10px] cursor-pointer">
                  <div className="menu-detail flex items-center mb-3">
                    <div className="dz-media mr-5 w-[60px] min-w-[60px]">
                      <Image
                        src={menu.image}
                        alt={menu.name}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="dz-content">
                      <h5 className="title mb-[3px] duration-500 text-xl font-display font-bold uppercase text-whiteColor">
                        <Link href="product-detail.html">{menu.name}</Link>
                      </h5>
                      <p className="font-display sub-title">
                        Delicious and Spicy
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-[110px] mt-auto">
                    <span className="text-bodycolor text-[13px]">
                      Regular Price
                    </span>
                    <span className="price font-display duration-500 text-secondaryColor">
                      $10.00
                    </span>
                  </div>
                  <Link
                    className="detail-btn bg-secondaryColor"
                    href="our-menu-1.html"
                  >
                    <i className="fa-solid fa-plus "></i>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
