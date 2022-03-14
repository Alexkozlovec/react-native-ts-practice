// navigation
export type RootStackParamList = {
  Gallery: undefined;
  Image: {
    imageId: string;
  };
};

// unsplash data
export interface IUnsplashImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface IUnsplashImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface IUnsplashUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface IUnsplashProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface IUnsplashUser {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string | null;
  twitter_username: string | null;
  profile_image: IUnsplashProfileImage;
  links: IUnsplashUserLinks;
}

export interface IUnsplashCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: string | null;
  user: null;
}

export interface IUnsplashImage {
  id: string;
  created_at: string;
  updated_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string | null;
  user: IUnsplashUser;
  current_user_collections: IUnsplashCollection[];
  urls: IUnsplashImageUrls;
  links: IUnsplashImageLinks;
}
