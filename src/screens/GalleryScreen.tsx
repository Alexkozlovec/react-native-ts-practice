import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import { IUnsplashImage, RootStackParamList } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setCurrentPage } from '../store/slices/gallerySlice';
import { RootState } from '../store';
import { GalleryCard } from '../components/gallery/GalleryCard/GalleryCard';
import { Loader } from '../components/common/Loader/Loader';

export const GalleryScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Gallery'>
> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { status, images, currentPage } = useSelector(
    (state: RootState) => state.gallery,
  );

  React.useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch, currentPage]);

  const handleImageClick = React.useCallback(
    (imageId: string) => {
      navigation.navigate('Image', { imageId });
    },
    [navigation],
  );

  const handleChangePage = React.useCallback(() => {
    dispatch(setCurrentPage(currentPage + 1));
  }, [currentPage, dispatch]);

  const refresh = React.useCallback(() => {
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  const renderItem: ListRenderItem<IUnsplashImage> = ({ item }) => {
    return <GalleryCard onImageClick={handleImageClick} image={item} />;
  };

  if (!images.length) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        refreshing={status === 'loading'}
        onRefresh={refresh}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={handleChangePage}
        ListFooterComponent={
          status === 'loadingMore' ? <ActivityIndicator /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
