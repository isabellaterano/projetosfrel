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
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white font-roboto">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/logo.png"
            alt="logo"
            className="w-24 md:w-28 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
            Portfólio Profissional
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Projetos desenvolvidos com foco em performance, design e conversão
          </h1>

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Confira alguns dos projetos que desenvolvi ao longo dos anos,
            incluindo landing pages, páginas de vendas, sites institucionais,
            empresariais, portfólios, blogs e aplicações web.
            <br className="hidden md:block" />
            Atuo desde o planejamento estratégico até o desenvolvimento,
            otimização, redesign, manutenção e melhorias técnicas, sempre
            priorizando usabilidade, experiência do usuário e alta performance.
          </p>
        </section>

        {/* Filter Menu */}
        <FilterMenu filter={filter} setFilter={setFilter} />

        {/* Projects */}
        <ProjectList projects={filteredProjects} />

        {/* Footer */}
        <footer className="mt-24 text-center border-t border-white/10 pt-8">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Portfólio Profissional — IT
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
