import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconFileCv,
  IconBrandLinkedin,
  IconBrandDiscord,
  IconBrandWhatsapp,
  IconMail
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1kdCiTggccVkN8vQ4WdWReSFLczP-zE9h/view?usp=sharing",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/zishan-ansari-2a1019215/",
    },

    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
   
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:azishanansari4587@gmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/azishanansari4587",
    },
  ];
  return (
    (<div className="flex items-center justify-center h-[10rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
