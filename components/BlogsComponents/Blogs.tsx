"use client";

import { blogs } from "@/data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section id="blogs" className="py-20">
      <h1 className="heading">
        Some Of My <span className="text-purple">Latest Blogs </span>
      </h1>

      <div className="flex flex-wrap justify-center my-20">
        {blogs.map(({ title, img, link }) => (
          <BlogCard key={title} title={title} img={img} link={link} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
