import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Grid de 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mb-10">
            {/* Columna izquierda: marca */}
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">Sebastián Saibene</p>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer Jr · Buenos Aires, Argentina
                </p>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Construyendo productos web con foco en Frontend. Abierto a
                nuevas oportunidades.
              </p>

              {/* Iconos sociales */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Columna derecha: navegación */}
            <div className="md:flex md:justify-end">
              <div>
                <p className="text-sm font-medium mb-4 text-foreground">
                  Navegación
                </p>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="pt-8 border-t border-border/50 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Sebastián Saibene. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span>Built with</span>
              <SiNextdotjs className="h-3.5 w-3.5" aria-label="Next.js" />
              <span>Next.js</span>
              <span className="mx-0.5">+</span>
              <SiTailwindcss className="h-3.5 w-3.5" aria-label="Tailwind CSS" />
              <span>Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}