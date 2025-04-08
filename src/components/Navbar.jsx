"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";
import { Avatars } from "./Avatars";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { PanelLeft, BriefcaseBusiness, Phone, Rss, FileText } from "lucide-react";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 rounded-full border border-black/[0.2] dark:bg-black dark:border-white/[0.2] bg-white shadow-input" />
    </div>)
    // <Navbar/>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10  max-w-7xl mx-auto z-50", className)}>
      <Menu setActive={setActive} active={active} >
        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center  gap-8">
          <Avatars className="items-center justify-between " />
          <HoveredLink href="/"><h3 className="text-xl md:text-3xl font-medium subpixel-antialiased">Zishan <span className="text-amber-600">Dev</span></h3></HoveredLink>
          <HoveredLink href="/Showcase">Showcase</HoveredLink>
          <HoveredLink href="/About">About</HoveredLink>
          <HoveredLink href="/Contact">Contact</HoveredLink>
          <HoveredLink href="/Blog">Blog</HoveredLink>
          <DarkModeToggle />
        </div>

        {/* Menu for smaller screens */}
        <div className="md:hidden flex justify-between items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              
              <button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </button>
              
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <SheetHeader>
              <SheetTitle></SheetTitle>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
                <div
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Avatars className="items-center gap-8" />

                </div>
                <HoveredLink href="/Showcase" onClick={() => setActive(false)}>
                <BriefcaseBusiness className="mr-2" /> Showcase
                </HoveredLink>
                <HoveredLink href="/About" onClick={() => setActive(false)}>
                <FileText className="mr-2" /> About
                </HoveredLink>
                <HoveredLink href="/Contact" onClick={() => setActive(false)}>
                <Phone className="mr-2"/> Contact
                </HoveredLink>
                <HoveredLink href="/Blog" onClick={() => setActive(false)}>
                  <Rss className="mr-2"/> Blog
                </HoveredLink>
              </nav>
            </SheetContent>
          </Sheet>

          <h3 className="text-xl font-medium subpixel-antialiased">Zishan <span className="text-amber-600">Dev</span></h3>
          <DarkModeToggle />
        </div>
      </Menu>
    </div>)
  );
}
