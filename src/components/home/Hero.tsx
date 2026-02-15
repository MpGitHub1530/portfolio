"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
   return (
      <section id="hero" className="relative min-h-screen w-full bg-[#F6F0E6] text-[#0B0B0B] pt-32 pb-20 flex items-center">
         <Navbar />
         {/* Background Grid Pattern (Subtle) - Adapted colors for light theme */}
         <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #0B0B0B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

         <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT COLUMN: Photo, Name, Bio (Friend's structure) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
               {/* Profile Photo - Circular style from friend's code */}
               <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: ease }}
                  className="relative h-96 w-96 md:h-96 md:w-96 overflow-hidden rounded-full border-4 border-black/5 mb-8 shadow-2xl shadow-black/5"
               >
                  <Image
                     src="/assets/IMG_8045.jpg"
                     alt="Mittal Panchal"
                     fill
                     className="object-cover"
                     style={{ objectPosition: "50% 30%" }} // Kept from original
                  />
               </motion.div>

               {/* Greeting */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: ease }}
               >
                  <h2 className="text-xl md:text-2xl font-medium text-[#0B0B0B]/80 mb-2">
                     Hi, I am <span className="text-[#0B0B0B] font-bold">Mittal Panchal</span> 👋
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-6">
                     AI/ML Engineer
                  </h3>
               </motion.div>

               {/* Bio - Adapted from original text */}
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: ease }}
                  className="text-lg text-[#0B0B0B]/60 leading-relaxed max-w-lg"
               >
                  I am an AI Engineer focused on designing and building scalable intelligent systems.
                  I also design AI driven analysis systems using structured pipelines.
               </motion.p>
            </div>

            {/* RIGHT COLUMN: Headline, Actions (Friend's structure) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
               {/* Main Headline - Adapted from original "Welcome" and statement */}
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: ease }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-[1.1] tracking-tight mb-8 text-[#0B0B0B]"
               >
                  I build <span className="font-serif italic font-normal text-[#0B0B0B]/70">Intelligent</span>{" "}
                  <span className="whitespace-nowrap">AI Systems</span>

               </motion.h1>

               {/* Sub-headline from original */}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: ease }}
                  className="text-xl md:text-2xl text-[#0B0B0B]/70 mb-10 max-w-lg font-serif"
               >
                  Turning complex project into practical real world solutions.
               </motion.p>

               {/* Social Links */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: ease }}
                  className="flex items-center justify-center lg:justify-start gap-4 mb-10"
               >
                  {/* GitHub */}
                  <Link
                     href="https://github.com/MpGitHub1530"
                     target="_blank"
                     className="p-3 bg-[#0B0B0B]/5 border border-[#0B0B0B]/10 rounded-xl hover:bg-[#0B0B0B]/10 transition-all group"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B0B0B]/60 group-hover:text-[#0B0B0B] transition-colors">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                     </svg>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                     href="https://www.linkedin.com/in/mittal-panchal1530/"
                     target="_blank"
                     className="p-3 bg-[#0B0B0B]/5 border border-[#0B0B0B]/10 rounded-xl hover:bg-[#0B0B0B]/10 transition-all group"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B0B0B]/60 group-hover:text-[#0B0B0B] transition-colors">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                     </svg>
                  </Link>

                  {/* Email */}
                  <Link
                     href="mailto:mittupanchal3013@gmail.com"
                     className="p-3 bg-[#0B0B0B]/5 border border-[#0B0B0B]/10 rounded-xl hover:bg-[#0B0B0B]/10 transition-all group"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B0B0B]/60 group-hover:text-[#0B0B0B] transition-colors">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                     </svg>
                  </Link>
               </motion.div>

               {/* Actions - Kept generic "Let's Talk" to match friend's format */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: ease }}
                  className="flex flex-col sm:flex-row items-center gap-6"
               >
                  <Link
                     href="#contact"
                     className="px-8 py-4 bg-[#0B0B0B] text-[#F6F0E6] font-bold rounded-2xl text-lg transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-black/20"
                  >
                     Let&apos;s Talk ↗
                  </Link>

               </motion.div>
            </div>

         </div>
      </section>
   );
};