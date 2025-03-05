"use client";
import { useSession } from "next-auth/react";
import { useRouter, useParams, redirect } from "next/navigation";
import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/layout/Hero";
import Category from "@/components/layout/Category";
import Offers from "@/components/layout/Offers";
import About from "@/components/layout/About";
import Menu from "@/components/layout/Menu";
import News from "@/components/layout/News";
import Footer from "@/components/layout/Footer";
import ScrollUp from "@/components/layout/ScrollUp";

const HomePage: React.FC = () => {
  return (
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
  );

  return null;
};

export default HomePage;
