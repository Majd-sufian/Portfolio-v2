"use client";

import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/atoms/FloatingNavbar";
import Blogs from "@/components/BlogsComponents/Blogs";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/HeroComponents/Hero";
import Projects from "@/components/Projects";
import { navItems } from "@/data";

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
    </main>
  );
};

export default Home;
