
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-xl border-b border-border z-50">
      <div className="container max-w-5xl flex items-center justify-between h-16">
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-primary hover:scale-105 transition-transform"
        >
          BUDDHA SRI THRAILOKYA MANVITHA
        </Link>
        <div className="flex items-center gap-2">
          <ul className="flex gap-3 text-lg font-medium">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-2 py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                  ${location.pathname === link.to ? "text-primary font-semibold after:scale-x-100" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
