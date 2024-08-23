"use client";
import { text } from "stream/consumers";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const sentences =
  "a network security student from IIUM, Malaysia, passionate about photography, tech, and CTF challenges. I enjoy developing software, solving complex problems, and continually expanding my skills and knowledge in the digital world.";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute text-white/10 text-[150px] sm:text-[250px] md:sm:text-[350px] lg:sm:text-[450px] overflow-hidden sm:-top-28 right-0 lg:-top-36 right-0 font-extrabold tracking-wide">
        <p>About</p>
      </div>
      <div className="text-md sm:text-2xl md:text-3xl lg:text-5xl p-0 w-5/12 tracking-wider mb-10">
        <TextGenerateEffect words={sentences} />
      </div>
    </div>
  );
}
