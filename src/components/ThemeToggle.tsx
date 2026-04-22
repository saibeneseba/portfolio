"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

// Hook que devuelve true solo después del mount en cliente.
// Usa useSyncExternalStore que es la API recomendada para sincronizar
// con sistemas externos (window, localStorage, etc.) y evita warnings
// del React Compiler sobre setState dentro de useEffect.
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {}, // subscribe: no necesitamos escuchar cambios
    () => true,     // getSnapshot cliente: ya estamos montados
    () => false     // getServerSnapshot: en SSR no estamos montados
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Cambiar tema" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}