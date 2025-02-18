"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      id="scroll-up"
      className={`scroll-up fixed right-5 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200 ${
        isVisible ? "bottom-5" : "-bottom-20"
      }`}
    >
      <Link href="#" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up text-black"></i>
      </Link>
    </div>
  );
};

export default ScrollUp;
