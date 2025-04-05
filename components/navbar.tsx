"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-xl font-bold text-primary">
          🏗️ BuildPro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button and Mode Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden shadow-md px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
