"use client"

import { motion } from "framer-motion"
import React, { type FormEvent, useRef, useState } from "react"
import { sendEmail } from "@/utils"




export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setIsSuccess(false)

    try {
      await sendEmail(formRef.current!)
      setIsSuccess(true)
      formRef.current?.reset()
    } catch (err) {
      if (err instanceof Error) setError(err.message)
      else setError("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#FAF7F2] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm tracking-wide uppercase text-gray-500"
            >
              
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 leading-[0.80] font-semibold text-[#141414] text-[64px] sm:text-[90px] md:text-[120px] lg:text-[150px]"
            >
              Reach me out
              <br />
              
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="mt-10 space-y-6"
            >
              <div>
                <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.10em] text-gray-700 leading-relaxed">
                  Email:
        
                </p>
                <p className="mt-2 text-[18px] text-[#141414]">
                  mittupanchal3013@gmail.com
                </p>
              </div>

              <div>
                <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.10em] text-gray-700 leading-relaxed">
                  Contact number
                </p>
                <p className="mt-2 text-[18px] text-[#141414]">
                  +49 15207707791
                </p>
              </div>

              <div>
                <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.10em] text-gray-700 leading-relaxed">
                  Address
                </p>
                <p className="mt-2 text-[18px] text-[#141414]">
                  Bayern,Germany
                </p>
              </div>
            </motion.div>
          </div>

          <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl lg:ml-auto"
      >
        <div className="space-y-6">
          {/* honeypot for bots */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

    <input
      type="text"
      name="name"
      placeholder="Name"
      required
      className="w-full p-4 bg-transparent border border-black/10 text-[#141414] rounded-[18px] outline-none placeholder:text-gray-500"
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full p-4 bg-transparent border border-black/10 text-[#141414] rounded-[18px] outline-none placeholder:text-gray-500"
    />

    <textarea
      name="message"
      placeholder="Message"
      rows={5}
      required
      className="w-full p-4 bg-transparent border border-black/10 text-[#141414] rounded-[18px] outline-none placeholder:text-gray-500 resize-none"
    />

    <button
      disabled={isLoading}
      type="submit"
      className="w-full p-4 bg-[#141414] text-[#FAF7F2] rounded-[18px] font-medium hover:opacity-90 transition disabled:opacityopacity-60"
    >
      {isLoading ? "Sending" : "Submit"}
    </button>

    {!!error && (
      <p className="text-red-500 text-sm">
        {error}
      </p>
    )}

    {isSuccess && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-4 rounded-[18px] border border-black/10 bg-white px-4 py-3 text-[#141414]"
      >
        Message sent I will reply soon
      </motion.div>
    )}
  </div>
</motion.form>

        </div>
      </div>
    </section>
  )
}
