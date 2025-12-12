import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <section className="px-4 sm:px-6 md:px-20 pt-10 ">
      {/* HEADER */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-8">
        From Concept to Code, Seamlessly.
      </h1>

      <p className="text-base sm:text-lg text-white/70 max-w-xl sm:max-w-2xl mb-10 sm:mb-14">
        Whether you want to collaborate, discuss an idea, or just connect — I’m
        always open to meaningful conversations that move innovation forward.
      </p>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* LEFT PANEL */}
        <div
          className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                     shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
            Contact Information
          </h2>

          {/* INFO ITEMS */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <FiMail className="text-lg sm:text-xl text-white/60" />
              <p className="text-white/80 text-sm sm:text-base">
                anuragkum0918@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-lg sm:text-xl text-white/60" />
              <p className="text-white/80 text-sm sm:text-base">
                +91 6299660610
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-lg sm:text-xl text-white/60" />
              <p className="text-white/80 text-sm sm:text-base">Delhi, India</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 sm:mt-10">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Connect with me
            </h3>
            <Contact />
          </div>
        </div>

        {/* RIGHT PANEL — CONTACT FORM */}
        <form
          className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                     shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
            Let’s Connect
          </h2>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <label className="text-xs sm:text-sm text-white/70">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/10
                           text-white outline-none focus:border-purple-400 
                           focus:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-white/70">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/10
                           text-white outline-none focus:border-purple-400 
                           focus:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-white/70">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/10
                           text-white outline-none resize-none
                           focus:border-purple-400 
                           focus:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 
                         p-3 rounded-xl font-medium 
                         bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                         hover:opacity-90 transition text-white"
            >
              Send Message <FiSend />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
