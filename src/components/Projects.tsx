import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  demoUrl?: string;
  repoUrl: string;
  gradient: string;
  accentText: string;
};

const projects: Project[] = [
  {
    title: "Nomad Nook",
    description:
      "Plataforma Full Stack de reserva de alojamientos desarrollada en equipo durante el Certified Tech Developer. Mi rol: Frontend Developer. Construí componentes React del catálogo, página de detalle, sistema de reservas con calendario y panel de administrador.",
    highlights: [
      "Trabajo colaborativo con branching strategy (feature branches, PRs, code reviews)",
      "CI/CD automatizado con GitHub Actions + Vercel",
      "237 commits del equipo",
    ],
    stack: ["React", "Vite", "JavaScript", "CSS", "GitHub Actions", "Vercel"],
    demoUrl: "https://nomad-nook.vercel.app",
    repoUrl: "https://github.com/SleepySunset/NomadNook",
    gradient: "from-violet-500/40 via-purple-500/30 to-fuchsia-500/20",
    accentText: "NN",
  },
  {
    title: "Portfolio Personal",
    description:
      "Este mismo sitio. Construido con Next.js 14 (App Router), TypeScript, Tailwind CSS y componentes de shadcn/ui. Diseño minimalista con animaciones suaves, dark mode y responsive completo.",
    highlights: [
      "Server Components + Client Components de Next.js",
      "Sistema de diseño con variables CSS y paleta oscura",
      "Deploy continuo en Vercel",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    repoUrl: "https://github.com/saibeneseba",
    gradient: "from-blue-500/40 via-cyan-500/30 to-teal-500/20",
    accentText: "SS",
  },
  {
    title: "Clínica Odontológica",
    description:
      "API REST en Java + Spring Boot para gestión de pacientes, odontólogos y turnos. Proyecto grupal Backend del CTD aplicando arquitectura en capas y patrón DTO con ModelMapper. Incluye interfaz Frontend que consume la API.",
    highlights: [
      "Persistencia con Spring Data JPA + H2",
      "Validaciones con Jakarta Validation + logs con Log4j",
      "Interfaz Frontend en HTML/CSS/JS que consume la API",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "H2",
      "ModelMapper",
      "Maven",
    ],
    repoUrl: "https://github.com/saibeneseba/ClinicaOdontologica",
    gradient: "from-orange-500/40 via-red-500/30 to-pink-500/20",
    accentText: "CO",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Proyectos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            En qué estuve trabajando
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  isReversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Card
                  className={`aspect-video relative overflow-hidden border-border/50 bg-gradient-to-br ${project.gradient} group hover:scale-[1.02] transition-transform duration-500`}
                >
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-bold text-foreground/20 tracking-tighter">
                      {project.accentText}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/60 font-mono">
                      {project.title.toLowerCase().replace(/ /g, "-")}
                    </span>
                    <div className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500/60" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                      <span className="h-2 w-2 rounded-full bg-green-500/60" />
                    </div>
                  </div>
                </Card>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.demoUrl && (
                      <Button asChild size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver demo
                        </a>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}