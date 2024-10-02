const FilterMenu = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center mb-8">
      {[
        "All",
        "Landing Page",
        "Multi-página",
        "Blog",
        "E-commerce",
        "Portfólio",
        "Outros",
      ].map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`mx-2 px-4 py-2 rounded-full ${
            filter === category ? "bg-indigo-700 text-white" : "bg-gray-200"
          } hover:bg-indigo-600 hover:text-white transition`}
        >
          {category === "All"
            ? "Todos os Projetos"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterMenu;
