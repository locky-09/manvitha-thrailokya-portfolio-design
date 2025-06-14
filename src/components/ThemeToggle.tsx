
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 rounded-full p-2 bg-accent hover:bg-primary/80 transition-colors shadow hover:scale-110"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <Moon className="text-primary" /> : <Sun className="text-primary" />}
    </button>
  );
}
