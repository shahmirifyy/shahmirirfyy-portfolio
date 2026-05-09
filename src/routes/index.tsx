import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Stats } from "@/components/portfolio/Stats";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shahmir Ali — Senior Full Stack Developer" },
      { name: "description", content: "Portfolio of Shahmir Ali — Senior Full Stack Developer specializing in Next.js, NestJS, PostgreSQL, Prisma and real-time systems." },
      { property: "og:title", content: "Shahmir Ali — Senior Full Stack Developer" },
      { property: "og:description", content: "Building scalable web apps, modern UIs and powerful backend systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen dark text-foreground antialiased">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
