export interface Photo {
    id: string;
    alt_description: string; // Nome ou descrição da foto
    urls: {
      small: string; // URL da imagem
    };
  }
  
  