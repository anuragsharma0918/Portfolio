"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <section className="px-6 md:px-20 pt-15">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        From Concept to Code, Seamlessly.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/70 max-w-2xl mb-14"
      >
        Whether you want to collaborate, discuss an idea, or just connect — I’m
        always open to meaningful conversations that move innovation forward.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT PANEL — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                     shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          {/* INFO BLOCKS */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-xl text-white/60" />
              <p className="text-white/80">anuragkum0918@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-xl text-white/60" />
              <p className="text-white/80">+91 6299660610 </p>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-xl text-white/60" />
              <p className="text-white/80">Delhi , India</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-4">Connect with me</h3>
            <Contact />
          </div>
        </motion.div>

        {/* RIGHT PANEL — CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                     shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <h2 className="text-2xl font-semibold mb-6">Let’s Connect</h2>

          {/* FORM FIELDS */}
          <div className="space-y-6">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/10
                           text-white outline-none focus:border-purple-400 
                           focus:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/10
                           text-white outline-none focus:border-purple-400 
                           focus:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                rows={4}
                className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/10
                           text-white outline-none resize-none
                           focus:border-purple-400 
                           focus:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* CTA BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 
                         p-3 rounded-xl font-medium 
                         bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500
                         hover:opacity-90 transition text-white"
            >
              Send Message <FiSend />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
