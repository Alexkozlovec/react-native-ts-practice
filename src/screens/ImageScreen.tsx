import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { IUnsplashImage, RootStackParamList } from '../types';
import { imagesApi } from '../api/imagesApi';

export const ImageScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Image'>
> = ({ route }) => {
  const { imageId } = route.params;

  const [image, setImage] = React.useState<IUnsplashImage | null>(null);

  const fetchImage = React.useCallback(async () => {
    try {
      await imagesApi.getImageById(imageId).then(res => {
        setImage(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [imageId]);

  React.useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          style={[styles.image, { aspectRatio: image.width / image.height }]}
          source={{ uri: image.urls.full }}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxHeight: '100%',
  },
});
