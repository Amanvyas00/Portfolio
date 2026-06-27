export default function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
  ];

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#07071a] text-white overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full bg-indigo-700/15 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Eyebrow label */}
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-400 mb-4">
          Get to know me
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Divider */}
        <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-10" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left — bio */}
          <div className="space-y-5">
            <p className="text-gray-300 text-lg leading-8">
              I'm <span className="text-white font-semibold">Sanidhya</span>, a
              Full Stack Developer based in India, specialising in building
              seamless, performant web experiences with modern technologies.
            </p>

            <p className="text-gray-400 text-base leading-7">
              I enjoy turning complex problems into clean, intuitive products.
              Whether it's architecting a scalable backend or crafting a
              pixel-perfect UI, I bring the same level of care and attention
              to every layer of the stack.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full border border-purple-500/50 text-sm font-medium text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
            >
              Let's work together
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right — stats + skills */}
          <div className="space-y-8">
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 text-center hover:border-purple-500/40 transition-colors duration-300"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 leading-4">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}