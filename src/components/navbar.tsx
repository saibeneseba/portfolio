"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saibeneseba",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/saibeneseba",
    icon: FaGithub,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:saibeneseba@gmail.com",
    icon: Mail,
    external: false,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detectar scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link
          href="#home"
          className="text-lg font-bold tracking-tight hover:text-primary transition-colors"
        >
          Sebastián Saibene
        </Link>

        {/* Bloque derecho desktop: links + toggle */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="h-5 w-px bg-border" />
          <ThemeToggle />
        </div>

        {/* Bloque derecho mobile: toggle + hamburguesa */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] p-0 flex flex-col"
            >
              {/* Header del menú */}
              <SheetHeader className="p-6 pb-4 text-left">
                <SheetTitle className="text-base font-semibold">
                  Sebastián Saibene
                </SheetTitle>
                <p className="text-xs text-muted-foreground">
                  Full Stack Developer Jr
                </p>
              </SheetHeader>

              <Separator />

              {/* Links de navegación */}
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Empuja el resto al fondo */}
              <div className="mt-auto">
                <Separator />

                {/* Iconos sociales */}
                <div className="p-6 pb-4">
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                    Encontrame en
                  </p>
                  <div className="flex items-center gap-2">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target={social.external ? "_blank" : undefined}
                          rel={
                            social.external ? "noopener noreferrer" : undefined
                          }
                          aria-label={social.label}
                          className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* CTA grande */}
                <div className="px-6 pb-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="#contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contactame
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}