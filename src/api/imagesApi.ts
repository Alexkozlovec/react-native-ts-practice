import { api } from '.';
import { IUnsplashImage } from '../types';

interface IGetImagesParams {
  page?: number;
}

export const imagesApi = {
  getImages: async (params: IGetImagesParams) => {
    return await api.get<IUnsplashImage[]>('/photos/', { params });
  },
  getImageById: async (id: string) => {
    return await api.get<IUnsplashImage>(`/photos/${id}`);
  },
};
