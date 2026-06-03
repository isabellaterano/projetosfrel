import { ArrowRight, XCircle } from "@phosphor-icons/react";
import React, { useState } from "react";

const ProjectList = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#0d0d0d] border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-neutral-500 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Bloco de Imagem */}
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover cursor-pointer group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                onClick={() => handleImageClick(project.image)}
                loading="lazy"
              />

              {/* Overlay Minimalista */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleImageClick(project.image)}
                  className="text-xs uppercase tracking-widest font-medium px-5 py-2.5 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  Expandir Imagem
                </button>
              </div>

              {/* Badge de Destaque P&B */}
              {project.featured && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-md bg-white text-black shadow-md">
                  Destaque
                </span>
              )}
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                {/* Categorias / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(Array.isArray(project.type)
                    ? project.type
                    : [project.type]
                  ).map((type, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-medium rounded border border-neutral-800 text-neutral-400 bg-neutral-900/50"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Título */}
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                  {project.name}
                </h2>

                {/* Descrição (Adicionada) */}
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Botão de Ação */}
              <div className="flex justify-end pt-2 border-t border-neutral-900">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-neutral-400 transition-colors duration-300"
                  >
                    Acessar Site
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </a>
                ) : (
                  <span className="text-xs uppercase tracking-widest font-medium text-neutral-600 select-none">
                    Indisponível
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Imagem Premium */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-10 transition-all duration-300"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-6xl w-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Projeto expandido"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border border-neutral-800"
            />

            <button
              className="absolute -top-12 right-0 md:-right-12 text-neutral-400 hover:text-white transition-colors duration-200"
              onClick={handleCloseModal}
              aria-label="Fechar modal"
            >
              <XCircle size={32} weight="light" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
