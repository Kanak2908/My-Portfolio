import React from "react";
import img from "@/assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import rippling from "@/assets/rippling.png";

const Hero = () => {
  return (
    <div className="min-h-[80vh] w-full bg-[rgba(0,0,0,2)] flex justify-center px-4">
      <div className="h-full w-full max-w-3xl flex flex-col items-start gap-4 my-8 sm:justify-center">
        <Image
          src={img}
          alt="hero"
          height={100}
          width={100}
          className="rounded-2xl"
        />
        <h1 className="text-5xl text-white font-bold">Hi, Kanak here.</h1>
        <p>
        A Software Engineer and recent B.Tech graduate from IIIT Bhopal. I love building things, solving challenging problems, and learning new technologies.
        </p>

        <h3 className="text-3xl font-bold mt-10">What am I?</h3>
        <div className="flex flex-col gap-3 ">
          <p className="text-gray-400">
          A developer with strong skills in DSA and full-stack development. I have experience with React, Next.js, Node.js, C++, Python, and TypeScript, and I enjoy turning ideas into real-world products.
          </p>
        </div>

        <h3 className="text-3xl font-bold mt-10">Experience</h3>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-center">
              <Image
                src={rippling}
                alt="hero"
                className="rounded-full"
                height={50}
                width={50}
              />
              <div className="flex flex-col items-start justify-between">
                <Link
                  href={"https://www.rippling.com/"}
                  target="_blank"
                  className="text-md sm:text-xl"
                >
                  Rippling
                </Link>
                <p className="text-xs xm:text-md"> Software Engineer Intern</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs xm:text-md">
              Jan 2026 - July 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const YoutubeCard = ({
  img,
  title,
  link,
}: {
  img: string;
  title: string;
  link: string;
}) => (
  <div className="w-[370px] h-[320px] bg-[hsla(0%,8%,0%,1%)] rounded-md p-6 flex flex-col items-center justify-between bg-[#0a0a0a] border-[1px] border-[rgba(255,255,255,0.1)] overflow-y-auto hover:scale-105 transition-all duration-300">
    <Link
      className="w-full h-full rounded-md flex flex-col justify-between gap-4"
      href={link}
      target="_blank"
    >
      <Image
        src={img}
        alt="project"
        className="h-[80%] w-full rounded-md object-cover"
        width={100}
        quality={100}
        height={100}
      />
      <h1 className="text-white text-xl font-bold">{title}</h1>
    </Link>
  </div>
);
