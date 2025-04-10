"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Input } from "./ui/input";

export function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the Newsletter
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We promise our newsletter is better than your coffee—join us for a fresh dose of ideas and inspiration every week or month!
        </p>
         <div className=" flex gap-2">
         <Input
          type="email"
          placeholder="azishanansari4587@gmail.com"
          className=" text-white rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" />
          <button className="mt-4 text-white rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 bg-neutral-950" >Subscribe Now  </button>
         </div>

      </div>
      <BackgroundBeams />
    </div>)
  );
}
