export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#07071a] text-white overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-700/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-800/15 blur-[100px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">
            Dynamic Web Magic with Next.js
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl">
          Transforming Concepts into{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Seamless User Experiences
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-gray-400 text-lg sm:text-xl leading-8 max-w-2xl mb-4">
          Hi, I'm <span className="text-white font-semibold">Aman Vyas</span>, a
          Full Stack Developer based in India. I build modern, responsive and
          scalable web applications using React, Next.js and Node.js.
        </p>

        {/* Role */}
        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          Frontend &amp; Full Stack Developer
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 items-center">

          {/* Show work */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Show my work
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

          {/* Resume */}
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Download Resume
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-5 hover:border-purple-500/30 transition-colors duration-300">
            <p className="text-white font-semibold text-sm mb-1">
              🌍 Flexible with time zones
            </p>
            <p className="text-gray-400 text-xs leading-5">
              Available for remote collaboration across time zones worldwide.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-5 hover:border-purple-500/30 transition-colors duration-300">
            <p className="text-white font-semibold text-sm mb-1">
              ⚡ React & Next.js Expert
            </p>
            <p className="text-gray-400 text-xs leading-5">
              Building performant, SEO-friendly full-stack applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}