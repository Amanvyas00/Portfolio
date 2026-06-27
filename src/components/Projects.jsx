import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#07071a] text-white overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-indigo-700/15 blur-[100px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-400 mb-4">
          What I've built
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <span className="text-xs font-semibold tracking-widest text-gray-600 mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6 mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..." />
                  </svg>
                  GitHub
                </a>

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>

                {/* Arrow */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-purple-500/40 text-sm font-medium text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            View all on GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425..." />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}