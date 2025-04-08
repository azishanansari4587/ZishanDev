"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { GlowingEffectDemoSecond } from "./GlowingEffectDemo";

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
    <div className="mx-auto p-4 relative flex flex-col w-full flex-1  items-center justify-center isolate z-0 ">
      <h3 className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Professional Summary</h3>
      <p className="max-w-2xl text-base md:text-lg dark:text-neutral-200 text-justify ">Highly skilled Full Stack Developer with 1.5 years of experience in designing, developing, and deploying scalable web applications. Proficient in JavaScript, React.js, Next.js, Node.js, Express.js, and Java, with hands-on experience in MySQL, MongoDB, and PostgreSQL. Strong expertise in building responsive and user-friendly front-end interfaces using HTML, CSS, Tailwind CSS, and Bootstrap while ensuring seamless backend integration.

      Experienced in implementing RESTful APIs, authentication, and state management using tools like Zustand and Redux. Knowledgeable in DevOps practices, AWS deployment, and CI/CD pipelines. Adept at problem-solving, optimizing application performance, and collaborating with cross-functional teams to deliver high-quality solutions. Passionate about learning new technologies and continuously improving development practices.

      Looking forward to leveraging my expertise to build innovative and efficient web solutions in a dynamic and growth-oriented environment.
      </p>

        <h3 className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-right text-4xl font-medium tracking-tight text-transparent md:text-7xl">Work Experience</h3>
        {/* <p > */}
        <ol className="max-w-2xl px-4 list-disc text-base md:text-md dark:text-neutral-200 text-justify ">
          <li >Designed, developed, and deployed custom web applications for clients across various industries, ensuring scalability and performance.</li>
          <li>Built responsive front-end interfaces using React.js, Next.js, HTML, CSS, Tailwind CSS, and Bootstrap to enhance user experience.</li>
          <li>Developed and integrated RESTful APIs using Node.js, Express.js, and Java, ensuring seamless communication between front-end and back-end.</li>
          <li>Managed MySQL, PostgreSQL, and MongoDB databases for efficient data storage and retrieval.</li>
          <li>Implemented authentication and authorization systems using JWT and OAuth for secure user access.</li>
          <li>Optimized application performance, debugging issues, and improving loading speed and SEO in Next.js applications.</li>
          <li>Deployed and maintained applications on AWS, Vercel, and Hostinger, ensuring smooth operations and uptime.</li>
          <li>Collaborated with clients to gather requirements, suggest improvements, and deliver customized, scalable solutions tailored to their needs.</li>
          <li>Utilized Git, GitHub, and Agile methodologies for version control and efficient project management.
          </li>
        </ol>  
{/* </p> */}

        <h3 className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Professional Skills</h3>
          <GlowingEffectDemoSecond/>
        </div>
    
      </>
    )
  );
}
