import AboutSkills from "@/components/AboutPageSkills";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pt-24 text-white">
      {/* About Me */}
      <h1 className="text-4xl font-semibold font-serif mb-8">About Me</h1>

      <p className="text-white/70 leading-8 text-lg mb-6">
        I’m a passionate Full-Stack MERN Developer, dedicated to building
        intuitive, high-performance web applications that make an impact. I
        enjoy turning concepts into production-ready solutions, whether it’s
        crafting smooth, responsive interfaces or designing robust backend
        systems.
      </p>

      <p className="text-white/70 leading-8 text-lg mb-14">
        My approach is user-focused and efficiency-driven—I write clean,
        maintainable code while ensuring every project delivers a seamless and
        engaging experience. With a strong eye for UI/UX design, I bridge the
        gap between functionality and aesthetics, creating solutions that are
        both technically solid and visually compelling.
      </p>

      {/* Philosophy */}
      <h2 className="text-3xl font-semibold font-serif mb-8">My Philosophy</h2>

      <p className="text-white/70 leading-8 text-lg mb-6">
        I believe in continuous learning and thoughtful problem-solving.
        Exploring new technologies and frameworks keeps me sharp, while
        understanding user behavior helps me craft intuitive experiences. Every
        project I take on reflects a commitment to quality, innovation, and
        long-term maintainability.
      </p>

      <p className="text-white/70 leading-8 text-lg">
        For me, development isn’t just about writing code—it’s about creating
        meaningful digital products that empower users, solve real problems, and
        stand the test of time.
      </p>
      <p className="text-white/70 leading-8 text-lg">
        I’m always open to collaborations, freelance projects, and exciting
        opportunities in web development. Let’s connect and build something
        impactful!
      </p>
      <AboutSkills />
      <div>
        <div>
          <h2 className="text-3xl font-semibold font-serif mb-8">
            Contact Details
          </h2>
        </div>
        <Contact />
      </div>
    </section>
  );
}
