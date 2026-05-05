const categories = [
  "All",
  "Landing Page",
  "Empresarial",
  "Blog",
  "E-commerce",
  "Portfólio",
  "Agendamento",
  "Outros",
];

const FilterMenu = ({ filter, setFilter }) => {
  return (
    <div className="w-full flex justify-center mb-14 px-4">
      <div className="flex flex-wrap justify-center gap-3 max-w-6xl">
        {categories.map((category) => {
          const isActive = filter === category;

          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                relative group px-5 py-3 rounded-2xl font-medium text-sm md:text-base
                border backdrop-blur-sm transition-all duration-300
                transform hover:scale-105 hover:-translate-y-1
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white border-transparent shadow-lg shadow-indigo-500/30"
                    : "bg-white/80 text-zinc-700 border-zinc-300 hover:border-indigo-400 hover:bg-indigo-50"
                }
              `}
            >
              <span className="flex items-center gap-2 relative z-10">
                {category === "All" ? "Todos os Projetos" : category}
              </span>

              {!isActive && (
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterMenu;
