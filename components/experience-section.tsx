"use client"

import { Globe, Zap, Lock, Code } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Web Developer",
    company: "Camillians Home Health Services",
    period: "2023 - Present",
    icon: Globe,
    description:
      "Led the development of customer-facing and backend EMR/EHR suite using React and Next.js. Improved application performance by 40% through optimization and lazy loading.",
    highlights: ["React & Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Orth Enterprises",
    period: "2019 - 2023",
    icon: Zap,
    description:
      "Built responsive web applications and maintained design systems. Mentored junior developers and established frontend best practices.",
    highlights: ["PHP", "ReactJS", "Shopify", "Liquid"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    icon: Lock,
    description:
      "Developed custom web solutions for enterprise clients. Implemented real-time features and optimized API integrations.",
    highlights: ["Full-stack Development", "APIs", "Database Design"],
  },
  {
    title: "Junior Developer",
    company: "StartupXYZ",
    period: "2018 - 2019",
    icon: Code,
    description:
      "Started career building web interfaces with HTML, CSS, and JavaScript. Learned version control and collaborative development.",
    highlights: ["JavaScript", "Git", "Web Fundamentals"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-2 sm:py-2 px-4 sm:px-6 lg:px-8 bg-card/50 border border-border rounded-md mb-2">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-base sm:text-base font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            5+ years building frontend solutions for startups and enterprises. Specialized in React, performance
            optimization, and developer experience.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-0 relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-muted opacity-20" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div key={index} className="relative pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-0 top-0 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-20 sm:ml-28 pt-2">
                  <div className="mb-2">
                    <h3 className="text-sm sm:text-sm font-bold text-foreground">{exp.title}</h3>
                    <p className="text-accent text-sm sm:text-sm font-medium">
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs sm:text-sm bg-accent/10 text-accent rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
