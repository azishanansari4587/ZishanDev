import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    (<div
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 border rounded-3xl dark:bg-black bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <h2 className="text-2xl md:text-7xl font-bold text-center">Java <br /> <span className="text-amber-500 p-6">Vs</span> <br /> Javascript</h2>
      <Compare
        firstImage="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[300px] w-[320px] md:h-[700px] md:w-[700px]"
        slideMode="hover" />
    </div>)
  );
}
