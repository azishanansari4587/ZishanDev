import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingDockDemo } from "./FloatingDockDemo";

export function BackgroundLinesDemo() {
  return (
    (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hii Zishan Ansari, <br />  <span className="text-amber-600">Full Stack Developer</span>
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices &quot;The code you write is not just for machines—it&apos;s for the future you and your team will work with.&quot;
      </p>
    </BackgroundLines>

    )
  );
}
