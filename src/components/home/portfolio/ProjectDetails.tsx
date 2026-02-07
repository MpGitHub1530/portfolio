"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectDetailsProps {
  id: number
  title: string
  image: string
  description: string
  link: string
}

const pickColor = (id: number) => {
  if (id % 4 === 1) return "#2B1B3B"
  if (id % 4 === 2) return "#C86B3C"
  if (id % 4 === 3) return "#ceb98d"
  return "#3A3A3A"
}

export const ProjectDetails = ({ id, title, link }: ProjectDetailsProps) => {
  const bg = pickColor(id)

  return (
    <Link href={link} target="_blank" className="group block">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[560px] w-full min-w-[320px] md:min-w-[360px] lg:min-w-[420px] overflow-hidden rounded-none"
        style={{ backgroundColor: bg }}
      >
        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

        <div className="absolute bottom-8 left-6 right-6">
          <h3 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
            {title}
          </h3>

        <span className="text-3xl text-white leading-non">
          ↗
         </span>
        
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.10em] text-white/75">
            View on GitHub 
          </p>
        </div>

      </motion.article>
    </Link>
  )
}
