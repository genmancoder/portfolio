"use client"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"],
  },
  {
    category: "State Management",
    skills: ["Redux", "Zustand", "Context API", "Jotai", "Recoil"],
  },
  {
    category: "Tools & Build",
    skills: ["Webpack", "Vite", "Turbopack", "Turborepo", "Git", "Docker"],
  },
  {
    category: "Specializations",
    skills: ["Web Performance", "Accessibility (A11y)", "SEO", "Responsive Design", "Component Architecture"],
  },
]

export default function SkillsSection() {
  return (
    <section id="projects" className="py-4 sm:py-4 px-4 sm:px-4 lg:px-8 border border-border rounded-md mb-2 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-5 sm:mb-5">
          <h2 className="text-base sm:text-base font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Core competencies across modern frontend development, tooling, and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card/50 border border-border rounded-lg p-4 sm:p-4">
              <h3 className="text-sm sm:text-sm font-bold mb-2 text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-3 py-2 sm:py-3 bg-accent/5 border border-accent/30 text-accent rounded-lg font-medium text-sm sm:text-sm hover:bg-accent/10 hover:border-accent/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
