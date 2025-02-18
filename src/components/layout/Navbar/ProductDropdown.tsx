import React from "react";
import { products } from "@/data/product"; // Import the products data
import Link from "next/link";
import Image from "next/image";

const ProductDropdown: React.FC = () => {
  return (
    <div className="fixed left-0 z-10 mt-3 w-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
      <div>
        <ul
          className="relative left-0 w-screen list-inside columns-3 border-t-[0.5px] border-gainsboro bg-isabelline px-44 py-6 bg-primaryColor text-black"
          id="header-product"
        >
          {products.map((product) => (
            <li key={product.name}>
              <Link
                className="group flex items-center py-3 pl-4 font-display text-sm hover:rounded-xl hover:bg-red-600 hover:text-white"
                href="/menu#featured"
              >
                <Image
                  src={product.image}
                  className="mr-2 w-5 scale-[2] md:w-5"
                  alt={product.name}
                  height={150}
                  width={150}
                />
                <p className="w-full pl-4">{product.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDropdown;
