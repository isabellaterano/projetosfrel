import { useState } from "react";
import ProjectList from "./components/ProjectList";
import FilterMenu from "./components/FilterMenu";
import projectsData from "./data/projectsData";

function App() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.type.includes(filter));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-15 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
          />
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            Design estratégico. <br className="hidden md:block" />
            Alta performance. <br className="hidden md:block" />
            Conversão real.
          </h1>

          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            Sou desenvolvedora web especialista em criar e gerenciar
            ecossistemas digitais de alto padrão. Unindo a precisão do código à
            flexibilidade de plataformas como WordPress e Wix, ofereço soluções
            completas: desde o desenvolvimento do zero até a manutenção técnica,
            otimização de velocidade, segurança e melhorias contínuas para
            manter sua presença digital rápida e altamente lucrativa.
          </p>
        </section>

        {/* Filter Menu */}
        <div className="mb-12">
          <FilterMenu filter={filter} setFilter={setFilter} />
        </div>

        {/* Projects Grid */}
        <main>
          <ProjectList projects={filteredProjects} />
        </main>

        {/* Footer Minimalista */}
        <footer className="mt-32 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs tracking-wider uppercase font-mono">
            &copy; {new Date().getFullYear()} &mdash; Engenharia Web & Soluções
            Digitais
          </p>
          <p className="text-neutral-500 text-xs tracking-widest uppercase font-mono">
            Estratégia &bull; Design &bull; Código
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
