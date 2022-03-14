import React from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { IUnsplashUser } from '../../../types';
import { AppText } from '../../common/AppText/AppText';

interface IImageAuthorProps {
  person: IUnsplashUser;
  style?: StyleProp<ViewStyle>;
}

export const ImageAuthor: React.FC<IImageAuthorProps> = ({ person, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.avatar}
        source={{ uri: person.profile_image.medium }}
      />
      <AppText style={styles.name}>{person.name}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontWeight: '500',
  },
});
