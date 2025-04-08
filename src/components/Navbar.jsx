"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";
import { Avatar } from "@/components/ui/avatar";
import { Avatars } from "./Avatars";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 rounded-full border border-black/[0.2] dark:bg-black dark:border-white/[0.2] bg-white shadow-input" />
        
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} active={active} >
        <Avatars className="items-center gap-8" />
        <HoveredLink href="/"><h3 className="text-xl font-medium subpixel-antialiased">Mirzapur <span className="text-amber-600">Developer</span></h3></HoveredLink>
        <HoveredLink href="/Projects">Projects</HoveredLink>
        <HoveredLink href="/About">About</HoveredLink>
        <HoveredLink href="/Contact">Contact</HoveredLink>
        <HoveredLink href="/Blog">Blog</HoveredLink>
        <DarkModeToggle />
      </Menu>
    </div>)
  );
}
