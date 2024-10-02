import { useState } from "react";
import ProjectList from "./components/ProjectList";
import FilterMenu from "./components/FilterMenu";
import projectsData from "./data/projectsData";

function App() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.type === filter
  );

  return (
    <div className="container mx-auto p-8 px-20 bg-neutral-900 min-h-screen font-roboto">
      <img src="/logo.png" alt="logo" className="w-20 mx-auto mb-8" />
      <h1 className="text-2xl font-bold my-8 mb-11 text-neutral-100 text-center max-w-screen-xl mx-auto">
        Explore uma seleção dos diversos projetos que criei ao longo dos anos,
        incluindo páginas de vendas, landing pages, sites institucionais,
        multi-página, portfólios, blogs, aplicativos da web e muito mais.
      </h1>
      <FilterMenu filter={filter} setFilter={setFilter} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
