"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <header className="text-center py-4 bg-gray-200 shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">Galeria de Fotos</h1>
      <div className="mt-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Pesquisar fotos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-2/3 sm:w-1/2 text-gray-800 placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
