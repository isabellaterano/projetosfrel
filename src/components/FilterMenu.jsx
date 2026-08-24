const categories = [
  "All",
  "Landing Page",
  "Empresarial",
  "E-commerce",
  "Blog",
  "Portfólio",
  "Agendamento",
  
];

const FilterMenu = ({ filter, setFilter }) => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="flex flex-wrap justify-center gap-2 max-w-6xl">
        {categories.map((category) => {
          const isActive = filter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={isActive}
              className={`
                px-4 py-2.5 rounded-full
                text-[10px] md:text-[11px]
                uppercase tracking-[0.16em]
                font-medium
                border
                transition-all duration-300
                select-none
                cursor-pointer
                ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-white"
                }
              `}
            >
              {category === "All" ? "Todos" : category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterMenu;

