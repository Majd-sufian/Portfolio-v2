"use client";

import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/atoms/FloatingNavbar";
import Blogs from "@/components/BlogsComponents/Blogs";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/HeroComponents/Hero";
import Projects from "@/components/ProjectsComponents/Projects";
import { navItems } from "@/data";
import Script from "next/script";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        {/* <Experience /> */}
        <Approach />
        <Blogs />
        <Clients />
        {/* <TechStack /> */}
        <Footer />
      </div>

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TBLK0QK6QB"
      ></Script>
      <Script id="google-analytics-2" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TBLK0QK6QB');`}
      </Script>
    </main>
  );
};

export default Home;
