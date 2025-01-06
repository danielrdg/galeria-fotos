import { Photo } from "../types/photo";

export const fetchPhotos = async (query: string = "nature"): Promise<Photo[]> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar fotos da API Unsplash.");
  }

  const data = await response.json();
  return data.results.map((photo: any) => ({
    id: photo.id,
    alt_description: photo.alt_description,
    urls: {
      small: photo.urls.small,
    },
  }));
};
