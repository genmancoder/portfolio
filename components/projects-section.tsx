"use client";

const projectCategories = [
  {
    category: "KamAI",
    description: "AI-powered EMR suite for healthcare providers. Features intelligent patient data management and predictive analytics.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Svelte",
    ],
  },
  {
    category: "Shopify Alternative View App",
    description: "A Shopify app that provides alternative product views and enhanced customization options for online stores.",
    skills: ["ReactJS", "Liquid", "Context API", "Prisma", "Firebase"],
  },
  {
    category: "Kyuu.ai",
    description: "A platform for managing Queue Management Systems (QMS) with real-time analytics and customer engagement features.",
    skills: ["NextJs", "TailwindCSS", "Jotai", "Turborepo", "Git", "Docker"],
  },
  {
    category: "TriFare",
    description: "A ride-sharing application that connects drivers and passengers with a focus on safety and reliability.",
    skills: [
      "NextJs",
      "Firebase",
      "Google Maps API",
      "TailwindCSS",
      "Context API",
    ],
  },
];

export default function ProjectSection() {
  return (
    <section
      id="skills"
      className="py-4 sm:py-4 px-4 sm:px-4 lg:px-8 border border-border rounded-md mb-2 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-5 sm:mb-5">
          <h2 className="text-base sm:text-base font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Collection of personal and open-source projects showcasing my skills
            and expertise in frontend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
          {projectCategories.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-lg p-4 sm:p-4"
            >
              <h3 className="text-sm sm:text-sm font-bold mb-2 text-foreground">
                {project.category}
              </h3>
                <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (                                    
                    <span
                      key={skill}
                      className="px-3 sm:px-3 py-1 sm:py-1 bg-white/5 border border-white/30 text-white rounded-lg font-medium text-sm sm:text-sm hover:bg-white/10 hover:border-white/50 transition-colors duration-200"
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
  );
}
