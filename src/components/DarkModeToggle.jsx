"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
      console.log(localStorage.setItem('theme', 'light'));
      
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
      console.log(html);
      
    }
  };

  return (
    <>
    <button onClick={toggleDarkMode} className="p-2 bg-white dark:bg-black text-black dark:text-white">
      {isDarkMode ? <IconSun/> : <IconMoon/>}
    </button>
    </>
  );
}
