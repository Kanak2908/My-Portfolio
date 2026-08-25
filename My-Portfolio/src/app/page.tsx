import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col box-border p-0 m-0 max-w-[100%]">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
