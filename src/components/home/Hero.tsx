"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const ease = [0.22, 1, 0.36, 1] as const;
export const Hero = () => {
 return (
<section id="hero" className="relative min-h-screen w-full bg-[#F6F0E6] text-[#0B0B0B]">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid min-h-screen items-center gap-20 pt-28 pb-16 lg:grid-cols-12 lg:pt-28">
<div className="lg:col-span-7">
<motion.h1
   initial={{ opacity: 0, y: 12 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8, ease}}
   className="font-serif text-7xl leading-[0.9] tracking-[-0.03em] sm:text-8xl lg:text-9xl"
>
   Welcome
</motion.h1>
<motion.h2
   initial={{ opacity: 0, y: 12 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8, delay: 0.06, ease }}
   className="mt-8 font-serif text-7xl leading-[0.9] tracking-[-0.03em] sm:text-8xl lg:text-9xl"
>
   Hi, I am Mittal Panchal
<br />
</motion.h2>
<motion.p
   initial={{ opacity: 0, y: 10 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7, delay: 0.14, ease}}
   className="mt-12 max-w-md font-serif text-2xl leading-[1.08] sm:text-3xl"

>
  I build Intelligent AI systems
    <br />
   that turn complex data into
    <br />
   practical real world solutions.
</motion.p>
<motion.p
   initial={{ opacity: 0, y: 10 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7, delay: 0.22, ease }}
   className="mt-10 max-w-md text-[11px] font-semibold leading-relaxed tracking-[0.09em] uppercase text-black/80">
   I am an AI Engineer focused on designing and building scalable intelligent systems.
   I also design AI driven analysis systems using structured pipelines.
</motion.p>
</div>
<div className="relative lg:col-span-5">
<motion.div
   initial={{ opacity: 0, y: 10 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7, ease}}
   className="relative ml-auto lg:translate-x-24"
>
<motion.div
     initial={{ scale: 1.18 }}
     animate={{ scale: 1 }}
     transition={{ duration: 1.1, ease }}
     className="relative h-[1100px] w-[720px] overflow-hidden bg-white/20"
     style={{
       borderTopLeftRadius: "999px",
       borderTopRightRadius: "999px",
       borderBottomLeftRadius: "0px",
       borderBottomRightRadius: "0px",
     }}
>
<Image
       src="/assets/IMG_8045.jpg"
       alt="Portrait"
       fill
       priority
       quality={100}
       sizes="(min-width: 1024px) 560px, 92vw"
       className="object-cover"
       style={{ objectPosition: "50% 30%" }}
     />
</motion.div>
</motion.div>
</div>
</div>
</div>
</section>
 );
};