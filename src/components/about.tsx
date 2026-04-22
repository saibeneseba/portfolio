import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";
import { Code2, Server, Database, Wrench } from "lucide-react";

const stackCategories = [
  {
    title: "Frontend",
    icon: Code2,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "Tailwind CSS",
      "React Router",
      "Vite",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "Node.js",
      "Express",
      "REST APIs",
    ],
  },
  {
    title: "Bases de datos",
    icon: Database,
    technologies: ["MySQL", "H2", "SQL", "Bases relacionales"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "JUnit",
      "Maven",
      "npm",
      "Vercel",
      "Chrome DevTools",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Kicker + título */}
          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Sobre mí
            </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                De gestión a código
              </h2>
          </div>

          {/* Historia */}
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
            <p>
              Después de 7+ años en roles de gestión y análisis de datos, decidí
              dedicarme 100% al desarrollo. Completé el{" "}
              <span className="text-foreground font-medium">
                Certified Tech Developer de Digital House
              </span>{" "}
              (1.568 horas, respaldado por Globant y Mercado Libre) y hoy
              construyo productos web full stack con foco en Frontend.
            </p>
            <p>
              Mi fuerte es{" "}
              <span className="text-foreground font-medium">
                React con TypeScript
              </span>
              : me interesa crear interfaces que se sientan rápidas, se vean
              pulidas y funcionen bien en cualquier dispositivo. Del lado del
              backend, trabajo con{" "}
              <span className="text-foreground font-medium">
                Java y Spring Boot
              </span>{" "}
              para diseñar APIs robustas.
            </p>
          </div>

          {/* Stack visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {stackCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className="h-5 w-5 text-primary" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mención sutil a experiencia previa */}
          <p className="text-sm text-muted-foreground/70 italic text-center max-w-2xl mx-auto">
            Antes de programar, trabajé en gestión operativa y análisis
            contable. Esa etapa me dio una mirada de calidad, atención al
            detalle y resolución sistemática que aplico todos los días al
            código.
          </p>
        </div>
      </div>
    </section>
  );
}