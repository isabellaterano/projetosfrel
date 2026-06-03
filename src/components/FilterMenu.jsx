const categories = [
  "All",
  "Landing Page",
  "Empresarial",
  "Blog",
  "E-commerce",
  "Portfólio",
  "Agendamento",
];

const FilterMenu = ({ filter, setFilter }) => {
  return (
    <div className="w-full flex justify-center mb-16 px-4">
      <div className="flex flex-wrap justify-center gap-2.5 max-w-6xl">
        {categories.map((category) => {
          const isActive = filter === category;

          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold
                border transition-all duration-300 select-none cursor-pointer
                ${
                  isActive
                    ? "bg-white text-black border-white shadow-xl shadow-white/5"
                    : "bg-neutral-900/40 text-neutral-400 border-neutral-800/80 hover:border-neutral-500 hover:text-white hover:bg-neutral-900"
                }
              `}
            >
              <span className="relative z-10 block">
                {category === "All" ? "Todos os Projetos" : category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterMenu;
