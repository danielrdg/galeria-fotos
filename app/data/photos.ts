import { Photo } from "../types/photo";

export const fetchPhotos = async (query: string = "nature"): Promise<Photo[]> => {

  const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

  if (!apiKey) {
    throw new Error("A chave de API do Pexels não foi configurada corretamente.");
  }

  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok) {
    console.error("Erro ao buscar fotos:", await response.text()); 
    throw new Error("Erro ao buscar fotos da API Pexels.");
  }

  const data = await response.json();

  return data.photos.map((photo: any) => ({
    id: photo.id, 
    alt_description: photo.alt, 
    urls: {
      small: photo.src.medium, 
    },
  }));
};


