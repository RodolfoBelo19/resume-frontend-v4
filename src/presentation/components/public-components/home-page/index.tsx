'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const element1 = document.querySelector(".element-1");
    const element2 = document.querySelector(".element-2");

    if (element1 && element2) {
      if (scroll > 120) {
        element1.classList.add("animate-slide-from-left");
        element2.classList.add("animate-slide-from-right");
      }
    }
  }, [scroll]);

  return (
    <>
      <div className="relative">
        <video className="absolute top-0 left-0 object-cover w-full h-full" src="/nebula.mp4" autoPlay loop muted />
        <div className="relative space-shadow z-10 py-48 flex items-center justify-center h-full text-white text-4xl font-bold">
          <motion.div
            initial={{ opacity: 0, y: -350 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          >
            Hello World
          </motion.div>
        </div>
      </div>
      <div className="h-screen flex justify-between py-32">
        <div className="element-1 p-24 invisible">
          <div className="p-24 bg-white">element 1</div>
        </div>
        <div className="element-2 p-24 invisible">
          <div className="p-24 bg-white">element 2</div>
        </div>
      </div>
    </>
  );
}