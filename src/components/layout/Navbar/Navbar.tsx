"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ProductDropdown from "./ProductDropdown";
import Image from "next/image";
import Link from "next/link";
import OrderLoginSignup from "./Order-LoginSignup";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 h-24">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <p className="brand__logo text-secondaryColor flex">BURGER</p>
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={45}
              height={45}
              src="/image/brand-logo.webp"
              alt="Logo"
            />
          </Link>
          <p className="brand__logo ml-0 text-secondaryColor flex">KING</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden relative lg:gap-x-12 lg:flex">
          <NavLinks
            isProductDropdownOpen={isProductDropdownOpen}
            setIsProductDropdownOpen={setIsProductDropdownOpen}
          />
        </div>

        {/* Order Now Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <OrderLoginSignup />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Product Dropdown */}
      {isProductDropdownOpen && <ProductDropdown />}
    </header>
  );
};

export default Navbar;
