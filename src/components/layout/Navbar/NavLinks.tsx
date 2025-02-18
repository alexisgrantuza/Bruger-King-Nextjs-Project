import React from "react";
import Link from "next/link";

interface NavLinksProps {
  isProductDropdownOpen: boolean;
  setIsProductDropdownOpen: (open: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  isProductDropdownOpen,
  setIsProductDropdownOpen,
}) => {
  return (
    <div className="flex items-center gap-x-12">
      <ul className="flex flex-col text-center gap-5 md:flex-row">
        <li>
          <button
            type="button"
            className="flex nav__link hover:text-secondaryColor items-center gap-x-1 text-sm font-semibold leading-6 text-whiteColor"
            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
          >
            Product
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className={`flex-none size-4 mt-1 ml-1 transition-transform duration-200 transform ${
                isProductDropdownOpen ? "rotate-180" : "rotate-0"
              } md:-mt-1`}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li>
          <Link
            href="#menu"
            className="nav__link hover:text-secondaryColor ease-in duration-200 text-sm font-semibold leading-6 text-whiteColor"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#review"
            className="nav__link hover:text-secondaryColor ease-in duration-200 text-sm font-semibold leading-6 text-whiteColor"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="#review"
            className="nav__link hover:text-secondaryColor ease-in duration-200 text-sm font-semibold leading-6 text-whiteColor"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="nav__link hover:text-secondaryColor ease-in duration-200 text-sm font-semibold leading-6 text-whiteColor"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
