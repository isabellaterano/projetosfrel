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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg shadow-lg bg-neutral-100">
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover rounded-t-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleImageClick(project.image)}
            />
            <div className="p-8">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <div className="flex justify-between mt-2">
                <span className="inline-block mt-2 px-3 py-1 bg-gray-200 rounded-full text-sm">
                  {project.type}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex justify-center items-center gap-1.5 rounded-md bg-zinc-900 border-2 border-zinc-900 px-1 py-1 text-zinc-200 hover:bg-white hover:text-zinc-900"
                >
                  <ArrowRight
                    size={24}
                    className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[90%] rounded-lg" // Aumentando o tamanho da imagem
            />
            <button
              className="absolute -top-4 -right-60 text-white text-2xl"
              onClick={handleCloseModal}
            >
              <XCircle size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
