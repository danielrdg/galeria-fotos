"use client";

import React, { useState } from "react";

interface PhotoCardProps {
  title: string;
  src: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, src }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={handleImageClick}
      >
        <img src={src} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2
            className="text-center text-lg lowercase"
            style={{
              fontFamily: "Comic Sans MS, Comic Sans, cursive",
              color: "#6D4C91",
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      {}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img src={src} alt={title} className="max-w-full max-h-screen" />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-sm"
              style={{
                fontFamily: "Comic Sans MS, Comic Sans, cursive", 
              }}
            >
              fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
