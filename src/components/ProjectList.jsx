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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-3"
          >
            {/* Imagem */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
                onClick={() => handleImageClick(project.image)}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <button
                  onClick={() => handleImageClick(project.image)}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black transition"
                >
                  Visualizar Projeto
                </button>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                  Destaque
                </span>
              )}
            </div>

            {/* Conteúdo */}
            <div className="p-7">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition">
                {project.name}
              </h2>

              {/* Categorias */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(Array.isArray(project.type)
                  ? project.type
                  : [project.type]
                ).map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/10 text-neutral-300"
                  >
                    {type}
                  </span>
                ))}
              </div>

              {/* Botão */}
              <div className="flex justify-end">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Ver Projeto
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover/button:-rotate-45"
                    />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-700 text-neutral-400 cursor-not-allowed"
                  >
                    Indisponível
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-7xl w-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Projeto selecionado"
              className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl border border-white/10"
            />

            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-red-500 rounded-full p-2 text-white transition"
              onClick={handleCloseModal}
            >
              <XCircle size={36} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
