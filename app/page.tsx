"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import FooterSection from "@/components/footer-section";
import ProjectSection from "@/components/projects-section";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(isDarkMode);
    applyTheme(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}
