"use client";

import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/layout/Hero";
import Category from "@/components/layout/Category";
import Offers from "@/components/layout/Offers";
import About from "@/components/layout/About";
import Menu from "@/components/layout/Menu";
import News from "@/components/layout/News";
import Footer from "@/components/layout/Footer";
import ScrollUp from "@/components/layout/ScrollUp";
import { SessionProvider } from "next-auth/react";

const HomePage: React.FC = () => {
  return (
    <SessionProvider>
      <>
        <Navbar />
        <Hero />
        <Category />
        <Offers />
        <About />
        <Menu />
        <News />
        <Footer />
        <ScrollUp />
      </>
    </SessionProvider>
  );
};

export default HomePage;
