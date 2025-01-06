"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoCard from "./components/PhotoCard";
import { fetchPhotos } from "./data/photos";
import { useDebounce } from "./hooks/useDebounce";

interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
  };
}

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300); 

  const loadPhotos = async (searchQuery: string = "nature") => {
    setLoading(true);
    try {
      const results = await fetchPhotos(searchQuery);
      setPhotos(results);
    } catch (error) {
      console.error("Erro ao carregar fotos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedQuery) {
      loadPhotos(debouncedQuery); 
    }
  }, [debouncedQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onSearch={(searchQuery) => setQuery(searchQuery)} />
      <main className="flex-1 bg-gray-100 p-8">
        {loading ? (
          <p className="text-gray-700 text-center">Carregando fotos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                title={photo.alt_description || "Sem título"}
                src={photo.urls.small}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
