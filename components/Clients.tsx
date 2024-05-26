"use client";

import { tweets } from "@/data";
import { InfiniteMovingCards } from "./atoms/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Mmmm, a little
        <span className="text-purple"> brag</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={tweets} direction="right" speed="slow" />
          <InfiniteMovingCards items={tweets} direction="left" speed="normal" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
