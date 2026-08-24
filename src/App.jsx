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
    <div className="min-h-screen bg-[#080808] text-white antialiased selection:bg-white selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">

        {/* Header / Logo */}
        <header className="flex justify-center mb-6 md:mb-8">
          <img
            src="/logo.png"
            alt="Isabella T. — Desenvolvimento Web"
            className="h-14 md:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
          />
        </header>

        {/* Hero */}
        <section className="text-center max-w-5xl mx-auto mb-24 md:mb-28">
          <span className="inline-block mb-6 text-[11px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
            Desenvolvimento Web & Digital
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.05] mb-8 bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent">
            Sites que valorizam
            <br className="hidden md:block" />
            o seu negócio.
          </h1>

          <p className="text-neutral-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Crio sites profissionais, rápidos e personalizados. Desde
            projetos em <strong className="text-neutral-200 font-normal">WordPress e Wix</strong>,
            fáceis de gerenciar no dia a dia, até desenvolvimentos sob medida
            com <strong className="text-neutral-200 font-normal">HTML, CSS, JavaScript e React</strong>.
          </p>

         
        </section>

        

        {/* Portfolio */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-600 font-medium mb-3">
                Projetos selecionados
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Trabalhos
              </h2>
            </div>

            <p className="text-sm text-neutral-500 max-w-sm md:text-right leading-relaxed">
              Uma seleção de projetos desenvolvidos para diferentes objetivos,
              negócios e plataformas.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <FilterMenu
              filter={filter}
              setFilter={setFilter}
            />
          </div>

          {/* Projects */}
          <main>
            <ProjectList projects={filteredProjects} />
          </main>
        </section>

      
        {/* Services */}
        <section className="max-w-5xl mx-auto mb-28 md:mb-32">
           <p className="text-neutral-600 text-sm mt-20 mb-8">
            A tecnologia é escolhida de acordo com o projeto, não o contrário.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">

            {/* WordPress & Wix */}
            <div className="bg-[#080808] p-8 md:p-9">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                01
              </span>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                WordPress & Wix
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed">
                Sites profissionais e fáceis de gerenciar, para que você possa
                atualizar conteúdos, imagens e informações sem depender de
                programação.
              </p>
            </div>

            {/* Custom Development */}
            <div className="bg-[#080808] p-8 md:p-9">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                02
              </span>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                Desenvolvimento sob medida
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed">
                Projetos personalizados utilizando HTML, CSS, JavaScript e
                React quando o negócio exige mais liberdade, funcionalidades
                específicas ou uma experiência diferenciada.
              </p>
            </div>

            {/* Maintenance */}
            <div className="bg-[#080808] p-8 md:p-9">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                03
              </span>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                Manutenção & evolução
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed">
                Suporte contínuo, atualizações, correções, melhorias de
                performance e evolução do site conforme as necessidades do
                negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-700 text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono">
            © {new Date().getFullYear()} — Isabella T.
          </p>

          <p className="text-neutral-700 text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono">
            Estratégia · Design · Código
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

