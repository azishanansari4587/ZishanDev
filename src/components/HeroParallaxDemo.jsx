"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products}/>;
}
export const products = [
  {
    title: "Urban Home City",
    link: "https://urban-home-ten.vercel.app/",
    thumbnail:
      "/assets/Urban_Screenshot1.png",
  },
  {
    title: "Mirzapur Developer",
    link: "https://mirzapurdeveloper.com/",
    thumbnail: "/assets/Portfolio_Screenshot.png",
  },
  {
    title: "Profonet Solutions",
    link: "https://profonet-pi.vercel.app/",
    thumbnail:
      "/assets/Profonet_Screenshot1.png",
  },
  
  {
    title: "karim X Nuzrat",
    link: "https://karimxnuzrat.com/",
    thumbnail:
      "/assets/karim_Screenshot1.png",
  },
  {
    title: "Sweet Home",
    link: "https://azishanansari4587.github.io/SweetHome/",
    thumbnail:
      "/assets/SweetHome_Screenshot.png",
  },

  {
    title: "Sumaiya Rugs",
    link: "http://sumaiyarugs.com/",
    thumbnail:
      "/assets/Sumaiya_Screenshot1.png",
  },
  {
    title: "Profoelctron Solutions",
    link: "https://profoelctronsolutions.com/",
    thumbnail:
      "/assets/Profoelctron_Screenshot1.png",
  },
  {
    title: "Nuzrat Carpet",
    link: "https://nuzrat-carpet.vercel.app/",
    thumbnail:
      "/assets/Nuzrat_Screenshot1.png",
  },
];
