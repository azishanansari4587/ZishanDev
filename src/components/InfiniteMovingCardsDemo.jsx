"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { IconBrandBootstrap, IconBrandCss3, IconBrandFirebase, IconBrandGit, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconCoffee, IconFileTypeSql, IconHierarchy3, IconPlugConnected, IconLeaf, IconPower, IconBrandWordpress, IconBrandPhp, IconBrandVite, IconBrandVercel, IconBrandShopee, IconBrandWix, IconBrandTypescript, IconBrandDocker, IconBrandFlutter, IconBrandReactNative, IconBrandFramerMotion } from '@tabler/icons-react';

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[10rem] md:h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={frontends} direction="right" speed="slow" />
      <InfiniteMovingCards items={backends} direction="left" speed="slow" />
    </div>)
  );
}

const frontends = [
  {
    name: "HTML",
    icon: <IconBrandHtml5 size={40}/>
  },
  {
    name: "Javascript",
    icon: <IconBrandJavascript size={40}/>
  },
  {
    name: "CSS",
    icon: <IconBrandCss3 size={40}/>
  },
  {
    name: "Bootstrap",
    icon: <IconBrandBootstrap size={40}/>
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind size={40}/>
  },
  {
    name: "React",
    icon: <IconBrandReact size={40}/>
  },
  {
    name: "Typescript",
    icon: <IconBrandTypescript size={40}/>
  },
  {
    name: "Java",
    icon: <IconCoffee size={40}/>
  },
  {
    name: "Vite",
    icon: <IconBrandVite size={40}/>
  },
  {
    name: "NextJS",
    icon: <IconBrandNextjs size={40}/>
  },
  {
    name: "Flutter",
    icon: <IconBrandFlutter size={40}/>
  },
  {
    name: "ReactNative",
    icon: <IconBrandReactNative size={40}/>
  },
  {
    name: "Vercel",
    icon: <IconBrandVercel size={40}/>
  },
  // {
  //   name: "FramerMotion",
  //   icon: <IconBrandFramerMotion size={40}/>
  // },
  {
    name: "Shopify",
    icon: <IconBrandShopee size={40}/>
  },
  {
    name: "Wix",
    icon: <IconBrandWix size={40}/>
  },

];

const backends = [
  {
    name: "NodeJS",
    icon: <IconBrandNodejs size={40}/>
  },
  {
    name: "MySQL",
    icon: <IconBrandMysql size={40}/>
  },
  {
    name: "Docker",
    icon: <IconBrandDocker size={40}/>
  },
  {
    name: "SQL",
    icon: <IconFileTypeSql size={40}/>
  }, 
  {
    name: "Firebase",
    icon: <IconBrandFirebase size={40}/>
  },
  {
    name: "MongoDB",
    icon: <IconBrandMongodb size={40}/>
  },

  {
    name: "Git",
    icon: <IconBrandGit size={40}/>
  },
  {
    name: "GitHub",
    icon: <IconBrandGithub size={40}/>
  },
  {
    name: "DSA",
    icon: <IconHierarchy3 size={40}/>
  },
  {
    name:"SpringBoot",
    icon:<IconLeaf size={40}/>
  },
  {
    name:"JDBC",
    icon:<IconPlugConnected size={40}/>
  }, 
  {
    name: "Hybernate",
    icon: <IconPower size={40}/>
  },
  {
    name: "Php",
    icon: <IconBrandPhp size={40}/>
  },
  {
    name: "Wordpress",
    icon: <IconBrandWordpress size={40}/>
  }
];
