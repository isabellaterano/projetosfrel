import { ArrowUpRight, X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

const ProjectList = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Fecha o modal com ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div>
      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500 flex flex-col"
          >
            {/* Imagem */}
            <div
              className="relative overflow-hidden aspect-[16/10] bg-neutral-900 cursor-zoom-in"
              onClick={() => handleImageClick(project.image)}
            >
              <img
                src={project.image}
                alt={`${project.name} — projeto desenvolvido por Isabella T.`}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />

              {/* Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Destaque */}
              {project.featured && (
                <span className="absolute top-4 left-4 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-semibold rounded-full bg-white text-black">
                  Destaque
                </span>
              )}

              {/* Expandir */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.15em] font-semibold">
                  Ver projeto
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 md:p-7 flex flex-col flex-grow">
              {/* Categorias */}
              <div className="flex flex-wrap gap-2 mb-5">
                {(Array.isArray(project.type)
                  ? project.type
                  : [project.type]
                ).map((type, index) => (
                  <span
                    key={index}
                    className="text-[9px] uppercase tracking-[0.16em] font-medium text-neutral-500"
                  >
                    {type}
                    {index <
                      (Array.isArray(project.type)
                        ? project.type.length
                        : 1) -
                        1 && <span className="ml-2 text-neutral-800">/</span>}
                  </span>
                ))}
              </div>

              {/* Nome */}
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-3">
                {project.name}
              </h2>

              {/* Descrição */}
              {project.description && (
                <p className="text-sm text-neutral-500 font-light leading-relaxed line-clamp-3 mb-7">
                  {project.description}
                </p>
              )}

              {/* Ação */}
              <div className="mt-auto pt-5 border-t border-neutral-900">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-semibold text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    Acessar projeto
                    <ArrowUpRight
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-neutral-700">
                    Projeto indisponível
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada do projeto"
        >
          <div
            className="relative max-w-7xl w-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Visualização ampliada do projeto"
              className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
            />

            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Fechar imagem"
              className="absolute top-3 right-3 md:top-0 md:-right-14 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-neutral-300 hover:bg-white hover:text-black transition-all duration-300"
            >
              <X size={20} weight="bold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;

