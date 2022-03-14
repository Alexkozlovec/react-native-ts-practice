import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { imagesApi } from '../../api/imagesApi';
import { IUnsplashImage } from '../../types';

export const fetchImages = createAsyncThunk(
  'gallery/fetchImages',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        gallery: { currentPage, images },
      } = getState() as { gallery: IGalleryState };

      const response = await imagesApi.getImages({
        page: currentPage,
      });

      if (currentPage === 1) {
        dispatch(setImages(response.data));
      } else {
        dispatch(setImages([...images, ...response.data]));
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

interface IGalleryState {
  status: 'idle' | 'loading' | 'loadingMore';
  images: IUnsplashImage[];
  currentPage: number;
}

const initialState: IGalleryState = {
  status: 'idle',
  images: [],
  currentPage: 1,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<IUnsplashImage[]>) {
      state.images = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchImages.pending.type]: state => {
      state.status = state.currentPage === 1 ? 'loading' : 'loadingMore';
    },
    [fetchImages.fulfilled.type]: state => {
      state.status = 'idle';
    },
    [fetchImages.rejected.type]: state => {
      state.status = 'idle';
    },
  },
});

export const { setImages, setCurrentPage } = gallerySlice.actions;
export default gallerySlice.reducer;
