
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Image } from "lucide-react";

const projects = [
  {
    title: "Creative Web Design",
    description: "A visually rich web experience blending branding, animation, and accessibility.",
    image: "/photo-1488590528505-98d2b5aba04b.jpg",
  },
  {
    title: "Interactive Dashboard",
    description: "A data-driven dashboard with elegant UI and smooth transitions.",
    image: "/photo-1518770660439-4636190af475.jpg",
  },
  {
    title: "Tech Blog Platform",
    description: "A modern content platform featuring beautiful typography and dark mode.",
    image: "/photo-1461749280684-dccba630e2f6.jpg",
  },
  {
    title: "Matrix Visualizer",
    description: "A movie-inspired interactive data visualiser and coding portfolio.",
    image: "/photo-1526374965328-7f61d4dc18c5.jpg",
  },
  {
    title: "Minimalist Landing Page",
    description: "Super clean, responsive landing page using bold color blocking.",
    image: "/photo-1486718448742-163732cd1544.jpg",
  },
  {
    title: "Team Collab Suite",
    description: "Real-time team workflow tools inspired by next-gen workplace design.",
    image: "/photo-1605810230434-7631ac76ec81.jpg",
  },
];

const imgStyles =
  "object-cover w-full h-48 rounded-t-lg group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300";

const Portfolio = () => (
  <div className="container max-w-6xl pt-24 pb-12 min-h-[60vh]">
    <h2 className="text-4xl font-bold text-primary mb-8 animate-fade-in">Portfolio</h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, idx) => (
        <Card
          key={idx}
          className="hover:shadow-2xl group transition-shadow duration-300 hover:border-primary animate-fade-in"
          style={{ animationDelay: `${100 * idx}ms` }}
        >
          <div className="relative">
            {/* Fallback icon if image fails */}
            <img
              src={proj.image}
              alt={proj.title}
              className={imgStyles}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.innerHTML += `<div class='flex items-center justify-center w-full h-48 bg-muted rounded-t-lg'><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14m18 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0V5M3 19V5m0 14h18" /></svg></div>`;
                }
              }}
              loading="lazy"
            />
          </div>
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-colors">{proj.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{proj.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="flex justify-center mt-12">
      <span className="text-muted-foreground text-lg animate-fade-in delay-300">More projects coming soon...</span>
    </div>
  </div>
);

export default Portfolio;

