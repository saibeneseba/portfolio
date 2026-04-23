import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactMethods = [
  {
    label: "Email",
    value: "saibeneseba@gmail.com",
    href: "mailto:saibeneseba@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saibeneseba",
    href: "https://linkedin.com/in/saibeneseba",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/saibeneseba",
    href: "https://github.com/saibeneseba",
    icon: FaGithub,
    external: true,
  },
  {
    label: "CV en PDF",
    value: "Descargar curriculum",
    href: "/Saibene_Sebastian_CV.pdf",
    icon: FileDown,
    external: false,
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Kicker + título */}
          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              ¿Trabajamos juntos?
            </h2>
          </div>

          {/* Bajada */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Estoy en búsqueda activa de mi primer trabajo como desarrollador.
            Si tenés una posición Full Stack Jr o Frontend Jr, escribime por
            cualquiera de estos canales.
          </p>

          {/* Grid de métodos de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  download={method.download}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors h-full">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-0.5">
                          {method.label}
                        </p>
                        <p className="text-base font-medium truncate">
                          {method.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Ubicación */}
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Buenos Aires, Argentina · Remoto, híbrido o presencial CABA/GBA
          </p>
        </div>
      </div>
    </section>
  );
}