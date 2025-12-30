"use client";

import { Github, Linkedin, Mail, Rss } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[4-rem] flex items-center py-2 sm:py-2 px-2 sm:px-2 lg:px-6 border border-border rounded-md mb-2 bg-card/50 mt-2">
      {/* Background grid pattern */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 sm:space-y-8">
              {/* Title with accent */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-balance text-center">
                  Full Stack <span className="text-foreground"> Web Developer</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-base text-muted-foreground leading-relaxed max-w-lg text-center">
                A web developer specializing in React, TypeScript, and modern
                web technologies. I create accessible, performant, and beautiful
                user interfaces that users love.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col justify-center sm:flex-row gap-4 sm:gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-card hover:bg-secondary/30 font-medium rounded-lg transition-colors duration-200 border border-border text-foreground"
                >
                  View my work
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-card hover:bg-card border border-border text-foreground font-medium rounded-lg transition-colors duration-200"
                >
                  About me
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4 justify-center">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-foreground" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-foreground" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="p-3 rounded-lg bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-foreground" />
                </a>
                <a
                  href="#blog"
                  className="p-3 rounded-lg bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-colors duration-200"
                  aria-label="RSS Feed"
                >
                  <Rss size={20} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-end items-end order-first lg:order-last">
            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden border border-border bg-card">
              <Image
                src="/genman.png"
                alt="Alex Chen - Frontend Engineer"
                width={350}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">💻</div>
                  <p className="text-muted-foreground text-sm">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
