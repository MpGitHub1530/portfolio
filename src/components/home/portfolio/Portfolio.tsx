"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio.data"
import { ProjectDetails } from "./ProjectDetails"

export const Portfolio = () => {
  return (
    <section id="projects" className="w-full bg-[#FAF7F2] scroll-mt-24">
      <div className="w-full mx-auto pl-6 pr-12 sm:pl-8 sm:pr-20 py-24">



        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <h2 className="leading-[0.92] font-semibold text-[#141414] text-[42px] sm:text-[72px] md:text-[92px]">
            Projects that
            <br />
             Spark a
             <br />
             Conversation
              </h2>

            <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.10em] text-gray-700 leading-relaxed">
              Open a project to view it on GitHub.
            </p>
          </motion.div>

          <div className="lg:col-span-8 relative pl-6">
           {/* vertical divider */}
       <span className="absolute left-0 top-0 h-[102%] w-px bg-black/20" />



            <div className="grid gap-10 md:grid-cols-3">
              {portfolioData.slice(0, 3).map((p) => {
                const description =
                  "description" in p ? (p as { description?: string }).description ?? "" : ""
                const image = "image" in p ? (p as { image?: string }).image ?? "" : ""

                return (
                  <ProjectDetails
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    image={image}
                    description={description}
                    link={p.link}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
