"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState(false); // Estado para animar a lupa

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSearchClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); 
  };

  return (
    <header className="text-center py-6 bg-[#6D4C91] shadow-md">
      <h1
        className="text-4xl font-bold text-white"
        style={{ fontFamily: "'Comic Sans MS', Comic Sans, cursive" }}
      >
        Galeria de Fotos
      </h1>
      <div className="mt-4 flex justify-center items-center">
        <div className="flex w-2/3 sm:w-1/2">
          <input
            type="text"
            style={{ fontFamily: "'Comic Sans MS', Comic Sans, cursive" }}
            placeholder="pesquisar fotos..."
            value={query}
            onChange={handleInputChange}
            className="flex-1 border border-gray-300 rounded-l-full p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
          />
          <button
            onClick={handleSearchClick}
            className={`bg-[#FF9F1C] text-white p-3 rounded-r-full flex items-center justify-center hover:bg-[#E07B00] transition-all duration-200 ${
              clicked ? "animate-pulse" : ""
            }`}
          >
            <FaSearch
              className={`w-5 h-5 transition-transform duration-200 ${
                clicked ? "scale-125 rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {query === "" && (
        <p
          className="mt-4 text-gray-100 text-lg"
          style={{
            fontFamily: "'Comic Sans MS', Comic Sans, cursive",
            color: "#FFE066",
          }}
        >
          o que você quer ver hoje? 
        </p>
      )}
    </header>
  );
};

export default Header;
