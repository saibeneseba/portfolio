"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo decorativo con gradiente radial */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge de status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Disponible para nuevas oportunidades
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Construyo interfaces web con{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              React, TypeScript
            </span>{" "}
            y atención al detalle
          </h1>

          {/* Sub-headline / tagline */}
          <p className="text-base md:text-lg text-muted-foreground font-medium tracking-wide">
            Full Stack Developer Jr
            <span className="mx-2 text-border">·</span>
            React
            <span className="mx-2 text-border">·</span>
            TypeScript
            <span className="mx-2 text-border">·</span>
            Java
            <span className="mx-2 text-border">·</span>
            Spring Boot
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80">
            Egresado del Certified Tech Developer — Digital House
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                Ver proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#about">
                <User className="mr-2 h-4 w-4" />
                  Sobre mí
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}