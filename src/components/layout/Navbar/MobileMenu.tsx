import Image from "next/image";
import React, { useState } from "react";
import { products } from "@/data/product"; // Import the products data

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isProductsVisible, setIsProductsVisible] = useState(false);

  return (
    <div
      className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primaryColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={45}
              height={45}
              src="/image/brand-logo.webp"
              alt="Logo"
            />
          </a>
          <p className="brand__logo text-secondaryColor">BURGER KING</p>
          <button
            type="button"
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Content */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <div className="-mx-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  aria-controls="disclosure-1"
                  aria-expanded={isProductsVisible}
                  onClick={() => setIsProductsVisible(!isProductsVisible)}
                >
                  Products
                  <svg
                    className={`h-5 w-5 flex-none transition-transform duration-200 ${
                      isProductsVisible ? "rotate-180" : "-rotate-90"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* 'Product' sub-menu, show/hide based on menu state. */}
                {isProductsVisible && (
                  <div className="mt-2 space-y-2">
                    {products.map((product) => (
                      <div
                        key={product.name}
                        className="static rounded-lg py-2 pl-6 pr-3 flex items-center hover:bg-gray-50"
                      >
                        <img
                          className="w-12 mr-6"
                          src={product.image}
                          alt={product.name}
                        />
                        <a
                          href="#"
                          className="inline-block text-sm font-semibold leading-7 text-gray-900"
                        >
                          {product.name}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Offers
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Order Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
