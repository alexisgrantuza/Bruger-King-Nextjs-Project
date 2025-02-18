"use client";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
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
  const { data: session, status } = useSession();
  const params = useParams();
  const router = useRouter();
  console.log(params.id);

  useEffect(() => {
    // Protect the route
    if (status === "unauthenticated") {
      router.push("/login");
    }

    // Verify that the ID in the URL matches the session user's ID
    if (status === "authenticated" && session?.user?.id !== params.id) {
      router.push(`/home/${session?.user?.id}`);
    }
  }, [status, session, params.id, router]);

  // Only render the page content if authenticated and IDs match
  if (status === "authenticated" && session?.user?.id === params.id) {
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
  }

  return null;
};

export default HomePage;
