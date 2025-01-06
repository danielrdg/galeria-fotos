import React from "react";

interface PhotoCardProps {
  title: string;
  src: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, src }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={src}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-sm text-gray-700 font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default PhotoCard;
