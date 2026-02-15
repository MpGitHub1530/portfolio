"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Hobbies", href: "#hobbies" },
  ];

  return (
    <div className="absolute top-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Match Hero ease
        className="flex items-center gap-12 rounded-full bg-[#0B0B0B]/5 px-12 py-5 backdrop-blur-md border border-[#0B0B0B]/10 shadow-xl shadow-black/5"
      >
        {/* Brand Name */}
        <div className="mr-4">
          <Link href="#hero" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B0B0B] text-[#F6F0E6] font-bold text-2xl font-serif">
              M
            </div>
            <span className="text-xl font-bold text-[#0B0B0B] hidden sm:block">Mittal</span>
          </Link>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-base font-semibold text-[#0B0B0B]/70 hover:text-[#0B0B0B] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden sm:flex ml-6 px-8 py-3 bg-[#0B0B0B] text-[#F6F0E6] text-base font-bold rounded-full transition-transform hover:scale-105 items-center gap-2"
        >
          Let&apos;s Talk ↗
        </Link>

      </motion.nav>
    </div>
  );
};
