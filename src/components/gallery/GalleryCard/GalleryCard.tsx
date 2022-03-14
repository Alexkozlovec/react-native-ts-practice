import React from 'react';
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { IUnsplashImage } from '../../../types';
import { ImageAuthor } from '../ImageAuthor/ImageAuthor';

interface IGalleryCardProps {
  image: IUnsplashImage;
  onImageClick: (imageFullUrl: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const GalleryCard: React.FC<IGalleryCardProps> = ({
  image,
  onImageClick,
  style,
}) => {
  return (
    <View style={style}>
      <ImageAuthor person={image.user} />
      <Pressable onPress={() => onImageClick(image.id)}>
        <Image style={styles.image} source={{ uri: image.urls.small }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
