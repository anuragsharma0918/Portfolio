export default function ProjectShowcase() {
  const projects = [
    {
      title: "WanderLust",
      description:
        "wanderlust is a full-stack accommodation booking platform that allows users to explore, list, and book stays with a seamless and secure experience. Built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB, wanderlust combines robust backend services with a user-friendly frontend.",
      image: "/assets/Wanderlust.png",
      tags: [
        "Html",
        "CSS",
        "JavaScript",
        "Express",
        "MongoDB",
        "Sessions",
        "Flash",
        "Passport",
        "Cloudinary",
        "Ejs",
      ],
    },
    {
      title: "Zerodha",
      description:
        "A production-oriented Zerodha landing-page clone engineered for high-performance UI replication, responsive layouts, and modular code scalability.",
      image: "/assets/zerodha.png",
      tags: [
        "Next.js",
        "MongoDB",
        "Tailwind",
        "ShadCN",
        "React",
        "Node.js",
        "Express",
      ],
    },
  ];

  return (
    <section className="w-full py-10 px-10 flex flex-col items-center">
      <h2 className="text-3xl font-semibold  text-left w-11/12 lg:w-11/12 mb-10 ">
        Code & Creations
      </h2>

      <div className="grid md:grid-cols-2 gap-20 w-11/12 lg:w-11/12 pt-4">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl bg-[#0d0d0d] border border-white/10 backdrop-blur-xl transition-all duration-500"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
              style={{ backgroundImage: `url(${p.image})` }}
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 opacity-80" />

            {/* Text Content */}
            <div className="relative p-8 flex flex-col justify-end h-[350px]">
              <h3 className="text-3xl font-semibold text-white mb-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {p.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-75">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
