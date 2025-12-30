"use client";

import { Menu, Moon, Sun, Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border border-border rounded-md mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className="text-foreground">genman</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-end gap-8">
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* <button
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-muted-foreground" />
            </button> */}
            {/* <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-muted-foreground" />
              ) : (
                <Moon size={20} className="text-muted-foreground" />
              )}
            </button> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a
              href="#experience"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#about"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
