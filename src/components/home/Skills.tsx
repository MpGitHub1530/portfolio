"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { skills } from "@/data/skills.data"

export const Skills = () => {
  return (
    <section id="skills" className="bg-[#FAF7F2] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">


        <div className="max-w-3xl">

          <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
          >
          <h2 className="mt-6 leading-[0.95] font-semibold text-[#141414] text-[42px] sm:text-[72px] md:text-[92px]">
            Tools I Work With
            <br />
          </h2>

          <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.10em] text-gray-700 leading-relaxed">
              Technologies I use to design build and ship production ready systems
          </p>
          </motion.div>
        </div>

        <ul className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-10 gap-y-14">
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  amount: 0.25 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="group flex flex-col items-center gap-4 select-none"
            >
              <div className="relative h-14 w-14 flex items-center justify-center opacity-85 group-hover:opacity-100 transition">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={56}
                  height={56}
                  draggable={false}
                  className="opacity-90"
                />

                <div
                  className="
                    absolute -top-3 -right-4 rounded-full bg-[#141414] text-[#FAF7F2]
                    text-[11px] px-2 py-1 pointer-events-none
                    opacity-0 translate-y-1 scale-95
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                    transition duration-200 ease-out
                  "
                >
                  {skill.level}%
                </div>
              </div>

              <span className="text-sm text-gray-600 group-hover:text-[#141414] transition">
                {skill.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
