const skills = [
  { name: "HTML", icon: "🌐", level: 95 },
  { name: "CSS", icon: "🎨", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 92 },
  { name: "React", icon: "⚛️", level: 90 },
  { name: "Next.js", icon: "▲", level: 88 },
  { name: "Node.js", icon: "🟢", level: 82 },
  { name: "MongoDB", icon: "🍃", level: 78 },
  { name: "Tailwind CSS", icon: "💨", level: 93 },
];

const categories = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#07071a] text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-700/15 blur-[100px]" />

      {/* Grid overlay */}
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
          What I work with
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Skill cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 flex flex-col items-center gap-2 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-xs text-purple-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 flex flex-wrap gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-4 hover:border-purple-500/30 transition-colors duration-300"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
                {cat.label}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}