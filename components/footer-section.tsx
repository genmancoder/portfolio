"use client";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Svelte",
    ],
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
    skills: [
      "Web Performance",
      "Accessibility (A11y)",
      "SEO",
      "Responsive Design",
      "Component Architecture",
    ],
  },
];

export default function FooterSection() {
  return (
    <section id="skills" className="py-2 sm:py-2 px-4 sm:px-6 lg:px-8 mb-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Footer */}
        <div className="mb-12 sm:mb-16">
          <p className="text-muted-foreground text-center text-sm">
            {" "}
            © 2026 John Ray Paulin. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
