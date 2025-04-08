"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    (
        <>
        
    <LampContainer>
      
      <div className="relative flex flex-col w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Hello Everyone <br /> I am Zishan Ansari.
      </motion.h1>
      {/* <p className="max-w-2xl text-base md:text-xl text-neutral-200">I am a Full Stack Web Developer. I am passionate about building web applications. I am a self-taught developer. I am a Full Stack Web Developer. </p> */}
    </div>
      
    </LampContainer>
    <div className="relative flex flex-col w-full flex-1  items-center justify-center isolate z-0 ">
        <h3 className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Professional Summary.</h3>
        <p className="max-w-2xl text-base md:text-xl dark:text-neutral-200 text-justify">Results-driven Full Stack Developer with [X years] of experience in designing, developing, and deploying robust web applications. Proficient in front-end and back-end technologies, including React, Node.js, and MySQL. Adept at solving complex problems, collaborating in agile environments, and delivering scalable and high-performing solutions. Passionate about writing clean, efficient code and staying updated with emerging web technologies.</p>

        <h3 className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Work Experience</h3>
        <p className="max-w-2xl text-base md:text-xl dark:text-neutral-200 text-justify">I am a Full Stack Web Developer. I am passionate about building web applications. I am a self-taught developer. I am a Full Stack Web Developer. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto minima ut nihil eveniet error, debitis doloribus atque dicta asperiores pariatur tempore amet maiores necessitatibus assumenda cupiditate maxime ab natus libero. </p>

        <h3 className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Professional Skills</h3>
        <p className="max-w-2xl text-base md:text-xl dark:text-neutral-200 text-justify">I am a Full Stack Web Developer. I am passionate about building web applications. I am a self-taught developer. I am a Full Stack Web Developer. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto minima ut nihil eveniet error, debitis doloribus atque dicta asperiores pariatur tempore amet maiores necessitatibus assumenda cupiditate maxime ab natus libero. </p>
    </div>
    
        </>
    )
  );
}
