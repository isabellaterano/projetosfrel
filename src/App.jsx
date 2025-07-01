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
    <div className="container mx-auto p-8 px-20 bg-neutral-900 min-h-screen font-roboto">
      <img src="/logo.png" alt="logo" className="w-20 mx-auto mb-8" />
      <h1 className="text-xl font-bold my-8 mb-11 text-neutral-100 text-center max-w-screen-xl mx-auto">
        Explore uma seleção dos projetos que desenvolvi ao longo dos anos,
        incluindo páginas de vendas, landing pages, sites institucionais,
        empresariais, portfólios, blogs e aplicações web. Atuo desde o
        planejamento até a execução, com foco em usabilidade e experiência do
        usuário. Também realizo ajustes visuais, melhorias de design,
        atualizações técnicas e correções de erros, além de reformulações
        completas para transformar sites em experiências mais eficientes e
        atrativas, utilizando plataformas como WordPress e Wix
      </h1>
      <FilterMenu filter={filter} setFilter={setFilter} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
